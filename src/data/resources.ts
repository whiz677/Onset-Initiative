export type ResourceType =
  | "Article"
  | "PDF"
  | "Flyer"
  | "Worksheet"
  | "Video"
  | "Slide Deck"
  | "External Link"
  | "Report";

export type Resource = {
  id: string;
  title: string;
  category: string;
  type: ResourceType;
  description: string;
  url: string;
  dateAdded: string;
  reviewedBy?: string;
  featured?: boolean;
  tags?: string[];
};

export const resourceCategories = [
  "All",
  "Early-Onset Cancer Basics",
  "Colorectal Cancer",
  "Breast Cancer",
  "The Unknowns",
  "Family History",
  "Myth vs Evidence",
  "Seminar Materials",
  "Flyers & Toolkits",
  "Reports"
];

// Upload new files into /public/resources, /public/flyers, /public/slides,
// /public/reports, /public/worksheets, or /public/recordings, then add an
// entry here with a URL such as /worksheets/family-history-worksheet.pdf.
export const resources: Resource[] = [
  {
    id: "what-is-early-onset-cancer",
    title: "What Is Early-Onset Cancer?",
    category: "Early-Onset Cancer Basics",
    type: "Article",
    description:
      "A plain-language explainer on what early-onset cancer means and why researchers are paying attention to younger diagnoses.",
    url: "#",
    dateAdded: "2026-07-01",
    reviewedBy: "Pending review",
    featured: true,
    tags: ["basics", "early-onset", "cancer trends"]
  },
  {
    id: "why-young-adults-diagnosed-more-often",
    title: "Why Are Young Adults Being Diagnosed More Often?",
    category: "Early-Onset Cancer Basics",
    type: "Article",
    description:
      "A balanced overview of the trend and why researchers are studying multiple possible contributors.",
    url: "#",
    dateAdded: "2026-07-01",
    reviewedBy: "Pending review",
    featured: false,
    tags: ["trends", "research", "unknowns"]
  },
  {
    id: "unknown-cause-explainer",
    title: "What Does Unknown Cause Actually Mean?",
    category: "The Unknowns",
    type: "Article",
    description:
      "An explainer on why scientists suspect multiple interacting contributors rather than one simple cause.",
    url: "#",
    dateAdded: "2026-07-01",
    reviewedBy: "Pending review",
    featured: false,
    tags: ["unknowns", "microbiome", "environment", "lifestyle"]
  },
  {
    id: "colorectal-symptoms",
    title: "Colorectal Cancer Symptoms Young People Should Not Ignore",
    category: "Colorectal Cancer",
    type: "PDF",
    description:
      "A youth-friendly symptom awareness guide covering persistent bowel changes, rectal bleeding, unexplained anemia, abdominal pain, and when to seek medical attention.",
    url: "/resources/colorectal-symptoms.pdf",
    dateAdded: "2026-07-01",
    reviewedBy: "Pending review",
    featured: true,
    tags: ["colorectal", "symptoms", "awareness"]
  },
  {
    id: "breast-changes-guide",
    title: "Breast Changes Young People Should Know",
    category: "Breast Cancer",
    type: "PDF",
    description:
      "An educational guide on breast changes, family history, and when persistent changes should be discussed with a medical professional.",
    url: "/resources/breast-changes-guide.pdf",
    dateAdded: "2026-07-01",
    reviewedBy: "Pending review",
    featured: true,
    tags: ["breast cancer", "symptoms", "family history"]
  },
  {
    id: "family-history-worksheet",
    title: "Family Cancer History Worksheet",
    category: "Family History",
    type: "Worksheet",
    description:
      "A printable worksheet to help students and families start conversations about cancer history and screening awareness.",
    url: "/worksheets/family-history-worksheet.pdf",
    dateAdded: "2026-07-01",
    reviewedBy: "Pending review",
    featured: true,
    tags: ["family history", "worksheet", "prevention"]
  },
  {
    id: "microbiome-hypothesis",
    title: "The Microbiome Hypothesis Explained",
    category: "The Unknowns",
    type: "Article",
    description:
      "A careful summary of how gut bacteria, inflammation, antibiotics, diet, and cancer risk are being studied.",
    url: "#",
    dateAdded: "2026-07-01",
    reviewedBy: "Pending review",
    featured: false,
    tags: ["microbiome", "inflammation", "diet"]
  },
  {
    id: "ultra-processed-foods-fiber",
    title: "Ultra-Processed Foods, Fiber, and Cancer Risk",
    category: "The Unknowns",
    type: "Article",
    description:
      "A youth-accessible look at what evidence says about diet patterns, fiber, processed foods, and cancer prevention.",
    url: "#",
    dateAdded: "2026-07-01",
    reviewedBy: "Pending review",
    featured: false,
    tags: ["diet", "fiber", "processed foods"]
  },
  {
    id: "alcohol-and-cancer",
    title: "Alcohol and Cancer: What the Evidence Says",
    category: "Early-Onset Cancer Basics",
    type: "Article",
    description:
      "A concise explainer on alcohol as a known cancer risk factor and how to interpret prevention guidance.",
    url: "#",
    dateAdded: "2026-07-01",
    reviewedBy: "Pending review",
    featured: false,
    tags: ["alcohol", "risk", "prevention"]
  },
  {
    id: "endocrine-disruptors-breast-cancer",
    title: "Endocrine Disruptors and Breast Cancer: What Is Known and Unknown",
    category: "Breast Cancer",
    type: "Article",
    description:
      "A careful overview of hormone-related environmental questions without overstating emerging evidence.",
    url: "#",
    dateAdded: "2026-07-01",
    reviewedBy: "Pending review",
    featured: false,
    tags: ["breast cancer", "environment", "hormones"]
  },
  {
    id: "diagnostic-delay",
    title: "Diagnostic Delay: Why Young Patients Are Sometimes Dismissed",
    category: "Colorectal Cancer",
    type: "Article",
    description:
      "A plain-language resource on delayed diagnosis, communication, and why persistent symptoms deserve attention.",
    url: "#",
    dateAdded: "2026-07-01",
    reviewedBy: "Pending review",
    featured: false,
    tags: ["diagnostic delay", "symptoms", "advocacy"]
  },
  {
    id: "myth-vs-evidence-one-cause",
    title: "Myth vs Evidence: Did One Cause Explain the Rise?",
    category: "Myth vs Evidence",
    type: "Article",
    description:
      "A myth-checking guide for evaluating viral claims, correlation, causation, and one-cause explanations.",
    url: "#",
    dateAdded: "2026-07-01",
    reviewedBy: "Pending review",
    featured: false,
    tags: ["myths", "evidence", "misinformation"]
  },
  {
    id: "seminar-1-flyer",
    title: "Seminar 1 Flyer",
    category: "Flyers & Toolkits",
    type: "Flyer",
    description: "A placeholder flyer entry for the first seminar campaign.",
    url: "/flyers/seminar-1-flyer.pdf",
    dateAdded: "2026-07-01",
    reviewedBy: "Pending design",
    featured: false,
    tags: ["flyer", "seminar"]
  },
  {
    id: "youth-awareness-report-template",
    title: "Student Awareness Report Template",
    category: "Reports",
    type: "Report",
    description:
      "A template for summarizing anonymous awareness survey results and seminar impact.",
    url: "/reports/student-awareness-report-template.pdf",
    dateAdded: "2026-07-01",
    reviewedBy: "Pending review",
    featured: false,
    tags: ["report", "impact", "survey"]
  }
];
