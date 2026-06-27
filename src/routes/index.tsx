import { createFileRoute } from "@tanstack/react-router";
import { HeroSection } from "@/features/portfolio/sections/hero-section";
import { AboutSection } from "@/features/portfolio/sections/about-section";
import { SkillsSection } from "@/features/portfolio/sections/skills-section";
import { ExperienceSection } from "@/features/portfolio/sections/experience-section";
import { ProjectsSection } from "@/features/portfolio/sections/projects-section";
import { ResearchSection } from "@/features/portfolio/sections/research-section";
import { CertificationsSection } from "@/features/portfolio/sections/certifications-section";
import { EducationSection } from "@/features/portfolio/sections/education-section";
import { StartupsSection } from "@/features/portfolio/sections/startups-section";
import { EngagementsSection } from "@/features/portfolio/sections/engagements-section";
import { ContactSection } from "@/features/portfolio/sections/contact-section";
import { Nav } from "@/components/layout/nav";
import { Cursor } from "@/components/layout/cursor";
import { Loader } from "@/components/layout/loader";
import { useLenis } from "@/hooks/use-lenis";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Om Yadav — Data Scientist · Full-Stack · AI/ML" },
      {
        name: "description",
        content:
          "Portfolio of Om Yadav — published researcher, full-stack engineer, AI/ML practitioner, and founder.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  useLenis();
  return (
    <div className="relative min-h-screen bg-background text-bone font-sans antialiased">
      <Loader />
      <Cursor />
      <Nav />
      <main className="relative">
        <HeroSection />
        <AboutSection />
        <SkillsSection />
        <ExperienceSection />
        <ProjectsSection />
        <ResearchSection />
        <CertificationsSection />
        <EducationSection />
        <StartupsSection />
        <EngagementsSection />
        <ContactSection />
      </main>
    </div>
  );
}
