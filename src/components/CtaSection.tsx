import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import PilotRequestForm from "@/components/PilotRequestForm";

const CtaSection = () => {
  const [pilotOpen, setPilotOpen] = useState(false);

  return (
    <section id="contact" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mx-auto max-w-3xl rounded-2xl border border-border bg-gradient-card p-12 text-center md:p-16"
        >
          <h2 className="mb-4 font-display text-3xl font-bold md:text-5xl">
            Let's <span className="text-gradient-primary">talk</span>
          </h2>
          <p className="mx-auto mb-8 max-w-xl text-lg text-muted-foreground">
            See how CogniKord can streamline exception resolution for your team.
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
        </motion.div>
      </div>

      <PilotRequestForm open={pilotOpen} onOpenChange={setPilotOpen} />
    </section>
  );
};

export default CtaSection;
