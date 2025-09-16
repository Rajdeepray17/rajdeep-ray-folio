import { useEffect, useRef, useState } from "react";
import profileImage from "@/assets/profile-placeholder.jpg";

const AboutSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

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

  const highlights = [
    "Engineering Student",
    "Tech Enthusiast", 
    "Football Player",
    "Innovator"
  ];

  return (
    <section 
      id="about" 
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-glow rounded-full animate-float"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-poppins font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            About <span className="portfolio-gradient-text">Me</span>
          </h2>
          <div className={`w-24 h-1 bg-gradient-accent mx-auto transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-scale-in' : 'opacity-0 scale-x-0'
          }`}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Image Column */}
          <div className={`relative transition-all duration-1000 delay-500 ${
            isVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="relative group">
              <div className="absolute inset-0 bg-gradient-accent rounded-2xl rotate-6 group-hover:rotate-3 transition-transform duration-500"></div>
              <div className="relative overflow-hidden rounded-2xl portfolio-card">
                <img 
                  src={profileImage}
                  alt="Rajdeep Ray - Profile"
                  className="w-full h-[500px] object-cover group-hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent"></div>
              </div>
            </div>
          </div>

          {/* Content Column */}
          <div className={`space-y-8 transition-all duration-1000 delay-700 ${
            isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-10'
          }`}>
            {/* Main Bio */}
            <div>
              <h3 className="text-3xl font-poppins font-semibold mb-6">
                Building the Future, One Project at a Time
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6 font-inter">
                I'm Rajdeep Ray, a passionate engineering student with a deep love for technology and innovation. 
                My journey in the world of development has been driven by curiosity and the desire to create 
                meaningful solutions that make a real impact.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed font-inter">
                Whether I'm coding the next big application, strategizing on the football field, or exploring 
                emerging technologies, I bring the same dedication and creative thinking to everything I do. 
                I believe in the power of technology to transform ideas into reality.
              </p>
            </div>

            {/* Highlights */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map((highlight, index) => (
                <div 
                  key={highlight}
                  className={`portfolio-card p-4 text-center group hover:scale-105 transition-all duration-300 ${
                    isVisible ? 'animate-bounce-in' : 'opacity-0'
                  }`}
                  style={{animationDelay: `${1000 + index * 200}ms`}}
                >
                  <div className="w-12 h-12 bg-gradient-accent rounded-full mx-auto mb-3 flex items-center justify-center group-hover:animate-glow-pulse">
                    <div className="w-6 h-6 bg-background rounded-full"></div>
                  </div>
                  <p className="font-poppins font-semibold text-foreground group-hover:text-primary transition-colors">
                    {highlight}
                  </p>
                </div>
              ))}
            </div>

            {/* Quote */}
            <blockquote className="border-l-4 border-primary pl-6 italic text-lg text-muted-foreground font-inter">
              "Innovation distinguishes between a leader and a follower. I choose to lead through code, creativity, and continuous learning."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;