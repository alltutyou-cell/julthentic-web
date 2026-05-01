import { NextResponse } from "next/server";

type BriefPayload = {
  name?: string;
  email?: string;
  service?: string;
  timeline?: string;
  budget?: string;
  message?: string;
  website?: string; // honeypot
};

const SERVICE_LABELS: Record<string, string> = {
  smm: "SMM Management",
  launch: "Launch Copywriting",
  "ad-creative": "Ad Creative + Hooks Sprint",
  "sales-pages": "Sales Pages + Emails",
  multiple: "Multiple / not sure yet",
};

const TIMELINE_LABELS: Record<string, string> = {
  asap: "ASAP — within 2 weeks",
  month: "Within the next month",
  quarter: "Within the quarter",
  exploring: "Just exploring",
};

const BUDGET_LABELS: Record<string, string> = {
  "under-3k": "Under $3K",
  "3-7k": "$3K – $7K",
  "7-15k": "$7K – $15K",
  "15k-plus": "$15K+",
  open: "Open / not set yet",
};

export async function POST(req: Request) {
  let body: BriefPayload;
  try {
    body = await req.json();
  } catch {
    return NextResponse.json(
      { message: "Invalid request body" },
      { status: 400 }
    );
  }

  // Honeypot — silently accept and drop bot submissions
  if (body.website && body.website.length > 0) {
    return NextResponse.json({ ok: true });
  }

  // Basic validation
  if (!body.name || !body.email || !body.service || !body.timeline || !body.message) {
    return NextResponse.json(
      { message: "Missing required fields" },
      { status: 400 }
    );
  }

  const accessKey = process.env.WEB3FORMS_ACCESS_KEY;

  // If access key isn't set yet, log to server console — useful in development
  // and guarantees nothing is silently lost.
  if (!accessKey) {
    console.log("[BRIEF] received submission (no WEB3FORMS_ACCESS_KEY set):", {
      name: body.name,
      email: body.email,
      service: SERVICE_LABELS[body.service] ?? body.service,
      timeline: TIMELINE_LABELS[body.timeline] ?? body.timeline,
      budget: body.budget ? BUDGET_LABELS[body.budget] ?? body.budget : "—",
      message: body.message,
      receivedAt: new Date().toISOString(),
    });
    return NextResponse.json({ ok: true });
  }

  // Forward to Web3Forms — they relay to Yulya's email
  try {
    const formatted = {
      access_key: accessKey,
      subject: `New brief — ${body.name} (${SERVICE_LABELS[body.service] ?? body.service})`,
      from_name: "Julthentic Project Brief",
      name: body.name,
      email: body.email,
      message: [
        `Name:     ${body.name}`,
        `Email:    ${body.email}`,
        `Service:  ${SERVICE_LABELS[body.service] ?? body.service}`,
        `Timeline: ${TIMELINE_LABELS[body.timeline] ?? body.timeline}`,
        `Budget:   ${body.budget ? BUDGET_LABELS[body.budget] ?? body.budget : "Not specified"}`,
        ``,
        `Project description:`,
        body.message,
      ].join("\n"),
    };

    const res = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json", Accept: "application/json" },
      body: JSON.stringify(formatted),
    });

    if (!res.ok) {
      const text = await res.text();
      console.error("[BRIEF] web3forms error:", res.status, text);
      return NextResponse.json(
        { message: "Email service rejected the submission" },
        { status: 502 }
      );
    }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[BRIEF] forwarding failed:", err);
    return NextResponse.json(
      { message: "Submission failed" },
      { status: 500 }
    );
  }
}
