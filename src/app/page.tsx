import { FadeIn } from "@/components/FadeIn";
import { RevealText } from "@/components/RevealText";
import { ChapterIndex } from "@/components/ChapterIndex";

const CHAPTERS = [
  { id: "hero", num: "01", label: "Vol. 01" },
  { id: "problem", num: "02", label: "The 8-Second Problem" },
  { id: "reframe", num: "03", label: "The Reframe" },
  { id: "wont", num: "04", label: "What I Won't Do" },
  { id: "voices", num: "05", label: "Voices" },
  { id: "services", num: "06", label: "Services" },
  { id: "proof", num: "07", label: "Proof" },
  { id: "founder", num: "08", label: "From Vietnam" },
  { id: "rejected", num: "09", label: "Rejected Projects" },
  { id: "cta", num: "10", label: "Send Brief" },
];

const SERVICES = [
  {
    num: "Service 01",
    name: "SMM Management",
    href: "/smm",
    desc: "Posts, stories, reels, content strategy. Copy-driven, not template-driven.",
    price: "$1,500–3,500/mo retainer",
  },
  {
    num: "Service 02",
    name: "Launch Copywriting",
    href: "/launch-copy",
    desc: "Lead magnet → tripwire → flagship. Full launch ownership.",
    price: "$5,000–15,000 project",
  },
  {
    num: "Service 03",
    name: "Ad Creative + Hooks Sprint",
    href: "/ad-creative",
    desc: "30-day creative pipeline for Meta + TikTok performance ads.",
    price: "$2,500/sprint or $1,800/mo retainer",
  },
  {
    num: "Service 04",
    name: "Sales Pages + Emails",
    href: "/sales-pages",
    desc: "Single deliverables — landing pages, email sequences, VSL scripts.",
    price: "$500–3,000 per asset",
  },
];

const FEATURED = [
  "Brand Code",
  "Afnan Khalifa",
  "DRAY",
  "Pavel Zhavnerov",
  "Olga Churilova",
  "Pavel Gitelman",
  "Thinspaces Weddings",
  "Saints Relics",
  "ИграУра",
];

const VOICES_BRAND_CODE = [
  {
    quote:
      "Genius. Approved. We need to write at this level for Afnan. This is high-level work.",
    author: "Oleg Khokhlov",
    role: "Owner, Brand Code agency",
    note: "On a reels script for the Afnan launch",
  },
  {
    quote:
      "The presentation became more powerful. Life and emotion came in. Excellent work.",
    author: "Oleg Khokhlov",
    role: "Owner, Brand Code agency",
    note: "On the course sales presentation",
  },
  {
    quote: "Top. Your headlines — I likeeeee. Much better!",
    author: "Galinaa Sazonova",
    role: "Brand Code team",
    note: "On English headlines",
  },
  {
    quote: "Really strong ideas, Yulia.",
    author: "Oleg Khokhlov",
    role: "Owner, Brand Code agency",
    note: "On content concepts",
  },
];

const VOICES_OTHER = [
  {
    quote: "Strong copy with depth and care. It hit the heart.",
    author: "Recent landing page client",
    role: "Apr 2026",
  },
  {
    quote: "Whoa. I'm taking this to my client right now.",
    author: "Vasilisa Krashnik",
    role: "Internet marketer",
  },
  {
    quote: "Yulia, you're amazing.",
    author: "Daria",
    role: "Project owner",
  },
  {
    quote: "Top texts. Everyone responded.",
    author: "Project lead",
    role: "Recent collaboration",
  },
];

