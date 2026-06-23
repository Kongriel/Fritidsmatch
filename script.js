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

    landingTitle: "Find en fritidsaktivitet",
    landingIntro: "Hjælp en person godt ind i en fritidsaktivitet",

    landingMainText: "Hjælp en person godt videre til en lokal fritidsaktivitet",
    landingSupportText: "Udfyld formularen på få minutter, så hjælper vi med at finde et godt match",
    landingBadgeTime: "Tager 2-3 minutter",
    landingBadgeContact: "Vi kontakter jer",

    preferredTimeNote: "Er der dage eller tidspunkter, hvor du ikke kan gå til en fritidsaktivitet?",
    preferredTimeNotePlaceholder: "Skriv de dage eller tidspunkter, der ikke passer — fx mandage efter kl. 16",

    privacyTitle: "Sådan behandler vi dine oplysninger",
    privacyIntro: "Vi bruger kun oplysningerne til at hjælpe med at finde et relevant fritidstilbud.",
    privacyPointOneTitle: "Hvad bruger vi oplysningerne til?",
    privacyPointOneText: "Vi bruger dem til at kontakte jer og matche barnet eller den unge med en relevant lokal forening.",
    privacyPointTwoTitle: "Hvem deles de med?",
    privacyPointTwoText: "Oplysningerne deles kun med relevante personer eller foreninger, som kan hjælpe med et fritidsmatch og behandles fortroligt.",
    privacyPointThreeTitle: "Hvor længe gemmes de?",
    privacyPointThreeText: "Oplysningerne gemmes kun indtil der er fulgt op på henvendelsen.",
    privacyOk: "Det er forstået",

    childInfoTitle: "Aktivitetssøgerens oplysninger",
    childInfoText: "Fortæl os lidt om personen.",
    childName: "Navn",
    childNamePlaceholder: "Personens navn",
    childAddress: "Adresse",
    childAddressPlaceholder: "Personens adresse",
    childSchool: "Skole",
    chooseSchool: "Vælg skole",
    childAge: "Alder",
    chooseAge: "Vælg alder",

    schoolOptions: {
      "Valby Skole": "Valby Skole",
      "Lykkebo Skole": "Lykkebo Skole",
      "Hanssted Skole": "Hanssted Skole",
      "Kirsebærhavens Skole": "Kirsebærhavens Skole",
      "Ellebjerg Skole": "Ellebjerg Skole",
      "Vigerslev Allés Skole": "Vigerslev Allés Skole",
      "Ålholm Skole": "Ålholm Skole",
      "Harrestrup Å Skole": "Harrestrup Å Skole",
      "Specialfritidsinstitutionen ved Kirsebærhavens Skole": "Specialfritidsinstitutionen ved Kirsebærhavens Skole",
      "Anden skole / ikke på listen": "Anden skole / ikke på listen",
    },

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

    interestsTitle: "Hvilke fritidsaktiviteter ønskes",
    interestsText: "Vælg en eller flere aktiviteter.",
    interestsHelper: "Vælg mindst én interesse.",

    preferredAssociation: "Kender I allerede en forening, barnet gerne vil gå i?",
    preferredAssociationPlaceholder: "Skriv fx Valby IF, Fremad Valby, Valby Judoklub, B3B eller lignende",

    knowsSomeone: "Kender du nogen, der går til det?",
    knowsSomeonePlaceholder: "Skriv fx personens navn, holdnavn eller forening",

    levelTitle: "Niveau og erfaring",
    levelText: "Hvor meget har personen prøvet før?",
    beginner: "Nybegynder",
    triedBefore: "Har prøvet det før",
    experienced: "Øvet",
    dontKnow: "Ved ikke endnu",

    timeTitle: "Hvornår passer det bedst?",
    timeText: "Vælg en eller flere muligheder.",
    afterSchool: "Hverdage efter skole, før kl. 19",
    evenings: "Hverdage om aftenen, efter kl. 19",
    weekend: "Weekend",
    flexible: "Fleksibel",
    timeHelper: "Vælg mindst én mulighed.",

    parentTitle: "Forældre / kontaktpersonens info",
    parentText: "Hvordan kan vi kontakte jer?",
    parentName: "Kontaktpersonens fulde navn",
    parentNamePlaceholder: "Skriv kontaktpersonens navn",
    phone: "Telefonnummer",
    phonePlaceholder: "Skriv telefonnummer",
    email: "E-mail",
    emailPlaceholder: "Skriv e-mail",
    support: "Har personen brug for kontingentstøtte?",
    yes: "Ja",
    no: "Nej",
    contactHelper: "Skriv gerne enten telefonnummer eller e-mail.",

    supportInfoLink: "Læs mere om kontingentstøtte",
    supportModalTitle: "Hvad er kontingentstøtte?",
    supportModalTextOne: "Kontingentstøtte er økonomisk hjælp til børn og unge, så de kan gå til en fritidsaktivitet.",
    supportModalTextTwo: "Støtten kan bruges til kontingent og i nogle tilfælde også udstyr eller stævnedeltagelse.",
    supportModalTextThree: "Ordningen er især for familier, hvor økonomien gør det svært at betale for en fritidsaktivitet. Foreningen søger normalt støtten på vegne af barnet.",
    supportModalOk: "Det er forstået",

    consentTitle: "Kommentar og samtykke",
    consentText: "Sidste skridt.",
    comment: "Kommentar",
    commentPlaceholder: "Skriv evt. noget vi bør vide",
    consentBox: "Dine oplysninger behandles fortroligt og deles kun med kontaktpersonen i de relevante foreninger, som kan kontakte dig med et konkret tilbud om de ønskede fritidsaktiviteter.",
    consentCheck: "Jeg accepterer, at mine oplysninger må deles med en kontaktperson fra relevante foreninger.",
    next: "Næste",
    previous: "Tilbage",
    submit: "Send oplysninger",
    sending: "Sender...",
    submitError: "Der skete en fejl. Prøv igen om lidt.",
    dataNote: "🔒 Vi passer godt på dine data",
    developCredit: "Udviklet af Anton Krause Riel",

    done: "Færdig",

    successTitleTop: "Tak for",
    successTitleMiddle: "din",
    successTitleBottom: "tilmelding!",
    successSubtitle: "Vi har modtaget dine oplysninger",
    successMatchTitle: "Vi finder det bedste match til jer",
    successMatchText: "Vi kontakter jer, når vi har et godt match.",
    successHomeBtn: "Til forsiden",

    errorTitle: "Du mangler lige:",
    errorChildName: "Personens navn mangler.",
    errorChildAddress: "Personens adresse mangler.",
    errorChildSchool: "Vælg personens skole.",
    errorChildAge: "Personens alder mangler.",
    errorChildGender: "Personens køn mangler.",
    errorInterests: "Vælg mindst én aktivitet.",
    errorLevel: "Vælg personens niveau.",
    errorTimes: "Vælg hvornår det passer bedst.",
    errorParentName: "Forælderens/kontaktpersonens navn mangler.",
    errorContact: "Skriv enten telefonnummer eller e-mail.",
    errorPhoneInvalid: "Telefonnummer må kun indeholde tal og skal være mellem 8 og 15 cifre.",
    errorEmailInvalid: "Skriv en gyldig e-mailadresse.",
    errorSupport: "Vælg om personen har brug for kontingentstøtte.",
    errorConsent: "Du skal acceptere samtykke før du kan sende.",

    contactRoleTitle: "Tilknytning",
    roleParent: "Forælder",
    roleTeacher: "Lærer",
    rolePedagogue: "Pædagog",
    roleOther: "Andet",
    errorContactRole: "Vælg din tilknytning.",
  },

  en: {
    step: "Step",
    of: "of",

    contactRoleTitle: "Relation",
    roleParent: "Parent",
    roleTeacher: "Teacher",
    rolePedagogue: "Pedagogue",
    roleOther: "Other",
    errorContactRole: "Choose your relation.",

    back: "← Back",
    start: "Get started",
    privacy: "How we process your information ↗",

    landingTitle: "Find a leisure activity",
    landingIntro: "Help a person get involved in a leisure activity",
    preferredTimeNote: "Are there any days or times when you cannot attend a leisure activity?",
    preferredTimeNotePlaceholder: "Write the days or times that do not work — for example, Mondays after 4 PM, all day Wednesdays or weekends",
    landingMainText: "Help a person get involved in a leisure activity",
    landingSupportText: "Fill out the form, takes 2 minutes and we will help you find a good match.",
    landingBadgeTime: "Takes 2-3 minutes",
    landingBadgeContact: "We will contact you",

    privacyTitle: "How we process your information",
    privacyIntro: "We only use the information to help find a relevant leisure activity.",
    privacyPointOneTitle: "What do we use the information for?",
    privacyPointOneText: "We use it to contact you and match the child or young person with a relevant local club.",
    privacyPointTwoTitle: "Who is it shared with?",
    privacyPointTwoText: "The information is only shared with relevant people or clubs who can help with the leisure activity match, and it is handled confidentially.",
    privacyPointThreeTitle: "How long is it stored?",
    privacyPointThreeText: "The information is only stored until the enquiry has been followed up on.",
    privacyOk: "Got it",

    childInfoTitle: "Activity seeker’s information",
    childInfoText: "Tell us a little about the person.",
    childName: "Name",
    childNamePlaceholder: "Enter the person’s name",
    childAddress: "Address",
    childAddressPlaceholder: "Enter the person’s address",
    childSchool: "School",
    chooseSchool: "Choose school",
    childAge: "Age",
    chooseAge: "Choose age",

    schoolOptions: {
      "Valby Skole": "Valby Skole",
      "Lykkebo Skole": "Lykkebo Skole",
      "Hanssted Skole": "Hanssted Skole",
      "Kirsebærhavens Skole": "Kirsebærhavens Skole",
      "Ellebjerg Skole": "Ellebjerg Skole",
      "Vigerslev Allés Skole": "Vigerslev Allés Skole",
      "Ålholm Skole": "Ålholm Skole",
      "Harrestrup Å Skole": "Harrestrup Å Skole",
      "Specialfritidsinstitutionen ved Kirsebærhavens Skole": "Special after-school institution at Kirsebærhavens Skole",
      "Anden skole / ikke på listen": "Other school / not on the list",
    },

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

    interestsTitle: "What activities are wanted?",
    interestsText: "Choose one or more activities.",
    interestsHelper: "Choose at least one interest.",

    preferredAssociation: "Do you already know a club the child would like to join?",
    preferredAssociationPlaceholder: "Write e.g. Valby IF, Fremad Valby, Valby Judoklub, B3B or similar",

    knowsSomeone: "Do you know anyone already attending?",
    knowsSomeonePlaceholder: "Write the child’s name, team name or club",

    levelTitle: "Level and experience",
    levelText: "How much experience does the person have?",
    beginner: "Beginner",
    triedBefore: "Has tried it before",
    experienced: "Experienced",
    dontKnow: "Not sure yet",

    timeTitle: "When does it work best?",
    timeText: "Choose one or more options.",
    afterSchool: "Weekdays after school, before 7 PM",
    evenings: "Weekday evenings, after 7 PM",
    weekend: "Weekend",
    flexible: "Flexible",
    timeHelper: "Choose at least one option.",

    parentTitle: "Contact person information",
    parentText: "How can we contact you?",
    parentName: "Contact person’s full name",
    parentNamePlaceholder: "Enter the contact person’s name",
    phone: "Phone number",
    phonePlaceholder: "Enter phone number",
    email: "Email",
    emailPlaceholder: "Enter email",
    support: "Does the person need financial support for membership fees?",
    yes: "Yes",
    no: "No",
    contactHelper: "Please enter either a phone number or an email.",

    supportInfoLink: "Read more about financial membership support",
    supportModalTitle: "What is financial membership support?",
    supportModalTextOne: "Financial membership support helps children and young people take part in a leisure activity.",
    supportModalTextTwo: "The support can be used for membership fees and, in some cases, equipment or event participation.",
    supportModalTextThree: "The support is especially for families where the economy makes it difficult to pay for a leisure activity. The club usually applies for the support on behalf of the child.",
    supportModalOk: "Got it",

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
    developCredit: "Developed by Anton Krause Riel",

    done: "Done",

    successTitleTop: "Thanks for",
    successTitleMiddle: "your",
    successTitleBottom: "submission!",
    successSubtitle: "We have received your information",
    successMatchTitle: "We’ll find the best match for you",
    successMatchText: "We’ll contact you when we have found a good match.",
    successHomeBtn: "Back to front page",

    errorTitle: "You still need to add:",
    errorChildName: "The person’s name is missing.",
    errorChildAddress: "The person’s address is missing.",
    errorChildSchool: "Choose the person’s school.",
    errorChildAge: "The person’s age is missing.",
    errorChildGender: "The person’s gender is missing.",
    errorInterests: "Choose at least one activity.",
    errorLevel: "Choose the person’s level.",
    errorTimes: "Choose when it works best.",
    errorParentName: "The contact person’s name is missing.",
    errorContact: "Enter either a phone number or an email.",
    errorPhoneInvalid: "Phone number must only contain numbers and be between 8 and 15 digits.",
    errorEmailInvalid: "Enter a valid email address.",
    errorSupport: "Choose whether the person needs financial support.",
    errorConsent: "You need to accept the consent before submitting.",
  },
};

