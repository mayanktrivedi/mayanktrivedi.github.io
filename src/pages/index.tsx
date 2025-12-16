import ResumeHeader from "@/components/ResumeHeader";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import EducationSection from "@/components/EducationSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";

const Index = () => {
  return (
    <div className="min-h-screen">
      <ResumeHeader />
      <main>
        <AboutSection />
        <ExperienceSection />
        <SkillsSection />
        <ProjectsSection />
        <EducationSection />
      </main>
      <footer id="contacts" className="bg-card py-8 px-6 border-t border-border">
        <div className="container mx-auto max-w-4xl text-center text-muted-foreground">
          <p>© 2024 Mayank Trivedi. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
