let currentLanguage = "da";
let currentErrors = [];

const SUPABASE_URL = "https://zsttfamkpvojriktqxxd.supabase.co";
const SUPABASE_ANON_KEY = "sb_publishable_HA-5NsALtXQlCeYdvATkeg_cok3aZ3F";

const supabaseClient = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

const translations = {
  da: {
    step: "Trin",
    of: "af",

    back: "← Tilbage",
    start: "Kom i gang",
    privacy: "Sådan behandler vi dine oplysninger ↗",

    landingTitle: "Find et fritidsmatch",
    landingIntro: "Hjælp en person godt ind i en fritidsaktivitet",

    landingMainText: "Hjælp en person godt videre til en lokal fritidsaktivitet",
    landingSupportText: "Udfyld formularen på få minutter, så hjælper vi med at finde et godt match",
    landingBadgeTime: "Tager 2-3 minutter",
    landingBadgeContact: "Vi kontakter jer",

    childInfoTitle: "Barnets oplysninger",
    childInfoText: "Fortæl os lidt om barnet eller den unge.",
    childName: "Navn",
    childNamePlaceholder: "Skriv barnets navn",
    childAddress: "Adresse",
    childAddressPlaceholder: "Skriv barnets adresse",
    childSchool: "Skole",
    childSchoolPlaceholder: "Skriv skolens navn",
    childAge: "Alder",
    chooseAge: "Vælg alder",

    ageOptions: {
      "6-8 år": "6-8 år",
      "9-10 år": "9-10 år",
      "11-12 år": "11-12 år",
      "13-14 år": "13-14 år",
      "15-16 år": "15-16 år",
      "17+ år": "17+ år",
    },

    childGender: "Køn",
    girl: "Pige",
    boy: "Dreng",
    other: "Andet",
    preferNot: "Ønsker ikke at oplyse",

    childLanguage: "Sprog",
    danish: "Dansk",
    english: "Engelsk",
    otherLanguage: "Andet sprog",
    otherLanguagePlaceholder: "Skriv evt. andet sprog",

    interestsTitle: "Hvad interesserer barnet?",
    interestsText: "Vælg en eller flere aktiviteter.",
    interestsHelper: "Vælg mindst én interesse.",
    knowsSomeone: "Kender du nogen, der går til det?",
    knowsSomeonePlaceholder: "Skriv fx barnets navn, holdnavn eller forening",

    levelTitle: "Niveau og erfaring",
    levelText: "Hvor meget har barnet prøvet før?",
    beginner: "Nybegynder",
    triedBefore: "Har prøvet det før",
    experienced: "Øvet",
    dontKnow: "Ved ikke endnu",

    timeTitle: "Hvornår passer det bedst?",
    timeText: "Vælg gerne flere muligheder.",
    afterSchool: "Hverdage efter skole",
    evenings: "Hverdage om aftenen",
    weekend: "Weekend",
    flexible: "Vi er fleksible",
    timeHelper: "Vælg mindst én mulighed.",

    parentTitle: "Forælderens info",
    parentText: "Hvordan kan vi kontakte jer?",
    parentName: "Forælderens navn",
    parentNamePlaceholder: "Skriv forælderens navn",
    phone: "Telefonnummer",
    phonePlaceholder: "Skriv telefonnummer",
    email: "E-mail",
    emailPlaceholder: "Skriv e-mail",
    support: "Har barnet brug for kontingentstøtte?",
    yes: "Ja",
    no: "Nej",
    contactHelper: "Skriv gerne enten telefonnummer eller e-mail.",

    consentTitle: "Kommentar og samtykke",
    consentText: "Sidste skridt.",
    comment: "Kommentar",
    commentPlaceholder: "Skriv evt. noget vi bør vide",
    consentBox: "Dine oplysninger deles kun med relevante lokale foreninger, som kan kontakte dig med et konkret tilbud om fritidsaktiviteter til dit barn.",
    consentCheck: "Jeg accepterer, at mine oplysninger må deles med relevante foreninger med henblik på kontakt om fritidstilbud.",

    next: "Næste",
    previous: "Tilbage",
    submit: "Send oplysninger",
    sending: "Sender...",
    submitError: "Der skete en fejl. Prøv igen om lidt.",
    dataNote: "🔒 Vi passer godt på dine data",

    done: "Færdig",

    successTitleTop: "Tak for",
    successTitleMiddle: "din",
    successTitleBottom: "tilmelding!",
    successSubtitle: "Vi har modtaget dine oplysninger",
    successMatchTitle: "Vi finder det bedste match til jer",
    successMatchText: "Vi kontakter jer, når vi har et godt match.",
    successHomeBtn: "Til forsiden",

    errorTitle: "Du mangler lige:",
    errorChildName: "Barnets navn mangler.",
    errorChildAddress: "Barnets adresse mangler.",
    errorChildSchool: "Barnets skole mangler.",
    errorChildAge: "Barnets alder mangler.",
    errorChildGender: "Barnets køn mangler.",
    errorInterests: "Vælg mindst én aktivitet.",
    errorLevel: "Vælg barnets niveau.",
    errorTimes: "Vælg hvornår det passer bedst.",
    errorParentName: "Forælderens navn mangler.",
    errorContact: "Skriv enten telefonnummer eller e-mail.",
    errorSupport: "Vælg om barnet har brug for kontingentstøtte.",
    errorConsent: "Du skal acceptere samtykke før du kan sende.",
  },

  en: {
    step: "Step",
    of: "of",

    back: "← Back",
    start: "Get started",
    privacy: "How we process your information ↗",
    landingTitle: "Find a leisure activity",
    landingIntro: "Help a person get involved in a leisure activity",

    landingMainText: "Help a person get involved in a leisure activity",
    landingSupportText: "Fill out the form, takes 2 minutes and we will help you find a good match.",
    landingBadgeTime: "Takes 2-3 minutes",
    landingBadgeContact: "We will contact you",

    childInfoTitle: "Child information",
    childInfoText: "Tell us a little about the child or young person.",
    childName: "Name",
    childNamePlaceholder: "Enter the child’s name",
    childAddress: "Address",
    childAddressPlaceholder: "Enter the child’s address",
    childSchool: "School",
    childSchoolPlaceholder: "Enter the name of the school",
    childAge: "Age",
    chooseAge: "Choose age",

    ageOptions: {
      "6-8 år": "6-8 years",
      "9-10 år": "9-10 years",
      "11-12 år": "11-12 years",
      "13-14 år": "13-14 years",
      "15-16 år": "15-16 years",
      "17+ år": "17+ years",
    },

    childGender: "Gender",
    girl: "Girl",
    boy: "Boy",
    other: "Other",
    preferNot: "Prefer not to say",

    childLanguage: "Language",
    danish: "Danish",
    english: "English",
    otherLanguage: "Other language",
    otherLanguagePlaceholder: "Enter another language, if relevant",

    interestsTitle: "What is the child interested in?",
    interestsText: "Choose one or more activities.",
    interestsHelper: "Choose at least one interest.",
    knowsSomeone: "Do you know anyone already attending?",
    knowsSomeonePlaceholder: "Write the child’s name, team name or club",

    levelTitle: "Level and experience",
    levelText: "How much experience does the child have?",
    beginner: "Beginner",
    triedBefore: "Has tried it before",
    experienced: "Experienced",
    dontKnow: "Not sure yet",

    timeTitle: "When does it work best?",
    timeText: "Choose one or more options.",
    afterSchool: "Weekdays after school",
    evenings: "Weekday evenings",
    weekend: "Weekend",
    flexible: "We are flexible",
    timeHelper: "Choose at least one option.",

    parentTitle: "Parent information",
    parentText: "How can we contact you?",
    parentName: "Parent’s name",
    parentNamePlaceholder: "Enter the parent’s name",
    phone: "Phone number",
    phonePlaceholder: "Enter phone number",
    email: "Email",
    emailPlaceholder: "Enter email",
    support: "Does the child need financial support for membership fees?",
    yes: "Yes",
    no: "No",
    contactHelper: "Please enter either a phone number or an email.",

    consentTitle: "Comment and consent",
    consentText: "Final step.",
    comment: "Comment",
    commentPlaceholder: "Write anything we should know",
    consentBox: "Your information will only be shared with relevant local clubs, who may contact you with a specific leisure activity offer for your child.",
    consentCheck: "I agree that my information may be shared with relevant clubs for the purpose of being contacted about leisure activity offers.",

    next: "Next",
    previous: "Back",
    submit: "Submit information",
    sending: "Sending...",
    submitError: "Something went wrong. Please try again.",
    dataNote: "🔒 We take good care of your data",

    done: "Done",

    successTitleTop: "Thanks for",
    successTitleMiddle: "your",
    successTitleBottom: "submission!",
    successSubtitle: "We have received your information",
    successMatchTitle: "We’ll find the best match for you",
    successMatchText: "We’ll contact you when we have found a good match.",
    successHomeBtn: "Back to front page",

    errorTitle: "You still need to add:",
    errorChildName: "The child’s name is missing.",
    errorChildAddress: "The child’s address is missing.",
    errorChildSchool: "The child’s school is missing.",
    errorChildAge: "The child’s age is missing.",
    errorChildGender: "The child’s gender is missing.",
    errorInterests: "Choose at least one activity.",
    errorLevel: "Choose the child’s level.",
    errorTimes: "Choose when it works best.",
    errorParentName: "The parent’s name is missing.",
    errorContact: "Enter either a phone number or an email.",
    errorSupport: "Choose whether the child needs financial support.",
    errorConsent: "You need to accept the consent before submitting.",
  },
};

