import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { User, Users, Crown } from "lucide-react";

const models = [
  {
    icon: User,
    title: "Single AI Engineer",
    description: "Ideal for augmenting an existing team. Part-time or full-time.",
    availability: "From 20 hours/week",
    benefits: [
      "Deep integration with your team",
      "Flexible commitment levels",
      "Direct communication channels",
    ],
  },
  {
    icon: Users,
    title: "Dedicated AI Squad",
    description: "A cross-functional pod of 2–5 engineers focused on one product area.",
    availability: "Full-time commitment",
    benefits: [
      "Complete ownership of deliverables",
      "Built-in redundancy",
      "Accelerated development velocity",
    ],
    featured: true,
  },
  {
    icon: Crown,
    title: "Fractional AI Lead",
    description: "Senior AI architect to define strategy, mentor your team, and review solutions.",
    availability: "From 10 hours/week",
    benefits: [
      "Strategic AI roadmap planning",
      "Code review & best practices",
      "Team mentorship & growth",
    ],
  },
];

export function EngagementModelsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="engagement" className="relative section-padding bg-secondary/20" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div className="container-wide mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Flexible <span className="gradient-text">engagement models</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the model that fits your needs, budget, and timeline.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {models.map((model, index) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className={`relative ${model.featured ? "md:-mt-4 md:mb-4" : ""}`}
            >
              {model.featured && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  Most Popular
                </div>
              )}
              
              <div className={`glass-card rounded-2xl p-6 lg:p-8 h-full transition-all duration-300 hover:translate-y-[-4px] ${
                model.featured ? "border-primary/40 glow-effect" : "hover:border-primary/30"
              }`}>
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                  <model.icon className="w-7 h-7 text-primary" />
                </div>

                <h3 className="text-xl font-semibold mb-2 text-foreground">
                  {model.title}
                </h3>
                <p className="text-muted-foreground mb-4">
                  {model.description}
                </p>

                <div className="inline-block px-3 py-1 rounded-full bg-secondary text-sm text-muted-foreground mb-6">
                  {model.availability}
                </div>

                <ul className="space-y-3">
                  {model.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-2 text-sm text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary mt-2 shrink-0" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
