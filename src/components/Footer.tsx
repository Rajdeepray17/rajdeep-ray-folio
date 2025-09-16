import { Github, Linkedin, Mail, Heart, ArrowUp } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const socialLinks = [
    {
      icon: Github,
      href: "https://github.com/rajdeepray",
      label: "GitHub"
    },
    {
      icon: Linkedin,
      href: "https://linkedin.com/in/rajdeepray",
      label: "LinkedIn"
    },
    {
      icon: Mail,
      href: "mailto:rajdeep.ray@example.com",
      label: "Email"
    }
  ];

  const footerLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Contact", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-gradient-card border-t border-border/50 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-gradient-glow rounded-full animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="py-12">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            {/* Brand Section */}
            <div className="text-center md:text-left">
              <h3 className="text-3xl font-poppins font-bold portfolio-gradient-text mb-4">
                RAJDEEP RAY
              </h3>
              <p className="text-muted-foreground font-inter leading-relaxed mb-6">
                Building the future through innovative technology solutions. 
                Let's create something amazing together.
              </p>
              <div className="flex justify-center md:justify-start space-x-4">
                {socialLinks.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 rounded-full bg-background/20 hover:bg-background/40 border border-border/30 hover:border-primary/50 transition-all duration-300 group hover:scale-110 hover:animate-bounce-in"
                    aria-label={social.label}
                  >
                    <social.icon className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className="text-center">
              <h4 className="text-lg font-poppins font-semibold mb-6 text-foreground">
                Quick Links
              </h4>
              <div className="space-y-3">
                {footerLinks.map((link) => (
                  <button
                    key={link.name}
                    onClick={() => scrollToSection(link.href)}
                    className="block w-full text-muted-foreground hover:text-primary transition-colors duration-200 font-medium relative group"
                  >
                    {link.name}
                    <span className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
                  </button>
                ))}
              </div>
            </div>

            {/* Contact Info */}
            <div className="text-center md:text-right">
              <h4 className="text-lg font-poppins font-semibold mb-6 text-foreground">
                Let's Connect
              </h4>
              <div className="space-y-3">
                <p className="text-muted-foreground font-inter">
                  Ready for your next project?
                </p>
                <Button 
                  onClick={() => scrollToSection("#contact")}
                  className="portfolio-glow bg-gradient-accent text-background font-semibold hover:scale-105 transition-all duration-300"
                >
                  Start a Conversation
                </Button>
              </div>
            </div>
          </div>

          {/* Divider */}
          <div className="border-t border-border/30 pt-8">
            <div className="flex flex-col md:flex-row items-center justify-between">
              {/* Copyright */}
              <div className="flex items-center text-muted-foreground font-inter mb-4 md:mb-0">
                <span>© {currentYear} Rajdeep Ray. Made with</span>
                <Heart className="w-4 h-4 text-red-500 mx-1 animate-pulse" />
                <span>and lots of ☕</span>
              </div>

              {/* Scroll to Top Button */}
              <Button
                onClick={scrollToTop}
                variant="ghost"
                size="sm"
                className="text-muted-foreground hover:text-primary transition-all duration-300 group"
              >
                Back to top
                <ArrowUp className="w-4 h-4 ml-2 group-hover:-translate-y-1 transition-transform duration-300" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top FAB */}
      <Button
        onClick={scrollToTop}
        className="fixed bottom-6 right-6 w-12 h-12 rounded-full portfolio-glow bg-gradient-accent text-background shadow-glow hover:scale-110 transition-all duration-300 z-50"
        size="icon"
      >
        <ArrowUp className="w-5 h-5" />
      </Button>
    </footer>
  );
};

export default Footer;