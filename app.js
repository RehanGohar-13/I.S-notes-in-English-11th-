/* ============================================
   ISLAMIAT STUDY HUB — Universal Shared JavaScript
   ============================================ */

// Master Navigation Data
const navData = [
  {
    type: "link",
    id: "home",
    icon: "🏠",
    label: "Dashboard",
    href: "index.html",
  },
  {
    type: "link",
    id: "reader",
    icon: "📖",
    label: "Textbook Reader (140 Scans)",
    href: "reader.html",
  },

  { type: "chapter", label: "Ch 1 — Quran & Hadith" },
  {
    type: "link",
    id: "ch1a",
    icon: "📗",
    label: "Sciences of the Quran",
    href: "ch1a.html",
  },
  {
    type: "link",
    id: "ch1b",
    icon: "📘",
    label: "Sciences of Hadith",
    href: "ch1b.html",
  },
  {
    type: "link",
    id: "ch1-ex",
    icon: "📝",
    label: "Chapter 1 Exercises",
    href: "ch1-exercises.html",
  },

  { type: "chapter", label: "Ch 2 — Faith & Worship" },
  {
    type: "link",
    id: "ch2-tawheed",
    icon: "☪️",
    label: "Tawheed",
    href: "ch2-tawheed.html",
  },
  {
    type: "link",
    id: "ch2-risalat",
    icon: "🕌",
    label: "Risalat",
    href: "ch2-risalat.html",
  },
  {
    type: "link",
    id: "ch2-malaika",
    icon: "👼",
    label: "Malaika",
    href: "ch2-malaika.html",
  },
  {
    type: "link",
    id: "ch2-kutub",
    icon: "📜",
    label: "Heavenly Books",
    href: "ch2-kutub.html",
  },
  {
    type: "link",
    id: "ch2-akhirat",
    icon: "⚖️",
    label: "Akhirat",
    href: "ch2-akhirat.html",
  },
  {
    type: "link",
    id: "ch2-namaz",
    icon: "🤲",
    label: "Philosophy of Salah",
    href: "ch2-namaz.html",
  },
  {
    type: "link",
    id: "ch2-zakat",
    icon: "💰",
    label: "Zakat",
    href: "ch2-zakat.html",
  },
  {
    type: "link",
    id: "ch2-roza",
    icon: "🌙",
    label: "Fasting",
    href: "ch2-roza.html",
  },
  {
    type: "link",
    id: "ch2-hajj",
    icon: "🕋",
    label: "Hajj & Sacrifice",
    href: "ch2-hajj.html",
  },

  { type: "chapter", label: "Ch 3 — Seerat ﷺ" },
  {
    type: "link",
    id: "ch3a",
    icon: "👨‍👩‍👧",
    label: "Ideal Family Head",
    href: "ch3a.html",
  },
  {
    type: "link",
    id: "ch3b",
    icon: "🏛️",
    label: "Ideal Head of State",
    href: "ch3b.html",
  },
  {
    type: "link",
    id: "ch3c",
    icon: "⚔️",
    label: "Ideal Commander",
    href: "ch3c.html",
  },
  {
    type: "link",
    id: "ch3d",
    icon: "📊",
    label: "Economic Teachings",
    href: "ch3d.html",
  },

  { type: "chapter", label: "Ch 4 — Morals & Manners" },
  {
    type: "link",
    id: "ch4a",
    icon: "🤝",
    label: "Social Welfare",
    href: "ch4a.html",
  },
  {
    type: "link",
    id: "ch4b",
    icon: "🚫",
    label: "Avoiding Vices",
    href: "ch4b.html",
  },
  {
    type: "link",
    id: "ch4c",
    icon: "💬",
    label: "Social Relations",
    href: "ch4c.html",
  },

  { type: "chapter", label: "Ch 5 — Dealings & Conduct" },
  {
    type: "link",
    id: "ch5a",
    icon: "👥",
    label: "Rights of People",
    href: "ch5a.html",
  },
  {
    type: "link",
    id: "ch5b",
    icon: "📋",
    label: "Inheritance",
    href: "ch5b.html",
  },
  {
    type: "link",
    id: "ch5c",
    icon: "💍",
    label: "Marriage & Divorce",
    href: "ch5c.html",
  },

  { type: "chapter", label: "Ch 6 — Guidance & Personalities" },
  {
    type: "link",
    id: "ch6a",
    icon: "🏅",
    label: "Khilafat-e-Rashida",
    href: "ch6a.html",
  },
  {
    type: "link",
    id: "ch6b",
    icon: "🌟",
    label: "Imams of Ahl-e-Bait",
    href: "ch6b.html",
  },
  {
    type: "link",
    id: "ch6c",
    icon: "🕊️",
    label: "Sufi Saints",
    href: "ch6c.html",
  },

  { type: "chapter", label: "Ch 7 — Islam & Modern Era" },
  {
    type: "link",
    id: "ch7a",
    icon: "⚖️",
    label: "Obedience to Law",
    href: "ch7a.html",
  },
  {
    type: "link",
    id: "ch7b",
    icon: "🔄",
    label: "Revival of Islam",
    href: "ch7b.html",
  },
  {
    type: "link",
    id: "ch7c",
    icon: "🛡️",
    label: "Islamophobia",
    href: "ch7c.html",
  },

  { type: "chapter", label: "Exam Practice" },
  {
    type: "link",
    id: "model-paper",
    icon: "📋",
    label: "Model Paper",
    href: "model-paper.html",
  },
];

