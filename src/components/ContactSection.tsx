import { motion, useInView } from "framer-motion";
import { useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Mail, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const roles = [
  "CTO",
  "Head of Engineering",
  "Product Lead",
  "Founder",
  "Other",
];

export function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const { toast } = useToast();
  
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    role: "",
    message: "",
    consent: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.consent) {
      toast({
        title: "Please accept the consent",
        description: "You must agree to be contacted about your inquiry.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message sent!",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({
      name: "",
      company: "",
      email: "",
      role: "",
      message: "",
      consent: false,
    });
  };

  return (
    <section id="contact" className="relative section-padding" ref={ref}>
      {/* Background glow */}
      <div className="hero-glow top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 animate-glow-pulse opacity-30" />
      
      <div className="container-wide mx-auto relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Left Column */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Let's talk about your{" "}
              <span className="gradient-text">AI team</span>
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Tell us what you're building and we'll get back within 24 hours 
              with next steps and candidate options.
            </p>

            <div className="space-y-4">
              <a 
                href="mailto:hello@aicoretalent.com"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                hello@aicoretalent.com
              </a>
              <a 
                href="#"
                className="flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
                Follow us on LinkedIn
              </a>
            </div>
          </motion.div>

          {/* Right Column - Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <form onSubmit={handleSubmit} className="glass-card rounded-2xl p-6 lg:p-8 space-y-5">
              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Full Name *
                  </label>
                  <Input
                    required
                    placeholder="John Doe"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Company *
                  </label>
                  <Input
                    required
                    placeholder="Acme Inc."
                    value={formData.company}
                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Work Email *
                  </label>
                  <Input
                    required
                    type="email"
                    placeholder="john@acme.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-secondary/50 border-border/50 focus:border-primary"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Role *
                  </label>
                  <Select
                    value={formData.role}
                    onValueChange={(value) => setFormData({ ...formData, role: value })}
                  >
                    <SelectTrigger className="bg-secondary/50 border-border/50 focus:border-primary">
                      <SelectValue placeholder="Select your role" />
                    </SelectTrigger>
                    <SelectContent>
                      {roles.map((role) => (
                        <SelectItem key={role} value={role}>
                          {role}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  What do you need? *
                </label>
                <Textarea
                  required
                  placeholder="Tell us about your project, tech stack, and the kind of AI talent you're looking for..."
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  className="bg-secondary/50 border-border/50 focus:border-primary resize-none"
                />
              </div>

              <div className="flex items-start gap-3">
                <Checkbox
                  id="consent"
                  checked={formData.consent}
                  onCheckedChange={(checked) => 
                    setFormData({ ...formData, consent: checked as boolean })
                  }
                  className="mt-1"
                />
                <label htmlFor="consent" className="text-sm text-muted-foreground">
                  I agree to be contacted about my inquiry.
                </label>
              </div>

              <Button type="submit" variant="hero" className="w-full">
                <Send className="w-4 h-4" />
                Book a Free Consultation
              </Button>
            </form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
