export default function AboutPage() {
  const authors = [
    "Prof. Dr. Shahbaz Ahmad — Chairman, Dept. of Islamiat, University of Education, Lahore",
    "Dr. Fakhar uz Zaman — Senior Subject Specialist, PECTAA",
    "Prof. Dr. Muhammad Akram Warrak — Principal, Govt. Graduate Islamia College, Gujranwala",
    "Dr. Shahid Abdul Rauf — Senior Subject Specialist / Deputy Director, PECTAA",
    "Dr. Muhammad Owais Sarwar — Head, Arabic & Islamic Studies, Govt. Islamia College, Lahore Cantt",
    "Muhammad Safdar Javed — Assistant Subject Specialist, PECTAA",
    "Dr. Sultan Sikandar — Asst. Professor, Govt. Islamia Graduate College, Lahore",
    "Dr. Muhammad Munsha Tayyab — Head, Islamiat, Govt. Graduate College, Phool Nagar",
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-6 lg:py-10">
      <h1 className="text-2xl font-extrabold mb-6">ℹ️ About This Book</h1>

      {/* Info Card */}
      <div
        className="rounded-xl p-5 border mb-5"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border)",
          boxShadow: "var(--shadow)",
        }}
      >
        <h2 className="font-bold mb-2" style={{ color: "var(--accent)" }}>
          📜 Book Details
        </h2>
        <div
          className="space-y-2 text-sm"
          style={{ color: "var(--fg-secondary)" }}
        >
          <p>
            <strong>Subject:</strong> Islamiat (Compulsory)
          </p>
          <p>
            <strong>Class:</strong> 11th (HSSC Part-I / Intermediate)
          </p>
          <p>
            <strong>Curriculum:</strong> National Curriculum 2023 (Revised)
          </p>
          <p>
            <strong>Publisher:</strong> PECTAA, Lahore
          </p>
          <p>
            <strong>Approval:</strong> United Ulama Board, Punjab (Dec 2024)
          </p>
          <p>
            <strong>Quran Translation:</strong> Deen ul Ilm Foundation, Karachi
          </p>
        </div>
      </div>

      {/* Authors */}
      <div
        className="rounded-xl p-5 border mb-5"
        style={{
          backgroundColor: "var(--bg-card)",
          borderColor: "var(--border)",
          boxShadow: "var(--shadow)",
        }}
      >
        <h2 className="font-bold mb-3" style={{ color: "var(--accent)" }}>
          ✍️ Authors
        </h2>
        <ul className="space-y-2">
          {authors.map((a, i) => (
            <li
              key={i}
              className="text-sm flex gap-2"
              style={{ color: "var(--fg-secondary)" }}
            >
              <span
                className="font-bold shrink-0"
                style={{ color: "var(--accent)" }}
              >
                {i + 1}.
              </span>
              {a}
            </li>
          ))}
        </ul>
      </div>

      {/* Copyright */}
      <div
        className="rounded-xl p-5 border"
        style={{
          backgroundColor: "var(--gold-light)",
          borderColor: "var(--border)",
        }}
      >
        <h2 className="font-bold mb-2" style={{ color: "var(--gold)" }}>
          ⚠️ Copyright
        </h2>
        <p
          className="text-xs leading-relaxed"
          style={{ color: "var(--fg-secondary)" }}
        >
          All rights reserved by PECTAA, Lahore. No part of this book may be
          reproduced in any guide, summary, model paper, or aid without written
          permission.
        </p>
      </div>
    </div>
  );
}
