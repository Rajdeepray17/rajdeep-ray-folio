import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowDown, Github, Linkedin, Mail } from "lucide-react";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  const [typedText, setTypedText] = useState("");
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  
  const texts = [
    "an aspiring Engineer",
    "a Developer", 
    "an Innovator",
    "a Problem Solver"
  ];

  useEffect(() => {
    const currentText = texts[currentTextIndex];
    let timeoutId: NodeJS.Timeout;

    if (typedText.length < currentText.length) {
      timeoutId = setTimeout(() => {
        setTypedText(currentText.slice(0, typedText.length + 1));
      }, 100);
    } else {
      timeoutId = setTimeout(() => {
        setTypedText("");
        setCurrentTextIndex((prev) => (prev + 1) % texts.length);
      }, 2000);
    }

    return () => clearTimeout(timeoutId);
  }, [typedText, currentTextIndex, texts]);

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section 
      id="hero" 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(32, 37, 56, 0.8), rgba(32, 37, 56, 0.9)), url(${heroBg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed'
      }}
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-gradient-glow rounded-full opacity-20 animate-float"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 bg-gradient-glow rounded-full opacity-15 animate-float" style={{animationDelay: '1s'}}></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-glow rounded-full opacity-10 animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center animate-fade-in">
          {/* Main Heading */}
          <h1 className="text-6xl md:text-8xl font-poppins font-bold mb-6 leading-tight">
            Hi, I'm{" "}
            <span className="portfolio-gradient-text animate-glow-pulse">
              Rajdeep Ray
            </span>
          </h1>

          {/* Animated Subheading */}
          <div className="text-2xl md:text-4xl font-poppins font-medium mb-4 h-16 flex items-center justify-center">
            <span className="text-foreground/80">I'm </span>
            <span className="portfolio-gradient-text ml-2 typing-cursor min-w-[300px] text-left">
              {typedText}
            </span>
          </div>

          {/* Description */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto font-inter leading-relaxed animate-fade-in" style={{animationDelay: '0.5s'}}>
            Building projects that blend creativity, technology, and impact.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16 animate-fade-in" style={{animationDelay: '1s'}}>
            <Button 
              onClick={() => scrollToSection("#projects")}
              className="portfolio-glow bg-gradient-accent text-background px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              size="lg"
            >
              Explore My Work
            </Button>
            <Button 
              onClick={() => scrollToSection("#contact")}
              variant="outline" 
              className="border-primary text-primary hover:bg-primary hover:text-background px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300"
              size="lg"
            >
              Get In Touch
            </Button>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center gap-6 mb-16 animate-bounce-in" style={{animationDelay: '1.5s'}}>
            <a href="#" className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group">
              <Github className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="#" className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group">
              <Linkedin className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
            <a href="#" className="p-3 rounded-full border border-border hover:border-primary hover:bg-primary/10 transition-all duration-300 group">
              <Mail className="w-6 h-6 text-foreground group-hover:text-primary transition-colors" />
            </a>
          </div>

          {/* Scroll Indicator */}
          <div className="animate-bounce cursor-pointer" onClick={() => scrollToSection("#about")}>
            <ArrowDown className="w-8 h-8 text-primary mx-auto" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;