const landingView = document.getElementById("landingView");
const formView = document.getElementById("formView");

const startBtn = document.getElementById("startBtn");
const backToLandingBtn = document.getElementById("backToLandingBtn");

const form = document.getElementById("signupForm");
const formSteps = document.querySelectorAll(".form-step");
const successStep = document.getElementById("successStep");
const successHomeBtn = document.getElementById("successHomeBtn");

const prevStepBtn = document.getElementById("prevStepBtn");
const nextStepBtn = document.getElementById("nextStepBtn");
const submitBtn = document.getElementById("submitBtn");

const stepText = document.getElementById("stepText");
const progressFill = document.getElementById("progressFill");

const formErrorBox = document.getElementById("formErrorBox");
const formErrorList = document.getElementById("formErrorList");

let currentStep = 0;
const totalSteps = formSteps.length;

if (form) {
  form.noValidate = true;
}

function t(key) {
  return translations[currentLanguage][key] || key;
}

function setText(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.textContent = text;
}

function setPlaceholder(selector, text) {
  const element = document.querySelector(selector);
  if (element) element.placeholder = text;
}

function setLabelText(label, text) {
  if (!label) return;

  for (const node of label.childNodes) {
    if (node.nodeType === Node.TEXT_NODE && node.textContent.trim().length > 0) {
      node.textContent = `\n                        ${text}\n                        `;
      return;
    }
  }
}