const landingView = document.getElementById("landingView");
const formView = document.getElementById("formView");

const privacyOpenBtn = document.getElementById("privacyOpenBtn");
const privacyModal = document.getElementById("privacyModal");
const privacyCloseBtn = document.getElementById("privacyCloseBtn");
const privacyBackdrop = document.getElementById("privacyBackdrop");
const privacyOkBtn = document.getElementById("privacyOkBtn");

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
const developCredit = document.getElementById("developCredit");

const VALBY_ACTIVITY_ASSOCIATIONS = {
  Fodbold: ["Fremad Valby", "Valby Boldklub", "København Syd-Vest Boldklub (KSV)", "Valby United", "Vigerslev Boldklub", "BK Frem", "BK Hellas, Boldklubben Pioneren"],
  Gymnastik: ["Valby IF Gymnastik", "Fremad Valby"],
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
  Petanque: ["Fremad Valby Petanque"],
  "E-sport": ["Valby United"],
  "Spejder / FDF": ["FDF K23 Valby", "FDF K17 Valby"],
  "Teater / drama": ["Børnekulturstedet Valby", "Kultur og Fritid V"],

  "Musik / sang": ["Copenhagen Music", "Børnekulturstedet Valby"],
  Rollespil: ["Børnekulturstedet Valby"],
  Andet: [],
};

