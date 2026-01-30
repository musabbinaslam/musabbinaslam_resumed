import { Suspense, lazy } from "react";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <div className="animate-fade-in">
          <p className="text-primary font-mono text-sm md:text-base mb-4 tracking-wider">&lt;hello world /&gt;</p>

          <p className="text-muted-foreground max-w-2xl mx-auto mb-10 text-base md:text-lg">
            Software Engineer | MERN Stack Developer | React Native | Blockchain Integration
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pointer-events-auto">
            <Button
              size="lg"
              className="bg-primary text-primary-foreground hover:bg-primary/90 glow-primary transition-all duration-300"
              onClick={() => document.getElementById("projects")?.scrollIntoView({ behavior: "smooth" })}
            >
              View Work
              <ArrowDown className="ml-2 w-4 h-4" />
            </Button>

            <div className="flex gap-4">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border bg-background/80 backdrop-blur-sm hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/in/musab-bin-aslam-a12915271"
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full border border-border bg-background/80 backdrop-blur-sm hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:musabbinaslam6@gmail.com"
                className="p-3 rounded-full border border-border bg-background/80 backdrop-blur-sm hover:border-primary hover:text-primary transition-all duration-300"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default HeroSection;
