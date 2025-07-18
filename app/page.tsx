import HeroSection from './components/sections/HeroSection';
import ServicesSection from './components/sections/ServicesSection';
import ServiceDetailSection from './components/sections/ServiceDetailSection';
import WhyChooseUsSection from './components/sections/WhyChooseUsSection';
import PricingSection from './components/sections/PricingSection';
import PortfolioSection from './components/sections/PortfolioSection';
import ProcessSection from './components/sections/ProcessSection';
import TestimonialsSection from './components/sections/TestimonialsSection';
import LocalSEOSection from './components/sections/LocalSEOSection';
import FAQSection from './components/sections/FAQSection';
import InternalLinksSection from './components/sections/InternalLinksSection';
import ContactSection from './components/sections/ContactSection';

export default function Home() {
  return (
    <main>
      <HeroSection />
      <ServicesSection />
      <ServiceDetailSection />
      <WhyChooseUsSection />
      <PricingSection />
      <PortfolioSection />
      <ProcessSection />
      <TestimonialsSection />
      <LocalSEOSection />
      <FAQSection />
      <InternalLinksSection />
      <ContactSection />
    </main>
  );
}
