import { useEffect, useRef, useState } from "react";
import { Progress } from "@/components/ui/progress";

interface Skill {
  name: string;
  level: number;
  category: 'soft' | 'hard';
}

const SkillsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedLevels, setAnimatedLevels] = useState<{ [key: string]: number }>({});
  const sectionRef = useRef<HTMLElement>(null);

  const skills: Skill[] = [
    // Soft Skills
    { name: "Communication", level: 90, category: 'soft' },
    { name: "Leadership", level: 85, category: 'soft' },
    { name: "Teamwork", level: 95, category: 'soft' },
    { name: "Creativity", level: 88, category: 'soft' },
    { name: "Problem Solving", level: 92, category: 'soft' },
    { name: "Adaptability", level: 87, category: 'soft' },
    
    // Hard Skills
    { name: "Web Development", level: 90, category: 'hard' },
    { name: "C++", level: 85, category: 'hard' },
    { name: "Python", level: 88, category: 'hard' },
    { name: "Git/GitHub", level: 85, category: 'hard' },
    { name: "SQL", level: 80, category: 'hard' },
    { name: "MERN Stack", level: 85, category: 'hard' },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          
          // Animate progress bars
          skills.forEach((skill, index) => {
            setTimeout(() => {
              setAnimatedLevels(prev => ({
                ...prev,
                [skill.name]: skill.level
              }));
            }, index * 200);
          });
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [skills]);

  const softSkills = skills.filter(skill => skill.category === 'soft');
  const hardSkills = skills.filter(skill => skill.category === 'hard');

  const SkillCard = ({ skill, delay }: { skill: Skill; delay: number }) => (
    <div 
      className={`portfolio-card p-6 group hover:scale-105 transition-all duration-500 ${
        isVisible ? 'animate-fade-in' : 'opacity-0'
      }`}
      style={{animationDelay: `${delay}ms`}}
    >
      <div className="flex items-center justify-between mb-3">
        <h4 className="font-poppins font-semibold text-foreground group-hover:text-primary transition-colors">
          {skill.name}
        </h4>
        <span className="text-sm text-muted-foreground font-mono">
          {animatedLevels[skill.name] || 0}%
        </span>
      </div>
      
      {/* Custom Progress Bar */}
      <div className="w-full bg-muted rounded-full h-3 overflow-hidden">
        <div 
          className="h-full bg-gradient-accent transition-all duration-1000 ease-out rounded-full relative"
          style={{ 
            width: `${animatedLevels[skill.name] || 0}%`,
            transitionDelay: `${delay}ms`
          }}
        >
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent animate-pulse"></div>
        </div>
      </div>
      
      {/* Skill Level Indicator */}
      <div className="mt-2 text-xs text-muted-foreground">
        {skill.level >= 90 ? 'Expert' : skill.level >= 80 ? 'Advanced' : skill.level >= 70 ? 'Intermediate' : 'Beginner'}
      </div>
    </div>
  );

  return (
    <section 
      id="skills" 
      ref={sectionRef}
      className="py-20 bg-card relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-glow rounded-full animate-float"></div>
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-gradient-glow rounded-full animate-float" style={{animationDelay: '2s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-poppins font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            My <span className="portfolio-gradient-text">Skills</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto font-inter transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            A comprehensive blend of technical expertise and interpersonal abilities
          </p>
          <div className={`w-24 h-1 bg-gradient-accent mx-auto mt-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'animate-scale-in' : 'opacity-0 scale-x-0'
          }`}></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Soft Skills */}
          <div className={`transition-all duration-1000 delay-700 ${
            isVisible ? 'animate-fade-in-left' : 'opacity-0 -translate-x-10'
          }`}>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-poppins font-semibold mb-4">
                <span className="portfolio-gradient-text">Soft Skills</span>
              </h3>
              <p className="text-muted-foreground font-inter">
                Essential interpersonal and leadership abilities
              </p>
            </div>
            
            <div className="space-y-6">
              {softSkills.map((skill, index) => (
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  delay={800 + index * 100} 
                />
              ))}
            </div>
          </div>

          {/* Hard Skills */}
          <div className={`transition-all duration-1000 delay-900 ${
            isVisible ? 'animate-fade-in-right' : 'opacity-0 translate-x-10'
          }`}>
            <div className="text-center mb-8">
              <h3 className="text-3xl font-poppins font-semibold mb-4">
                <span className="portfolio-gradient-text">Hard Skills</span>
              </h3>
              <p className="text-muted-foreground font-inter">
                Technical competencies and programming languages
              </p>
            </div>
            
            <div className="space-y-6">
              {hardSkills.map((skill, index) => (
                <SkillCard 
                  key={skill.name} 
                  skill={skill} 
                  delay={1000 + index * 100} 
                />
              ))}
            </div>
          </div>
        </div>

        {/* Skills Summary */}
        <div className={`mt-16 text-center transition-all duration-1000 delay-1500 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        }`}>
          <div className="portfolio-card p-8 max-w-4xl mx-auto">
            <h4 className="text-2xl font-poppins font-semibold mb-4 portfolio-gradient-text">
              Continuous Learning Mindset
            </h4>
            <p className="text-lg text-muted-foreground font-inter leading-relaxed">
              I believe that the tech industry is ever-evolving, and staying ahead means embracing 
              continuous learning. These skills represent my current expertise, but I'm always 
              exploring new technologies and methodologies to expand my capabilities.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;