function getMatchedAssociations(selectedInterests) {
  return selectedInterests.map((activity) => ({
    activity,
    associations: VALBY_ACTIVITY_ASSOCIATIONS[activity] || [],
  }));
}

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

function updateSchoolOptions() {
  const schoolSelect = document.querySelector('select[name="childSchool"]');
  if (!schoolSelect) return;

  const emptyOption = schoolSelect.querySelector('option[value=""]');
  if (emptyOption) emptyOption.textContent = t("chooseSchool");

  schoolSelect.querySelectorAll("option").forEach((option) => {
    if (!option.value) return;

    const translatedSchool = translations[currentLanguage].schoolOptions?.[option.value];

    if (translatedSchool) {
      option.textContent = translatedSchool;
    }
  });
}

function resetSchoolSelectIfEmpty() {
  const schoolSelect = document.querySelector('select[name="childSchool"]');

  if (schoolSelect && !schoolSelect.value) {
    schoolSelect.value = "";
  }
}

function showFormView() {
  closePrivacyModal();

  landingView.classList.remove("active-view");
  formView.classList.add("active-view");

  document.body.classList.remove("modal-open");
  document.body.style.overflow = "";

  window.scrollTo(0, 0);
}

function showLandingView() {
  formView.classList.remove("active-view");
  landingView.classList.add("active-view");
  window.scrollTo(0, 0);
}