export default function Home() {
  return (
    <main className="bg-bone text-ink">
      <ChapterIndex chapters={CHAPTERS} />

      {/* HEADER */}
      <header className="container-wide flex items-center justify-between pt-8 pb-4">
        <span className="display-italic text-2xl md:text-3xl text-ink leading-none">
          julthentic
        </span>
        <span className="tag text-ink-muted hidden sm:block">
          Launch copy · SMM · Personal brands
        </span>
      </header>

      {/* VOL. 01 — HERO */}
      <section
        id="hero"
        className="relative min-h-[90vh] flex items-center paper-grain"
      >
        <span className="corner-label tl text-ink">Julthentic · Vol. 01</span>
        <div className="container-wide w-full py-16 md:py-24">
          <FadeIn>
            <p className="vol-marker mb-8">Vol. 01 · Hello</p>
          </FadeIn>

          <RevealText
            as="h1"
            mode="word"
            delay={0.2}
            stagger={0.05}
            blur={14}
            duration={1.05}
            className="display-italic text-balance leading-[1.02] max-w-5xl"
            style={{ fontSize: "var(--text-display-xl)" }}
          >
            Every coach sounds the same right now.
          </RevealText>

          <RevealText
            as="h1"
            mode="word"
            delay={0.5}
            stagger={0.05}
            blur={14}
            duration={1.05}
            className="display-italic text-balance leading-[1.02] max-w-5xl mt-2 text-earth"
            style={{ fontSize: "var(--text-display-xl)" }}
          >
            You shouldn&apos;t.
          </RevealText>

          <FadeIn delay={1.2}>
            <p className="mt-12 max-w-2xl text-base md:text-lg text-ink-soft leading-relaxed body-serif">
              2026 audiences have scrolled past 10,000 AI-generated captions
              before their morning coffee. &ldquo;Proven frameworks&rdquo;
              don&apos;t land anymore. &ldquo;Transformative experiences&rdquo;
              get the eye-roll. I write copy that makes them stop mid-scroll
              and think — <em>wait, this one&apos;s different.</em>
            </p>
          </FadeIn>

          <FadeIn delay={1.5}>
            <p className="mt-6 max-w-2xl text-sm text-ink-muted body-serif italic">
              Working remotely from Vietnam. Past clients include Afnan Khalifa,
              DRAY, Brand Code agency, and Thinspaces Weddings.
            </p>
          </FadeIn>

          <FadeIn delay={1.8}>
            <a href="#cta" className="btn-cta mt-12">
              Send Project Brief →
            </a>
          </FadeIn>
        </div>
      </section>

      {/* FEATURED CLIENTS */}
      <section className="border-y border-ink/10 bg-bone-soft section-tight">
        <div className="container-wide">
          <FadeIn>
            <p className="vol-marker mb-6 text-center">Featured clients</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-4 text-ink-muted">
              {FEATURED.map((name, i) => (
                <span
                  key={i}
                  className="display-italic text-lg md:text-xl whitespace-nowrap"
                >
                  {name}
                </span>
              ))}
            </div>
          </FadeIn>
        </div>
      </section>

      {/* VOL. 02 — THE 8-SECOND PROBLEM */}
      <section id="problem" className="section relative">
        <span className="corner-label tl text-ink">Vol. 02</span>
        <div className="container-narrow">
          <FadeIn>
            <p className="vol-marker mb-6">Vol. 02 · The 8-Second Problem</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="display-italic mb-10"
              style={{ fontSize: "var(--text-display-lg)" }}
            >
              Your audience scrolled past your last sales page in 8 seconds.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-serif text-lg md:text-xl text-ink-soft leading-relaxed mb-6 drop-cap">
              You watched the analytics — high impressions, low time-on-page.
              You assumed the offer was off, or maybe the timing was wrong.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="body-serif text-lg md:text-xl text-ink-soft leading-relaxed">
              The page wasn&apos;t bad. It was familiar — the opening hook felt
              like one they&apos;d seen 12 times this week, the cadence matched
              the last launch they&apos;d scrolled past. Their brain
              pattern-matched it to &ldquo;another one of those&rdquo; before
              they&apos;d finished the second paragraph — and clicked away.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* VOL. 03 — THE REFRAME */}
      <section id="reframe" className="section bg-bone-soft relative">
        <span className="corner-label tl text-ink">Vol. 03</span>
        <div className="container-mid">
          <FadeIn>
            <p className="vol-marker mb-6">Vol. 03 · The Reframe</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="display-italic mb-12"
              style={{ fontSize: "var(--text-display-lg)" }}
            >
              Most coaches think they have a copy problem.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <table className="contrast-table">
              <thead>
                <tr>
                  <th>What they think the problem is</th>
                  <th>What the actual problem is</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>The copy isn&apos;t punchy enough</td>
                  <td>
                    Your audience doesn&apos;t believe a real human wrote it
                  </td>
                </tr>
              </tbody>
            </table>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="body-serif text-lg md:text-xl text-ink-soft leading-relaxed mt-8 drop-cap">
              Your audience trusts you on video. They trust you in DMs. Then
              they hit your sales page — and the gap between the warm human
              they follow and the polished marketing voice on the page makes
              them hesitate. Hesitation is where launches die. Five seconds
              before &ldquo;I&apos;ll think about it&rdquo; — the moment they
              wondered if you wrote it at all.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* VOL. 04 — WHAT I WON'T DO */}
      <section id="wont" className="section relative">
        <span className="corner-label tl text-ink">Vol. 04</span>
        <div className="container-narrow">
          <FadeIn>
            <p className="vol-marker mb-6">Vol. 04 · What I won&apos;t do</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="display-italic mb-10"
              style={{ fontSize: "var(--text-display-lg)" }}
            >
              A short list of things I refuse to ship.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-serif text-lg md:text-xl text-ink-soft leading-relaxed mb-6">
              I won&apos;t write copy from a brand voice template prompt. I
              won&apos;t paste your existing content into ChatGPT and call the
              output &ldquo;calibrated.&rdquo; I won&apos;t deliver a Google
              Doc and disappear before you see how it performs.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="body-serif text-lg md:text-xl text-ink-soft leading-relaxed mb-6">
              I won&apos;t sand down the edges that make your voice yours just
              because they&apos;re risky. I won&apos;t write to algorithm
              preferences if it costs your audience&apos;s trust. I won&apos;t
              take projects where the offer isn&apos;t ready — because copy
              gets blamed for conversion problems that are actually positioning
              problems.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="body-serif text-lg md:text-xl text-ink leading-relaxed font-medium">
              If any of that sounds like the agency you just paid $5K and
              regretted — that&apos;s the gap I&apos;m working in.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* VOL. 05 — VOICES */}
      <section id="voices" className="section bg-bone-soft relative">
        <span className="corner-label tl text-ink">Vol. 05</span>
        <div className="container-wide">
          <FadeIn>
            <p className="vol-marker mb-6">Vol. 05 · Voices</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="display-italic mb-12 max-w-4xl"
              style={{ fontSize: "var(--text-display-lg)" }}
            >
              Words from people who&apos;ve worked with me.
            </h2>
          </FadeIn>

          <FadeIn delay={0.2}>
            <p className="vol-marker mb-6 text-earth">
              The Brand Code team — Afnan launch
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {VOICES_BRAND_CODE.map((v, i) => (
              <FadeIn key={i} delay={0.25 + i * 0.05}>
                <div className="quote-block">
                  <p className="body-serif text-lg md:text-xl text-ink leading-relaxed italic mb-4">
                    &ldquo;{v.quote}&rdquo;
                  </p>
                  <p className="text-sm text-ink-muted">
                    <strong className="text-ink">{v.author}</strong> · {v.role}
                  </p>
                  <p className="text-xs text-ink-muted italic mt-1">
                    {v.note}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>

          <FadeIn delay={0.5}>
            <p className="vol-marker mb-6 text-earth">Other client projects</p>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-8">
            {VOICES_OTHER.map((v, i) => (
              <FadeIn key={i} delay={0.55 + i * 0.05}>
                <div className="quote-block">
                  <p className="body-serif text-lg md:text-xl text-ink leading-relaxed italic mb-4">
                    &ldquo;{v.quote}&rdquo;
                  </p>
                  <p className="text-sm text-ink-muted">
                    <strong className="text-ink">{v.author}</strong> · {v.role}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* VOL. 06 — SERVICES */}
      <section id="services" className="section relative">
        <span className="corner-label tl text-ink">Vol. 06</span>
        <div className="container-wide">
          <FadeIn>
            <p className="vol-marker mb-6">Vol. 06 · Services</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="display-italic mb-12"
              style={{ fontSize: "var(--text-display-lg)" }}
            >
              Four ways to work together.
            </h2>
          </FadeIn>

          <div className="grid md:grid-cols-2 gap-6">
            {SERVICES.map((s, i) => (
              <FadeIn key={s.name} delay={0.2 + i * 0.08}>
                <a href={s.href} className="service-card block group">
                  <span className="service-vol mb-5">{s.num}</span>
                  <h3 className="display-italic text-2xl md:text-3xl mt-5 mb-3 group-hover:text-earth transition-colors">
                    {s.name}
                  </h3>
                  <p className="body-serif text-base text-ink-soft leading-relaxed mb-4 italic">
                    {s.desc}
                  </p>
                  <p className="tag text-earth">{s.price}</p>
                </a>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* VOL. 07 — PROOF STACK */}
      <section
        id="proof"
        className="section bg-ink text-bone relative paper-grain"
      >
        <span className="corner-label tl text-bone">Vol. 07</span>
        <div className="container-mid">
          <FadeIn>
            <p className="vol-marker mb-6 text-earth">Vol. 07 · Proof</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="display-italic mb-12 text-bone"
              style={{ fontSize: "var(--text-display-lg)" }}
            >
              Numbers first.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-serif text-xl md:text-2xl text-bone leading-relaxed mb-12">
              The Afnan Khalifa launch — joint with DRAY (128K, $28M+ student
              revenue) and Jasmin.
            </p>
          </FadeIn>

          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <FadeIn delay={0.3}>
              <div>
                <p className="display-stat">$2M</p>
                <p className="tag text-bone/70 mt-2">Launch target revenue</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.4}>
              <div>
                <p className="display-stat">26K</p>
                <p className="tag text-bone/70 mt-2">Webinar registrations</p>
              </div>
            </FadeIn>
            <FadeIn delay={0.5}>
              <div>
                <p className="display-stat">10K → 30K</p>
                <p className="tag text-bone/70 mt-2">KPI scaled mid-campaign</p>
              </div>
            </FadeIn>
          </div>

          <FadeIn delay={0.6}>
            <p className="body-serif text-lg text-bone/85 leading-relaxed">
              Full launch copy ownership: landing pages, webinar sales script,
              email sequence, English reels — written through Brand Code agency
              under owner Oleg Khokhlov.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* VOL. 08 — FOUNDER NOTE */}
      <section id="founder" className="section relative">
        <span className="corner-label tl text-ink">Vol. 08</span>
        <div className="container-narrow">
          <FadeIn>
            <p className="vol-marker mb-6">Vol. 08 · From Vietnam</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="display-italic mb-10"
              style={{ fontSize: "var(--text-display-md)" }}
            >
              Why I&apos;m in Vietnam writing copy for English-market personal
              brands.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-serif text-lg md:text-xl text-ink-soft leading-relaxed mb-6 drop-cap">
              I left my last agency role in 2024 and moved to Vietnam. Not for
              digital-nomad aesthetics — for the cost-of-living math. Living
              here means I can afford to take fewer clients and go deeper on
              each one. A copywriter in London or New York charging my rate has
              to volume their way through projects to pay rent. I don&apos;t.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <p className="body-serif text-lg md:text-xl text-ink-soft leading-relaxed mb-6">
              What that gives my clients: I read every comment thread under
              your last six posts before writing a hook. The 48 hours
              I&apos;d otherwise spend chasing the next project go into
              studying your existing voice. By the time you see the first
              draft, I&apos;ve already rewritten it three times against my own
              anti-template checklist.
            </p>
          </FadeIn>
          <FadeIn delay={0.4}>
            <p className="body-serif text-lg md:text-xl text-ink leading-relaxed mb-6">
              The geography is a deliberate choice. It lets me work the way I
              want to work.
            </p>
          </FadeIn>
          <FadeIn delay={0.5}>
            <p className="display-italic text-lg text-earth">
              — Yuliya Yadreuskaya
            </p>
          </FadeIn>
        </div>
      </section>

      {/* VOL. 09 — REJECTED PROJECTS */}
      <section id="rejected" className="section bg-bone-soft relative">
        <span className="corner-label tl text-ink">Vol. 09</span>
        <div className="container-narrow">
          <FadeIn>
            <p className="vol-marker mb-6">
              Vol. 09 · Rejected projects
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="display-italic mb-12"
              style={{ fontSize: "var(--text-display-lg)" }}
            >
              Projects I&apos;ve turned down — and why.
            </h2>
          </FadeIn>
          <div className="space-y-8">
            <FadeIn delay={0.2}>
              <p className="body-serif text-lg md:text-xl text-ink-soft leading-relaxed">
                A $12K launch where the offer wasn&apos;t ready. The copy
                would&apos;ve been blamed for a conversion problem that was
                actually a positioning problem. Saying yes wouldn&apos;t have
                helped either of us.
              </p>
            </FadeIn>
            <FadeIn delay={0.3}>
              <p className="body-serif text-lg md:text-xl text-ink-soft leading-relaxed">
                An SMM retainer with a 200K-follower coach who wanted to
                &ldquo;go viral&rdquo; but wasn&apos;t willing to say anything
                that risked unfollows. Viral and bland are mutually exclusive.
              </p>
            </FadeIn>
            <FadeIn delay={0.4}>
              <p className="body-serif text-lg md:text-xl text-ink-soft leading-relaxed">
                A founder who wanted me to run their existing copy through
                ChatGPT and &ldquo;polish&rdquo; it. That&apos;s not the work
                — that&apos;s the problem the work solves.
              </p>
            </FadeIn>
            <FadeIn delay={0.5}>
              <p className="body-serif text-lg md:text-xl text-ink-soft leading-relaxed">
                Three projects where the founder&apos;s voice on calls was warm
                and specific, and their brief asked me to make the copy sound
                &ldquo;more professional.&rdquo; Professional is what&apos;s
                killing the launch.
              </p>
            </FadeIn>
            <FadeIn delay={0.6}>
              <p className="body-serif text-xl md:text-2xl text-ink leading-relaxed mt-8 font-medium">
                If any of that sounds familiar to a project you&apos;re
                considering — we&apos;re probably a fit.
              </p>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* VOL. 10 — CTA */}
      <section
        id="cta"
        className="section bg-ink text-bone relative paper-grain"
      >
        <span className="corner-label tl text-bone">Vol. 10</span>
        <div className="container-narrow text-center">
          <FadeIn>
            <p className="vol-marker mb-6 text-earth">Vol. 10 · Send brief</p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <h2
              className="display-italic mb-10 text-bone"
              style={{ fontSize: "var(--text-display-lg)" }}
            >
              Tell me about your project.
            </h2>
          </FadeIn>
          <FadeIn delay={0.2}>
            <p className="body-serif text-lg md:text-xl text-bone/85 leading-relaxed mb-12 max-w-xl mx-auto">
              Send a brief. The more you share — audience, timeline, past
              attempts, current state — the sharper my response will be. I reply
              within 24 hours with whether we&apos;re a fit and what comes next.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <a
              href="mailto:contact@julthentic.com"
              className="btn-cta bg-earth text-bone hover:bg-bone hover:text-ink"
            >
              Send Project Brief →
            </a>
          </FadeIn>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-ink/10 section-tight">
        <div className="container-wide flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-ink-muted">
          <div className="flex items-center gap-3">
            <span className="display-italic text-xl text-ink">julthentic</span>
            <span className="tag">contact@julthentic.com</span>
          </div>
          <p className="tag italic">
            Currently based in Vietnam · Working with English-market clients
            globally
          </p>
        </div>
      </footer>
    </main>
  );
}
