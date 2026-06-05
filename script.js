let currentLanguage = "da";

const translations = {
  da: {
    step: "Trin",
    of: "af",

    back: "← Tilbage",
    start: "Kom i gang",
    privacy: "Sådan behandler vi dine oplysninger ↗",

    landingTitle: "Find den rigtige fritidsaktivitet til dit barn",
    landingIntro: "Udfyld et par oplysninger, så hjælper lokale foreninger med at finde et godt tilbud tæt på jer.",
    benefit1: "Dine oplysninger deles kun med relevante foreninger",
    benefit2: "I bliver kontaktet med et konkret tilbud",

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

    childLanguage: "Barnets sprog",
    danish: "Dansk",
    english: "Engelsk",
    otherLanguage: "Andet sprog",
    otherLanguagePlaceholder: "Skriv evt. andet sprog",

    parentTitle: "Forælder info",
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

    consentTitle: "Kommentar og samtykke",
    consentText: "Sidste skridt.",
    comment: "Kommentar",
    commentPlaceholder: "Skriv evt. noget vi bør vide",
    consentBox: "Dine oplysninger deles kun med relevante lokale foreninger, som kan kontakte dig med et konkret tilbud om fritidsaktiviteter til dit barn.",
    consentCheck: "Jeg accepterer, at mine oplysninger må deles med relevante foreninger med henblik på kontakt om fritidstilbud.",

    next: "Næste",
    previous: "Tilbage",
    submit: "Send oplysninger",
    dataNote: "🔒 Vi passer godt på dine data",

    successTitle: "Tak!",
    successText: "Vi har modtaget jeres oplysninger. En relevant forening kontakter jer, hvis der er et godt match.",
    successTip: "Imens kan I snakke derhjemme om, hvad der kunne være sjovest at prøve først.",

    done: "Færdig",

    alertInterest: "Vælg mindst én interesse.",
    alertTime: "Vælg mindst én mulighed for, hvornår det passer bedst.",
    alertContact: "Skriv enten telefonnummer eller e-mail.",
  },

  en: {
    step: "Step",
    of: "of",

    back: "← Back",
    start: "Get started",
    privacy: "How we process your information ↗",

    landingTitle: "Find the right activity for your child",
    landingIntro: "Fill in a few details, and local clubs will help find a suitable offer near you.",
    benefit1: "Your information is only shared with relevant clubs",
    benefit2: "You will be contacted with a specific offer",

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

    childLanguage: "Child’s language",
    danish: "Danish",
    english: "English",
    otherLanguage: "Other language",
    otherLanguagePlaceholder: "Enter another language, if relevant",

    parentTitle: "Parents informations",
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

    consentTitle: "Comment and consent",
    consentText: "Final step.",
    comment: "Comment",
    commentPlaceholder: "Write anything we should know",
    consentBox: "Your information will only be shared with relevant local clubs, who may contact you with a specific leisure activity offer for your child.",
    consentCheck: "I agree that my information may be shared with relevant clubs for the purpose of being contacted about leisure activity offers.",

    next: "Next",
    previous: "Back",
    submit: "Submit information",
    dataNote: "🔒 We take good care of your data",

    successTitle: "Thank you!",
    successText: "We have received your information. A relevant club will contact you if there is a good match.",
    successTip: "In the meantime, you can talk at home about what might be the most fun to try first.",

    done: "Done",

    alertInterest: "Choose at least one interest.",
    alertTime: "Choose at least one option for when it works best.",
    alertContact: "Enter either a phone number or an email.",
  },
};

const landingView = document.getElementById("landingView");
const formView = document.getElementById("formView");

const startBtn = document.getElementById("startBtn");
const backToLandingBtn = document.getElementById("backToLandingBtn");

const form = document.getElementById("signupForm");
const formSteps = document.querySelectorAll(".form-step");
const successStep = document.getElementById("successStep");

const prevStepBtn = document.getElementById("prevStepBtn");
const nextStepBtn = document.getElementById("nextStepBtn");
const submitBtn = document.getElementById("submitBtn");

const stepText = document.getElementById("stepText");
const progressFill = document.getElementById("progressFill");

let currentStep = 0;
const totalSteps = formSteps.length;

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