startBtn.addEventListener("click", showFormView);
backToLandingBtn.addEventListener("click", showLandingView);

function scrollToTopOfForm() {
  const scrollOptions = {
    top: 0,
    left: 0,
    behavior: "smooth",
  };

  window.scrollTo(scrollOptions);
  document.documentElement.scrollTo?.(scrollOptions);
  document.body.scrollTo?.(scrollOptions);
  formView?.scrollTo?.(scrollOptions);
}

function scrollFieldIntoView(field) {
  if (!field) return;

  setTimeout(() => {
    field.scrollIntoView({
      behavior: "smooth",
      block: "center",
    });
  }, 80);
}

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

  if (developCredit) {
    developCredit.classList.toggle("hidden", !isLastStep);
  }
}

function updateSupportModalLanguage() {
  setText("#openSupportModal", t("supportInfoLink"));
  setText("#supportModalTitle", t("supportModalTitle"));

  const supportParagraphs = document.querySelectorAll(".support-modal-card p");
  if (supportParagraphs[0]) supportParagraphs[0].textContent = t("supportModalTextOne");
  if (supportParagraphs[1]) supportParagraphs[1].textContent = t("supportModalTextTwo");
  if (supportParagraphs[2]) supportParagraphs[2].textContent = t("supportModalTextThree");

  setText(".support-modal-btn", t("supportModalOk"));
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
  setText("#supportInfoLink", t("supportInfoLink"));

  setText("[data-privacy-title]", t("privacyTitle"));
  setText("[data-privacy-intro]", t("privacyIntro"));
  setText("[data-privacy-point-one-title]", t("privacyPointOneTitle"));
  setText("[data-privacy-point-one-text]", t("privacyPointOneText"));
  setText("[data-privacy-point-two-title]", t("privacyPointTwoTitle"));
  setText("[data-privacy-point-two-text]", t("privacyPointTwoText"));
  setText("[data-privacy-point-three-title]", t("privacyPointThreeTitle"));
  setText("[data-privacy-point-three-text]", t("privacyPointThreeText"));
  setText("[data-privacy-ok]", t("privacyOk"));

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
    setLabelText(findLabelByField('select[name="childSchool"]'), t("childSchool"));
    setLabelText(findLabelByField('select[name="childAge"]'), t("childAge"));
    setLabelText(findLabelByField('input[name="otherLanguage"]'), t("otherLanguage"));

    setPlaceholder('input[name="childName"]', t("childNamePlaceholder"));
    setPlaceholder('input[name="childAddress"]', t("childAddressPlaceholder"));
    setPlaceholder('input[name="otherLanguage"]', t("otherLanguagePlaceholder"));

    updateSchoolOptions();
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

    setLabelText(findLabelByField('textarea[name="preferredAssociation"]'), t("preferredAssociation"));
    setPlaceholder('textarea[name="preferredAssociation"]', t("preferredAssociationPlaceholder"));

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

    setLabelText(findLabelByField('textarea[name="preferredTimeNote"]'), t("preferredTimeNote"));
    setPlaceholder('textarea[name="preferredTimeNote"]', t("preferredTimeNotePlaceholder"));
  }

  if (steps[4]) {
    steps[4].querySelector("h2").textContent = t("parentTitle");
    steps[4].querySelector("p").textContent = t("parentText");

    const contactRoleTitle = steps[4].querySelector(".field-title-2");
    if (contactRoleTitle) contactRoleTitle.textContent = t("contactRoleTitle");

    const roleChoices = steps[4].querySelectorAll(".choice-kort span");
    if (roleChoices[0]) roleChoices[0].textContent = t("roleParent");
    if (roleChoices[1]) roleChoices[1].textContent = t("roleTeacher");
    if (roleChoices[2]) roleChoices[2].textContent = t("rolePedagogue");
    if (roleChoices[3]) roleChoices[3].textContent = t("roleOther");

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

    updateSupportModalLanguage();
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
  setText("#developCredit", t("developCredit"));

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

function getFieldValue(selector) {
  const field = document.querySelector(selector);
  return field ? String(field.value || "").trim() : "";
}

function hasValue(selector) {
  return getFieldValue(selector).length > 0;
}

function hasChecked(name) {
  return document.querySelectorAll(`input[name="${name}"]:checked`).length > 0;
}

function isValidPhoneNumber(value) {
  return /^\d{8,15}$/.test(value);
}

function isValidEmail(value) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value);
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

  if (!hasValue('select[name="childSchool"]')) {
    addError(errors, 0, "errorChildSchool", 'select[name="childSchool"]');
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

  if (!hasChecked("contactRole")) {
    addError(errors, 4, "errorContactRole", 'input[name="contactRole"]');
  }

  if (!hasValue('input[name="parentName"]')) {
    addError(errors, 4, "errorParentName", 'input[name="parentName"]');
  }

  const phoneValue = getFieldValue('input[name="phone"]');
  const emailValue = getFieldValue('input[name="email"]');

  const hasPhone = phoneValue.length > 0;
  const hasEmail = emailValue.length > 0;

  if (!hasPhone && !hasEmail) {
    addError(errors, 4, "errorContact", 'input[name="phone"], input[name="email"]');
  }

  if (hasPhone && !isValidPhoneNumber(phoneValue)) {
    addError(errors, 4, "errorPhoneInvalid", 'input[name="phone"]');
  }

  if (hasEmail && !isValidEmail(emailValue)) {
    addError(errors, 4, "errorEmailInvalid", 'input[name="email"]');
  }

  if (!hasChecked("needsSupport")) {
    addError(errors, 4, "errorSupport", 'input[name="needsSupport"]');
  }

  if (!hasChecked("consent")) {
    addError(errors, 5, "errorConsent", 'input[name="consent"]');
  }

  return errors;
}

