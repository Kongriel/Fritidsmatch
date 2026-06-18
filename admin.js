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

  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
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
    "Antal"
  );

  const activityTop = getTopEntries(activityCounts, 8);
  renderBarChart(
    "activityChart",
    activityTop.map(([label]) => label),
    activityTop.map(([, value]) => value),
    "Antal"
  );

  const schoolTop = getTopEntries(schoolCounts, 8);
  renderBarChart(
    "schoolChart",
    schoolTop.map(([label]) => label),
    schoolTop.map(([, value]) => value),
    "Antal"
  );

  const schoolSupportTop = getTopEntries(schoolSupportCounts, 8);
  renderBarChart(
    "schoolSupportChart",
    schoolSupportTop.map(([label]) => label),
    schoolSupportTop.map(([, value]) => value),
    "Antal med kontingentstøtte"
  );

  const timeTop = getTopEntries(timeCounts, 8);
  renderBarChart(
    "timeChart",
    timeTop.map(([label]) => label),
    timeTop.map(([, value]) => value),
    "Antal"
  );

  const supportTop = getTopEntries(supportCounts, 4);
  renderPieChart(
    "supportChart",
    supportTop.map(([label]) => label),
    supportTop.map(([, value]) => value),
    "Antal"
  );

  const roleTop = getTopEntries(roleCounts, 6);
  renderPieChart(
    "roleChart",
    roleTop.map(([label]) => label),
    roleTop.map(([, value]) => value),
    "Antal"
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
      const supportText =
        group.supportCount > 0
          ? `${group.supportCount} med behov for kontingentstøtte`
          : "Ingen har angivet kontingentstøtte";

      return `
        <div class="opportunity-item">
          <strong>${escapeHtml(group.activity)} · ${escapeHtml(group.age)} · ${escapeHtml(group.school)}</strong>
          <span>${group.count} personer matcher denne gruppe</span>
          <span>Bedste tidspunkt: ${escapeHtml(topTime ? topTime[0] : "Ikke nok data")}</span>
          <span>${escapeHtml(supportText)}</span>
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

          <td>
            ${escapeHtml(formatArray(item.interests))}
            <span class="small-muted">Niveau: ${escapeHtml(item.level || "")}</span>
            <span class="small-muted">Tid: ${escapeHtml(formatArray(item.preferred_times))}</span>
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
    const searchableText = [
      item.child_name,
      item.child_address,
      item.child_school,
      item.child_age,
      item.child_gender,
      formatArray(item.child_languages),
      item.other_language,
      formatArray(item.interests),
      item.known_participant,
      item.level,
      formatArray(item.preferred_times),
      item.parent_name,
      item.contact_role,
      item.phone,
      item.email,
      item.needs_support,
      item.comment,
      item.language,
      item.created_at,
    ]
      .filter(Boolean)
      .join(" ")
      .toLowerCase();

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

  const { data, error } = await supabaseClient
    .from("fritidsmatch_submissions")
    .select("*")
    .order("created_at", { ascending: false });

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

  const headers = [
    "Dato",
    "Navn",
    "Adresse",
    "Skole",
    "Alder",
    "Køn",
    "Sprog",
    "Andet sprog",
    "Interesser",
    "Kender nogen",
    "Niveau",
    "Passer bedst",
    "Kontaktperson",
    "Tilknytning",
    "Telefon",
    "Email",
    "Kontingentstøtte",
    "Kommentar",
    "Samtykke",
    "Sprog på formular",
  ];

  const csvRows = rows.map((item) => [
    formatDate(item.created_at),
    item.child_name,
    item.child_address,
    item.child_school,
    item.child_age,
    item.child_gender,
    formatArray(item.child_languages),
    item.other_language,
    formatArray(item.interests),
    item.known_participant,
    item.level,
    formatArray(item.preferred_times),
    item.parent_name,
    item.contact_role,
    item.phone,
    item.email,
    item.needs_support,
    item.comment,
    item.consent ? "Ja" : "Nej",
    item.language,
  ]);

  const csvContent = [
    headers.map(convertToCsvValue).join(";"),
    ...csvRows.map((row) => row.map(convertToCsvValue).join(";")),
  ].join("\n");

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
    }
  );

  analyticsObserver.observe(analyticsSection);
}

checkSession();
