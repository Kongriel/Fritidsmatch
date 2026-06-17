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

function renderTable(data) {
  filteredSubmissions = data;

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
    const searchableText = [item.child_name, item.child_address, item.child_school, item.child_age, item.child_gender, formatArray(item.child_languages), item.other_language, formatArray(item.interests), item.known_participant, item.level, formatArray(item.preferred_times), item.parent_name, item.contact_role, item.phone, item.email, item.needs_support, item.comment, item.language, item.created_at].filter(Boolean).join(" ").toLowerCase();

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

  const headers = ["Dato", "Navn", "Adresse", "Skole", "Alder", "Køn", "Sprog", "Andet sprog", "Interesser", "Kender nogen", "Niveau", "Passer bedst", "Kontaktperson", "Tilknytning", "Telefon", "Email", "Kontingentstøtte", "Kommentar", "Samtykke", "Sprog på formular"];

  const csvRows = rows.map((item) => [formatDate(item.created_at), item.child_name, item.child_address, item.child_school, item.child_age, item.child_gender, formatArray(item.child_languages), item.other_language, formatArray(item.interests), item.known_participant, item.level, formatArray(item.preferred_times), item.parent_name, item.contact_role, item.phone, item.email, item.needs_support, item.comment, item.consent ? "Ja" : "Nej", item.language]);

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

checkSession();

