import { useEffect, useRef, useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ExternalLink, Github, ArrowRight } from "lucide-react";
import vidyaImage from "@/assets/vidya-project.jpg";
import cbnccImage from "@/assets/cbncc-project.jpg";
import racImage from "@/assets/rac-project.jpg";

interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl?: string;
  githubUrl?: string;
}

const ProjectsSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<string | null>(null);
  const sectionRef = useRef<HTMLElement>(null);

  const projects: Project[] = [
    {
      id: "vidya",
      title: "VIDYA",
      description: "Education-based platform revolutionizing online learning",
      longDescription: "A comprehensive educational platform that connects students and educators through innovative learning tools, interactive content, and personalized learning paths. Built with modern web technologies to enhance the educational experience.",
      image: vidyaImage,
      technologies: ["React", "Node.js", "MongoDB", "Express"],
      category: "Education",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "cbncc-guardian",
      title: "CBNCC Guardian",
      description: "Advanced safety and security monitoring system",
      longDescription: "A robust security application designed to ensure safety through real-time monitoring, alert systems, and comprehensive reporting features. Integrates with various security protocols to provide maximum protection.",
      image: cbnccImage,
      technologies: ["Python", "React", "Firebase", "IoT"],
      category: "Security",
      demoUrl: "#",
      githubUrl: "#"
    },
    {
      id: "rac-social",
      title: "RAC Social Crew Web",
      description: "Dynamic club and organization website platform",
      longDescription: "A vibrant social platform designed for clubs and organizations to manage events, connect members, and foster community engagement. Features include event management, member directories, and social interaction tools.",
      image: racImage,
      technologies: ["MERN Stack", "Socket.io", "Tailwind"],
      category: "Social",
      demoUrl: "#",
      githubUrl: "#"
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <div 
      className={`group cursor-pointer transition-all duration-700 ${
        isVisible ? 'animate-scale-in' : 'opacity-0'
      }`}
      style={{animationDelay: `${index * 200}ms`}}
      onMouseEnter={() => setHoveredProject(project.id)}
      onMouseLeave={() => setHoveredProject(null)}
    >
      <Card className="portfolio-card overflow-hidden h-full group-hover:shadow-hover group-hover:-translate-y-2 transition-all duration-500 bg-gradient-card border-border/30">
        {/* Project Image */}
        <div className="relative overflow-hidden">
          <img 
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover group-hover:scale-110 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          
          {/* Overlay Buttons */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 transform translate-y-4 group-hover:translate-y-0">
            <div className="flex gap-4">
              {project.demoUrl && (
                <Button 
                  size="sm" 
                  className="portfolio-glow bg-gradient-accent text-background hover:scale-110"
                >
                  <ExternalLink className="w-4 h-4 mr-2" />
                  Demo
                </Button>
              )}
              {project.githubUrl && (
                <Button 
                  size="sm" 
                  variant="outline" 
                  className="border-primary text-primary hover:bg-primary hover:text-background hover:scale-110"
                >
                  <Github className="w-4 h-4 mr-2" />
                  Code
                </Button>
              )}
            </div>
          </div>

          {/* Category Badge */}
          <div className="absolute top-4 left-4">
            <span className="bg-primary text-primary-foreground px-3 py-1 rounded-full text-sm font-semibold">
              {project.category}
            </span>
          </div>
        </div>

        <CardHeader className="pb-3">
          <CardTitle className="text-2xl font-poppins group-hover:text-primary transition-colors duration-300">
            {project.title}
          </CardTitle>
          <CardDescription className="text-base">
            {project.description}
          </CardDescription>
        </CardHeader>

        <CardContent className="pt-0">
          {/* Long Description */}
          <p className="text-muted-foreground mb-4 font-inter leading-relaxed">
            {project.longDescription}
          </p>

          {/* Technologies */}
          <div className="flex flex-wrap gap-2 mb-6">
            {project.technologies.map((tech, techIndex) => (
              <span 
                key={tech}
                className="bg-muted text-muted-foreground px-3 py-1 rounded-full text-sm font-medium hover:bg-primary hover:text-primary-foreground transition-colors duration-300 cursor-default"
                style={{
                  animationDelay: `${(index * 200) + (techIndex * 100)}ms`
                }}
              >
                {tech}
              </span>
            ))}
          </div>

          {/* Action Button */}
          <Button 
            variant="ghost" 
            className="w-full justify-between group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300"
          >
            Learn More
            <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform duration-300" />
          </Button>
        </CardContent>
      </Card>
    </div>
  );

  return (
    <section 
      id="projects" 
      ref={sectionRef}
      className="py-20 bg-background relative overflow-hidden"
    >
      {/* Background Elements */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/3 right-1/4 w-80 h-80 bg-gradient-glow rounded-full animate-float"></div>
        <div className="absolute bottom-1/3 left-1/4 w-60 h-60 bg-gradient-glow rounded-full animate-float" style={{animationDelay: '1.5s'}}></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className={`text-4xl md:text-6xl font-poppins font-bold mb-6 transition-all duration-1000 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            My <span className="portfolio-gradient-text">Projects</span>
          </h2>
          <p className={`text-xl text-muted-foreground max-w-3xl mx-auto font-inter transition-all duration-1000 delay-300 ${
            isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
          }`}>
            Showcasing innovation through code - each project represents a unique challenge solved with creativity and technical excellence
          </p>
          <div className={`w-24 h-1 bg-gradient-accent mx-auto mt-6 transition-all duration-1000 delay-500 ${
            isVisible ? 'animate-scale-in' : 'opacity-0 scale-x-0'
          }`}></div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
          {projects.map((project, index) => (
            <ProjectCard key={project.id} project={project} index={index} />
          ))}
        </div>

        {/* Call to Action */}
        <div className={`text-center transition-all duration-1000 delay-1000 ${
          isVisible ? 'animate-fade-in' : 'opacity-0 translate-y-10'
        }`}>
          <div className="portfolio-card p-8 max-w-4xl mx-auto">
            <h3 className="text-3xl font-poppins font-semibold mb-4 portfolio-gradient-text">
              More Projects Coming Soon
            </h3>
            <p className="text-lg text-muted-foreground mb-6 font-inter">
              I'm constantly working on new and exciting projects. Stay tuned for more innovative solutions and creative applications.
            </p>
            <Button 
              className="portfolio-glow bg-gradient-accent text-background px-8 py-3 text-lg font-semibold hover:scale-105 transition-all duration-300"
            >
              View All Projects
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;