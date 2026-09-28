import Link from "next/link";
import { chapters, getSection, getAllSections } from "@/data/chapters";

export const dynamicParams = false;

export function generateStaticParams() {
  return getAllSections();
}

export default async function SectionPage({
  params,
}: {
  params: Promise<{ chapterSlug: string; sectionSlug: string }>;
}) {
  const { chapterSlug, sectionSlug } = await params;
  const data = getSection(chapterSlug, sectionSlug);

  if (!data) {
    return (
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <p className="text-4xl mb-4">🔍</p>
        <h1 className="text-xl font-bold mb-2">Page Not Found</h1>
        <Link
          href="/"
          className="text-sm underline"
          style={{ color: "var(--accent)" }}
        >
          Go Home
        </Link>
      </div>
    );
  }

  const { chapter, section } = data;

  const allSections = chapters.flatMap((ch) =>
    ch.sections.map((s) => ({ ...s, chapterSlug: ch.slug })),
  );
  const currentIdx = allSections.findIndex(
    (s) => s.chapterSlug === chapter.slug && s.slug === section.slug,
  );
  const prev = currentIdx > 0 ? allSections[currentIdx - 1] : null;
  const next =
    currentIdx < allSections.length - 1 ? allSections[currentIdx + 1] : null;

  return (
    <div className="max-w-3xl mx-auto px-4 py-6 lg:py-10">
      {/* Breadcrumb */}
      <nav
        className="text-[10px] mb-4 flex items-center gap-1.5 flex-wrap"
        style={{ color: "var(--fg-secondary)" }}
      >
        <Link href="/" className="underline">
          Home
        </Link>
        <span>/</span>
        <Link href="/toc/" className="underline">
          Contents
        </Link>
        <span>/</span>
        <span style={{ color: "var(--accent)" }}>Ch {chapter.number}</span>
        <span>/</span>
        <span className="font-semibold" style={{ color: "var(--fg)" }}>
          {section.titleEn}
        </span>
      </nav>

      {/* Section Header */}
      <div className="mb-6">
        <p
          className="text-[10px] font-bold tracking-wider mb-1"
          style={{ color: "var(--gold)" }}
        >
          {chapter.icon} CHAPTER {chapter.number} — {chapter.titleEn}
        </p>
        <h1 className="text-xl md:text-2xl font-extrabold leading-tight mb-2">
          {section.titleEn}
        </h1>
        <h2
          className="urdu-heading text-lg md:text-xl"
          style={{ color: "var(--fg-secondary)" }}
        >
          {section.titleUr}
        </h2>
        <span
          className="inline-block text-[10px] font-mono px-2 py-0.5 rounded mt-2"
          style={{
            backgroundColor: "var(--accent-light)",
            color: "var(--accent)",
          }}
        >
          Page {section.page}
        </span>
      </div>

      {/* Content */}
      <article
        className="rounded-xl p-5 md:p-8 border mb-8"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border)",
          boxShadow: "var(--shadow)",
        }}
      >
        <div
          className="urdu-text"
          dangerouslySetInnerHTML={{ __html: section.content }}
        />
      </article>

      {/* Prev / Next */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
        {prev ? (
          <Link
            href={`/${prev.chapterSlug}/${prev.slug}/`}
            className="p-4 rounded-xl border card-hover active:scale-[0.98] transition"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <p
              className="text-[10px] font-bold mb-1"
              style={{ color: "var(--accent)" }}
            >
              ← PREVIOUS
            </p>
            <p className="text-sm font-semibold">{prev.titleEn}</p>
          </Link>
        ) : (
          <div />
        )}
        {next ? (
          <Link
            href={`/${next.chapterSlug}/${next.slug}/`}
            className="p-4 rounded-xl border card-hover active:scale-[0.98] transition text-right"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <p
              className="text-[10px] font-bold mb-1"
              style={{ color: "var(--accent)" }}
            >
              NEXT →
            </p>
            <p className="text-sm font-semibold">{next.titleEn}</p>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </div>
  );
}
