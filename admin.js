const SUPABASE_URL = "https://zsttfamkpvojriktqxxd.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_HA-5NsALtXQlCeYdvATkeg_cok3aZ3F";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const loginView = document.getElementById("loginView");
const dashboardView = document.getElementById("dashboardView");

const loginForm = document.getElementById("loginForm");
const loginEmail = document.getElementById("loginEmail");
const loginPassword = document.getElementById("loginPassword");
const loginBtn = document.getElementById("loginBtn");
const loginError = document.getElementById("loginError");

const logoutBtn = document.getElementById("logoutBtn");
const searchInput = document.getElementById("searchInput");
const downloadCsvBtn = document.getElementById("downloadCsvBtn");

const submissionsTable = document.getElementById("submissionsTable");
const countText = document.getElementById("countText");

const statTotal = document.getElementById("statTotal");
const statTopActivity = document.getElementById("statTopActivity");
const statTopAge = document.getElementById("statTopAge");
const statSupport = document.getElementById("statSupport");

const opportunitiesList = document.getElementById("opportunitiesList");

const VALBY_ACTIVITY_ASSOCIATIONS_FALLBACK = {
  Fodbold: ["Fremad Valby", "Valby Boldklub", "København Syd-Vest Boldklub (KSV)", "Valby United", "Vigerslev Boldklub", "BK Frem", "BK Hellas, Boldklubben Pioneren"],

  Gymnastik: ["Valby IF Gymnastik", "Fremad Valby", "Øbro Gymnastik"],

  Håndbold: ["Fremad Valby", "Ajax København"],

  Basketball: ["B3B Basketball", "Valby Vespas"],

  Svømning: ["Fremad Valby", "HSK i Valby Vandkulturhus", "Valby Vandkulturhus"],

  Badminton: ["Hi Badminton", "Sct. Jørgen"],

  Dans: ["Valby IF Gymnastik", "Børnekulturstedet Valby", "Shine Dance Company"],

  Judo: ["Valby Judoklub"],

  Karate: ["Seidokan Japan Center", "Bosatsu Karate", "Musashi Shotokan Karate-Do"],

  "Krav Maga": ["Krav Maga Valby"],

  Floorball: ["Copenhagen Floorball Club"],

  Futsal: ["Københavns Futsal", "Arctos"],

  Volleyball: ["Diramo Volley"],

  "Amerikansk fodbold": ["Copenhagen Raptors"],

  Baseball: ["Copenhagen Baseball Club"],

  Hockey: ["Københavns Hockeyklub"],

  "E-sport": ["Valby United"],

  "Spejder / FDF": ["FDF K23 Valby", "FDF K17 Valby"],

  "Teater / drama": ["Børnekulturstedet Valby", "Kultur og Fritid V"],

  "Musik / sang": ["Copenhagen Music", "Børnekulturstedet Valby"],

  Rollespil: ["Børnekulturstedet Valby"],

  Andet: [],
};

let charts = {};
let chartsAreVisible = false;
let pendingChartConfigs = {};

let submissions = [];
let filteredSubmissions = [];

function showLogin() {
  loginView.classList.remove("hidden");
  dashboardView.classList.add("hidden");
}

function showDashboard() {
  loginView.classList.add("hidden");
  dashboardView.classList.remove("hidden");
}

function formatDate(value) {
  if (!value) return "";

  const date = new Date(value);

  return new Intl.DateTimeFormat("da-DK", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
  }).format(date);
}

function formatArray(value) {
  if (!value) return "";

  if (Array.isArray(value)) {
    return value.join(", ");
  }

  return value;
}

function escapeHtml(value) {
  if (value === null || value === undefined) return "";

  return String(value).replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#039;");
}

function normalizeMatchedAssociations(matches) {
  if (!matches) return [];

  if (typeof matches === "string") {
    try {
      return JSON.parse(matches);
    } catch {
      return [];
    }
  }

  return Array.isArray(matches) ? matches : [];
}

function getFallbackMatchedAssociations(interests) {
  const selectedInterests = Array.isArray(interests) ? interests : [];

  return selectedInterests.map((activity) => ({
    activity,
    associations: VALBY_ACTIVITY_ASSOCIATIONS_FALLBACK[activity] || [],
  }));
}

