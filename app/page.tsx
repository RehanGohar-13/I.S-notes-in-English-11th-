import Link from "next/link";
import { chapters } from "@/data/chapters";

export default function Home() {
  return (
    <div className="max-w-4xl mx-auto px-4 py-12">
      {/* Hero */}
      <div
        className="rounded-2xl p-8 md:p-12 text-center mb-12"
        style={{
          background:
            "linear-gradient(135deg, #065f46 0%, #059669 50%, #10b981 100%)",
          color: "#ffffff",
        }}
      >
        <p className="urdu-text text-3xl md:text-4xl mb-4 leading-relaxed">
          بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
        </p>
        <p className="text-sm md:text-base opacity-90 mb-6 italic">
          In the name of Allah, the Most Gracious, the Most Merciful
        </p>
        <h1 className="text-3xl md:text-5xl font-extrabold mb-3">
          Islamiat (Compulsory)
        </h1>
        <p className="text-lg md:text-xl opacity-90 mb-2">
          Class 11 — Complete Notes
        </p>
        <p className="text-sm opacity-75 mb-8">
          National Curriculum 2023 (Revised) | PECTAA, Punjab
        </p>
        <Link
          href="/toc"
          className="inline-block bg-white text-emerald-800 font-bold px-8 py-3 rounded-full hover:bg-emerald-50 transition text-lg"
        >
          📚 Start Reading
        </Link>
      </div>

      {/* Book Info */}
      <div
        className="rounded-xl p-6 mb-10 border"
        style={{ backgroundColor: "var(--card)", borderColor: "var(--border)" }}
      >
        <h2
          className="text-xl font-bold mb-3"
          style={{ color: "var(--accent)" }}
        >
          📘 About This Book
        </h2>
        <p
          className="text-sm leading-relaxed mb-3"
          style={{ color: "var(--muted)" }}
        >
          This website contains complete notes for{" "}
          <strong>Islamiat (Compulsory)</strong> for 11th Class (Intermediate /
          HSSC Part-I), prepared according to the{" "}
          <strong>National Curriculum 2023 (Revised)</strong> by the{" "}
          <strong>
            Punjab Education, Curriculum, Training & Assessment Authority
            (PECTAA)
          </strong>
          , Lahore.
        </p>
        <p className="text-sm" style={{ color: "var(--muted)" }}>
          Approved by the United Ulama Board, Punjab (Ref: MUB/1/6-L/265/2024,
          dated 12-Dec-2024). Quran translation used is from{" "}
          <em>Deen ul Ilm Foundation, Karachi</em>, as approved by ITMP &
          MoFE&PT.
        </p>
      </div>

      {/* Chapter Cards */}
      <h2 className="text-2xl font-bold mb-6">📑 Chapters Overview</h2>
      <div className="grid md:grid-cols-2 gap-4 mb-12">
        {chapters.map((ch) => (
          <Link
            key={ch.slug}
            href={`/${ch.slug}/${ch.sections[0].slug}`}
            className="block rounded-xl p-5 border hover:shadow-lg transition group"
            style={{
              backgroundColor: "var(--card)",
              borderColor: "var(--border)",
            }}
          >
            <div className="flex items-center gap-3 mb-2">
              <span className="text-3xl">{ch.icon}</span>
              <div>
                <p
                  className="text-xs font-semibold"
                  style={{ color: "var(--accent)" }}
                >
                  CHAPTER {ch.number}
                </p>
                <h3 className="font-bold text-lg group-hover:text-emerald-600 transition">
                  {ch.titleEn}
                </h3>
              </div>
            </div>
            <p
              className="urdu-heading text-base"
              style={{ color: "var(--muted)" }}
            >
              {ch.titleUr}
            </p>
            <p className="text-xs mt-2" style={{ color: "var(--muted)" }}>
              {ch.sections.length} sections
            </p>
          </Link>
        ))}
      </div>
    </div>
  );
}
