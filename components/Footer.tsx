export default function Footer() {
  return (
    <footer
      className="border-t py-8 px-4 text-center pb-24 lg:pb-8"
      style={{
        backgroundColor: "var(--bg-card)",
        borderColor: "var(--border)",
      }}
    >
      <p className="urdu-text text-xl mb-3" style={{ color: "var(--accent)" }}>
        بِسْمِ اللّٰهِ الرَّحْمٰنِ الرَّحِيْمِ
      </p>
      <p className="font-bold text-sm mb-1" style={{ color: "var(--fg)" }}>
        Islamiat (Compulsory) — Class 11
      </p>
      <p className="text-xs" style={{ color: "var(--fg-secondary)" }}>
        National Curriculum 2023 (Revised) • PECTAA, Punjab
      </p>
      <p
        className="text-[10px] mt-3"
        style={{ color: "var(--fg-secondary)", opacity: 0.6 }}
      >
        Made with ❤️ for students
      </p>
    </footer>
  );
}