function normalizeSchoolName(value) {
  return String(value || "").trim();
}

function collectFormData() {
  const formData = new FormData(form);

  const selectedInterests = getCheckedValues("interests");
  const matchedAssociations = getMatchedAssociations(selectedInterests);

  return {
    child_name: formData.get("childName"),
    child_address: formData.get("childAddress"),
    child_school: normalizeSchoolName(formData.get("childSchool")),
    child_age: formData.get("childAge"),
    child_gender: formData.get("childGender"),
    child_languages: getCheckedValues("childLanguages"),
    other_language: formData.get("otherLanguage"),

    interests: selectedInterests,
    matched_associations: matchedAssociations,
    preferred_association: formData.get("preferredAssociation"),
    known_participant: formData.get("knownParticipant"),

    level: formData.get("level"),
    preferred_times: getCheckedValues("preferredTimes"),
    preferred_time_note: formData.get("preferredTimeNote"),

    parent_name: formData.get("parentName"),
    contact_role: formData.get("contactRole"),
    phone: getFieldValue('input[name="phone"]'),
    email: getFieldValue('input[name="email"]'),
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

function goToNextStep() {
  hideFormErrors();

  if (currentStep < totalSteps - 1) {
    currentStep++;
    updateStepView();

    requestAnimationFrame(() => {
      scrollToTopOfForm();
    });
  }
}

nextStepBtn.addEventListener("click", goToNextStep);

function getFocusableFieldsInCurrentStep() {
  const activeStep = formSteps[currentStep];
  if (!activeStep) return [];

  return Array.from(activeStep.querySelectorAll('input:not([type="hidden"]):not([disabled]), select:not([disabled]), textarea:not([disabled])')).filter((field) => {
    const style = window.getComputedStyle(field);
    return style.display !== "none" && style.visibility !== "hidden";
  });
}

function focusNextFieldInCurrentStep(currentField) {
  const fields = getFocusableFieldsInCurrentStep();
  const currentIndex = fields.indexOf(currentField);

  if (currentIndex === -1) return;

  const nextField = fields[currentIndex + 1];

  if (nextField) {
    nextField.focus();
    scrollFieldIntoView(nextField);
    return;
  }

  const actionButton = currentStep < totalSteps - 1 ? nextStepBtn : submitBtn;

  if (actionButton && !actionButton.classList.contains("hidden")) {
    actionButton.focus();
    scrollFieldIntoView(actionButton);
  }
}

let submitWasClicked = false;

submitBtn.addEventListener("pointerdown", () => {
  submitWasClicked = true;
});

submitBtn.addEventListener("mousedown", () => {
  submitWasClicked = true;
});

submitBtn.addEventListener("touchstart", () => {
  submitWasClicked = true;
});

submitBtn.addEventListener("click", () => {
  submitWasClicked = true;
});

form.addEventListener("keydown", (event) => {
  if (event.key !== "Enter") return;

  const activeElement = event.target;
  const tagName = activeElement.tagName.toLowerCase();

  if (tagName === "textarea") return;

  if (tagName === "select") return;

  if (tagName === "button") return;

  event.preventDefault();

  focusNextFieldInCurrentStep(activeElement);
});

prevStepBtn.addEventListener("click", () => {
  hideFormErrors();

  if (currentStep > 0) {
    currentStep--;
    updateStepView();

    requestAnimationFrame(() => {
      scrollToTopOfForm();
    });
  }
});

form.addEventListener("submit", async (event) => {
  event.preventDefault();

  const wasSubmittedByButton = event.submitter === submitBtn || submitWasClicked;

  if (!wasSubmittedByButton) {
    submitWasClicked = false;
    return;
  }

  submitWasClicked = false;

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

    const schoolSelect = document.querySelector('select[name="childSchool"]');
    if (schoolSelect) schoolSelect.value = "";

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

function setupPhoneInputValidation() {
  const phoneInput = document.querySelector('input[name="phone"]');

  if (!phoneInput) return;

  phoneInput.setAttribute("inputmode", "numeric");
  phoneInput.setAttribute("autocomplete", "tel");
  phoneInput.setAttribute("pattern", "[0-9]*");

  phoneInput.addEventListener("input", () => {
    phoneInput.value = phoneInput.value.replace(/\D/g, "");
  });

  phoneInput.addEventListener("paste", () => {
    setTimeout(() => {
      phoneInput.value = phoneInput.value.replace(/\D/g, "");
    }, 0);
  });
}

function setupEmailInputValidation() {
  const emailInput = document.querySelector('input[name="email"]');

  if (!emailInput) return;

  emailInput.setAttribute("type", "email");
  emailInput.setAttribute("autocomplete", "email");
  emailInput.setAttribute("inputmode", "email");
}

function openPrivacyModal() {
  privacyModal?.classList.remove("hidden");
  document.body.classList.add("modal-open");
}

function closePrivacyModal() {
  privacyModal?.classList.add("hidden");
  document.body.classList.remove("modal-open");
}

privacyOpenBtn?.addEventListener("click", openPrivacyModal);
privacyCloseBtn?.addEventListener("click", closePrivacyModal);
privacyBackdrop?.addEventListener("click", closePrivacyModal);
privacyOkBtn?.addEventListener("click", closePrivacyModal);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    closePrivacyModal();
  }
});

const initialViewportHeight = window.innerHeight;

function updateKeyboardState() {
  const currentHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;

  const keyboardIsProbablyOpen = currentHeight < initialViewportHeight * 0.75;

  document.body.classList.toggle("keyboard-open", keyboardIsProbablyOpen);
}

if (window.visualViewport) {
  window.visualViewport.addEventListener("resize", updateKeyboardState);
  window.visualViewport.addEventListener("scroll", updateKeyboardState);
} else {
  window.addEventListener("resize", updateKeyboardState);
}

document.querySelectorAll("input, textarea, select").forEach((field) => {
  field.addEventListener("focus", () => {
    document.body.classList.add("keyboard-open");

    setTimeout(() => {
      field.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 300);
  });

  field.addEventListener("blur", () => {
    setTimeout(updateKeyboardState, 250);
  });
});

const openSupportModalBtn = document.getElementById("openSupportModal");
const supportModal = document.getElementById("supportModal");
const closeSupportModalBtns = document.querySelectorAll("[data-close-support-modal]");

function openSupportModal() {
  if (!supportModal) return;

  supportModal.classList.add("is-open");
  supportModal.setAttribute("aria-hidden", "false");
  document.body.style.overflow = "hidden";
}

function closeSupportModal() {
  if (!supportModal) return;

  supportModal.classList.remove("is-open");
  supportModal.setAttribute("aria-hidden", "true");
  document.body.style.overflow = "";
}

if (openSupportModalBtn && supportModal) {
  openSupportModalBtn.addEventListener("click", openSupportModal);

  closeSupportModalBtns.forEach((btn) => {
    btn.addEventListener("click", closeSupportModal);
  });

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape" && supportModal.classList.contains("is-open")) {
      closeSupportModal();
    }
  });
}

resetSchoolSelectIfEmpty();
setupPhoneInputValidation();
setupEmailInputValidation();
updateLanguage();
