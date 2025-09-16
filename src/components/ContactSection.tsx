import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, MapPin, Phone, Github, Linkedin, Twitter } from "lucide-react";

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

const ContactSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    try {
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      toast({
        title: "Message Sent Successfully! 🎉",
        description: "Thank you for reaching out. I'll get back to you soon!",
      });

      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
    } catch (error) {
      toast({
        title: "Error sending message",
        description: "Please try again later or contact me directly.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "rajdeep.ray@example.com",
      href: "mailto:rajdeep.ray@example.com"
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 12345 67890",
      href: "tel:+911234567890"
    },
    {
      icon: MapPin,
      label: "Location",
      value: "India",
      href: "#"
    }
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      href: "https://github.com/rajdeepray",
      color: "hover:text-white"
    },
    {
      icon: Linkedin,
      label: "LinkedIn", 
      href: "https://linkedin.com/in/rajdeepray",
      color: "hover:text-blue-400"
    },
    {
      icon: Twitter,
      label: "Twitter",
      href: "https://twitter.com/rajdeepray",
      color: "hover:text-blue-400"
    },
    {
      icon: Mail,
      label: "Email",
      href: "mailto:rajdeep.ray@example.com",
      color: "hover:text-red-400"
    }
  ];

  return (
    <section 
      id="contact" 
      ref={sectionRef}
      className="py-20 bg-card relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/3 w-96 h-96 bg-gradient-glow rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/3 w-72 h-72 bg-gradient-glow rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-poppins font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            Let's <span className="portfolio-gradient-text">Connect</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto font-inter transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            Ready to collaborate on your next project or just want to say hello? I'd love to hear from you!
          </p>
          <div className={`w-24 h-1 bg-gradient-accent mx-auto mt-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'animate-scale-in' : 'opacity-0 scale-x-0'
          }`}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Contact Form */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-10'
          }`}>
            <Card className="portfolio-card border-border/30 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-3xl font-poppins portfolio-gradient-text">
                  Send me a message
                </CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-foreground mb-2">
                        Name *
                      </label>
                      <Input
                        id="name"
                        name="name"
                        type="text"
                        value={formData.name}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border/50 focus:border-primary transition-colors"
                        placeholder="Your full name"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-semibold text-foreground mb-2">
                        Email *
                      </label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleInputChange}
                        required
                        className="bg-background border-border/50 focus:border-primary transition-colors"
                        placeholder="your.email@example.com"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-semibold text-foreground mb-2">
                      Subject *
                    </label>
                    <Input
                      id="subject"
                      name="subject"
                      type="text"
                      value={formData.subject}
                      onChange={handleInputChange}
                      required
                      className="bg-background border-border/50 focus:border-primary transition-colors"
                      placeholder="What would you like to discuss?"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-foreground mb-2">
                      Message *
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleInputChange}
                      required
                      rows={6}
                      className="bg-background border-border/50 focus:border-primary transition-colors resize-none"
                      placeholder="Tell me about your project or just say hello!"
                    />
                  </div>
                  
                  <Button 
                    type="submit" 
                    disabled={isSubmitting}
                    className="w-full portfolio-glow bg-gradient-accent text-background px-8 py-4 text-lg font-semibold hover:scale-105 transition-all duration-300 disabled:opacity-70 disabled:hover:scale-100"
                  >
                    {isSubmitting ? (
                      <>
                        <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-background mr-2"></div>
                        Sending...
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5 mr-2" />
                        Send Message
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>

          {/* Contact Information */}
          <div className={`space-y-8 transition-all duration-1000 delay-900 ${
            isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-10'
          }`}>
            {/* Contact Details */}
            <Card className="portfolio-card border-border/30 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins portfolio-gradient-text">
                  Get in touch
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                {contactInfo.map((info, index) => (
                  <a
                    key={info.label}
                    href={info.href}
                    className="flex items-center p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-300 group hover:scale-105"
                  >
                    <div className="p-3 rounded-full bg-gradient-accent mr-4 group-hover:animate-glow-pulse">
                      <info.icon className="w-6 h-6 text-background" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground group-hover:text-primary transition-colors">
                        {info.label}
                      </p>
                      <p className="text-muted-foreground">{info.value}</p>
                    </div>
                  </a>
                ))}
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="portfolio-card border-border/30 bg-gradient-card">
              <CardHeader>
                <CardTitle className="text-2xl font-poppins portfolio-gradient-text">
                  Follow me
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {socialLinks.map((social, index) => (
                    <a
                      key={social.label}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center p-4 rounded-lg bg-background/50 hover:bg-background/80 transition-all duration-300 group hover:scale-105 ${social.color}`}
                    >
                      <social.icon className="w-6 h-6 mr-3 transition-colors" />
                      <span className="font-semibold">{social.label}</span>
                    </a>
                  ))}
                </div>
              </CardContent>
            </Card>

            {/* Fun Fact */}
            <Card className="portfolio-card border-border/30 bg-gradient-card">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h4 className="text-xl font-poppins font-semibold mb-3 portfolio-gradient-text">
                    Quick Response Promise
                  </h4>
                  <p className="text-muted-foreground font-inter">
                    I typically respond to messages within 24 hours. Looking forward to connecting with you!
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;