import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { LogoMark } from "@/components/LogoMark";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-border/40 py-8 px-6 lg:px-8">
      <div className="container-wide mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            className="flex items-center gap-3"
          >
            <LogoMark size={32} />
            <span className="text-lg font-bold">
              <span className="gradient-text">Dev</span>
              <span className="text-foreground">Stewards</span>
            </span>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="text-sm text-muted-foreground text-center"
          >
            Stewarding elite engineering talent for ambitious teams.
          </motion.p>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="flex flex-col md:flex-row items-center gap-4 md:gap-6 text-sm text-muted-foreground"
          >
            <span>© {currentYear} DevStewards</span>
            <div className="flex items-center gap-6">
              <Link to="/ai-for-ecommerce" className="hover:text-primary transition-colors">AI for E-commerce</Link>
              <Link to="/blog" className="hover:text-primary transition-colors">Blog</Link>
              <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
              <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            </div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}
