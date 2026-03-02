import { motion } from "framer-motion";
import { Brain, Workflow, Shield, Zap, BarChart3, Globe } from "lucide-react";

const features = [
  {
    icon: Workflow,
    title: "Exception Orchestration",
    description:
      "Replace scattered emails and spreadsheets with structured workflows that centralise exception handling across teams.",
  },
  {
    icon: Brain,
    title: "Document Intelligence",
    description:
      "Extract, match, and validate data from POs, shipment documents, and invoices. Surface discrepancies before they escalate.",
  },
  {
    icon: Zap,
    title: "Policy-aware Routing",
    description:
      "Route each exception to the right team with the right context, based on your resolution policies and escalation rules.",
  },
  {
    icon: Shield,
    title: "Human-in-the-loop Governance",
    description:
      "Configurable approval gates and override controls keep people in charge of critical decisions.",
  },
  {
    icon: BarChart3,
    title: "Audit & Compliance Visibility",
    description:
      "A complete, tamper-evident record of every exception, action, and outcome — ready for audit at any time.",
  },
  {
    icon: Globe,
    title: "Cross-team Coordination",
    description:
      "Give procurement, logistics, and finance a shared view of exceptions so teams resolve together, not in silos.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16 text-center"
        >
          <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl">
            Core <span className="text-gradient-primary">Capabilities</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            The tools your team needs to resolve exceptions quickly and consistently.
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, i) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-xl border border-border bg-gradient-card p-8 transition-colors duration-200 hover:border-primary/30"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                <feature.icon size={24} />
              </div>
              <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                {feature.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