function findLabelByField(selector) {
  const field = document.querySelector(selector);
  if (!field) return null;

  return field.closest("label");
}

function updateAgeOptions() {
  const ageSelect = document.querySelector('select[name="childAge"]');
  if (!ageSelect) return;

  const emptyOption = ageSelect.querySelector('option[value=""]');
  if (emptyOption) emptyOption.textContent = t("chooseAge");

  ageSelect.querySelectorAll("option").forEach((option) => {
    if (!option.value) return;

    const translatedAge = translations[currentLanguage].ageOptions?.[option.value];

    if (translatedAge) {
      option.textContent = translatedAge;
    }
  });
}

function showFormView() {
  landingView.classList.remove("active-view");
  formView.classList.add("active-view");
  window.scrollTo(0, 0);
}

function showLandingView() {
  formView.classList.remove("active-view");
  landingView.classList.add("active-view");
  window.scrollTo(0, 0);
}

startBtn.addEventListener("click", showFormView);
backToLandingBtn.addEventListener("click", showLandingView);

function updateStepView() {
  formSteps.forEach((step, index) => {
    step.classList.toggle("active-step", index === currentStep);
  });

  successStep.classList.remove("active-step");

  stepText.textContent = `${t("step")} ${currentStep + 1} ${t("of")} ${totalSteps}`;
  progressFill.style.width = `${((currentStep + 1) / totalSteps) * 100}%`;

  prevStepBtn.classList.toggle("hidden", currentStep === 0);

  const isLastStep = currentStep === totalSteps - 1;

  nextStepBtn.classList.toggle("hidden", isLastStep);
  submitBtn.classList.toggle("hidden", !isLastStep);
}