/* ===== SIDEBAR BUILDER ===== */
function buildSidebar() {
  const sidebar = document.getElementById("sidebar");
  if (!sidebar) return;

  let html = `
    <div class="sidebar-header">
      <div class="bismillah">بِسْمِ اللهِ الرَّحْمٰنِ الرَّحِيْمِ</div>
      <h2>📖 Islamiat (Compulsory)</h2>
      <div class="subtitle">Class 11 — PECTAA 2023</div>
    </div>
    <nav class="sidebar-nav">
  `;

  // Universal current page check (supports "ch7c", "ch7c.html", "index.html", etc.)
  let cur =
    typeof currentPage !== "undefined" ? String(currentPage).trim() : "";
  let curClean = cur.replace(/\.html$/i, "");

  navData.forEach((item) => {
    if (item.type === "chapter") {
      html += `<div class="nav-chapter">${item.label}</div>`;
    } else {
      let itemClean = item.id.replace(/\.html$/i, "");
      let isActive =
        cur === item.id || curClean === itemClean || cur === item.href;
      let activeClass = isActive ? " active" : "";

      html += `<a class="nav-item${activeClass}" href="${item.href}">
        <span class="icon">${item.icon}</span> ${item.label}
      </a>`;
    }
  });

  html += "</nav>";
  sidebar.innerHTML = html;
}

/* ===== SIDEBAR CONTROLS (Desktop Collapse + Mobile Drawer) ===== */
function toggleSidebar() {
  if (window.innerWidth <= 860) {
    const sb = document.getElementById("sidebar");
    const ov = document.getElementById("overlay");
    if (sb) sb.classList.toggle("open");
    if (ov) ov.classList.toggle("show");
  } else {
    toggleSidebarCollapse();
  }
}

function toggleSidebarCollapse() {
  document.body.classList.toggle("sidebar-collapsed");
  const collapsed = document.body.classList.contains("sidebar-collapsed");
  localStorage.setItem(
    "islamiat-sidebar",
    collapsed ? "collapsed" : "expanded",
  );
}

function loadSidebarState() {
  const saved = localStorage.getItem("islamiat-sidebar");
  if (saved === "collapsed") {
    document.body.classList.add("sidebar-collapsed");
  }
}

/* ===== THEME MANAGEMENT ===== */
function toggleTheme() {
  const isDark = document.body.getAttribute("data-theme") === "dark";
  document.body.setAttribute("data-theme", isDark ? "light" : "dark");

  const icon = document.getElementById("themeIcon");
  const label = document.getElementById("themeLabel");
  if (icon) icon.textContent = isDark ? "🌙" : "☀️";
  if (label) label.textContent = isDark ? "Dark" : "Light";

  localStorage.setItem("islamiat-theme", isDark ? "light" : "dark");
}