function getSubmissionMatchedAssociations(item) {
  const savedMatches = normalizeMatchedAssociations(item.matched_associations);

  if (savedMatches.length) {
    return savedMatches;
  }

  return getFallbackMatchedAssociations(item.interests);
}

function getAssociationsForActivity(item, activity) {
  const matches = getSubmissionMatchedAssociations(item);
  const match = matches.find((entry) => entry.activity === activity);

  if (!match || !Array.isArray(match.associations)) {
    return [];
  }

  return match.associations.filter(Boolean);
}

function formatMatchedAssociations(matches) {
  const normalizedMatches = normalizeMatchedAssociations(matches);

  if (!normalizedMatches.length) {
    return `<span class="small-muted">Ingen klubmatch</span>`;
  }

  return normalizedMatches
    .map((match) => {
      const activity = escapeHtml(match.activity || "Ukendt aktivitet");
      const associations = Array.isArray(match.associations) ? match.associations.filter(Boolean) : [];

      if (!associations.length) {
        return `
          <details class="club-match-dropdown">
            <summary>
              <span>${activity}</span>
              <small>Ingen klubber</small>
            </summary>
            <div class="association-empty">
              Ingen kendte Valby-foreninger endnu
            </div>
          </details>
        `;
      }

      return `
        <details class="club-match-dropdown">
          <summary>
            <span>${activity}</span>
            <small>${associations.length} klub${associations.length === 1 ? "" : "ber"}</small>
          </summary>

          <div class="association-pill-row">
            ${associations.map((name) => `<span class="association-pill">${escapeHtml(name)}</span>`).join("")}
          </div>
        </details>
      `;
    })
    .join("");
}

function formatMatchedAssociationsForText(matches) {
  const normalizedMatches = normalizeMatchedAssociations(matches);

  return normalizedMatches
    .map((match) => {
      const activity = match.activity || "Ukendt aktivitet";
      const associations = Array.isArray(match.associations) ? match.associations.join(", ") : "";

      return `${activity}: ${associations}`;
    })
    .join(" | ");
}

function getTopEntries(counts, limit = 5) {
  return Object.entries(counts)
    .filter(([name]) => name && name.trim() !== "")
    .sort((a, b) => b[1] - a[1])
    .slice(0, limit);
}

function countSingleValue(data, key) {
  return data.reduce((acc, item) => {
    const value = item[key];

    if (!value) return acc;

    acc[value] = (acc[value] || 0) + 1;
    return acc;
  }, {});
}

function countSupportBySchool(data) {
  return data.reduce((acc, item) => {
    if (item.needs_support !== "Ja") return acc;

    const school = item.child_school || "Ukendt skole";

    acc[school] = (acc[school] || 0) + 1;

    return acc;
  }, {});
}

function countArrayValue(data, key) {
  return data.reduce((acc, item) => {
    const values = Array.isArray(item[key]) ? item[key] : [];

    values.forEach((value) => {
      if (!value) return;
      acc[value] = (acc[value] || 0) + 1;
    });

    return acc;
  }, {});
}

function destroyChart(chartId) {
  if (charts[chartId]) {
    charts[chartId].destroy();
    charts[chartId] = null;
  }
}

function createChart(canvasId, config) {
  const canvas = document.getElementById(canvasId);

  if (!canvas || typeof Chart === "undefined") return;

  destroyChart(canvasId);

  charts[canvasId] = new Chart(canvas, config);
}

function queueOrCreateChart(canvasId, config) {
  pendingChartConfigs[canvasId] = config;

  if (chartsAreVisible) {
    createChart(canvasId, config);
  }
}

function renderPendingCharts() {
  Object.entries(pendingChartConfigs).forEach(([canvasId, config]) => {
    createChart(canvasId, config);
  });
}

function renderBarChart(canvasId, labels, values, labelText) {
  const config = {
    type: "bar",
    data: {
      labels,
      datasets: [
        {
          label: labelText,
          data: values,
          borderRadius: 10,
          borderSkipped: false,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      animation: {
        duration: 900,
        easing: "easeOutQuart",
      },
      plugins: {
        legend: {
          display: false,
        },
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            precision: 0,
          },
        },
      },
    },
  };

  queueOrCreateChart(canvasId, config);
}

