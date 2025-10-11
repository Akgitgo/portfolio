import ParticleBackground from "@/components/ParticleBackground";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ProjectsSection from "@/components/ProjectsSection";
import AboutSection from "@/components/AboutSection";
import ExperienceSection from "@/components/ExperienceSection";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* Particle Background */}
      <ParticleBackground />

      {/* Header */}
      <Header />

      {/* Sections with improved spacing */}
      <div className="relative z-10">
        <HeroSection />
        
        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
        
        <ProjectsSection />
        
        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
        
        <AboutSection />
        
        {/* Divider */}
        <div className="max-w-7xl mx-auto px-6">
          <div className="h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent"></div>
        </div>
        
        <ExperienceSection />
        
        <Footer />
      </div>
    </main>
  );
}
