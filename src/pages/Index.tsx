import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import QuoteSection from "@/components/QuoteSection";
import AuthorSection from "@/components/AuthorSection";
import CTASection from "@/components/CTASection";
import CommunitySection from "@/components/CommunitySection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <AuthorSection />
      <CTASection />
       <CommunitySection />
      <Footer />
    </main>
  );
};

export default Index;
