import { Suspense, lazy } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";

const Spline = lazy(() => import("@splinetool/react-spline"));

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Spline 3D Background - Interactive */}
      <div className="absolute inset-0 z-10">
        <Suspense
          fallback={
            <div className="w-full h-full bg-background flex items-center justify-center">
              <div className="w-16 h-16 border-4 border-primary border-t-transparent rounded-full animate-spin" />
            </div>
          }
        >
          <Spline scene="https://prod.spline.design/slSx0MCwkQt6T1t4/scene.splinecode" />
        </Suspense>
      </div>

      {/* Gradient Overlay - pointer-events-none so Spline stays interactive */}
      <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background z-20 pointer-events-none" />

      {/* Content - positioned at bottom to not block Spline interaction */}
      <div className="absolute bottom-0 left-0 right-0 z-30 text-center px-6 pb-24 max-w-4xl mx-auto pointer-events-none">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <motion.p
            className="text-primary font-mono text-sm md:text-base mb-4 tracking-wider"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            &lt;hello world /&gt;
          </motion.p>

          <motion.p
            className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base md:text-lg"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.35, duration: 0.6 }}
          >
            Software Engineer · MERN Stack Developer · n8n Automation · React Native · Blockchain
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary transition-all duration-300"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Work
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>

            <div className="flex gap-4">
              {[
                {
                  href: "https://github.com",
                  icon: <Github className="w-5 h-5" />,
                  label: "GitHub",
                },
                {
                  href: "https://linkedin.com/in/musab-bin-aslam-a12915271",
                  icon: <Linkedin className="w-5 h-5" />,
                  label: "LinkedIn",
                },
                {
                  href: "mailto:musabbinaslam6@gmail.com",
                  icon: <Mail className="w-5 h-5" />,
                  label: "Email",
                },
              ].map(({ href, icon, label }, i) => (
                <motion.a
                  key={label}
                  href={href}
                  target={label !== "Email" ? "_blank" : undefined}
                  rel="noopener noreferrer"
                  className="p-3 rounded-full border border-border bg-background/80 backdrop-blur-sm hover:border-primary hover:text-primary transition-all duration-300"
                  initial={{ opacity: 0, scale: 0.7 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.6 + i * 0.1, type: "spring", stiffness: 200 }}
                  whileHover={{ scale: 1.15 }}
                  whileTap={{ scale: 0.95 }}
                >
                  {icon}
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
      >
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </motion.div>
    </section>
  );
};

export default HeroSection;
