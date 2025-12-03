import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const faqs = [
  {
    question: "What is body leasing and how does it work in practice?",
    answer: "Body leasing is a staffing model where you hire skilled professionals on a contract basis through our company. The engineers work embedded in your team, attend your standups, and use your tools—but remain employed by us, simplifying your admin and HR overhead.",
  },
  {
    question: "How quickly can I start working with an AI engineer?",
    answer: "Typically, you'll receive your first shortlist of candidates within 5-7 business days. Once you select a candidate, onboarding can happen within 1-2 weeks, depending on project readiness and notice periods.",
  },
  {
    question: "Which time zones do your programmers work in?",
    answer: "Our talent pool spans globally, but we primarily focus on engineers with significant overlap with European and US business hours. We always discuss timezone compatibility during the matching process.",
  },
  {
    question: "How do you vet your AI engineers?",
    answer: "Every engineer goes through a multi-stage vetting process including coding assessments, ML/AI-specific technical interviews, system design discussions, and soft skills evaluation. Only the top ~5% of applicants make it through.",
  },
  {
    question: "Can I hire the engineer permanently later?",
    answer: "Yes! We offer a hire-out option after a minimum engagement period. If the fit is right and both parties agree, you can bring the engineer on as a full-time employee with a pre-agreed conversion fee.",
  },
];

export function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="relative section-padding bg-secondary/20" ref={ref}>
      <div className="absolute inset-0 bg-gradient-to-b from-background via-transparent to-background pointer-events-none" />
      
      <div className="container-wide mx-auto relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Frequently asked <span className="gradient-text">questions</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Everything you need to know about working with us.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl mx-auto"
        >
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="glass-card rounded-xl px-6 border-none data-[state=open]:border-primary/30"
              >
                <AccordionTrigger className="text-left text-foreground hover:text-primary hover:no-underline py-5 text-lg font-medium">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
