import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { LogoMark } from "@/components/LogoMark";
import { Footer } from "@/components/Footer";
import {
  ShoppingCart, Target, Headphones, Heart, Settings, BarChart3,
  Sparkles, Brain, Bot, TrendingUp,
  Search, ListChecks, Rocket, Plug,
  ShieldCheck, Wrench, Users, Anchor,
  ArrowRight, CheckCircle2, ChevronRight
} from "lucide-react";

/* ─── Animated Section Wrapper ─── */
function Section({ children, className = "", id }: { children: React.ReactNode; className?: string; id?: string }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  return (
    <motion.section
      ref={ref}
      id={id}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6 }}
      className={`relative section-padding ${className}`}
    >
      {children}
    </motion.section>
  );
}

/* ─── Data ─── */
const problems = [
  { icon: ShoppingCart, title: "Low Conversion Rates", desc: "AI-powered personalization & product recommendations that adapt to every visitor in real time." },
  { icon: Target, title: "High Cart Abandonment", desc: "Predictive remarketing & behavioral triggers that recover lost revenue automatically." },
  { icon: Headphones, title: "Customer Support Overload", desc: "AI agents trained on your store data — handling queries 24/7 with human-level accuracy." },
  { icon: Heart, title: "Poor Retention & LTV", desc: "Predictive churn models & lifecycle automation that keep customers coming back." },
  { icon: Settings, title: "Manual Operations", desc: "AI automation for catalog management, inventory decisions & logistics optimization." },
  { icon: BarChart3, title: "Inefficient Ad Spend", desc: "AI-driven audience segmentation & creative optimization that maximizes ROAS." },
];

const builds = [
  { icon: Sparkles, title: "AI Personalization Engine", items: ["Dynamic product recommendations", "Real-time behavior-based offers", "Smart bundling & cross-sell"] },
  { icon: Brain, title: "AI Customer Intelligence Layer", items: ["Predict churn probability", "Automatic customer segmentation", "LTV forecasting models"] },
  { icon: Bot, title: "AI Support & Sales Agents", items: ["Trained on your product data", "Multilingual AI chat agents", "Sales-focused conversations"] },
  { icon: TrendingUp, title: "AI Operations Automation", items: ["Demand forecasting", "Inventory prediction", "Pricing optimization models"] },
];

const outcomes = [
  { value: "+12–28%", label: "Conversion lift" },
  { value: "+18%", label: "Increase in AOV" },
  { value: "-35%", label: "Support cost reduction" },
  { value: "+22%", label: "Retention improvement" },
];

const processSteps = [
  { icon: Search, num: "01", title: "AI Opportunity Audit", desc: "We analyze your store, data, and workflows to identify the highest-impact AI opportunities." },
  { icon: ListChecks, num: "02", title: "Use Case Prioritization", desc: "Rank opportunities by ROI potential, feasibility, and speed to value." },
  { icon: Rocket, num: "03", title: "Rapid Prototyping", desc: "Working prototypes in 2–4 weeks — validated with real data before full build." },
  { icon: Plug, num: "04", title: "Production Integration", desc: "Deploy into your live stack with monitoring, iteration, and ongoing support." },
];

const integrations = [
  { name: "Shopify", logo: "https://cdn.worldvectorlogo.com/logos/shopify.svg" },
  { name: "Stripe", logo: "https://cdn.worldvectorlogo.com/logos/stripe-4.svg" },
  { name: "Klaviyo", logo: "https://cdn.worldvectorlogo.com/logos/klaviyo-1.svg" },
  { name: "Meta Ads", logo: "https://cdn.worldvectorlogo.com/logos/meta-1.svg" },
  { name: "Google Ads", logo: "https://cdn.worldvectorlogo.com/logos/google-ads-2.svg" },
  { name: "Custom APIs", logo: null },
];

const whyUs = [
  { icon: ShieldCheck, title: "No AI Hype", desc: "We build what works, not what sounds impressive in a pitch deck." },
  { icon: Wrench, title: "Production-Grade Systems", desc: "Every system is built for scale, reliability, and real business conditions." },
  { icon: Users, title: "Engineers + Business Thinking", desc: "Our team combines deep ML expertise with e-commerce domain knowledge." },
  { icon: Anchor, title: "Long-Term Stewardship", desc: "We don't disappear after launch. Ongoing optimization and technical guidance." },
];