function updateLanguage() {
  document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
    button.classList.toggle("is-english", currentLanguage === "en");
  });

  setText("#backToLandingBtn", t("back"));

  if (startBtn) {
    startBtn.innerHTML = `${t("start")} <span>→</span>`;
  }

  setText(".privacy-link", t("privacy"));
  setText(".landing-left h1", t("landingTitle"));
  setText(".intro-text", t("landingIntro"));
  setText("[data-landing-support-text]", t("landingSupportText"));
  setText("[data-landing-badge-time]", t("landingBadgeTime"));
  setText("[data-landing-badge-contact]", t("landingBadgeContact"));

  const benefits = document.querySelectorAll(".benefit-item span");
  if (benefits[0]) benefits[0].textContent = t("benefit1");
  if (benefits[1]) benefits[1].textContent = t("benefit2");

  if (formErrorBox) {
    const errorTitle = formErrorBox.querySelector("strong");
    if (errorTitle) errorTitle.textContent = t("errorTitle");
  }

  if (currentErrors.length > 0 && formErrorBox && !formErrorBox.classList.contains("hidden")) {
    showFormErrors(currentErrors);
  }

  const steps = document.querySelectorAll(".form-step");

  if (steps[0]) {
    steps[0].querySelector("h2").textContent = t("childInfoTitle");
    steps[0].querySelector("p").textContent = t("childInfoText");

    setLabelText(findLabelByField('input[name="childName"]'), t("childName"));
    setLabelText(findLabelByField('input[name="childAddress"]'), t("childAddress"));
    setLabelText(findLabelByField('input[name="childSchool"]'), t("childSchool"));
    setLabelText(findLabelByField('select[name="childAge"]'), t("childAge"));
    setLabelText(findLabelByField('input[name="otherLanguage"]'), t("otherLanguage"));

    setPlaceholder('input[name="childName"]', t("childNamePlaceholder"));
    setPlaceholder('input[name="childAddress"]', t("childAddressPlaceholder"));
    setPlaceholder('input[name="childSchool"]', t("childSchoolPlaceholder"));
    setPlaceholder('input[name="otherLanguage"]', t("otherLanguagePlaceholder"));

    updateAgeOptions();

    const fieldTitles = steps[0].querySelectorAll(".field-title");
    if (fieldTitles[0]) fieldTitles[0].textContent = t("childGender");
    if (fieldTitles[1]) fieldTitles[1].textContent = t("childLanguage");

    const choiceGrids = steps[0].querySelectorAll(".choice-grid");

    const genderChoices = choiceGrids[0]?.querySelectorAll("span");
    if (genderChoices) {
      if (genderChoices[0]) genderChoices[0].textContent = t("girl");
      if (genderChoices[1]) genderChoices[1].textContent = t("boy");
      if (genderChoices[2]) genderChoices[2].textContent = t("other");
      if (genderChoices[3]) genderChoices[3].textContent = t("preferNot");
    }

    const languageChoices = choiceGrids[1]?.querySelectorAll("span");
    if (languageChoices) {
      if (languageChoices[0]) languageChoices[0].textContent = t("danish");
      if (languageChoices[1]) languageChoices[1].textContent = t("english");
    }
  }

  if (steps[1]) {
    steps[1].querySelector("h2").textContent = t("interestsTitle");
    steps[1].querySelector("p").textContent = t("interestsText");

    const helper = steps[1].querySelector(".helper-text");
    if (helper) helper.textContent = t("interestsHelper");

    setLabelText(findLabelByField('textarea[name="knownParticipant"]'), t("knowsSomeone"));
    setPlaceholder('textarea[name="knownParticipant"]', t("knowsSomeonePlaceholder"));
  }

  if (steps[2]) {
    steps[2].querySelector("h2").textContent = t("levelTitle");
    steps[2].querySelector("p").textContent = t("levelText");

    const levelChoices = steps[2].querySelectorAll(".choice-row span");
    if (levelChoices[0]) levelChoices[0].textContent = t("beginner");
    if (levelChoices[1]) levelChoices[1].textContent = t("triedBefore");
    if (levelChoices[2]) levelChoices[2].textContent = t("experienced");
    if (levelChoices[3]) levelChoices[3].textContent = t("dontKnow");
  }

  if (steps[3]) {
    steps[3].querySelector("h2").textContent = t("timeTitle");
    steps[3].querySelector("p").textContent = t("timeText");

    const timeChoices = steps[3].querySelectorAll(".choice-row span");
    if (timeChoices[0]) timeChoices[0].textContent = t("afterSchool");
    if (timeChoices[1]) timeChoices[1].textContent = t("evenings");
    if (timeChoices[2]) timeChoices[2].textContent = t("weekend");
    if (timeChoices[3]) timeChoices[3].textContent = t("flexible");

    const helper = steps[3].querySelector(".helper-text");
    if (helper) helper.textContent = t("timeHelper");
  }

  if (steps[4]) {
    steps[4].querySelector("h2").textContent = t("parentTitle");
    steps[4].querySelector("p").textContent = t("parentText");

    setLabelText(findLabelByField('input[name="parentName"]'), t("parentName"));
    setLabelText(findLabelByField('input[name="phone"]'), t("phone"));
    setLabelText(findLabelByField('input[name="email"]'), t("email"));

    setPlaceholder('input[name="parentName"]', t("parentNamePlaceholder"));
    setPlaceholder('input[name="phone"]', t("phonePlaceholder"));
    setPlaceholder('input[name="email"]', t("emailPlaceholder"));

    const fieldTitle = steps[4].querySelector(".field-title");
    if (fieldTitle) fieldTitle.textContent = t("support");

    const supportChoices = steps[4].querySelectorAll(".choice-card span");
    if (supportChoices[0]) supportChoices[0].textContent = t("yes");
    if (supportChoices[1]) supportChoices[1].textContent = t("no");

    const helper = steps[4].querySelector(".helper-text");
    if (helper) helper.textContent = t("contactHelper");
  }

  if (steps[5]) {
    steps[5].querySelector("h2").textContent = t("consentTitle");
    steps[5].querySelector("p").textContent = t("consentText");

    setLabelText(findLabelByField('textarea[name="comment"]'), t("comment"));
    setPlaceholder('textarea[name="comment"]', t("commentPlaceholder"));

    const consentBox = steps[5].querySelector(".consent-box");
    if (consentBox) consentBox.textContent = t("consentBox");

    const consentText = steps[5].querySelector(".consent-check span");
    if (consentText) consentText.textContent = t("consentCheck");
  }

  setText("#nextStepBtn", t("next"));
  setText("#prevStepBtn", t("previous"));
  setText("#submitBtn", t("submit"));
  setText(".data-note", t("dataNote"));

  setText("[data-success-title-top]", t("successTitleTop"));
  setText("[data-success-title-middle]", t("successTitleMiddle"));
  setText("[data-success-title-bottom]", t("successTitleBottom"));
  setText("[data-success-subtitle]", t("successSubtitle"));
  setText("[data-success-match-title]", t("successMatchTitle"));
  setText("[data-success-match-text]", t("successMatchText"));
  setText("[data-success-home-btn]", t("successHomeBtn"));

  updateStepView();
}

