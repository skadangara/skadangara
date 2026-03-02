import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { motion } from "framer-motion";
import { Workflow, Brain, BarChart3, FileText, ScanSearch, AlertTriangle, Scale, GitBranch, UserCheck, ClipboardList } from "lucide-react";
import productOverview from "@/assets/product-overview.png";
const products = [
  {
    icon: Brain,
    title: "Exception Resolution Engine",
    description:
      "Detect, classify, and resolve supply chain exceptions across procurement, logistics, and finance — automatically.",
  },
  {
    icon: Workflow,
    title: "Workflow Orchestrator",
    description:
      "Coordinate multi-step resolution processes across teams and systems with a visual, no-code interface.",
  },
  {
    icon: BarChart3,
    title: "Analytics & Insights Dashboard",
    description:
      "Track exception patterns, resolution times, and bottlenecks in real time to drive continuous improvement.",
  },
];

const pipelineSteps = [
  { icon: FileText, step: "1", title: "Ingestion", desc: "Documents enter the system — POs, invoices, shipments." },
  { icon: ScanSearch, step: "2", title: "Extraction", desc: "AI extracts key fields with high confidence." },
  { icon: AlertTriangle, step: "3", title: "Exception Detection", desc: "Mismatches are identified across documents." },
  { icon: Scale, step: "4", title: "Policy Evaluation", desc: "Thresholds and business rules are applied." },
  { icon: GitBranch, step: "5", title: "Resolution Routing", desc: "Auto-resolve or escalate based on severity." },
  { icon: UserCheck, step: "6", title: "Human Approval", desc: "Stakeholders review and approve flagged items." },
  { icon: ClipboardList, step: "7", title: "Audit & Trace", desc: "Every decision is logged for compliance." },
];

const Products = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <main className="pt-16">
        <section className="py-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mb-16 text-center"
            >
              <h1 className="mb-4 font-display text-4xl font-bold md:text-5xl">
                Our <span className="text-gradient-primary">Products</span>
              </h1>
              <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
                Purpose-built solutions for supply chain exception resolution.
              </p>
            </motion.div>

            <div className="mx-auto grid max-w-5xl gap-8 md:grid-cols-3">
              {products.map((product, i) => (
                <motion.div
                  key={product.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="rounded-xl border border-border bg-gradient-card p-8 transition-colors duration-200 hover:border-primary/30"
                >
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <product.icon size={24} />
                  </div>
                  <h3 className="mb-2 font-display text-xl font-semibold text-foreground">
                    {product.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-muted-foreground">
                    {product.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Overview */}
        <section className="pb-24">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mx-auto max-w-5xl"
            >
              <h2 className="mb-4 text-center font-display text-3xl font-bold md:text-4xl">
                Product <span className="text-gradient-primary">Overview</span>
              </h2>
              <p className="mx-auto mb-10 max-w-2xl text-center text-muted-foreground">
                A single orchestration dashboard to manage documents, exceptions, and resolutions end to end.
              </p>
              <div className="overflow-hidden rounded-xl border border-border shadow-lg">
                <img
                  src={productOverview}
                  alt="CogniKord orchestration dashboard showing documents, pipeline status, and recent activity"
                  className="w-full"
                  loading="lazy"
                />
              </div>
            </motion.div>
          </div>
        </section>

        {/* How It Works */}
        <section className="pb-32">
          <div className="container mx-auto px-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-12 text-center"
            >
              <h2 className="mb-4 font-display text-3xl font-bold md:text-4xl">
                How It <span className="text-gradient-primary">Works</span>
              </h2>
              <p className="mx-auto max-w-2xl text-muted-foreground">
                Every document flows through a 7-step orchestration pipeline — from ingestion to audit.
              </p>
            </motion.div>

            <div className="mx-auto max-w-3xl">
              {pipelineSteps.map((step, i) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="relative flex gap-5 pb-8 last:pb-0"
                >
                  {/* Vertical connector line */}
                  {i < pipelineSteps.length - 1 && (
                    <div className="absolute left-5 top-12 h-full w-px bg-border" />
                  )}
                  {/* Icon */}
                  <div className="relative z-10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-primary/10 text-primary">
                    <step.icon size={20} />
                  </div>
                  {/* Content */}
                  <div className="pt-1">
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      Step {step.step}
                    </p>
                    <h3 className="font-display text-lg font-semibold text-foreground">
                      {step.title}
                    </h3>
                    <p className="text-sm text-muted-foreground">{step.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Products;
