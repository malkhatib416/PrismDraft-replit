export type PageMetadata = {
  title: string;
  description: string;
  path: string;
  type?: "website" | "article";
  publishedTime?: string;
  modifiedTime?: string;
  structuredData: Record<string, unknown>;
};

export function sitePath(path: string): string {
  const base = (import.meta.env.BASE_URL || "/").replace(/\/$/, "");
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return `${base}${normalizedPath}` || "/";
}

export function siteUrl(path: string): string {
  const configuredOrigin = import.meta.env.VITE_SITE_URL?.trim().replace(/\/$/, "");
  const origin =
    configuredOrigin ||
    (typeof window !== "undefined" ? window.location.origin : "");
  return `${origin}${sitePath(path)}`;
}

function upsertMeta(attribute: "name" | "property", key: string, content: string) {
  let element = document.head.querySelector<HTMLMetaElement>(
    `meta[${attribute}="${key}"]`,
  );
  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, key);
    document.head.appendChild(element);
  }
  element.content = content;
}

function upsertLink(rel: string, href: string) {
  let element = document.head.querySelector<HTMLLinkElement>(
    `link[rel="${rel}"]`,
  );
  if (!element) {
    element = document.createElement("link");
    element.rel = rel;
    document.head.appendChild(element);
  }
  element.href = href;
}

export function applyPageMetadata(metadata: PageMetadata): void {
  const canonical = siteUrl(metadata.path);
  document.title = metadata.title;

  upsertMeta("name", "description", metadata.description);
  upsertMeta("name", "robots", "index, follow");
  upsertMeta("property", "og:title", metadata.title);
  upsertMeta("property", "og:description", metadata.description);
  upsertMeta("property", "og:type", metadata.type ?? "website");
  upsertMeta("property", "og:url", canonical);
  upsertMeta("property", "og:site_name", "PrismDraft");
  if (metadata.type === "article" && metadata.modifiedTime) {
    upsertMeta("property", "article:modified_time", metadata.modifiedTime);
  }
  upsertMeta("name", "twitter:card", "summary");
  upsertMeta("name", "twitter:title", metadata.title);
  upsertMeta("name", "twitter:description", metadata.description);
  upsertMeta("name", "twitter:url", canonical);
  upsertLink("canonical", canonical);

  let structuredData = document.head.querySelector<HTMLScriptElement>(
    'script[data-prismdraft-schema="true"]',
  );
  if (!structuredData) {
    structuredData = document.createElement("script");
    structuredData.type = "application/ld+json";
    structuredData.dataset.prismdraftSchema = "true";
    document.head.appendChild(structuredData);
  }
  structuredData.textContent = JSON.stringify(metadata.structuredData);
}

export function homeMetadata(): PageMetadata {
  const homeUrl = siteUrl("/");
  return {
    title: "PrismDraft — Human-reviewed SEO content workflows",
    description:
      "PrismDraft helps content and SEO teams turn topics into structured, publication-ready drafts with content briefs, contextual visuals, and human approval.",
    path: "/",
    structuredData: {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "Organization",
          name: "PrismDraft",
          url: homeUrl,
        },
        {
          "@type": "WebSite",
          name: "PrismDraft",
          url: homeUrl,
          description:
            "An editorial workspace for thoughtful content and SEO teams.",
        },
        {
          "@type": "WebApplication",
          name: "PrismDraft",
          applicationCategory: "BusinessApplication",
          operatingSystem: "Web",
          url: homeUrl,
          description:
            "A content workspace for briefing, drafting, reviewing, and approving structured articles.",
        },
      ],
    },
  };
}