function getCheckedValues(name) {
  return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map((input) => input.value);
}

function hasValue(selector) {
  const field = document.querySelector(selector);
  return field && field.value.trim().length > 0;
}

function hasChecked(name) {
  return document.querySelectorAll(`input[name="${name}"]:checked`).length > 0;
}

function hideFormErrors() {
  currentErrors = [];

  if (formErrorBox) formErrorBox.classList.add("hidden");
  if (formErrorList) formErrorList.innerHTML = "";

  document.querySelectorAll(".field-error").forEach((field) => {
    field.classList.remove("field-error");
  });

  document.querySelectorAll(".choice-error").forEach((choice) => {
    choice.classList.remove("choice-error");
  });
}

function addError(errors, stepIndex, messageKey, fieldSelector = null) {
  errors.push({
    stepIndex,
    messageKey,
    fieldSelector,
  });
}

function markFieldError(selector) {
  if (!selector) return;

  const fields = document.querySelectorAll(selector);
  if (!fields.length) return;

  fields.forEach((field) => {
    if (field.type === "radio" || field.type === "checkbox") {
      const group = document.querySelectorAll(`input[name="${field.name}"]`);

      group.forEach((input) => {
        const label = input.closest("label");
        if (label) label.classList.add("choice-error");
      });

      return;
    }

    field.classList.add("field-error");
  });
}

