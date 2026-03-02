import { useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import bannerBg from "@/assets/banner_1.png";
import PilotRequestForm from "@/components/PilotRequestForm";

const HeroSection = () => {
  const [pilotOpen, setPilotOpen] = useState(false);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Subtle banner-inspired background */}
      <div className="absolute inset-0">
        <img src={bannerBg} alt="" className="h-full w-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-background/70 to-background" />
      </div>

      <div className="container relative z-10 mx-auto px-6 pt-24 text-center">
        <div className="mx-auto max-w-4xl">
          <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm text-primary">
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Now in Early Access
          </div>

          <h1 className="mb-6 font-display text-5xl font-bold leading-tight tracking-tight md:text-7xl">
            Orchestrate{" "}
            <span className="text-gradient-primary">Supply Chain Exceptions</span>
            {" "}with Confidence
          </h1>

          <p className="mx-auto mb-10 max-w-2xl text-lg text-muted-foreground md:text-xl">
            Unify exception handling across procurement, logistics, and finance —
            resolve faster, with full visibility.
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Button
              variant="hero"
              size="lg"
              className="gap-2 text-base"
              onClick={() => setPilotOpen(true)}
            >
              Request a Pilot <ArrowRight size={18} />
            </Button>
            <Button variant="hero-outline" size="lg" className="text-base" asChild>
              <a href="mailto:vdhimar@cognikord.com">Contact Us</a>
            </Button>
          </div>
        </div>

        {/* Benefits */}
        <div className="mx-auto mt-20 grid max-w-3xl grid-cols-3 gap-8">
          {[
            { label: "Reduced Resolution Time" },
            { label: "Improved Visibility" },
            { label: "Structured Coordination" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="mt-1 text-sm font-medium text-muted-foreground">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <PilotRequestForm open={pilotOpen} onOpenChange={setPilotOpen} />
    </section>
  );
};

export default HeroSection;