function loadTheme() {
  const saved = localStorage.getItem("islamiat-theme");
  if (saved === "dark") {
    document.body.setAttribute("data-theme", "dark");
    const icon = document.getElementById("themeIcon");
    const label = document.getElementById("themeLabel");
    if (icon) icon.textContent = "☀️";
    if (label) label.textContent = "Light";
  }
}

/* ===== UNIVERSAL COLLAPSIBLES (Handles both .collapsible-content & .collapsible-body) ===== */
function toggleCollapsible(element) {
  if (!element) return;

  let header = element.classList.contains("collapsible-header")
    ? element
    : element.closest(".collapsible-header");
  if (!header) return;

  header.classList.toggle("open");
  header.classList.toggle("active");

  let content = header.nextElementSibling;
  if (content) {
    content.classList.toggle("open");
    content.classList.toggle("active");

    // Smooth inline maxHeight toggle for variable content pages
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + 100 + "px";
    }
  }

  // Toggle plus/minus or arrow icon text
  const icon = header.querySelector(".toggle-icon, .arrow, .mcq-icon");
  if (icon) {
    let text = icon.textContent.trim();
    if (text === "+") icon.textContent = "−";
    else if (text === "−") icon.textContent = "+";
    else if (text === "▼") icon.textContent = "▲";
    else if (text === "▲") icon.textContent = "▼";
  }
}

function initCollapsibles() {
  document.addEventListener("click", function (e) {
    const header = e.target.closest(".collapsible-header");
    if (!header) return;

    // Only fire if the HTML element does not already have an inline onclick attribute
    if (!header.hasAttribute("onclick")) {
      toggleCollapsible(header);
    }
  });
}

/* ===== UNIVERSAL MCQ HANDLER (Handles .mcq-card, .card, .option-btn, and .mcq-option) ===== */
function toggleMCQ(cardId) {
  const card = document.getElementById(cardId);
  if (!card) return;
  card.classList.toggle("open");
  card.classList.toggle("active");

  const body = card.querySelector(
    ".mcq-body, .collapsible-body, .collapsible-content",
  );
  if (body) {
    body.classList.toggle("open");
    body.classList.toggle("active");
  }
}

function checkMCQ(cardId, optionIndex, isCorrect) {
  const card = document.getElementById(cardId);
  if (!card) return;

  // Find feedback box (by ID or class search)
  let feedback =
    document.getElementById(`${cardId}-feedback`) ||
    card.querySelector(".mcq-feedback") ||
    card.querySelector(".feedback");

  // Find options (by button class or fallback to all buttons inside card)
  let options = card.querySelectorAll(".option-btn, .mcq-option, button");

  options.forEach((btn) =>
    btn.classList.remove("selected", "correct", "wrong"),
  );

  if (options[optionIndex]) {
    options[optionIndex].classList.add("selected");
    if (isCorrect) {
      options[optionIndex].classList.add("correct");
      if (feedback) {
        feedback.innerHTML = `<span style="color: var(--accent, #2e7d32); font-weight: bold;">✓ Correct Answer!</span>`;
      }
    } else {
      options[optionIndex].classList.add("wrong");
      if (feedback) {
        feedback.innerHTML = `<span style="color: #d32f2f; font-weight: bold;">✗ Incorrect. Try again!</span>`;
      }
    }
  }
}

/* ===== BREADCRUMB BUILDER ===== */
function setBreadcrumb(name) {
  const bc = document.getElementById("breadcrumb");
  if (bc) {
    bc.innerHTML = `<a href="index.html" style="color:var(--text-muted);text-decoration:none">Home</a> / <span>${name}</span>`;
  }
}

/* ===== SYSTEM INITIALIZATION ===== */
document.addEventListener("DOMContentLoaded", function () {
  try {
    loadSidebarState();
    buildSidebar();
    loadTheme();
    initCollapsibles();
  } catch (err) {
    console.error("Islamiat Study Hub Init Error:", err);
  }
});
