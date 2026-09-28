import Link from "next/link";
import { chapters } from "@/data/chapters";

export default function TOCPage() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-6 lg:py-10">
      <h1 className="text-2xl font-extrabold mb-1">📑 Table of Contents</h1>
      <p className="text-xs mb-6" style={{ color: "var(--fg-secondary)" }}>
        Tap any topic to read its notes
      </p>

      <div className="space-y-6">
        {chapters.map((ch) => (
          <div key={ch.slug}>
            {/* Chapter Header */}
            <div
              className="flex items-center gap-3 p-4 rounded-xl mb-2"
              style={{
                background:
                  "linear-gradient(135deg, var(--accent-light), var(--bg-card))",
                border: "1px solid var(--border)",
              }}
            >
              <span className="text-2xl">{ch.icon}</span>
              <div>
                <p
                  className="text-[10px] font-bold tracking-wider"
                  style={{ color: "var(--gold)" }}
                >
                  CHAPTER {ch.number}
                </p>
                <h2 className="font-bold text-base">{ch.titleEn}</h2>
                <p
                  className="urdu-heading text-sm"
                  style={{ color: "var(--fg-secondary)" }}
                >
                  {ch.titleUr}
                </p>
              </div>
            </div>

            {/* Sections */}
            <div className="ml-2 space-y-1">
              {ch.sections.map((sec) => (
                <Link
                  key={sec.slug}
                  href={`/${ch.slug}/${sec.slug}/`}
                  className="flex items-center gap-3 p-3 rounded-lg active:scale-[0.98] active:bg-opacity-50 transition"
                  style={{ backgroundColor: "var(--bg-card)" }}
                >
                  <span
                    className="text-[10px] font-mono px-2 py-1 rounded-md shrink-0"
                    style={{
                      backgroundColor: "var(--accent-light)",
                      color: "var(--accent)",
                    }}
                  >
                    p.{sec.page}
                  </span>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium truncate">
                      {sec.titleEn}
                    </p>
                    <p
                      className="urdu-heading text-xs truncate"
                      style={{ color: "var(--fg-secondary)" }}
                    >
                      {sec.titleUr}
                    </p>
                  </div>
                  <span style={{ color: "var(--accent)" }}>→</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
