import HeroSection from "@/components/HeroSection";
import AboutSection from "@/components/AboutSection";
import QuoteSection from "@/components/QuoteSection";
import AuthorSection from "@/components/AuthorSection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <QuoteSection />
      <AuthorSection />
      <CTASection />
      <Footer />
    </main>
  );
};

export default Index;
