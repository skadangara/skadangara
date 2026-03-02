import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import FeaturesSection from "@/components/FeaturesSection";
import WhoItsForSection from "@/components/WhoItsForSection";
import Footer from "@/components/Footer";
const Home = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <WhoItsForSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