function renderPieChart(canvasId, labels, values, labelText) {
  const config = {
    type: "doughnut",
    data: {
      labels,
      datasets: [
        {
          label: labelText,
          data: values,
        },
      ],
    },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      cutout: "62%",
      animation: {
        animateRotate: true,
        animateScale: true,
        duration: 900,
        easing: "easeOutQuart",
      },
      plugins: {
        legend: {
          position: "bottom",
        },
      },
    },
  };

  queueOrCreateChart(canvasId, config);
}

function renderInsights(data) {
  const total = data.length;

  const ageCounts = countSingleValue(data, "child_age");
  const activityCounts = countArrayValue(data, "interests");
  const schoolCounts = countSingleValue(data, "child_school");
  const schoolSupportCounts = countSupportBySchool(data);
  const timeCounts = countArrayValue(data, "preferred_times");
  const supportCounts = countSingleValue(data, "needs_support");
  const roleCounts = countSingleValue(data, "contact_role");

  const topAge = getTopEntries(ageCounts, 1)[0];
  const topActivity = getTopEntries(activityCounts, 1)[0];

  const supportYes = data.filter((item) => item.needs_support === "Ja").length;
  const supportPercent = total ? Math.round((supportYes / total) * 100) : 0;

  if (statTotal) statTotal.textContent = total;
  if (statTopActivity) statTopActivity.textContent = topActivity ? topActivity[0] : "-";
  if (statTopAge) statTopAge.textContent = topAge ? topAge[0] : "-";
  if (statSupport) statSupport.textContent = `${supportPercent}%`;

  const ageTop = getTopEntries(ageCounts, 8);
  renderBarChart(
    "ageChart",
    ageTop.map(([label]) => label),
    ageTop.map(([, value]) => value),
    "Antal",
  );

  const activityTop = getTopEntries(activityCounts, 8);
  renderBarChart(
    "activityChart",
    activityTop.map(([label]) => label),
    activityTop.map(([, value]) => value),
    "Antal",
  );

  const schoolTop = getTopEntries(schoolCounts, 8);
  renderBarChart(
    "schoolChart",
    schoolTop.map(([label]) => label),
    schoolTop.map(([, value]) => value),
    "Antal",
  );

  const schoolSupportTop = getTopEntries(schoolSupportCounts, 8);
  renderBarChart(
    "schoolSupportChart",
    schoolSupportTop.map(([label]) => label),
    schoolSupportTop.map(([, value]) => value),
    "Antal med kontingentstøtte",
  );

  const timeTop = getTopEntries(timeCounts, 8);
  renderBarChart(
    "timeChart",
    timeTop.map(([label]) => label),
    timeTop.map(([, value]) => value),
    "Antal",
  );

  const supportTop = getTopEntries(supportCounts, 4);
  renderPieChart(
    "supportChart",
    supportTop.map(([label]) => label),
    supportTop.map(([, value]) => value),
    "Antal",
  );

  const roleTop = getTopEntries(roleCounts, 6);
  renderPieChart(
    "roleChart",
    roleTop.map(([label]) => label),
    roleTop.map(([, value]) => value),
    "Antal",
  );

  renderOpportunities(data);
}