function showFormErrors(errors) {
  if (!formErrorBox || !formErrorList) return;

  formErrorList.innerHTML = "";

  errors.forEach((error) => {
    const li = document.createElement("li");
    li.textContent = t(error.messageKey);
    formErrorList.appendChild(li);

    markFieldError(error.fieldSelector);
  });

  formErrorBox.classList.remove("hidden");
}

function goToFirstError(errors) {
  if (!errors.length) return;

  currentStep = errors[0].stepIndex;
  updateStepView();

  setTimeout(() => {
    showFormErrors(errors);

    formErrorBox?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  }, 50);
}

function validateFullForm() {
  const errors = [];

  if (!hasValue('input[name="childName"]')) {
    addError(errors, 0, "errorChildName", 'input[name="childName"]');
  }

  if (!hasValue('input[name="childAddress"]')) {
    addError(errors, 0, "errorChildAddress", 'input[name="childAddress"]');
  }

  if (!hasValue('input[name="childSchool"]')) {
    addError(errors, 0, "errorChildSchool", 'input[name="childSchool"]');
  }

  if (!hasValue('select[name="childAge"]')) {
    addError(errors, 0, "errorChildAge", 'select[name="childAge"]');
  }

  if (!hasChecked("childGender")) {
    addError(errors, 0, "errorChildGender", 'input[name="childGender"]');
  }

  if (!hasChecked("interests")) {
    addError(errors, 1, "errorInterests", 'input[name="interests"]');
  }

  if (!hasChecked("level")) {
    addError(errors, 2, "errorLevel", 'input[name="level"]');
  }

  if (!hasChecked("preferredTimes")) {
    addError(errors, 3, "errorTimes", 'input[name="preferredTimes"]');
  }

  if (!hasValue('input[name="parentName"]')) {
    addError(errors, 4, "errorParentName", 'input[name="parentName"]');
  }

  const hasPhone = hasValue('input[name="phone"]');
  const hasEmail = hasValue('input[name="email"]');

  if (!hasPhone && !hasEmail) {
    addError(errors, 4, "errorContact", 'input[name="phone"], input[name="email"]');
  }

  if (!hasChecked("needsSupport")) {
    addError(errors, 4, "errorSupport", 'input[name="needsSupport"]');
  }

  if (!hasChecked("consent")) {
    addError(errors, 5, "errorConsent", 'input[name="consent"]');
  }

  return errors;
}

