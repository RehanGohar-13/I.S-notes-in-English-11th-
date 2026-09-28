"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { chapters } from "@/data/chapters";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      className="hidden lg:block w-72 shrink-0 h-[calc(100vh-3.5rem)] sticky top-14 overflow-y-auto border-r p-5"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border)",
      }}
    >
      <h3
        className="text-[10px] font-bold uppercase tracking-widest mb-5 px-2"
        style={{ color: "var(--fg-secondary)" }}
      >
        📚 All Chapters
      </h3>

      {chapters.map((ch) => (
        <div key={ch.slug} className="mb-5">
          <p
            className="text-xs font-bold mb-2 px-2 flex items-center gap-1.5"
            style={{ color: "var(--accent)" }}
          >
            <span>{ch.icon}</span>
            <span>
              Ch {ch.number}: {ch.titleEn}
            </span>
          </p>
          <ul className="space-y-0.5">
            {ch.sections.map((sec) => {
              const href = `/${ch.slug}/${sec.slug}/`;
              const isActive = pathname === href;
              return (
                <li key={sec.slug}>
                  <Link
                    href={href}
                    className={`block text-xs py-2 px-3 rounded-lg transition-all ${
                      isActive ? "font-bold" : "hover:opacity-80"
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
                    {sec.titleEn}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      ))}
    </aside>
  );
}