/* ─── Page ─── */
export default function AiEcommerce() {
  const scrollTo = (id: string) => document.querySelector(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/40"
      >
        <div className="container-wide mx-auto px-6 lg:px-8 flex items-center justify-between h-16 lg:h-20">
          <Link to="/" className="flex items-center gap-3">
            <LogoMark size={36} />
            <span className="text-xl lg:text-2xl font-bold">
              <span className="gradient-text">Dev</span>
              <span className="text-foreground">Stewards</span>
            </span>
          </Link>
          <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
            <button onClick={() => scrollTo("#problems")} className="hover:text-foreground transition-colors">Use Cases</button>
            <button onClick={() => scrollTo("#solutions")} className="hover:text-foreground transition-colors">Solutions</button>
            <button onClick={() => scrollTo("#process")} className="hover:text-foreground transition-colors">Process</button>
            <button onClick={() => scrollTo("#cta-final")} className="hover:text-foreground transition-colors">Contact</button>
          </div>
          <Button variant="nav" onClick={() => scrollTo("#cta-final")}>Book a Call</Button>
        </div>
      </motion.nav>

      <main>
        {/* ════════ HERO ════════ */}
        <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
          <div className="hero-glow top-1/4 -left-48 animate-glow-pulse" />
          <div className="hero-glow bottom-1/4 -right-48 animate-glow-pulse" style={{ animationDelay: "2s" }} />
          <div
            className="absolute inset-0 opacity-[0.015]"
            style={{
              backgroundImage: `linear-gradient(hsl(var(--foreground)) 1px, transparent 1px),
                               linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)`,
              backgroundSize: "80px 80px",
            }}
          />

          <div className="container-wide mx-auto section-padding relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-secondary/60 border border-border/40 mb-6">
                <span className="w-2 h-2 rounded-full bg-accent-lime animate-pulse" />
                <span className="text-sm text-muted-foreground">AI integration for e-commerce</span>
              </motion.div>

              <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.3 }} className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight mb-6">
                AI That Drives <span className="gradient-text">Revenue,</span> Not Just Automation.
              </motion.h1>

              <motion.p initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.4 }} className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
                We integrate production-ready AI systems into e-commerce businesses — increasing conversion, retention, and operational efficiency.
              </motion.p>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.5 }} className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
                <Button variant="hero" onClick={() => scrollTo("#cta-final")}>Book an AI Strategy Call</Button>
                <Button variant="heroOutline" onClick={() => scrollTo("#problems")}>See E-commerce Use Cases</Button>
              </motion.div>

              <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.6 }} className="flex flex-wrap gap-6 justify-center text-sm text-muted-foreground">
                {["Revenue-focused AI systems", "Built for Shopify & modern stacks", "Production-ready, not experimental"].map((t) => (
                  <span key={t} className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-primary" />
                    {t}
                  </span>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* ════════ PROBLEMS ════════ */}
        <Section id="problems" className="bg-secondary/20">
          <div className="container-wide mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
              Where AI Creates <span className="gradient-text">Immediate Impact</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              These are the e-commerce bottlenecks where AI delivers the fastest, most measurable returns.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {problems.map((p, i) => (
                <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="glass-card rounded-2xl p-6">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <p.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{p.title}</h3>
                  <p className="text-muted-foreground text-sm">{p.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ════════ WHAT WE BUILD ════════ */}
        <Section id="solutions">
          <div className="container-wide mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
              Production-Ready <span className="gradient-text">AI Systems</span> for E-commerce
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Not proofs-of-concept — fully deployed systems that integrate with your existing stack.
            </p>
            <div className="grid md:grid-cols-2 gap-8">
              {builds.map((b, i) => (
                <motion.div key={b.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-8">
                  <div className="flex items-center gap-4 mb-5">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                      <b.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-xl font-semibold text-foreground">{b.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {b.items.map((item) => (
                      <li key={item} className="flex items-start gap-3 text-muted-foreground text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent-lime mt-0.5 shrink-0" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ════════ OUTCOMES ════════ */}
        <Section className="bg-secondary/20">
          <div className="container-wide mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
              Built for <span className="gradient-text">ROI</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              Typical performance ranges observed across e-commerce AI implementations.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {outcomes.map((o, i) => (
                <motion.div key={o.label} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-8 text-center">
                  <p className="text-4xl md:text-5xl font-bold gradient-text mb-2">{o.value}</p>
                  <p className="text-muted-foreground">{o.label}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ════════ PROCESS ════════ */}
        <Section id="process">
          <div className="container-wide mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
              From Strategy to <span className="gradient-text">Deployment</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              A structured, ROI-driven process designed for speed and measurable results.
            </p>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              {processSteps.map((s, i) => (
                <motion.div key={s.num} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.12 }} className="glass-card rounded-2xl p-6 relative">
                  <div className="absolute -top-3 -right-3 w-10 h-10 rounded-full bg-primary flex items-center justify-center text-primary-foreground font-bold text-sm">{s.num}</div>
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5">
                    <s.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-foreground">{s.title}</h3>
                  <p className="text-muted-foreground text-sm">{s.desc}</p>
                </motion.div>
              ))}
            </div>
            <div className="flex flex-wrap justify-center items-center gap-4">
              {integrations.map((item) => (
                <div key={item.name} className="flex items-center gap-2 px-5 py-3 rounded-full bg-secondary/60 border border-border/40">
                  {item.logo && (
                    <img src={item.logo} alt={item.name} className="w-5 h-5 object-contain brightness-0 invert opacity-70" />
                  )}
                  <span className="text-sm text-muted-foreground">{item.name}</span>
                </div>
              ))}
            </div>
          </div>
        </Section>

        {/* ════════ WHY DEVSTEWARDS ════════ */}
        <Section className="bg-secondary/20">
          <div className="container-wide mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
              Why <span className="gradient-text">DevStewards</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-16">
              What sets us apart from agencies, freelancers, and AI consultancies.
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {whyUs.map((w, i) => (
                <motion.div key={w.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="glass-card rounded-2xl p-6 text-center">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <w.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold mb-2 text-foreground">{w.title}</h3>
                  <p className="text-muted-foreground text-sm">{w.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </Section>

        {/* ════════ CASE STUDY PLACEHOLDER ════════ */}
        <Section>
          <div className="container-wide mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-center">
              AI Integration for a <span className="gradient-text">DTC Brand</span>
            </h2>
            <p className="text-lg text-muted-foreground text-center max-w-2xl mx-auto mb-12">Example case study</p>
            <div className="glass-card rounded-2xl p-8 md:p-12 max-w-4xl mx-auto">
              <div className="grid md:grid-cols-2 gap-8">
                {[
                  { label: "Problem", text: "A fast-growing DTC brand struggled with declining conversion rates and rising customer acquisition costs despite increasing ad spend." },
                  { label: "AI Solution", text: "We deployed an AI personalization engine with dynamic product recommendations and a predictive churn model integrated into their email flows." },
                  { label: "Implementation", text: "Full integration with Shopify and Klaviyo in 6 weeks — from audit to production deployment with live monitoring." },
                  { label: "Results", text: "+24% conversion rate, +19% AOV, and a 31% reduction in churn within the first 90 days of deployment." },
                ].map((c) => (
                  <div key={c.label}>
                    <h4 className="text-sm font-semibold uppercase tracking-wider text-primary mb-2">{c.label}</h4>
                    <p className="text-muted-foreground text-sm">{c.text}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Section>

        {/* ════════ FINAL CTA ════════ */}
        <Section id="cta-final" className="bg-secondary/20">
          <div className="container-wide mx-auto text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Turn Your Store Into an <span className="gradient-text">AI-Optimized Growth Engine.</span>
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
              Free AI opportunity assessment for qualified e-commerce brands.
            </p>
            <Button variant="hero" onClick={() => window.open("mailto:hello@devstewards.com?subject=AI%20Strategy%20Session", "_blank")}>
              Schedule AI Strategy Session
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>
        </Section>
      </main>

      <Footer />
    </div>
  );
}
