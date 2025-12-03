import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { MessageSquare, FileSearch, UserCheck, Rocket } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    number: "01",
    title: "Tell us your needs",
    description: "Short form or call where you describe your project, stack, and skill requirements.",
  },
  {
    icon: FileSearch,
    number: "02",
    title: "Receive curated profiles",
    description: "We send you a shortlist of AI programmers matching your tech stack and seniority.",
  },
  {
    icon: UserCheck,
    number: "03",
    title: "Interview & select",
    description: "You interview and pick the best fit. We support with technical interviews if needed.",
  },
  {
    icon: Rocket,
    number: "04",
    title: "Onboard & scale",
    description: "The engineer joins your team, and you can add or reduce capacity at any time.",
  },
];

export function HowItWorksSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="how-it-works" className="relative section-padding bg-secondary/20" ref={ref}>
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div className="container-wide mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            How our <span className="gradient-text">body leasing</span> works
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            A streamlined process designed to get you working with the right talent, fast.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line - desktop */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-primary/30 to-transparent -translate-y-1/2" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.15 }}
                className="relative"
              >
                <div className="glass-card rounded-2xl p-6 h-full relative z-10">
                  {/* Number badge */}
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">
                    {step.number}
                  </div>

                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <step.icon className="w-7 h-7 text-primary" />
                  </div>

                  <h3 className="text-xl font-semibold mb-3 text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
