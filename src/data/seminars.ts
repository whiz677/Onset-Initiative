export type SeminarStatus =
  | "planning"
  | "registration_open"
  | "registration_closed"
  | "live"
  | "completed";

export type Seminar = {
  id: string;
  title: string;
  category: string;
  date: string;
  time: string;
  timezone: string;
  status: SeminarStatus;
  speakerName?: string;
  speakerTitle?: string;
  speakerAffiliation?: string;
  speakerBio?: string;
  description: string;
  agenda?: string[];
  registrationUrl?: string;
  zoomUrl?: string;
  flyerUrl?: string;
  recordingUrl?: string;
  slidesUrl?: string;
  summaryUrl?: string;
  preSurveyUrl?: string;
  postSurveyUrl?: string;
  attendanceCount?: number;
  schoolsReached?: number;
  keyTakeaways?: string[];
};

export const seminars: Seminar[] = [
  {
    id: "why-early-onset-cancers-are-rising",
    title: "Onset Initiative: Why Are Early-Onset Cancers Rising?",
    category: "Big Picture",
    date: "TBD",
    time: "TBD",
    timezone: "ET",
    status: "planning",
    speakerName: "Speaker TBD",
    speakerTitle: "Cancer epidemiologist / public health researcher",
    speakerAffiliation: "",
    description:
      "A kickoff seminar introducing the rise of early-onset colorectal and breast cancers, what researchers currently know, what remains unknown, and why youth awareness matters.",
    agenda: [
      "What early-onset cancer means",
      "Current trends in colorectal and breast cancer",
      "Why researchers are investigating birth-cohort and environmental changes",
      "What young people and families should not ignore"
    ],
    registrationUrl: "https://docs.google.com/forms/d/13wH_LjL30FupsKGo_I8aiqcNDnzdWz_FvwfNNq2M8-A/edit",
    zoomUrl: "",
    flyerUrl: "",
    recordingUrl: "",
    slidesUrl: "",
    summaryUrl: "",
    preSurveyUrl: "",
    postSurveyUrl: ""
  },
  {
    id: "colon-cancer-under-50",
    title: "Colon Cancer Under 50: Symptoms, Stigma, and Diagnostic Delay",
    category: "Colorectal Cancer",
    date: "TBD",
    time: "TBD",
    timezone: "ET",
    status: "planning",
    speakerName: "Speaker TBD",
    speakerTitle: "Gastroenterologist / GI oncologist / young-onset CRC advocate",
    speakerAffiliation: "",
    description:
      "A focused session on colorectal cancer warning signs, why symptoms may be dismissed in young people, and how family history affects screening conversations.",
    agenda: [
      "Symptoms young people should not ignore",
      "Why diagnostic delay happens",
      "Screening age and family history",
      "How to talk to a medical professional about persistent symptoms"
    ],
    registrationUrl: "",
    zoomUrl: "",
    flyerUrl: "",
    recordingUrl: "",
    slidesUrl: "",
    summaryUrl: "",
    preSurveyUrl: "",
    postSurveyUrl: ""
  },
  {
    id: "breast-cancer-young-women",
    title: "Breast Cancer in Young Women: Risk, Genetics, Hormones, and Environment",
    category: "Breast Cancer",
    date: "TBD",
    time: "TBD",
    timezone: "ET",
    status: "planning",
    speakerName: "Speaker TBD",
    speakerTitle: "Breast oncologist / breast surgeon / genetic counselor",
    speakerAffiliation: "",
    description:
      "A seminar on breast cancer awareness for young people, including family history, genetic risk, breast changes, hormonal factors, and environmental questions.",
    agenda: [
      "Breast changes young people should know",
      "Family history and genetic risk",
      "Hormonal and reproductive factors",
      "Environmental questions and what remains unknown"
    ],
    registrationUrl: "",
    zoomUrl: "",
    flyerUrl: "",
    recordingUrl: "",
    slidesUrl: "",
    summaryUrl: "",
    preSurveyUrl: "",
    postSurveyUrl: ""
  },
  {
    id: "microbiome-diet-modern-risk",
    title: "The Microbiome Mystery: Diet, Inflammation, and Early-Onset Cancer Risk",
    category: "Unknown Causes",
    date: "TBD",
    time: "TBD",
    timezone: "ET",
    status: "planning",
    speakerName: "Speaker TBD",
    speakerTitle: "Microbiome researcher / nutrition epidemiologist",
    speakerAffiliation: "",
    description:
      "A science-focused session on emerging hypotheses involving gut bacteria, diet, inflammation, ultra-processed foods, antibiotics, and metabolic health.",
    agenda: [
      "What the microbiome is",
      "How diet and inflammation may interact with cancer risk",
      "What evidence is strong vs still emerging",
      "What young people can understand without overclaiming"
    ],
    registrationUrl: "",
    zoomUrl: "",
    flyerUrl: "",
    recordingUrl: "",
    slidesUrl: "",
    summaryUrl: "",
    preSurveyUrl: "",
    postSurveyUrl: ""
  },
  {
    id: "cancer-myth-check",
    title: "Cancer Myth Check: How to Separate Evidence from Fear",
    category: "Misinformation",
    date: "TBD",
    time: "TBD",
    timezone: "ET",
    status: "planning",
    speakerName: "Speaker TBD",
    speakerTitle: "Public health researcher / physician / science communicator",
    speakerAffiliation: "",
    description:
      "A seminar about reading cancer claims online, understanding correlation versus causation, and avoiding unsupported one-cause explanations.",
    agenda: [
      "How misinformation spreads",
      "Correlation versus causation",
      "Why one-cause explanations are usually weak",
      "How to find credible cancer information"
    ],
    registrationUrl: "",
    zoomUrl: "",
    flyerUrl: "",
    recordingUrl: "",
    slidesUrl: "",
    summaryUrl: "",
    preSurveyUrl: "",
    postSurveyUrl: ""
  },
  {
    id: "patient-survivor-voices",
    title: "Onset Stories: What Young Cancer Patients Wish They Knew Earlier",
    category: "Patient Voices",
    date: "TBD",
    time: "TBD",
    timezone: "ET",
    status: "planning",
    speakerName: "Speaker TBD",
    speakerTitle: "Young-onset cancer survivor / patient advocate",
    speakerAffiliation: "",
    description:
      "A patient-centered session highlighting symptom recognition, diagnostic delay, family history, and what young people should know earlier.",
    agenda: [
      "First symptoms and early warning signs",
      "Diagnostic delay and being dismissed",
      "Family history conversations",
      "What students and families can do"
    ],
    registrationUrl: "",
    zoomUrl: "",
    flyerUrl: "",
    recordingUrl: "",
    slidesUrl: "",
    summaryUrl: "",
    preSurveyUrl: "",
    postSurveyUrl: ""
  }
];

export function getPrimarySeminar() {
  return (
    seminars.find((seminar) => seminar.status === "registration_open") ??
    seminars.find((seminar) => seminar.status !== "completed") ??
    seminars[0]
  );
}
