"use client";

import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";

const SERVICES = [
  { value: "smm", label: "SMM Management" },
  { value: "launch", label: "Launch Copywriting" },
  { value: "ad-creative", label: "Ad Creative + Hooks Sprint" },
  { value: "sales-pages", label: "Sales Pages + Emails" },
  { value: "multiple", label: "Multiple / not sure yet" },
];

const TIMELINES = [
  { value: "asap", label: "ASAP — within 2 weeks" },
  { value: "month", label: "Within the next month" },
  { value: "quarter", label: "Within the quarter" },
  { value: "exploring", label: "Just exploring" },
];

const BUDGETS = [
  { value: "under-3k", label: "Under $3K" },
  { value: "3-7k", label: "$3K – $7K" },
  { value: "7-15k", label: "$7K – $15K" },
  { value: "15k-plus", label: "$15K+" },
  { value: "open", label: "Open / not set yet" },
];

type Status = "idle" | "sending" | "sent" | "error";

export function BriefForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [error, setError] = useState<string | null>(null);

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("sending");
    setError(null);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const res = await fetch("/api/brief", {
        method: "POST",
        body: JSON.stringify(Object.fromEntries(data)),
        headers: { "Content-Type": "application/json" },
      });

      if (!res.ok) {
        const body = await res.json().catch(() => ({}));
        throw new Error(body?.message || `Submission failed (${res.status})`);
      }

      setStatus("sent");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(err instanceof Error ? err.message : "Something went wrong.");
    }
  }

  return (
    <div className="brief-form-shell">
      <AnimatePresence mode="wait">
        {status === "sent" ? (
          <motion.div
            key="sent"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            className="text-center py-16"
          >
            <p className="vol-marker text-earth mb-6">Brief received</p>
            <h3 className="display-sans text-bone mb-6" style={{ fontSize: "var(--text-display-md)" }}>
              I&apos;ll write back within 24 hours.
            </h3>
            <p className="body-serif text-bone/85 max-w-md mx-auto">
              Most replies go out the same day. If you don&apos;t hear from me by tomorrow, check your spam folder for an email from{" "}
              <span className="text-earth">contact@julthentic.com</span>.
            </p>
          </motion.div>
        ) : (
          <motion.form
            key="form"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-5 text-left"
          >
            <label className="field md:col-span-1">
              <span>Your name</span>
              <input name="name" type="text" required autoComplete="name" />
            </label>

            <label className="field md:col-span-1">
              <span>Email</span>
              <input name="email" type="email" required autoComplete="email" />
            </label>

            <label className="field md:col-span-1">
              <span>Service</span>
              <select name="service" required defaultValue="">
                <option value="" disabled>Select one</option>
                {SERVICES.map((s) => (
                  <option key={s.value} value={s.value}>
                    {s.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="field md:col-span-1">
              <span>Timeline</span>
              <select name="timeline" required defaultValue="">
                <option value="" disabled>Select one</option>
                {TIMELINES.map((t) => (
                  <option key={t.value} value={t.value}>
                    {t.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="field md:col-span-2">
              <span>Budget range (optional)</span>
              <select name="budget" defaultValue="">
                <option value="">No budget set</option>
                {BUDGETS.map((b) => (
                  <option key={b.value} value={b.value}>
                    {b.label}
                  </option>
                ))}
              </select>
            </label>

            <label className="field md:col-span-2">
              <span>Tell me about the project</span>
              <textarea
                name="message"
                required
                rows={5}
                placeholder="What you're launching, what you've tried, what you need help with. The more specific you are, the sharper my reply."
              />
            </label>

            {/* Honeypot — hidden from users, traps bots */}
            <input
              type="text"
              name="website"
              tabIndex={-1}
              autoComplete="off"
              style={{ position: "absolute", left: "-9999px", opacity: 0, pointerEvents: "none" }}
              aria-hidden="true"
            />

            <div className="md:col-span-2 flex flex-col md:flex-row gap-4 items-start md:items-center justify-between mt-2">
              <p className="text-xs text-bone/60 max-w-md">
                I read every brief myself. I reply within 24 hours with whether we&apos;re a fit and what comes next.
              </p>
              <button
                type="submit"
                disabled={status === "sending"}
                className="btn-cta bg-earth text-bone hover:bg-bone hover:text-ink disabled:opacity-60"
              >
                {status === "sending" ? "Sending…" : "Send Project Brief →"}
              </button>
            </div>

            {error && status === "error" && (
              <p className="md:col-span-2 text-sm text-earth mt-2">
                {error}. Try again, or write me directly at{" "}
                <a className="underline" href="mailto:contact@julthentic.com">
                  contact@julthentic.com
                </a>
                .
              </p>
            )}
          </motion.form>
        )}
      </AnimatePresence>
    </div>
  );
}