function collectFormData() {
  const formData = new FormData(form);

  return {
    child_name: formData.get("childName"),
    child_address: formData.get("childAddress"),
    child_school: formData.get("childSchool"),
    child_age: formData.get("childAge"),
    child_gender: formData.get("childGender"),
    child_languages: getCheckedValues("childLanguages"),
    other_language: formData.get("otherLanguage"),

    interests: getCheckedValues("interests"),
    known_participant: formData.get("knownParticipant"),

    level: formData.get("level"),
    preferred_times: getCheckedValues("preferredTimes"),

    parent_name: formData.get("parentName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    needs_support: formData.get("needsSupport"),

    comment: formData.get("comment"),
    consent: formData.get("consent") === "on",
    language: currentLanguage,
  };
}

async function submitToSupabase(data) {
  const { error } = await supabaseClient.from("fritidsmatch_submissions").insert([data]);

  if (error) {
    console.error("Supabase fejl:", error);
    throw error;
  }
}

document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = currentLanguage === "da" ? "en" : "da";
    updateLanguage();
  });
});

nextStepBtn.addEventListener("click", () => {
  hideFormErrors();

  if (currentStep < totalSteps - 1) {
    currentStep++;
    updateStepView();
    window.scrollTo(0, 0);
  }
});

prevStepBtn.addEventListener("click", () => {
  hideFormErrors();

  if (currentStep > 0) {
    currentStep--;
    updateStepView();
    window.scrollTo(0, 0);
  }
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  hideFormErrors();

  const errors = validateFullForm();
  currentErrors = errors;

  if (errors.length > 0) {
    goToFirstError(errors);
    return;
  }

  currentErrors = [];

  const data = collectFormData();

  try {
    submitBtn.disabled = true;
    submitBtn.textContent = t("sending");

    await submitToSupabase(data);

    console.log("Gemt i Supabase:", data);

    form.classList.add("success-mode");
    formView.classList.add("success-view-mode");

    formSteps.forEach((step) => step.classList.remove("active-step"));
    successStep.classList.add("active-step");

    stepText.textContent = t("done");
    progressFill.style.width = "100%";

    prevStepBtn.classList.add("hidden");
    nextStepBtn.classList.add("hidden");
    submitBtn.classList.add("hidden");

    window.scrollTo(0, 0);
  } catch (error) {
    alert(t("submitError"));

    submitBtn.disabled = false;
    submitBtn.textContent = t("submit");
  }
});

if (successHomeBtn) {
  successHomeBtn.addEventListener("click", () => {
    form.reset();

    currentStep = 0;
    currentErrors = [];

    hideFormErrors();

    form.classList.remove("success-mode");
    formView.classList.remove("success-view-mode");

    submitBtn.disabled = false;
    submitBtn.textContent = t("submit");

    successStep.classList.remove("active-step");

    updateStepView();
    showLandingView();
  });
}

document.querySelectorAll("input, select, textarea").forEach((field) => {
  field.addEventListener("input", () => {
    field.classList.remove("field-error");

    const label = field.closest("label");
    if (label) label.classList.remove("choice-error");
  });

  field.addEventListener("change", () => {
    field.classList.remove("field-error");

    if (field.type === "radio" || field.type === "checkbox") {
      document.querySelectorAll(`input[name="${field.name}"]`).forEach((input) => {
        const label = input.closest("label");
        if (label) label.classList.remove("choice-error");
      });
    }
  });
});

updateLanguage();
