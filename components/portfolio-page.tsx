import { Footer } from "@/components/footer";
import { Navbar } from "@/components/navbar";
import { AboutSection } from "@/components/sections/about";
import { ContactSection } from "@/components/sections/contact";
import { ExperienceTimeline } from "@/components/sections/timeline";
import { Hero } from "@/components/sections/hero";
import { ProjectsSection } from "@/components/sections/projects";
import { ServicesSection } from "@/components/sections/services";
import { SkillsSection } from "@/components/sections/skills";
import { StatsSection } from "@/components/sections/stats";
import { TestimonialsSection } from "@/components/sections/testimonials";
import { ParticleBackground } from "@/components/ui/particle-background";

export function PortfolioPage() {
  return (
    <>
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <StatsSection />
        <AboutSection />
        <SkillsSection />
        <ServicesSection />
        <ProjectsSection />
        <ExperienceTimeline />
        <TestimonialsSection />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
