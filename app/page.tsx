import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import WhyChooseUsSection from './components/sections/WhyChooseUsSection';
import PortfolioSection from './components/sections/PortfolioSection';
import ProcessSection from './components/sections/ProcessSection';
import PricingSection from './components/sections/PricingSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import ContactSection from './components/sections/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <PortfolioSection />
      <ProcessSection />
      <PricingSection />
      <TestimonialsSection />
      <ContactSection />
    </main>
  );
}
