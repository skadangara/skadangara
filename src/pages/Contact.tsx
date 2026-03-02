import Navbar from "@/components/Navbar";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

const Contact = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
