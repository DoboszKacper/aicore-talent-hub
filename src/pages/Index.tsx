import { Navbar } from "@/components/Navbar";
import { HeroSection } from "@/components/HeroSection";
import { WhyUsSection } from "@/components/WhyUsSection";
import { HowItWorksSection } from "@/components/HowItWorksSection";
import { ExpertiseSection } from "@/components/ExpertiseSection";
import { EngagementModelsSection } from "@/components/EngagementModelsSection";
import { TestimonialsSection } from "@/components/TestimonialsSection";
import { FAQSection } from "@/components/FAQSection";
import { ContactSection } from "@/components/ContactSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <WhyUsSection />
        <HowItWorksSection />
        <ExpertiseSection />
        <EngagementModelsSection />
        <TestimonialsSection />
        <FAQSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
