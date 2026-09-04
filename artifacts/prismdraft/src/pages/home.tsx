import { useState } from "react";
import { ArrowDownRight, ArrowUpRight, Check, Menu, X } from "lucide-react";

function Brand() {
  return (
    <a className="pd-logo" href="#top" data-testid="link-logo">
      <span className="pd-logo-mark" aria-hidden="true" />
      <span>PrismDraft</span>
    </a>
  );
}

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="pd-container pd-nav">
      <Brand />
      <nav
        className={`pd-nav-links ${menuOpen ? "is-open" : ""}`}
        aria-label="Primary navigation"
      >
        <a href="#method" onClick={closeMenu} data-testid="link-method">
          Method
        </a>
        <a href="#workspace" onClick={closeMenu} data-testid="link-workspace">
          Workspace
        </a>
        <a href="#principles" onClick={closeMenu} data-testid="link-principles">
          Principles
        </a>
        <a
          className="pd-button pd-button--quiet"
          href="#contact"
          onClick={closeMenu}
          data-testid="link-nav-contact"
        >
          Talk to the desk <ArrowUpRight size={14} strokeWidth={1.8} />
        </a>
      </nav>
      <a className="pd-button" href="#contact" data-testid="link-nav-cta">
        See PrismDraft <ArrowUpRight size={14} strokeWidth={1.8} />
      </a>
      <button
        className="pd-menu-button"
        type="button"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
        aria-expanded={menuOpen}
        onClick={() => setMenuOpen((open) => !open)}
        data-testid="button-mobile-menu"
      >
        {menuOpen ? <X size={22} /> : <Menu size={22} />}
      </button>
    </header>
  );
}

function HeroArtwork() {
  return (
    <div className="pd-hero-art" aria-label="A publication plan preview" data-testid="art-hero-plan">
      <div className="pd-art-sheet pd-art-sheet--under" />
      <div className="pd-art-sheet">
        <div className="pd-sheet-topline">
          <span>PrismDraft / Working copy</span>
          <span>01—04</span>
        </div>
        <div className="pd-sheet-title">The quiet architecture of a good brief</div>
        <p className="pd-sheet-copy">
          A practical field guide to giving a useful idea enough shape to travel.
        </p>
        <div className="pd-sheet-rule" />
        <div className="pd-sheet-topline">
          <span>Structure</span>
          <span>Ready for review</span>
        </div>
        <div className="pd-art-image" aria-hidden="true">
          <span />
        </div>
        <div className="pd-art-stamp">Human<br />reviewed</div>
      </div>
      <div className="pd-margin-note">keep the edge</div>
      <div className="pd-seal">Brief to publish</div>
    </div>
  );
}

function Hero() {
  return (
    <>
      <section className="pd-container pd-hero" id="top">
        <div className="pd-hero-copy pd-reveal">
          <div className="pd-eyebrow">An editorial workspace for serious teams</div>
          <h1>
            Write less
            <br />
            <em>into the dark.</em>
          </h1>
          <p className="pd-hero-lede">
            PrismDraft turns a topic into a publication-ready article, with a plan
            before the prose, images that belong beside the paragraph, and a real
            human gate before anything ships.
          </p>
          <div className="pd-hero-actions">
            <a className="pd-button pd-button--coral" href="#workspace" data-testid="link-hero-explore">
              See the working shape <ArrowDownRight size={15} strokeWidth={1.8} />
            </a>
            <a className="pd-button pd-button--quiet" href="#method" data-testid="link-hero-method">
              Read the method
            </a>
          </div>
          <div className="pd-hero-note">
            <span className="pd-live-dot" aria-hidden="true" />
            Built for content and SEO teams who still care how it reads.
          </div>
        </div>
        <HeroArtwork />
      </section>
      <div className="pd-container pd-ticker" aria-label="PrismDraft principles" data-testid="text-principles-ticker">
        <span><strong>01</strong> Plan first</span>
        <span><strong>02</strong> Contextual images</span>
        <span><strong>03</strong> Human approval</span>
        <span><strong>04</strong> Visible credits</span>
      </div>
    </>
  );
}

