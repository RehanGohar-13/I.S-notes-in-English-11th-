/* ============================================
   ISLAMIAT STUDY HUB — Shared JavaScript
   Your ticket to uni. We don't mess this up.
   ============================================ */

// Master navigation — ONE place to manage all pages
const navData = [
  {
    type: "link",
    id: "home",
    icon: "🏠",
    label: "Dashboard",
    href: "index.html",
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
    type: "sub",
    id: "ch2-tawheed",
    icon: "☪️",
    label: "Tawheed",
    href: "ch2-tawheed.html",
  },
  {
    type: "sub",
    id: "ch2-risalat",
    icon: "🕌",
    label: "Risalat",
    href: "ch2-risalat.html",
  },
  {
    type: "sub",
    id: "ch2-malaika",
    icon: "🪽",
    label: "Malaika",
    href: "ch2-malaika.html",
  },
  {
    type: "sub",
    id: "ch2-kutub",
    icon: "📜",
    label: "Heavenly Books",
    href: "ch2-kutub.html",
  },
  {
    type: "sub",
    id: "ch2-akhirat",
    icon: "⚖️",
    label: "Akhirat",
    href: "ch2-akhirat.html",
  },
  {
    type: "sub",
    id: "ch2-namaz",
    icon: "🤲",
    label: "Philosophy of Salah",
    href: "ch2-namaz.html",
  },
  {
    type: "sub",
    id: "ch2-zakat",
    icon: "💰",
    label: "Zakat",
    href: "ch2-zakat.html",
  },
  {
    type: "sub",
    id: "ch2-roza",
    icon: "🌙",
    label: "Fasting",
    href: "ch2-roza.html",
  },
  {
    type: "sub",
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
];

/* ===== BUILD SIDEBAR ===== */
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

  let inSub = false;

  navData.forEach((item) => {
    if (item.type === "chapter") {
      if (inSub) {
        html += "</div>";
        inSub = false;
      }
      html += `<div class="nav-chapter">${item.label}</div>`;
    } else if (item.type === "sub") {
      if (!inSub) {
        html += '<div class="nav-sub">';
        inSub = true;
      }
      const active =
        typeof currentPage !== "undefined" && currentPage === item.id
          ? " active"
          : "";
      html += `<a class="nav-item${active}" href="${item.href}"><span class="icon">${item.icon}</span> ${item.label}</a>`;
    } else {
      if (inSub) {
        html += "</div>";
        inSub = false;
      }
      const active =
        typeof currentPage !== "undefined" && currentPage === item.id
          ? " active"
          : "";
      html += `<a class="nav-item${active}" href="${item.href}"><span class="icon">${item.icon}</span> ${item.label}</a>`;
    }
  });

  if (inSub) html += "</div>";
  html += "</nav>";
  sidebar.innerHTML = html;
}

/* ===== SIDEBAR COLLAPSE (Desktop) ===== */
function toggleSidebarCollapse() {
  document.body.classList.toggle("sidebar-collapsed");
  // Save preference
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

/* ===== MOBILE SIDEBAR ===== */
function toggleSidebar() {
  document.getElementById("sidebar").classList.toggle("open");
  document.getElementById("overlay").classList.toggle("show");
}

/* ===== THEME ===== */
function toggleTheme() {
  const isDark = document.body.getAttribute("data-theme") === "dark";
  document.body.setAttribute("data-theme", isDark ? "light" : "dark");
  document.getElementById("themeIcon").textContent = isDark ? "🌙" : "☀️";
  document.getElementById("themeLabel").textContent = isDark ? "Dark" : "Light";
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

/* ===== COLLAPSIBLES ===== */
function initCollapsibles() {
  document.addEventListener("click", function (e) {
    const h = e.target.closest(".collapsible-header");
    if (!h) return;
    h.classList.toggle("open");
    const b = h.nextElementSibling;
    if (b) b.classList.toggle("open");
  });
}

/* ===== BREADCRUMB ===== */
function setBreadcrumb(name) {
  const bc = document.getElementById("breadcrumb");
  if (bc)
    bc.innerHTML =
      '<a href="index.html" style="color:var(--text-muted);text-decoration:none">Home</a> / <span>' +
      name +
      "</span>";
}

/* ===== INIT ===== */
document.addEventListener("DOMContentLoaded", function () {
  loadSidebarState();
  buildSidebar();
  loadTheme();
  initCollapsibles();
});
