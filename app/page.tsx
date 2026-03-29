import Navigation from '@/components/Navigation';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import TimelineSection from '@/components/TimelineSection';
import CommunitySection from '@/components/CommunitySection';
import OrganizersSection from '@/components/OrganizersSection';
import SponsorsSection from '@/components/SponsorsSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <TimelineSection />
      <CommunitySection />
      <OrganizersSection />
      <SponsorsSection />
      <FAQSection />
      <Footer />
    </main>
  );
}
