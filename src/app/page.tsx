
// No 'use client' needed here anymore if animations are self-contained in sections

import Header from '@/components/sections/Header';
import HeroSection from '@/components/sections/HeroSection';
import AboutSection from '@/components/sections/AboutSection';
// import EducationSection from '@/components/sections/EducationSection'; // Removed
// import ProjectsSection from '@/components/sections/ProjectsSection'; // Removed
// import SkillsSection from '@/components/sections/SkillsSection'; // Removed
// import AchievementsSection from '@/components/sections/AchievementsSection'; // Removed
import InteractivePortfolioSection from '@/components/sections/InteractivePortfolioSection'; // Added
import ContactSection from '@/components/sections/ContactSection';
import Footer from '@/components/sections/Footer';

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow">
        {/* Wrap sections or add Motion components within sections as needed */}
        <HeroSection />
        <AboutSection />
        {/* Replace individual sections with the interactive one */}
        <InteractivePortfolioSection />
        {/* <EducationSection /> */}
        {/* <ProjectsSection /> */}
        {/* <SkillsSection /> */}
        {/* <AchievementsSection /> */}
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}