function renderOpportunities(data) {
  if (!opportunitiesList) return;

  const groups = {};

  data.forEach((item) => {
    const school = item.child_school || "Ukendt skole";
    const age = item.child_age || "Ukendt alder";
    const interests = Array.isArray(item.interests) ? item.interests : [];

    interests.forEach((activity) => {
      if (!activity) return;

      const key = `${school}|||${age}|||${activity}`;

      if (!groups[key]) {
        groups[key] = {
          school,
          age,
          activity,
          count: 0,
          supportCount: 0,
          times: {},
          associations: {},
        };
      }

      groups[key].count += 1;

      if (item.needs_support === "Ja") {
        groups[key].supportCount += 1;
      }

      const preferredTimes = Array.isArray(item.preferred_times) ? item.preferred_times : [];

      preferredTimes.forEach((time) => {
        groups[key].times[time] = (groups[key].times[time] || 0) + 1;
      });

      getAssociationsForActivity(item, activity).forEach((association) => {
        groups[key].associations[association] = (groups[key].associations[association] || 0) + 1;
      });
    });
  });

  const opportunities = Object.values(groups)
    .filter((group) => group.count >= 3)
    .sort((a, b) => b.count - a.count)
    .slice(0, 8);

  if (!opportunities.length) {
    opportunitiesList.innerHTML = `
      <div class="opportunity-item">
        <strong>Ingen tydelige mønstre endnu</strong>
        <span>Når der kommer flere henvendelser, vises mulige nye hold automatisk her.</span>
      </div>
    `;
    return;
  }

  opportunitiesList.innerHTML = opportunities
    .map((group) => {
      const topTime = getTopEntries(group.times, 1)[0];
      const topAssociations = getTopEntries(group.associations, 5).map(([name]) => name);

      const supportText = group.supportCount > 0 ? `${group.supportCount} med behov for kontingentstøtte` : "Ingen har angivet kontingentstøtte";

      return `
        <div class="opportunity-item">
          <strong>${escapeHtml(group.activity)} · ${escapeHtml(group.age)} · ${escapeHtml(group.school)}</strong>
          <span>${group.count} personer matcher denne gruppe</span>
          <span>Bedste tidspunkt: ${escapeHtml(topTime ? topTime[0] : "Ikke nok data")}</span>
          <span>${escapeHtml(supportText)}</span>
          ${topAssociations.length ? `<span>Mulige klubmatch: ${escapeHtml(topAssociations.join(", "))}</span>` : ""}
        </div>
      `;
    })
    .join("");
}

function renderTable(data) {
  filteredSubmissions = data;

  renderInsights(data);

  if (!data.length) {
    submissionsTable.innerHTML = `
      <tr>
        <td colspan="8">Ingen tilmeldinger fundet.</td>
      </tr>
    `;

    countText.textContent = "0 tilmeldinger";
    return;
  }

  countText.textContent = `${data.length} tilmelding${data.length === 1 ? "" : "er"}`;

  submissionsTable.innerHTML = data
    .map((item) => {
      const contactParts = [];
      const matchedAssociations = getSubmissionMatchedAssociations(item);

      if (item.phone) contactParts.push(escapeHtml(item.phone));
      if (item.email) contactParts.push(escapeHtml(item.email));

      return `
        <tr>
          <td>
            <strong>${escapeHtml(item.child_name)}</strong>
            <span class="small-muted">${escapeHtml(item.child_gender || "")}</span>
          </td>

          <td>
            ${escapeHtml(item.child_school)}
            <span class="small-muted">${escapeHtml(item.child_address || "")}</span>
          </td>

          <td>${escapeHtml(item.child_age)}</td>

          <td class="club-match-cell">
            ${formatMatchedAssociations(matchedAssociations)}
          </td>

          <td>
            <span class="small-muted">Tid: ${escapeHtml(formatArray(item.preferred_times))}</span>

            ${item.preferred_time_note ? `<span class="small-muted">Specifikt tidspunkt: ${escapeHtml(item.preferred_time_note)}</span>` : ""}

            ${item.known_participant ? `<span class="small-muted">Kender nogen: ${escapeHtml(item.known_participant)}</span>` : ""}

            ${item.preferred_association ? `<span class="small-muted">Ønsket forening: ${escapeHtml(item.preferred_association)}</span>` : ""}
          </td>

          <td>
            <strong>${escapeHtml(item.parent_name)}</strong>
            <span class="small-muted">${escapeHtml(item.contact_role || "")}</span>
          </td>

          <td>
            ${contactParts.join("<br>")}
          </td>

          <td>${escapeHtml(item.needs_support || "")}</td>
        </tr>
      `;
    })
    .join("");
}

function filterSubmissions() {
  const query = searchInput.value.trim().toLowerCase();

  if (!query) {
    renderTable(submissions);
    return;
  }

  const result = submissions.filter((item) => {
    const matchedAssociations = getSubmissionMatchedAssociations(item);

    const searchableText = [item.child_name, item.child_address, item.child_school, item.child_age, item.child_gender, formatArray(item.child_languages), item.other_language, formatArray(item.interests), formatMatchedAssociationsForText(matchedAssociations), item.preferred_association, item.known_participant, item.level, formatArray(item.preferred_times), item.preferred_time_note, item.parent_name, item.contact_role, item.phone, item.email, item.needs_support, item.comment, item.language, item.created_at].filter(Boolean).join(" ").toLowerCase();

    return searchableText.includes(query);
  });

  renderTable(result);
}

