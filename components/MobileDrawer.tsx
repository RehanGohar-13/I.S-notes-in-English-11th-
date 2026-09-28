"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { chapters } from "@/data/chapters";

export default function MobileDrawer() {
  const [open, setOpen] = useState(false);
  const [expandedChapter, setExpandedChapter] = useState<string | null>(null);
  const pathname = usePathname();

  return (
    <>
      {/* Floating button */}
      <button
        onClick={() => setOpen(true)}
        className="lg:hidden fixed bottom-20 right-4 z-40 w-14 h-14 rounded-full shadow-lg flex items-center justify-center text-2xl active:scale-90 transition"
        style={{
          backgroundColor: "var(--accent)",
          color: "#ffffff",
          boxShadow: "0 4px 20px rgba(4, 120, 87, 0.4)",
        }}
        aria-label="Open chapters"
      >
        📖
      </button>

      {/* Overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-50 bg-black/50 backdrop-blur-sm"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Drawer */}
      {open && (
        <div
          className="lg:hidden fixed top-0 right-0 bottom-0 z-50 w-[85vw] max-w-sm overflow-y-auto animate-slide-in safe-top safe-bottom"
          style={{ backgroundColor: "var(--bg-card)" }}
        >
          {/* Header */}
          <div
            className="sticky top-0 p-4 flex items-center justify-between border-b"
            style={{
              backgroundColor: "var(--bg-card)",
              borderColor: "var(--border)",
            }}
          >
            <h2
              className="font-bold text-lg"
              style={{ color: "var(--accent)" }}
            >
              📚 Chapters
            </h2>
            <button
              onClick={() => setOpen(false)}
              className="w-10 h-10 rounded-full flex items-center justify-center text-xl active:scale-90"
              style={{ backgroundColor: "var(--accent-light)" }}
            >
              ✕
            </button>
          </div>

          {/* Chapter list */}
          <div className="p-4 space-y-3 pb-24">
            {chapters.map((ch) => {
              const isExpanded = expandedChapter === ch.slug;
              return (
                <div
                  key={ch.slug}
                  className="rounded-xl border overflow-hidden"
                  style={{ borderColor: "var(--border)" }}
                >
                  <button
                    onClick={() =>
                      setExpandedChapter(isExpanded ? null : ch.slug)
                    }
                    className="w-full p-4 flex items-center gap-3 text-left active:opacity-70 transition"
                    style={{ backgroundColor: "var(--bg)" }}
                  >
                    <span className="text-2xl">{ch.icon}</span>
                    <div className="flex-1 min-w-0">
                      <p
                        className="text-[10px] font-bold"
                        style={{ color: "var(--accent)" }}
                      >
                        CHAPTER {ch.number}
                      </p>
                      <p className="text-sm font-bold truncate">{ch.titleEn}</p>
                    </div>
                    <span
                      className={`text-sm transition-transform ${
                        isExpanded ? "rotate-90" : ""
                      }`}
                      style={{ color: "var(--fg-secondary)" }}
                    >
                      ▶
                    </span>
                  </button>

                  {isExpanded && (
                    <div className="p-2 space-y-1">
                      {ch.sections.map((sec) => {
                        const href = `/${ch.slug}/${sec.slug}/`;
                        const isActive = pathname === href;
                        return (
                          <Link
                            key={sec.slug}
                            href={href}
                            onClick={() => setOpen(false)}
                            className={`block p-3 rounded-lg text-sm transition active:scale-[0.98] ${
                              isActive ? "font-bold" : ""
                            }`}
                            style={
                              isActive
                                ? {
                                    backgroundColor: "var(--accent-light)",
                                    color: "var(--accent)",
                                  }
                                : { color: "var(--fg-secondary)" }
                            }
                          >
                            <span className="block">{sec.titleEn}</span>
                            <span
                              className="urdu-heading text-xs block mt-1"
                              style={{
                                color: "var(--fg-secondary)",
                                opacity: 0.7,
                              }}
                            >
                              {sec.titleUr}
                            </span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}
