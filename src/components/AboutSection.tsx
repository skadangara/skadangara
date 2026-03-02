import { motion } from "framer-motion";
import { Users, Target, Zap } from "lucide-react";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Card, CardContent } from "@/components/ui/card";

const teamMembers = [
  {
    name: "Sajana Kadangara",
    role: "Founder & CEO",
    initials: "SK",
    summary:
      "13+ years in IT with deep expertise in multi-agent AI orchestration, having driven 40–60% efficiency gains across supply chain and enterprise AI at companies like Carbmee and Verizon.",
  },
  {
    name: "Bineesh Panangat",
    role: "Co-Founder & CTO",
    initials: "BP",
    summary:
      "13+ years in IT and 8+ in AI/ML, specialising in production multi-agent systems and LLM-powered platforms — scaled a startup product through a successful Fortune 500 acquisition.",
  },
  {
    name: "Vibhuti Dhimar",
    role: "Founding Product & Research Associate",
    initials: "VD",
    summary:
      "UK-based market research specialist leading customer discovery and competitive intelligence, with a proven pipeline of enterprise pilot prospects across the Midlands and London.",
  },
];

const AboutSection = () => {
  return (
    <section id="about" className="relative py-32">
      <div className="container mx-auto px-6">
        <div className="mx-auto max-w-5xl">
          {/* Why CogniKord */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="grid gap-12 md:grid-cols-2 md:items-center"
          >
            {/* Visual element */}
            <div className="relative">
              <div className="rounded-2xl border border-border bg-gradient-card p-8">
                <div className="flex flex-col items-center gap-6 text-center">
                  <div className="flex gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <Target className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <Zap className="h-7 w-7 text-primary" />
                    </div>
                    <div className="flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10">
                      <Users className="h-7 w-7 text-primary" />
                    </div>
                  </div>
                  <div>
                    <p className="text-lg font-semibold text-foreground font-display">
                      Resolve. Automate. Scale.
                    </p>
                    <p className="mt-1 text-sm text-muted-foreground">
                      Turning supply-chain exceptions into structured, auditable workflows.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Text content */}
            <div>
              <h2 className="mb-6 font-display text-3xl font-bold md:text-4xl">
                Why <span className="text-gradient-primary">CogniKord</span>?
              </h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Supply chains generate thousands of exceptions daily — mismatched invoices,
                  delayed shipments, contract discrepancies. Most teams manage them through
                  email threads and spreadsheets.
                </p>
                <p>
                  CogniKord brings structure to that chaos. We connect procurement, logistics,
                  and finance into a single resolution workflow so nothing falls through the cracks.
                </p>
                <p>
                  Our goal is simple: help teams resolve exceptions faster, with full
                  visibility and accountability at every step.
                </p>
              </div>
            </div>
          </motion.div>

          {/* Who We Are — Team */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-28"
          >
            <h2 className="mb-4 text-center font-display text-3xl font-bold md:text-4xl">
              Who <span className="text-gradient-primary">We Are</span>
            </h2>
            <p className="mx-auto mb-12 max-w-2xl text-center text-muted-foreground">
              A team of seasoned AI engineers and market strategists on a mission to
              modernise supply-chain exception management.
            </p>

            <div className="grid gap-6 md:grid-cols-3">
              {teamMembers.map((member, i) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.1 * i }}
                >
                  <Card className="h-full border-border bg-gradient-card">
                    <CardContent className="flex flex-col items-center p-6 text-center">
                      <Avatar className="mb-4 h-16 w-16 text-lg">
                        <AvatarFallback className="bg-primary/15 font-display font-semibold text-primary">
                          {member.initials}
                        </AvatarFallback>
                      </Avatar>
                      <h3 className="font-display text-lg font-semibold text-foreground">
                        {member.name}
                      </h3>
                      <p className="mb-3 text-sm font-medium text-primary">{member.role}</p>
                      <p className="text-sm leading-relaxed text-muted-foreground">
                        {member.summary}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
