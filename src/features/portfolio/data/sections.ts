export type SectionId =
  | "hero"
  | "about"
  | "skills"
  | "education"
  | "experience"
  | "projects"
  | "research"
  | "certifications"
  | "startups"
  | "engagements"
  | "contact";

export const sections: { id: SectionId; label: string }[] = [
  { id: "hero", label: "Intro" },
  { id: "about", label: "About" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "research", label: "Research" },
  { id: "certifications", label: "Certifications" },
  { id: "education", label: "Education" },
  { id: "startups", label: "Startups" },
  { id: "engagements", label: "Engagements" },
  { id: "contact", label: "Contact" },
];