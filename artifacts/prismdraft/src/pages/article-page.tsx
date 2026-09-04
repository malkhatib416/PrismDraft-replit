import { useEffect } from "react";
import { ArrowDownRight, ArrowUpRight, Check } from "lucide-react";
import { PageShell } from "@/components/site-shell";
import {
  applyPageMetadata,
  sitePath,
  siteUrl,
  type PageMetadata,
} from "@/lib/seo";

type Step = {
  title: string;
  copy: string;
};

type Section = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
  subsections?: Step[];
  steps?: Step[];
  fields?: Array<{ label: string; prompt: string; example: string }>;
  checklist?: string[];
  rubric?: Array<{ check: string; question: string; evidence: string }>;
  note?: string;
};

type ArticleDefinition = {
  path: string;
  category: string;
  readingTime: string;
  audience: string;
  title: string;
  titleLead: string;
  titleAccent: string;
  description: string;
  lede: string;
  modified: string;
  sections: Section[];
  faqs: Array<{ question: string; answer: string }>;
  related: Array<{ path: string; label: string; description: string }>;
};

const articles: Record<string, ArticleDefinition> = {
  "/how-it-works": {
    path: "/how-it-works",
    category: "Field guide / The method",
    readingTime: "6 min read",
    audience: "For content leads and SEO managers",
    title: "How PrismDraft works: from topic to publish",
    titleLead: "A draft begins",
    titleAccent: "before the first sentence.",
    description:
      "See how PrismDraft moves an idea through a structured content brief, useful draft, contextual visuals, and a human approval gate.",
    lede:
      "PrismDraft is an editorial workflow for teams that want the speed of assistance without handing over the judgment that makes a piece worth publishing.",
    modified: "2025-04-18",
    sections: [
      {
        id: "start-with-the-question",
        title: "Start with the question behind the topic",
        paragraphs: [
          "A keyword is a signal, not an assignment. Before drafting begins, PrismDraft gives the team a place to name the reader, the problem they are trying to solve, and the useful change the article should create.",
          "That short act of framing keeps a promising topic from becoming a long answer to the wrong question. It also gives every later decision something to point back to: the angle, the outline, the source choices, and the final edit.",
        ],
        bullets: [
          "Who is this for, and what do they already understand?",
          "What should be clearer or more possible by the end?",
          "What is the most honest angle the team can support?",
        ],
        note: "A good brief is not bureaucracy. It is a small agreement about what the draft is for.",
      },
      {
        id: "make-a-map",
        title: "Make a map before making prose",
        paragraphs: [
          "The brief turns the initial idea into a readable map: search intent, promise, section order, evidence to gather, and moments where a visual could carry more meaning than another paragraph.",
          "The team can challenge the shape while it is still inexpensive to change. If the argument is too broad, the reader too vague, or the promise too ambitious, the brief makes that visible before the draft collects momentum.",
        ],
        subsections: [
          {
            title: "The handoff has a visible shape",
            copy: "A useful handoff gives a writer somewhere to go. It names the reader and the promise, then leaves enough room for the writer to make the piece sound like the team.",
          },
          {
            title: "Structure is a quality check",
            copy: "When every section has a job, repetition and filler become easier to spot. The outline is not a script; it is a test of whether the article can keep its promise.",
          },
        ],
      },
      {
        id: "draft-with-context",
        title: "Draft with context attached",
        paragraphs: [
          "PrismDraft keeps the working context close to the article: the brief, section guidance, source-aware notes, and visual prompts travel together. That reduces the familiar handoff where a writer gets a topic in one place, research in another, and image instructions in a third.",
          "The result is not a promise that every sentence is finished on the first pass. It is a draft with enough visible reasoning around it that a human editor can improve the important parts instead of reconstructing the assignment from scratch.",
        ],
        bullets: [
          "Section prompts explain the job of each passage.",
          "Visual moments are placed beside the idea they support.",
          "Usage and run context remain legible while work is in progress.",
        ],
      },
      {
        id: "keep-the-say",
        title: "Keep the say at the release gate",
        paragraphs: [
          "A generated draft is an input to editorial work, not a publishing decision. The release gate keeps the plan, prose, visuals, and credit usage visible together so a person can make a clear call.",
          "Review can mean a light voice pass or a careful claim-by-claim edit. What matters is that the team can see what changed, decide what is true to the brief, and explicitly approve the version that moves forward.",
        ],
        steps: [
          {
            title: "Plan",
            copy: "Agree on reader, intent, promise, structure, and evidence before the prose begins.",
          },
          {
            title: "Draft",
            copy: "Shape the article with section guidance, source-aware detail, and visuals that have a job.",
          },
          {
            title: "Review",
            copy: "Check the work, edit what matters, and give a visible yes before publication.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "Is PrismDraft an automatic publishing tool?",
        answer:
          "No. PrismDraft supports planning and drafting, but a person remains the final editorial gate. The workflow is designed to make approval clearer, not to remove it.",
      },
      {
        question: "Where do content briefs fit in the workflow?",
        answer:
          "The brief is the first working artifact. It captures the reader, promise, angle, structure, and evidence before the article is drafted.",
      },
    ],
    related: [
      {
        path: "/seo-content-workflow",
        label: "Build an SEO content workflow with room for judgment",
        description: "A practical sequence from intent to publication.",
      },
      {
        path: "/content-brief-template",
        label: "Use the content brief template",
        description: "The fields that make a handoff useful.",
      },
      {
        path: "/editorial-review",
        label: "Make human editorial review a real gate",
        description: "A review path for careful teams.",
      },
    ],
  },
  "/seo-content-workflow": {
    path: "/seo-content-workflow",
    category: "Field guide / SEO operations",
    readingTime: "8 min read",
    audience: "For teams building a repeatable search program",
    title: "SEO content workflow with room for judgment",
    titleLead: "An SEO workflow",
    titleAccent: "with room for judgment.",
    description:
      "Build a repeatable SEO content workflow around intent, useful briefs, source checks, human editing, and a deliberate publishing gate.",
    lede:
      "Search visibility is a team sport. The strongest workflow connects discovery, editorial thinking, drafting, review, and measurement without turning the work into a queue of disconnected tasks.",
    modified: "2025-04-18",
    sections: [
      {
        id: "begin-with-intent",
        title: "Begin with intent, not a content quota",
        paragraphs: [
          "A sustainable SEO program starts by asking what a searcher is trying to do and whether your team can give them a better next step. That means looking beyond the phrase itself: the language on the results page, the questions that recur, and the level of confidence a useful answer requires.",
          "The output of discovery should be an editorial decision. Pursue the topic, narrow it, combine it with a neighboring question, or leave it alone. A workflow that can say no protects the calendar as much as it fills it.",
        ],
        bullets: [
          "Capture the audience and the job behind the query.",
          "Record useful observations from the search results, not just competitor URLs.",
          "Name the distinct perspective or evidence your team can contribute.",
        ],
      },
      {
        id: "turn-research-into-a-brief",
        title: "Turn research into a brief a writer can use",
        paragraphs: [
          "The brief is where SEO context becomes an editorial assignment. It should give the writer the search intent, the reader, the promise, the shape of the answer, and the claims that need support.",
          "Keep the brief readable enough to challenge. If it becomes a storage bin for every observation, the team loses the one thing it needs most: a clear decision about what the article is trying to do.",
        ],
        subsections: [
          {
            title: "Write the promise in one sentence",
            copy: "If the team cannot say what the reader will be able to understand or do after reading, the outline is not ready.",
          },
          {
            title: "Give sections a job",
            copy: "A section can define, compare, demonstrate, caution, or help someone act. Naming that job keeps the outline from becoming a list of headings.",
          },
        ],
      },
      {
        id: "draft-and-check",
        title: "Draft, then check the support underneath it",
        paragraphs: [
          "A useful first draft has a point of view and enough structure to make revision concrete. It also leaves a trail: which claims need sources, where examples belong, and what should be verified before the article represents the team in public.",
          "Source checking is not a last-minute ritual. Marking uncertainty during drafting helps the editor spend time where accuracy and trust are most at risk, instead of treating every sentence as equally complicated.",
        ],
        checklist: [
          "The opening answers the reader’s reason for arriving.",
          "Each major claim has a source, example, or clear qualification.",
          "The outline’s promise is met without padding or repeated sections.",
          "Visual prompts support a point and include an accessibility consideration.",
        ],
      },
      {
        id: "publish-and-learn",
        title: "Publish deliberately and learn from the work",
        paragraphs: [
          "The last step is not simply moving a draft to a CMS. It is deciding that the piece is accurate, useful, on-voice, and ready for the context in which readers will find it. A visible approval state makes that decision legible to the rest of the team.",
          "After publication, measurement should return to the original promise. Did the article attract the right question? Did readers reach the next useful action? What should the team revise, expand, or stop producing? Those answers improve the next brief.",
        ],
        steps: [
          {
            title: "Discover",
            copy: "Understand intent, audience, search context, and the contribution your team can make.",
          },
          {
            title: "Brief",
            copy: "Turn the observation into a promise, outline, evidence plan, and visual direction.",
          },
          {
            title: "Draft",
            copy: "Write with context attached and mark the claims that need a closer look.",
          },
          {
            title: "Review",
            copy: "Edit for truth, usefulness, voice, accessibility, and release readiness.",
          },
          {
            title: "Learn",
            copy: "Use what happened after publication to sharpen the next editorial decision.",
          },
        ],
      },
    ],
    faqs: [
      {
        question: "What makes an SEO workflow editorial instead of mechanical?",
        answer:
          "It gives the team a decision point at every stage: whether to pursue the topic, what promise to make, which evidence is strong enough, and whether the final piece deserves to ship.",
      },
      {
        question: "When should human review happen?",
        answer:
          "Review should happen before publication, with earlier checks for high-risk claims and sources during drafting so issues are found while they are still easy to fix.",
      },
    ],
    related: [
      {
        path: "/content-brief-template",
        label: "Start with a content brief template",
        description: "Turn search context into a useful assignment.",
      },
      {
        path: "/editorial-review",
        label: "Use a human review checklist",
        description: "Keep accuracy and voice in the room.",
      },
      {
        path: "/how-it-works",
        label: "See the PrismDraft method end to end",
        description: "From topic to a visible release gate.",
      },
    ],
  },
  "/content-brief-template": {
    path: "/content-brief-template",
    category: "Working template / Content planning",
    readingTime: "7 min read",
    audience: "For writers, strategists, and content leads",
    title: "Content brief template for useful SEO articles",
    titleLead: "The brief that gives",
    titleAccent: "a writer somewhere to go.",
    description:
      "Use this practical content brief template to define reader, promise, search intent, evidence, structure, visuals, and editorial review before drafting.",
    lede:
      "A content brief should reduce guesswork without flattening the writer’s judgment. Use these fields to make the assignment specific, challengeable, and ready to hand off.",
    modified: "2025-04-18",
    sections: [
      {
        id: "what-a-brief-does",
        title: "What a useful content brief does",
        paragraphs: [
          "The best brief is not the longest document in the project. It is the smallest shared map that keeps the writer, editor, and SEO lead oriented toward the same reader and promise.",
          "Write it so another thoughtful person could question the approach before the draft exists. If the reader is vague, the angle interchangeable, or the evidence impossible to support, the brief is doing its job by surfacing the problem early.",
        ],
        bullets: [
          "It names a reader rather than an abstract audience.",
          "It makes the article’s promise testable.",
          "It separates required evidence from optional decoration.",
          "It gives the draft a shape while leaving room for good writing.",
        ],
      },
      {
        id: "copy-the-fields",
        title: "Copy the fields into your next assignment",
        paragraphs: [
          "Answer these prompts in plain language. A sentence or two is usually enough; specificity matters more than volume. Add links or research notes only when they change an editorial decision.",
        ],
        fields: [
          {
            label: "Reader",
            prompt: "Who is arriving, and what do they already know?",
            example: "A content lead at a growing B2B team who needs a repeatable brief.",
          },
          {
            label: "Promise",
            prompt: "What will the reader understand or be able to do?",
            example: "Leave with a brief they can hand to a writer this afternoon.",
          },
          {
            label: "Angle",
            prompt: "What is the useful point of view or tension?",
            example: "A brief should protect judgment, not prescribe every sentence.",
          },
          {
            label: "Search intent",
            prompt: "What job is the searcher trying to complete?",
            example: "Find a practical starting point, then adapt it to their team.",
          },
          {
            label: "Evidence",
            prompt: "Which claims, examples, or sources need support?",
            example: "Show the difference between a keyword list and an assignment.",
          },
          {
            label: "Outline",
            prompt: "What sequence carries the reader to the promise?",
            example: "Define the brief, show the fields, explain the handoff, review.",
          },
          {
            label: "Visual moments",
            prompt: "Where would an image, diagram, or example add meaning?",
            example: "An annotated brief beside the section on handoff quality.",
          },
          {
            label: "Review notes",
            prompt: "What should the editor check before approval?",
            example: "Keep the examples specific; verify any performance claims.",
          },
        ],
      },
      {
        id: "make-the-handoff",
        title: "Make the handoff easy to accept or challenge",
        paragraphs: [
          "Share the brief as a working object, not a sealed verdict. Invite the writer and editor to point out what is missing, over-specified, or unlikely to survive contact with the source material.",
          "A strong handoff leaves the writer with a clear destination and enough agency to choose the best route. When feedback comes back, update the brief before the draft so the team does not carry conflicting instructions into production.",
        ],
        note: "PrismDraft keeps the brief beside the draft so the original promise stays available during review.",
      },
      {
        id: "review-before-drafting",
        title: "Run a five-minute pre-draft review",
        paragraphs: [
          "Before anyone writes, read the brief once as the intended reader. Can you tell why this article should exist, what it will help with, and how the sections earn their place? If not, revise the map now.",
        ],
        checklist: [
          "The reader is concrete enough to guide examples and language.",
          "The promise is narrow enough to deliver in one article.",
          "The angle is distinct from a generic summary of the topic.",
          "Evidence and source needs are visible before drafting.",
          "The review notes describe a quality bar, not a personal preference.",
        ],
      },
    ],
    faqs: [
      {
        question: "How long should a content brief be?",
        answer:
          "Long enough to remove important guesswork and short enough to challenge. For many articles, eight clear fields are more useful than a large research dump.",
      },
      {
        question: "Should the brief include keywords?",
        answer:
          "Yes, when they clarify intent and language. Keep them in service of the reader, promise, and structure rather than treating a keyword list as the assignment.",
      },
    ],
    related: [
      {
        path: "/seo-content-workflow",
        label: "Place the brief inside an SEO content workflow",
        description: "See what comes before and after the handoff.",
      },
      {
        path: "/editorial-review",
        label: "Carry the review notes into editorial review",
        description: "Turn the quality bar into a release decision.",
      },
      {
        path: "/how-it-works",
        label: "See how the whole PrismDraft method connects",
        description: "A brief is the first visible artifact.",
      },
    ],
  },
  "/editorial-review": {
    path: "/editorial-review",
    category: "Field guide / Human review",
    readingTime: "6 min read",
    audience: "For editors who own the final call",
    title: "Human editorial review for AI-assisted content",
    titleLead: "Fast does not mean",
    titleAccent: "unsupervised.",
    description:
      "Create a human editorial review process for AI-assisted content with claim checks, voice edits, accessibility passes, and an explicit approval gate.",
    lede:
      "Assistance can make a draft arrive sooner. It cannot decide whether the argument is true, useful, or right for your readers. That decision belongs to an editor.",
    modified: "2025-04-18",
    sections: [
      {
        id: "review-is-a-job",
        title: "Treat review as a job, not a rubber stamp",
        paragraphs: [
          "Human review is most useful when the reviewer knows what they are responsible for. “Take a look” invites a vague skim; a short rubric makes the work visible and helps the team decide when a draft is ready for another pass or ready to ship.",
          "The review does not need to make every sentence sound like it came from one person. It does need to protect the reader from unsupported certainty, confusing structure, accidental claims, and a voice that the team would not stand behind.",
        ],
        bullets: [
          "The strategist checks the promise and search intent.",
          "The subject owner checks claims, examples, and useful nuance.",
          "The editor checks structure, voice, clarity, and the final call.",
        ],
      },
      {
        id: "four-passes",
        title: "Use four focused passes",
        paragraphs: [
          "A focused review is easier to complete than an amorphous “quality check.” The passes can happen in one sitting or be split between people, but the order matters: confirm the reason for the piece before polishing the words.",
        ],
        steps: [
          {
            title: "1. Claim and source pass",
            copy: "Find unsupported facts, overconfident language, stale references, and examples that need a source or qualification.",
          },
          {
            title: "2. Reader and structure pass",
            copy: "Check that the opening meets the reader, sections build in a useful order, and the conclusion earns the promise.",
          },
          {
            title: "3. Voice and usefulness pass",
            copy: "Remove generic filler, preserve the team’s point of view, and make the next action or insight easy to find.",
          },
          {
            title: "4. Visual and accessibility pass",
            copy: "Confirm every visual has a job, captions make sense, and alt-text considerations travel with the approved draft.",
          },
        ],
      },
      {
        id: "review-rubric",
        title: "A compact review rubric",
        paragraphs: [
          "Use the questions below as a release conversation. They are intentionally concrete: each answer should point to an edit, an accepted risk, or a clear yes.",
        ],
        rubric: [
          {
            check: "True",
            question: "Can we support the important claims?",
            evidence: "Sources, examples, qualifications, or an explicit decision to remove the claim.",
          },
          {
            check: "Useful",
            question: "Does the article help this reader do or understand something?",
            evidence: "A clear promise, practical detail, and no sections that exist only to add length.",
          },
          {
            check: "Ours",
            question: "Would the team stand behind the point of view?",
            evidence: "Specific language, honest limits, and examples that sound like lived expertise.",
          },
          {
            check: "Ready",
            question: "Can we approve this version for its publishing context?",
            evidence: "Resolved comments, checked links, considered visuals, and a named final decision.",
          },
        ],
      },
      {
        id: "make-approval-visible",
        title: "Make approval visible",
        paragraphs: [
          "The release gate is the moment a draft becomes publishable. Keep the approved version, the reviewer’s notes, and the remaining known limitations together so the team does not have to reconstruct why a piece shipped.",
          "A visible gate also protects the editor’s no. If the claims are not ready, the angle has drifted, or the piece is not useful enough yet, stopping the run is part of a healthy workflow—not a failure of speed.",
        ],
        note: "The best automation leaves the editor with more context and more control, not less.",
      },
    ],
    faqs: [
      {
        question: "Does every AI-assisted article need the same level of review?",
        answer:
          "No. Review depth should match the stakes, the subject, and the claims. A lightweight voice pass may be enough for a low-risk draft; factual or specialized work deserves closer source and subject review.",
      },
      {
        question: "Who should approve an article?",
        answer:
          "The person or role accountable for the article’s truth, usefulness, and publishing context. That may be an editor, subject owner, or a shared decision between them.",
      },
    ],
    related: [
      {
        path: "/how-it-works",
        label: "See where review sits in the PrismDraft method",
        description: "The release gate is the final handoff.",
      },
      {
        path: "/seo-content-workflow",
        label: "Connect review to the SEO workflow",
        description: "Bring the checks upstream without slowing everything down.",
      },
      {
        path: "/content-brief-template",
        label: "Write review notes into the brief",
        description: "Set the quality bar before drafting begins.",
      },
    ],
  },
};

function metadataForArticle(article: ArticleDefinition): PageMetadata {
  const url = siteUrl(article.path);
  const articleSchema = {
    "@type": "Article",
    headline: article.title,
    description: article.description,
    mainEntityOfPage: url,
    url,
    dateModified: article.modified,
    author: {
      "@type": "Organization",
      name: "PrismDraft",
    },
    publisher: {
      "@type": "Organization",
      name: "PrismDraft",
    },
  };
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    itemListElement: [
      {
        "@type": "ListItem",
        position: 1,
        name: "PrismDraft",
        item: siteUrl("/"),
      },
      {
        "@type": "ListItem",
        position: 2,
        name: article.title,
        item: url,
      },
    ],
  };
  const graph: Record<string, unknown>[] = [articleSchema, breadcrumbSchema];
  if (article.faqs.length > 0) {
    graph.push({
      "@type": "FAQPage",
      mainEntity: article.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: {
          "@type": "Answer",
          text: faq.answer,
        },
      })),
    });
  }

  return {
    title: article.title,
    description: article.description,
    path: article.path,
    type: "article",
    modifiedTime: article.modified,
    structuredData: {
      "@context": "https://schema.org",
      "@graph": graph,
    },
  };
}

