import { useDocumentHead } from '@/hooks/use-document-head';
import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import ExperienceSection from '@/components/ExperienceSection';
import ProjectsSection from '@/components/ProjectsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

const Index = () => {
  useDocumentHead({
    title: 'Musab bin Aslam | Software Engineer & MERN Stack Developer',
    description: 'Portfolio of Musab bin Aslam, a Software Engineer specializing in MERN Stack, React Native, and blockchain integration. Building responsive, user-focused applications with clean, maintainable code.',
  });

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