async function loadSubmissions() {
  submissionsTable.innerHTML = `
    <tr>
      <td colspan="8">Henter tilmeldinger...</td>
    </tr>
  `;

  const { data, error } = await supabaseClient.from("fritidsmatch_submissions").select("*").order("created_at", { ascending: false });

  if (error) {
    console.error("Kunne ikke hente tilmeldinger:", error);

    submissionsTable.innerHTML = `
      <tr>
        <td colspan="8">Kunne ikke hente data. Tjek login og RLS-policy.</td>
      </tr>
    `;

    countText.textContent = "Fejl ved hentning";
    return;
  }

  submissions = data || [];
  renderTable(submissions);
}

function convertToCsvValue(value) {
  if (value === null || value === undefined) return "";

  if (Array.isArray(value)) {
    value = value.join(", ");
  }

  const stringValue = String(value).replaceAll('"', '""');

  return `"${stringValue}"`;
}

function downloadCsv() {
  const rows = filteredSubmissions.length ? filteredSubmissions : submissions;

  if (!rows.length) return;

  const headers = ["Dato", "Navn", "Adresse", "Skole", "Alder", "Køn", "Sprog", "Andet sprog", "Interesser", "Klubmatch", "Ønsket forening", "Kender nogen", "Niveau", "Passer bedst", "Specifikt tidspunkt", "Kontaktperson", "Tilknytning", "Telefon", "Email", "Kontingentstøtte", "Kommentar", "Samtykke", "Sprog på formular"];

  const csvRows = rows.map((item) => {
    const matchedAssociations = getSubmissionMatchedAssociations(item);

    return [formatDate(item.created_at), item.child_name, item.child_address, item.child_school, item.child_age, item.child_gender, formatArray(item.child_languages), item.other_language, formatArray(item.interests), formatMatchedAssociationsForText(matchedAssociations), item.preferred_association, item.known_participant, item.level, formatArray(item.preferred_times), item.preferred_time_note, item.parent_name, item.contact_role, item.phone, item.email, item.needs_support, item.comment, item.consent ? "Ja" : "Nej", item.language];
  });

  const csvContent = [headers.map(convertToCsvValue).join(";"), ...csvRows.map((row) => row.map(convertToCsvValue).join(";"))].join("\n");

  const blob = new Blob(["\uFEFF" + csvContent], {
    type: "text/csv;charset=utf-8;",
  });

  const url = URL.createObjectURL(blob);

  const link = document.createElement("a");
  link.href = url;
  link.download = `fritidsmatch-tilmeldinger-${new Date().toISOString().slice(0, 10)}.csv`;
  link.click();

  URL.revokeObjectURL(url);
}

async function checkSession() {
  const { data } = await supabaseClient.auth.getSession();

  if (data.session) {
    showDashboard();
    await loadSubmissions();
  } else {
    showLogin();
  }
}

