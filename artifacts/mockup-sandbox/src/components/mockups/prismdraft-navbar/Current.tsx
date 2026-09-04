import { ArrowUpRight } from "lucide-react";
import "./_group.css";

const links = [
  "Method",
  "Workspace",
  "Principles",
  "How it works",
  "SEO workflow",
  "Brief template",
  "Editorial review",
];

export function Current() {
  return (
    <div className="current-page">
      <header className="current-nav">
        <a className="current-logo" href="#top">
          <span className="current-mark" aria-hidden="true" />
          <span>PrismDraft</span>
        </a>
        <nav className="current-links" aria-label="Primary navigation">
          {links.map((link) => (
            <a href="#preview" key={link}>
              {link}
            </a>
          ))}
          <a className="current-button current-button--quiet" href="#preview">
            Talk to the desk <ArrowUpRight size={14} strokeWidth={1.8} />
          </a>
        </nav>
        <a className="current-button" href="#preview">
          See PrismDraft <ArrowUpRight size={14} strokeWidth={1.8} />
        </a>
      </header>
      <p className="current-note">Current header / too many equal-weight choices</p>
    </div>
  );
}