import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Shield, Zap, RefreshCw, Users } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "Pre-Vetted AI Specialists",
    description: "Every engineer passes a strict screening process in ML, Python, data structures, and system design.",
  },
  {
    icon: Zap,
    title: "Ultra-Fast Staffing",
    description: "Get your first shortlist of candidates in days, not months.",
  },
  {
    icon: RefreshCw,
    title: "Flexible Engagement",
    description: "Scale your AI team up or down monthly with no long-term lock-ins.",
  },
  {
    icon: Users,
    title: "Embedded in Your Team",
    description: "Our engineers join your processes and tools as if they were in-house.",
  },
];

export function WhyUsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="why-us" className="relative section-padding" ref={ref}>
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Why teams choose{" "}
            <span className="gradient-text">DevStewards</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Premium stewarding of exceptional AI talent — fast, trusted, seamless.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="group"
            >
              <div className="glass-card rounded-2xl p-6 h-full transition-all duration-300 hover:border-primary/30 hover:translate-y-[-4px]">
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
