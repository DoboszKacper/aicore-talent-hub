import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    quote: "AICore Talent helped us stand up an LLM-powered analytics assistant in 3 months. The engineer felt like part of our in-house team.",
    author: "Sarah Chen",
    role: "CTO",
    company: "Finlytics",
    rating: 5,
  },
  {
    quote: "Their AI squad integrated seamlessly with our existing backend team. Communication and code quality exceeded expectations.",
    author: "Marcus Johnson",
    role: "Head of Product",
    company: "VisionFlow",
    rating: 5,
  },
  {
    quote: "We scaled from idea to production models without going through a 6-month hiring marathon. Truly a game-changer.",
    author: "Elena Rodriguez",
    role: "AI Lead",
    company: "DataCraft",
    rating: 5,
  },
];

export function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonials" className="relative section-padding" ref={ref}>
      <div className="container-wide mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Teams that built with{" "}
            <span className="gradient-text">AICore Talent</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Don't just take our word for it. Here's what our clients say.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.author}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <div className="glass-card rounded-2xl p-6 lg:p-8 h-full flex flex-col hover:border-primary/30 transition-colors">
                {/* Rating */}
                <div className="flex items-center gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>

                {/* Quote icon */}
                <Quote className="w-8 h-8 text-primary/30 mb-4" />

                {/* Quote text */}
                <p className="text-foreground flex-1 mb-6 leading-relaxed">
                  "{testimonial.quote}"
                </p>

                {/* Author info */}
                <div className="flex items-center gap-4 pt-4 border-t border-border/50">
                  <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center text-lg font-semibold text-foreground">
                    {testimonial.author.split(" ").map(n => n[0]).join("")}
                  </div>
                  <div>
                    <p className="font-semibold text-foreground">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
