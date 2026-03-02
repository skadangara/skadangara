import { motion } from "framer-motion";

const audiences = [
  {
    title: "Procurement Teams",
    description: "Resolve supplier discrepancies across POs, contracts, and delivery schedules.",
  },
  {
    title: "Logistics Teams",
    description: "Handle shipment delays, routing exceptions, and carrier issues as they happen.",
  },
  {
    title: "Finance Teams",
    description: "Clear invoice mismatches, payment gaps, and three-way matching exceptions.",
  },
  {
    title: "Operations Leaders",
    description: "Gain cross-team visibility into exception backlogs and resolution progress.",
  },
];

const WhoItsForSection = () => {
  return (
    <section id="who-its-for" className="relative py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 text-center"
        >
          <h2 className="mb-4 font-display text-4xl font-bold md:text-5xl">
            Who It's <span className="text-gradient-primary">For</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Built for the teams that keep supply chains moving.
          </p>
        </motion.div>

        <div className="mx-auto max-w-3xl space-y-6">
          {audiences.map((audience, i) => (
            <motion.div
              key={audience.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.1 }}
              className="rounded-xl border border-border bg-gradient-card p-6"
            >
              <h3 className="mb-1 font-display text-lg font-semibold text-foreground">
                {audience.title}
              </h3>
              <p className="text-sm leading-relaxed text-muted-foreground">
                {audience.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhoItsForSection;