function injectAdminAssociationStyles() {
  if (document.getElementById("associationAdminStyles")) return;

  const style = document.createElement("style");
  style.id = "associationAdminStyles";
  style.textContent = `
    #submissionsTable {
      width: 100% !important;
      min-width: 0 !important;
      table-layout: fixed;
    }

    #submissionsTable th,
    #submissionsTable td {
      vertical-align: top;
      white-space: normal;
      word-break: normal;
      overflow-wrap: anywhere;
    }

    #submissionsTable th {
      font-size: 0.8rem;
      line-height: 1.1;
    }

    #submissionsTable td {
      font-size: 0.92rem;
      line-height: 1.25;
    }

    #submissionsTable th:nth-child(1),
    #submissionsTable td:nth-child(1) {
      width: 15%;
    }

    #submissionsTable th:nth-child(2),
    #submissionsTable td:nth-child(2) {
      width: 15%;
    }

    #submissionsTable th:nth-child(3),
    #submissionsTable td:nth-child(3) {
      width: 7%;
    }

    #submissionsTable th:nth-child(4),
    #submissionsTable td:nth-child(4) {
      width: 10%;
    }

    #submissionsTable th:nth-child(5),
    #submissionsTable td:nth-child(5) {
      width: 17%;
    }

    #submissionsTable th:nth-child(6),
    #submissionsTable td:nth-child(6) {
      width: 15%;
    }

    #submissionsTable th:nth-child(7),
    #submissionsTable td:nth-child(7) {
      width: 15%;
    }

    #submissionsTable th:nth-child(8),
    #submissionsTable td:nth-child(8) {
      width: 5%;
    }

    .club-match-cell {
      vertical-align: top;
    }

    .club-match-dropdown {
      width: 180px;
      max-width: 100%;
      margin-bottom: 8px;
      border-radius: 999px;
      background: rgba(0, 13, 46, 0.04);
      border: 1px solid rgba(0, 13, 46, 0.1);
      overflow: hidden;
    }

    .club-match-dropdown:last-child {
      margin-bottom: 0;
    }

    .club-match-dropdown summary {
      list-style: none;
      cursor: pointer;
      padding: 10px 12px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 8px;
      font-weight: 900;
      color: #06245c;
      user-select: none;
      font-size: 0.86rem;
    }

    .club-match-dropdown summary::-webkit-details-marker {
      display: none;
    }

    .club-match-dropdown summary::after {
      content: "▾";
      font-size: 0.72rem;
      transition: transform 0.18s ease;
      opacity: 0.7;
      flex-shrink: 0;
    }

    .club-match-dropdown[open] {
      border-radius: 16px;
    }

    .club-match-dropdown[open] summary::after {
      transform: rotate(180deg);
    }

    .club-match-dropdown summary span {
      min-width: 0;
      max-width: 105px;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    .club-match-dropdown summary small {
      margin-left: auto;
      font-size: 0.68rem;
      font-weight: 800;
      color: rgba(6, 36, 92, 0.62);
      white-space: nowrap;
      flex-shrink: 0;
    }

    .association-pill-row {
      display: flex;
      flex-wrap: wrap;
      gap: 6px;
      padding: 0 10px 10px;
    }

    .association-pill {
      display: inline-flex;
      align-items: center;
      padding: 6px 9px;
      border-radius: 999px;
      
      color: #001535;
      font-size: 0.72rem;
      font-weight: 850;
      line-height: 1.1;
      max-width: 100%;
    }

    .association-empty {
      padding: 0 12px 12px;
      font-size: 0.78rem;
      opacity: 0.65;
    }

    .small-muted {
      display: block;
      margin-top: 4px;
      line-height: 1.35;
      font-size: 0.84rem;
    }
  `;

  document.head.appendChild(style);
}

loginForm.addEventListener("submit", async (event) => {
  event.preventDefault();

  loginError.classList.add("hidden");
  loginBtn.disabled = true;
  loginBtn.textContent = "Logger ind...";

  const { error } = await supabaseClient.auth.signInWithPassword({
    email: loginEmail.value.trim(),
    password: loginPassword.value,
  });

  if (error) {
    console.error("Login fejl:", error);

    loginError.classList.remove("hidden");
    loginBtn.disabled = false;
    loginBtn.textContent = "Log ind";
    return;
  }

  loginPassword.value = "";
  loginBtn.disabled = false;
  loginBtn.textContent = "Log ind";

  showDashboard();
  await loadSubmissions();
});

logoutBtn.addEventListener("click", async () => {
  await supabaseClient.auth.signOut();

  submissions = [];
  filteredSubmissions = [];

  showLogin();
});

searchInput.addEventListener("input", filterSubmissions);
downloadCsvBtn.addEventListener("click", downloadCsv);

const analyticsSection = document.querySelector(".analytics-section");

if (analyticsSection) {
  const analyticsObserver = new IntersectionObserver(
    (entries) => {
      const entry = entries[0];

      if (entry.isIntersecting) {
        chartsAreVisible = true;
        renderPendingCharts();
        analyticsObserver.unobserve(analyticsSection);
      }
    },
    {
      threshold: 0.2,
    },
  );

  analyticsObserver.observe(analyticsSection);
}

injectAdminAssociationStyles();
checkSession();

