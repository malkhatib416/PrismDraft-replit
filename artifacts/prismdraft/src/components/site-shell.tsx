import { useState, type ReactNode } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";
import { sitePath } from "@/lib/seo";

type ShellProps = {
  homeAnchors?: boolean;
};

function Brand({ homeAnchors = false }: ShellProps) {
  return (
    <a
      className="pd-logo"
      href={homeAnchors ? "#top" : sitePath("/")}
      data-testid="link-logo"
    >
      <span className="pd-logo-mark" aria-hidden="true" />
      <span>PrismDraft</span>
    </a>
  );
}

export function Header({ homeAnchors = false }: ShellProps) {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);
  const homeLink = (anchor: string) =>
    homeAnchors ? `#${anchor}` : sitePath(`/#${anchor}`);

  return (
    <header className="pd-container pd-nav">
      <Brand homeAnchors={homeAnchors} />
      <nav
        className={`pd-nav-links ${menuOpen ? "is-open" : ""}`}
        aria-label="Primary navigation"
      >
        <a href={homeLink("method")} onClick={closeMenu} data-testid="link-method">
          Method
        </a>
        <a
          href={homeLink("workspace")}
          onClick={closeMenu}
          data-testid="link-workspace"
        >
          Workspace
        </a>
        <a
          href={homeLink("principles")}
          onClick={closeMenu}
          data-testid="link-principles"
        >
          Principles
        </a>
        <a href={sitePath("/how-it-works")} onClick={closeMenu}>
          How it works
        </a>
        <a href={sitePath("/seo-content-workflow")} onClick={closeMenu}>
          SEO workflow
        </a>
        <a href={sitePath("/content-brief-template")} onClick={closeMenu}>
          Brief template
        </a>
        <a href={sitePath("/editorial-review")} onClick={closeMenu}>
          Editorial review
        </a>
        <a
          className="pd-button pd-button--quiet"
          href={homeLink("contact")}
          onClick={closeMenu}
          data-testid="link-nav-contact"
        >
          Talk to the desk <ArrowUpRight size={14} strokeWidth={1.8} />
        </a>
      </nav>
      <a className="pd-button" href={homeLink("contact")} data-testid="link-nav-cta">
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

export function ContactCta({ homeAnchors = false }: ShellProps) {
  return (
    <section className="pd-cta" id="contact">
      <div className="pd-container">
        <div className="pd-eyebrow">A quieter way to ship</div>
        <h2>Bring the next good idea to the desk.</h2>
        <p>
          PrismDraft is for teams with a point of view, a publishing calendar,
          and no interest in trading quality for speed.
        </p>
        <div className="pd-cta-actions">
          <a
            className="pd-button pd-button--coral"
            href={homeAnchors ? "#top" : sitePath("/")}
            data-testid="link-cta-start"
          >
            Back to the beginning <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
          <a
            className="pd-button pd-button--quiet"
            href="mailto:hello@prismdraft.co"
            data-testid="link-cta-email"
          >
            hello@prismdraft.co
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer({ homeAnchors = false }: ShellProps) {
  const homeLink = (anchor: string) =>
    homeAnchors ? `#${anchor}` : sitePath(`/#${anchor}`);

  return (
    <footer className="pd-footer">
      <div className="pd-container pd-footer-inner">
        <Brand homeAnchors={homeAnchors} />
        <small>© 2025 PrismDraft / Made for the careful publish</small>
        <div className="pd-footer-links">
          <a href={homeLink("method")} data-testid="link-footer-method">
            Method
          </a>
          <a href={sitePath("/how-it-works")}>How it works</a>
          <a href={sitePath("/seo-content-workflow")}>SEO workflow</a>
          <a href={sitePath("/content-brief-template")}>Brief template</a>
          <a href={sitePath("/editorial-review")}>Editorial review</a>
          <a href={homeLink("contact")} data-testid="link-footer-contact">
            Contact
          </a>
        </div>
      </div>
    </footer>
  );
}

export function PageShell({
  children,
  homeAnchors = false,
}: ShellProps & { children: ReactNode }) {
  return (
    <main className="pd-page">
      <Header homeAnchors={homeAnchors} />
      {children}
      <ContactCta homeAnchors={homeAnchors} />
      <Footer homeAnchors={homeAnchors} />
    </main>
  );
}