function ArticleVisual({ article }: { article: ArticleDefinition }) {
  return (
    <div className="pd-article-visual" aria-label={`${article.title} visual summary`}>
      <div className="pd-article-visual-sheet">
        <span className="pd-article-visual-label">PrismDraft / {article.category}</span>
        <strong>{article.titleLead}</strong>
        <em>{article.titleAccent}</em>
        <div className="pd-article-visual-lines" aria-hidden="true">
          <i />
          <i />
          <i />
          <i />
        </div>
        <span className="pd-article-visual-stamp">Human<br />reviewed</span>
      </div>
    </div>
  );
}

function SectionContent({ section }: { section: Section }) {
  return (
    <section className="pd-article-section" id={section.id}>
      <h2>{section.title}</h2>
      {section.paragraphs.map((paragraph) => (
        <p key={paragraph}>{paragraph}</p>
      ))}
      {section.bullets ? (
        <ul className="pd-article-list">
          {section.bullets.map((bullet) => (
            <li key={bullet}>{bullet}</li>
          ))}
        </ul>
      ) : null}
      {section.subsections ? (
        <div className="pd-article-subsections">
          {section.subsections.map((subsection) => (
            <div className="pd-article-subsection" key={subsection.title}>
              <h3>{subsection.title}</h3>
              <p>{subsection.copy}</p>
            </div>
          ))}
        </div>
      ) : null}
      {section.steps ? (
        <ol className="pd-workflow-rail">
          {section.steps.map((step, index) => (
            <li key={step.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h3>{step.title}</h3>
                <p>{step.copy}</p>
              </div>
            </li>
          ))}
        </ol>
      ) : null}
      {section.fields ? (
        <div className="pd-template-fields">
          {section.fields.map((field, index) => (
            <div className="pd-template-field" key={field.label}>
              <div className="pd-template-field-number">{String(index + 1).padStart(2, "0")}</div>
              <div>
                <h3>{field.label}</h3>
                <p>{field.prompt}</p>
                <small>{field.example}</small>
              </div>
            </div>
          ))}
        </div>
      ) : null}
      {section.checklist ? (
        <div className="pd-article-checklist">
          <div className="pd-article-checklist-head">Before the draft moves on</div>
          {section.checklist.map((item) => (
            <div className="pd-article-checklist-row" key={item}>
              <span aria-hidden="true"><Check size={13} strokeWidth={2.2} /></span>
              <p>{item}</p>
            </div>
          ))}
        </div>
      ) : null}
      {section.rubric ? (
        <div className="pd-review-rubric" role="list">
          {section.rubric.map((row) => (
            <div className="pd-review-rubric-row" key={row.check} role="listitem">
              <strong>{row.check}</strong>
              <div>
                <h3>{row.question}</h3>
                <p>{row.evidence}</p>
              </div>
            </div>
          ))}
        </div>
      ) : null}
      {section.note ? <aside className="pd-review-note">{section.note}</aside> : null}
    </section>
  );
}

function ArticlePage({ article }: { article: ArticleDefinition }) {
  useEffect(() => {
    applyPageMetadata(metadataForArticle(article));
  }, [article]);

  return (
    <PageShell>
      <header className="pd-container pd-article-hero">
        <div className="pd-breadcrumb" aria-label="Breadcrumb">
          <a href={sitePath("/")}>PrismDraft</a>
          <span>/</span>
          <span>Field notes</span>
          <span>/</span>
          <span>{article.category.split(" / ").pop()}</span>
        </div>
        <div className="pd-article-hero-grid">
          <div className="pd-article-hero-copy pd-reveal">
            <div className="pd-article-kicker">{article.category}</div>
            <h1 className="pd-article-title">
              {article.titleLead} <em>{article.titleAccent}</em>
            </h1>
            <p className="pd-article-lede">{article.lede}</p>
            <div className="pd-article-meta">
              <span>{article.readingTime}</span>
              <span>{article.audience}</span>
              <span>Reviewed by the desk</span>
            </div>
          </div>
          <ArticleVisual article={article} />
        </div>
      </header>

      <div className="pd-container pd-article-layout">
        <aside className="pd-article-rail">
          <nav aria-label="On this page">
            <span className="pd-article-rail-label">On this page</span>
            {article.sections.map((section, index) => (
              <a href={`#${section.id}`} key={section.id}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                {section.title}
              </a>
            ))}
            {article.faqs.length > 0 ? (
              <a href="#questions"><span>{String(article.sections.length + 1).padStart(2, "0")}</span>Questions</a>
            ) : null}
          </nav>
        </aside>

        <article className="pd-prose">
          <div className="pd-article-intro">
            <p>
              The useful version of this work lives between strategy and sentence.
              The notes below are written for teams who want a repeatable process
              without treating editorial judgment as a bottleneck to remove.
            </p>
            <a className="pd-inline-link" href={sitePath("/#contact")}>
              Talk through your current workflow <ArrowUpRight size={14} strokeWidth={1.8} />
            </a>
          </div>
          {article.sections.map((section) => (
            <SectionContent section={section} key={section.id} />
          ))}
          {article.faqs.length > 0 ? (
            <section className="pd-article-section pd-article-faq" id="questions">
              <h2>Questions teams ask</h2>
              {article.faqs.map((faq) => (
                <div className="pd-faq-item" key={faq.question}>
                  <h3>{faq.question}</h3>
                  <p>{faq.answer}</p>
                </div>
              ))}
            </section>
          ) : null}
        </article>
      </div>

      <section className="pd-article-transition">
        <div className="pd-container">
          <div className="pd-eyebrow">Keep reading</div>
          <h2>Make the next handoff <em>more useful.</em></h2>
          <div className="pd-related-links">
            {article.related.map((related) => (
              <a href={sitePath(related.path)} key={related.path}>
                <span>{related.label}</span>
                <small>{related.description}</small>
                <ArrowDownRight size={17} strokeWidth={1.5} />
              </a>
            ))}
          </div>
        </div>
      </section>
    </PageShell>
  );
}

export function getArticle(path: string): ArticleDefinition | undefined {
  return articles[path];
}

export default ArticlePage;