function Method() {
  const steps = [
    {
      number: "01 / PLAN",
      title: "Find the shape.",
      copy: "A topic becomes an angle, an audience, an outline, and a list of claims worth making.",
    },
    {
      number: "02 / DRAFT",
      title: "Make it legible.",
      copy: "The article takes form with useful pacing, source-aware detail, and visual moments marked in context.",
    },
    {
      number: "03 / REVIEW",
      title: "Keep the say.",
      copy: "A person checks the work, edits what matters, and gives a clear yes before publication.",
    },
  ];

  return (
    <section className="pd-section pd-section--dark" id="method">
      <div className="pd-container">
        <div className="pd-intro-grid">
          <div>
            <div className="pd-eyebrow">The PrismDraft method</div>
          </div>
          <div>
            <h2>
              The draft begins <em>before</em> the first sentence.
            </h2>
            <p className="pd-intro-copy">
              Most writing tools rush to output. We make room for editorial judgment
              first — because a clear plan is faster than a beautiful wrong turn.
            </p>
          </div>
        </div>
        <div className="pd-process" data-testid="list-method-steps">
          {steps.map((step, index) => (
            <article className="pd-process-item" key={step.number} data-testid={`card-method-step-${index + 1}`}>
              <div className="pd-process-number">{step.number}</div>
              <ArrowUpRight className="pd-process-arrow" size={19} strokeWidth={1.5} />
              <h3>{step.title}</h3>
              <p>{step.copy}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlanningFeature() {
  return (
    <section className="pd-section" id="workspace">
      <div className="pd-container pd-feature-grid">
        <div className="pd-feature-copy">
          <div className="pd-eyebrow">01 / The brief becomes a map</div>
          <h2>
            Plan the <em>argument</em>, not just the keywords.
          </h2>
          <p>
            Start with a topic. PrismDraft works outward: who it is for, what it
            needs to answer, what should be true by the end, and which shape will
            carry it there.
          </p>
          <ul className="pd-feature-points">
            <li>Audience, angle, structure, and search intent in one readable brief.</li>
            <li>Section-level guidance that gives the writer somewhere to go.</li>
            <li>A working plan you can challenge before the first line is written.</li>
          </ul>
        </div>
        <div className="pd-planning-board" aria-label="Sample PrismDraft editorial brief" data-testid="art-editorial-brief">
          <div className="pd-board-header">
            <span>Editorial brief</span>
            <span>In progress</span>
          </div>
          <div className="pd-board-title">How remote teams build trust without more meetings</div>
          <div className="pd-board-row">
            <span>Reader</span>
            <strong>Heads of People at 50–300 person teams</strong>
          </div>
          <div className="pd-board-row">
            <span>Promise</span>
            <strong>Give leaders three rituals they can try this week.</strong>
          </div>
          <div className="pd-board-row">
            <span>Shape</span>
            <strong>Contrarian opener / field notes / practical close</strong>
          </div>
          <div className="pd-board-row">
            <span>Watch for</span>
            <strong>Do not confuse visibility with trust.</strong>
          </div>
          <div className="pd-board-tags">
            <span>People ops</span>
            <span>Trust</span>
            <span>Remote work</span>
          </div>
        </div>
      </div>
    </section>
  );
}

function ImageFeature() {
  return (
    <section className="pd-section" id="principles">
      <div className="pd-container pd-feature-grid pd-feature-grid--reverse">
        <div className="pd-feature-copy">
          <div className="pd-eyebrow">02 / The image belongs to the idea</div>
          <h2>
            No orphaned <em>artwork.</em>
          </h2>
          <p>
            Images are planned at the moment they add meaning — not dropped into a
            folder for someone else to figure out later. Every visual has a job,
            a place, and a reason to be there.
          </p>
          <ul className="pd-feature-points">
            <li>Visual prompts attached to the exact paragraph they support.</li>
            <li>Captions and alt-text considerations travel with the draft.</li>
            <li>Make the call in context: keep it, change it, or leave it out.</li>
          </ul>
        </div>
        <div className="pd-image-layout" aria-label="Article image placed beside its paragraph" data-testid="art-contextual-image">
          <div className="pd-image-card"><span /></div>
          <div className="pd-image-caption">
            <strong>Image moment / 03</strong>
            A quiet visual break after the section on rituals. <em>Supports the idea, not the decoration.</em>
          </div>
        </div>
      </div>
    </section>
  );
}

function ApprovalFeature() {
  return (
    <section className="pd-section pd-section--dark">
      <div className="pd-container pd-gate">
        <div className="pd-gate-card" data-testid="card-approval-gate">
          <div className="pd-gate-card-top">
            <span>Release gate / Article 014</span>
            <span>Awaiting your call</span>
          </div>
          <div className="pd-gate-check">
            <span className="pd-checkmark"><Check size={17} strokeWidth={2.3} /></span>
            Ready for editorial review
          </div>
          <p>
            The plan, draft, images, and credit usage are visible together. Nothing
            moves to publish because a machine decided it was finished.
          </p>
          <div className="pd-stopline">
            <i aria-hidden="true" />
            Run controls stay visible. Stop a run whenever you need to.
          </div>
        </div>
        <div className="pd-feature-copy">
          <div className="pd-eyebrow">03 / Approval is a real gate</div>
          <h2>
            Fast does not mean <em>unsupervised.</em>
          </h2>
          <p className="pd-intro-copy">
            Your team owns the last mile. Review what changed, make the call, and
            keep a record of the moment a draft became publishable.
          </p>
          <a className="pd-button pd-button--quiet" href="#contact" data-testid="link-approval-details">
            See the review path <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
        </div>
      </div>
    </section>
  );
}

function CreditsFeature() {
  const rows = [
    ["Article 014 / draft", "2,140", "Complete"],
    ["Image set / 03", "480", "Complete"],
    ["Article 015 / plan", "260", "Reserved"],
  ];

  return (
    <section className="pd-section pd-section--dark">
      <div className="pd-container pd-credits">
        <div>
          <div className="pd-eyebrow">The ledger stays open</div>
          <h2>
            You should always know what a run <em>costs.</em>
          </h2>
          <p className="pd-credits-copy">
            Credits are not hidden behind a settings page or blurred into a monthly
            promise. See usage as the work happens, with enough context to make a
            responsible call.
          </p>
          <div className="pd-meter-wrap">
            <div className="pd-meter-label">
              <span>Editorial desk / April</span>
              <strong>1,260 credits left</strong>
            </div>
            <div className="pd-meter"><span /></div>
          </div>
        </div>
        <div className="pd-credit-ledger" data-testid="table-credit-ledger">
          <div className="pd-credit-ledger-head">
            <span>Activity</span>
            <span>Used</span>
            <span>Status</span>
          </div>
          {rows.map((row) => (
            <div className="pd-credit-row" key={row[0]}>
              <span>{row[0]}</span>
              <strong>{row[1]}</strong>
              <small>{row[2]}</small>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Quote() {
  return (
    <section className="pd-quote">
      <blockquote>
        “The best automation is the kind that leaves your <em>judgment intact.</em>”
      </blockquote>
      <cite>PrismDraft / A better handoff from brief to publish</cite>
    </section>
  );
}

function ContactCta() {
  return (
    <section className="pd-cta" id="contact">
      <div className="pd-container">
        <div className="pd-eyebrow">A quieter way to ship</div>
        <h2>
          Bring the next good idea to the desk.
        </h2>
        <p>
          PrismDraft is for teams with a point of view, a publishing calendar,
          and no interest in trading quality for speed.
        </p>
        <div className="pd-cta-actions">
          <a className="pd-button pd-button--coral" href="#top" data-testid="link-cta-start">
            Back to the beginning <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
          <a className="pd-button pd-button--quiet" href="mailto:hello@prismdraft.co" data-testid="link-cta-email">
            hello@prismdraft.co
          </a>
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="pd-footer">
      <div className="pd-container pd-footer-inner">
        <Brand />
        <small>© 2025 PrismDraft / Made for the careful publish</small>
        <div className="pd-footer-links">
          <a href="#method" data-testid="link-footer-method">Method</a>
          <a href="#contact" data-testid="link-footer-contact">Contact</a>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="pd-page">
      <Header />
      <Hero />
      <Method />
      <PlanningFeature />
      <ImageFeature />
      <ApprovalFeature />
      <CreditsFeature />
      <Quote />
      <ContactCta />
      <Footer />
    </main>
  );
}