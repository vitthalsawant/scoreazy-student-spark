import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import Benefits from "@/components/Benefits";
import CallToAction from "@/components/CallToAction";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <Benefits />
      <CallToAction />
      <Testimonials />
      <FAQ />
      <Footer />
    </div>
  );
};

export default Index;
