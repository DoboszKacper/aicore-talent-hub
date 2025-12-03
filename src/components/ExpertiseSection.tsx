import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Brain, Database, Briefcase } from "lucide-react";

const expertiseCategories = [
  {
    icon: Code,
    title: "Core Skills",
    items: ["Python, TypeScript, Go, Java", "Machine Learning, Deep Learning", "LLMs, RAG, prompt engineering"],
  },
  {
    icon: Brain,
    title: "AI & Data Stack",
    items: ["PyTorch, TensorFlow, scikit-learn", "LangChain, vector databases", "MLOps: Docker, Kubernetes, CI/CD"],
  },
  {
    icon: Database,
    title: "Use Cases",
    items: ["Recommendation systems", "Predictive analytics", "Chatbots & copilots", "Computer vision", "NLP pipelines"],
  },
];

export function ExpertiseSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="expertise" className="relative section-padding" ref={ref}>
      <div className="container-wide mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our AI & engineering{" "}
              <span className="gradient-text">expertise</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              We specialize in senior engineers who can ship production-ready AI systems, 
              not just research prototypes.
            </p>
            
            <div className="glass-card rounded-xl p-4 inline-flex items-center gap-3">
              <Briefcase className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">
                Typical seniority: <span className="text-primary">mid–senior (3–10 years experience)</span>
              </span>
            </div>
          </motion.div>

          {/* Right Column */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-6"
          >
            {expertiseCategories.map((category, index) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.3 + index * 0.1 }}
                className="glass-card rounded-xl p-6 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                    <category.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                <ul className="space-y-2">
                  {category.items.map((item) => (
                    <li key={item} className="flex items-center gap-2 text-muted-foreground">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                      {item}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