function findLabelByField(selector) {
  const field = document.querySelector(selector);
  if (!field) return null;

  return field.closest("label");
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

  const benefits = document.querySelectorAll(".benefit-item span");
  if (benefits[0]) benefits[0].textContent = t("benefit1");
  if (benefits[1]) benefits[1].textContent = t("benefit2");

  const steps = document.querySelectorAll(".form-step");

  if (steps[0]) {
    steps[0].querySelector("h2").textContent = t("childInfoTitle");
    steps[0].querySelector("p").textContent = t("childInfoText");

    const labels = steps[0].querySelectorAll("label");
    setLabelText(labels[0], t("childName"));
    setLabelText(labels[1], t("childAddress"));
    setLabelText(labels[2], t("childSchool"));
    setLabelText(labels[3], t("childAge"));
    setLabelText(labels[4], t("otherLanguage"));

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
    steps[1].querySelector("h2").textContent = t("parentTitle");
    steps[1].querySelector("p").textContent = t("parentText");

    const labels = steps[1].querySelectorAll("label");
    setLabelText(labels[0], t("parentName"));
    setLabelText(labels[1], t("phone"));
    setLabelText(labels[2], t("email"));

    setPlaceholder('input[name="parentName"]', t("parentNamePlaceholder"));
    setPlaceholder('input[name="phone"]', t("phonePlaceholder"));
    setPlaceholder('input[name="email"]', t("emailPlaceholder"));

    const fieldTitle = steps[1].querySelector(".field-title");
    if (fieldTitle) fieldTitle.textContent = t("support");

    const supportChoices = steps[1].querySelectorAll(".choice-card span");
    if (supportChoices[0]) supportChoices[0].textContent = t("yes");
    if (supportChoices[1]) supportChoices[1].textContent = t("no");

    const helper = steps[1].querySelector(".helper-text");
    if (helper) helper.textContent = t("contactHelper");
  }

  if (steps[2]) {
    steps[2].querySelector("h2").textContent = t("interestsTitle");
    steps[2].querySelector("p").textContent = t("interestsText");

    const helper = steps[2].querySelector(".helper-text");
    if (helper) helper.textContent = t("interestsHelper");

    const knownLabel = findLabelByField('textarea[name="knownParticipant"]');
    setLabelText(knownLabel, t("knowsSomeone"));

    setPlaceholder('textarea[name="knownParticipant"]', t("knowsSomeonePlaceholder"));
  }

  if (steps[3]) {
    steps[3].querySelector("h2").textContent = t("levelTitle");
    steps[3].querySelector("p").textContent = t("levelText");

    const levelChoices = steps[3].querySelectorAll(".choice-row span");
    if (levelChoices[0]) levelChoices[0].textContent = t("beginner");
    if (levelChoices[1]) levelChoices[1].textContent = t("triedBefore");
    if (levelChoices[2]) levelChoices[2].textContent = t("experienced");
    if (levelChoices[3]) levelChoices[3].textContent = t("dontKnow");
  }

  if (steps[4]) {
    steps[4].querySelector("h2").textContent = t("timeTitle");
    steps[4].querySelector("p").textContent = t("timeText");

    const timeChoices = steps[4].querySelectorAll(".choice-row span");
    if (timeChoices[0]) timeChoices[0].textContent = t("afterSchool");
    if (timeChoices[1]) timeChoices[1].textContent = t("evenings");
    if (timeChoices[2]) timeChoices[2].textContent = t("weekend");
    if (timeChoices[3]) timeChoices[3].textContent = t("flexible");

    const helper = steps[4].querySelector(".helper-text");
    if (helper) helper.textContent = t("timeHelper");
  }

  if (steps[5]) {
    steps[5].querySelector("h2").textContent = t("consentTitle");
    steps[5].querySelector("p").textContent = t("consentText");

    const commentLabel = findLabelByField('textarea[name="comment"]');
    setLabelText(commentLabel, t("comment"));

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

  const success = document.querySelector("#successStep");
  if (success) {
    const successTitle = success.querySelector("h2");
    const successText = success.querySelector(".success-content > p");
    const successTip = success.querySelector(".success-tip p");

    if (successTitle) successTitle.textContent = t("successTitle");
    if (successText) successText.textContent = t("successText");
    if (successTip) successTip.textContent = t("successTip");
  }

  updateStepView();
}

function validateNormalFields(stepElement) {
  const fields = stepElement.querySelectorAll("input, select, textarea");

  for (const field of fields) {
    if (field.type === "checkbox" || field.type === "radio") continue;

    if (!field.checkValidity()) {
      field.reportValidity();
      return false;
    }
  }

  const requiredRadioNames = [...new Set(Array.from(stepElement.querySelectorAll('input[type="radio"][required]')).map((input) => input.name))];

  for (const radioName of requiredRadioNames) {
    const checked = stepElement.querySelector(`input[name="${radioName}"]:checked`);

    if (!checked) {
      const firstRadio = stepElement.querySelector(`input[name="${radioName}"]`);
      firstRadio.reportValidity();
      return false;
    }
  }

  const requiredCheckboxes = stepElement.querySelectorAll('input[type="checkbox"][required]');

  for (const checkbox of requiredCheckboxes) {
    if (!checkbox.checked) {
      checkbox.reportValidity();
      return false;
    }
  }

  return true;
}

function validateCustomGroups(stepElement) {
  const stepType = stepElement.dataset.stepType;

  if (stepType === "interests") {
    const checkedInterests = stepElement.querySelectorAll('input[name="interests"]:checked');

    if (checkedInterests.length === 0) {
      alert(t("alertInterest"));
      return false;
    }
  }

  if (stepType === "times") {
    const checkedTimes = stepElement.querySelectorAll('input[name="preferredTimes"]:checked');

    if (checkedTimes.length === 0) {
      alert(t("alertTime"));
      return false;
    }
  }

  return true;
}

function validateContactInfo(stepElement) {
  const phone = stepElement.querySelector('input[name="phone"]');
  const email = stepElement.querySelector('input[name="email"]');

  if (!phone || !email) return true;

  const hasPhone = phone.value.trim().length > 0;
  const hasEmail = email.value.trim().length > 0;

  if (!hasPhone && !hasEmail) {
    alert(t("alertContact"));
    phone.focus();
    return false;
  }

  return true;
}

function validateCurrentStep() {
  const currentStepElement = formSteps[currentStep];

  if (!validateNormalFields(currentStepElement)) return false;
  if (!validateCustomGroups(currentStepElement)) return false;
  if (!validateContactInfo(currentStepElement)) return false;

  return true;
}

function getCheckedValues(name) {
  return Array.from(document.querySelectorAll(`input[name="${name}"]:checked`)).map((input) => input.value);
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

    parent_name: formData.get("parentName"),
    phone: formData.get("phone"),
    email: formData.get("email"),
    needs_support: formData.get("needsSupport"),

    interests: getCheckedValues("interests"),
    known_participant: formData.get("knownParticipant"),

    level: formData.get("level"),
    preferred_times: getCheckedValues("preferredTimes"),

    comment: formData.get("comment"),
    consent: formData.get("consent") === "on",
    language: currentLanguage,
    created_at: new Date().toISOString(),
  };
}

document.querySelectorAll("[data-lang-toggle]").forEach((button) => {
  button.addEventListener("click", () => {
    currentLanguage = currentLanguage === "da" ? "en" : "da";
    updateLanguage();
  });
});

nextStepBtn.addEventListener("click", () => {
  if (!validateCurrentStep()) return;

  if (currentStep < totalSteps - 1) {
    currentStep++;
    updateStepView();
    window.scrollTo(0, 0);
  }
});

prevStepBtn.addEventListener("click", () => {
  if (currentStep > 0) {
    currentStep--;
    updateStepView();
    window.scrollTo(0, 0);
  }
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (!validateCurrentStep()) return;

  const data = collectFormData();

  console.log("Klar til Supabase:", data);

  formSteps.forEach((step) => step.classList.remove("active-step"));
  successStep.classList.add("active-step");

  stepText.textContent = t("done");
  progressFill.style.width = "100%";

  prevStepBtn.classList.add("hidden");
  nextStepBtn.classList.add("hidden");
  submitBtn.classList.add("hidden");

  window.scrollTo(0, 0);
});

updateLanguage();
