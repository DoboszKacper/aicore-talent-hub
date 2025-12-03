import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Clock, Users, Cpu } from "lucide-react";

export function HeroSection() {
  const handleScroll = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
      {/* Background Effects */}
      <div className="hero-glow top-1/4 -left-48 animate-glow-pulse" />
      <div className="hero-glow bottom-1/4 -right-48 animate-glow-pulse" style={{ animationDelay: "1.5s" }} />
      
      {/* Grid Pattern */}
      <div 
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                           linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
          backgroundSize: "60px 60px"
        }}
      />

      <div className="container-wide mx-auto section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/50 border border-border/50 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
              <span className="text-sm text-muted-foreground">Now accepting new clients</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6"
            >
              Elite AI Engineers,{" "}
              <span className="gradient-text">Whenever You Need Them.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-lg md:text-xl text-muted-foreground mb-8 max-w-xl mx-auto lg:mx-0"
            >
              We provide pre-vetted AI programmers on a flexible body leasing model 
              so you can scale fast, without long hiring cycles.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <Button variant="hero" onClick={() => handleScroll("#contact")}>
                Talk to an Expert
              </Button>
              <Button variant="heroOutline" onClick={() => handleScroll("#expertise")}>
                View Talent Profiles
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="flex flex-wrap gap-6 justify-center lg:justify-start text-sm text-muted-foreground"
            >
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                Trusted by fast-growing tech companies
              </span>
              <span className="flex items-center gap-2">
                <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                100% remote-ready talent
              </span>
            </motion.div>
          </motion.div>

          {/* Right Content - Stats Card */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="relative"
          >
            <div className="glass-card rounded-2xl p-6 lg:p-8 animate-float">
              {/* Header */}
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-border/50">
                <span className="text-sm font-medium text-muted-foreground">Talent Dashboard</span>
                <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
                  Live
                </span>
              </div>

              {/* Stats */}
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Clock className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">&lt; 7 days</p>
                    <p className="text-sm text-muted-foreground">Time to first candidate</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">5+ years</p>
                    <p className="text-sm text-muted-foreground">Avg. experience</p>
                  </div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Cpu className="w-6 h-6 text-primary" />
                  </div>
                  <div>
                    <p className="text-lg font-bold text-foreground">ML · LLMs · MLOps · Data Engineering</p>
                    <p className="text-sm text-muted-foreground">Tech focus areas</p>
                  </div>
                </div>
              </div>

              {/* Bottom */}
              <div className="mt-6 pt-4 border-t border-border/50">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Available engineers</span>
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="w-8 h-8 rounded-full bg-secondary border-2 border-card flex items-center justify-center text-xs font-medium"
                      >
                        {i === 4 ? "+" : ""}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -top-4 -right-4 w-24 h-24 border border-primary/20 rounded-2xl -z-10" />
            <div className="absolute -bottom-4 -left-4 w-32 h-32 border border-primary/10 rounded-2xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
