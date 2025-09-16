import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ArrowLeft, ExternalLink, Github, Calendar, User, Tag } from "lucide-react";
import vidyaImage from "@/assets/vidya-project.jpg";
import cbnccImage from "@/assets/cbncc-project.jpg";
import racImage from "@/assets/rac-project.jpg";

interface ProjectDetail {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  fullContent: string;
  image: string;
  technologies: string[];
  category: string;
  demoUrl?: string;
  githubUrl?: string;
  startDate: string;
  duration: string;
  teamSize: string;
  myRole: string;
  challenges: string[];
  features: string[];
  screenshots: string[];
}

const ProjectDetail = () => {
  const { projectId } = useParams();
  const navigate = useNavigate();
  const [project, setProject] = useState<ProjectDetail | null>(null);

  const projects: Record<string, ProjectDetail> = {
    vidya: {
      id: "vidya",
      title: "VIDYA",
      description: "Education-based platform revolutionizing online learning",
      longDescription: "A comprehensive educational platform that connects students and educators through innovative learning tools, interactive content, and personalized learning paths.",
      fullContent: `VIDYA is a cutting-edge educational platform designed to bridge the gap between traditional learning methods and modern educational technology. This platform serves as a comprehensive solution for educational institutions, teachers, and students who seek to enhance their learning experience through digital innovation.

The platform features a robust learning management system that allows educators to create, manage, and distribute educational content effectively. Students can access course materials, participate in interactive sessions, track their progress, and engage with peers through various collaborative tools.

Key achievements include implementing a personalized learning algorithm that adapts to individual student needs, creating an intuitive user interface that supports accessibility standards, and developing a scalable backend architecture that can handle thousands of concurrent users.

The project showcases advanced web development skills, including real-time communication features, progressive web app capabilities, and integration with various educational tools and APIs. VIDYA represents my commitment to using technology for social good and educational advancement.`,
      image: vidyaImage,
      technologies: ["React", "Node.js", "MongoDB", "Express", "Socket.IO", "JWT", "Tailwind CSS"],
      category: "Education",
      demoUrl: "#",
      githubUrl: "#",
      startDate: "January 2024",
      duration: "3 months",
      teamSize: "4 developers",
      myRole: "Full-Stack Developer & Project Lead",
      challenges: [
        "Implementing real-time collaborative features",
        "Optimizing database queries for large datasets",
        "Ensuring cross-platform compatibility",
        "Managing complex user permission systems"
      ],
      features: [
        "Interactive course builder for educators",
        "Real-time video conferencing integration",
        "Adaptive learning algorithm",
        "Progress tracking and analytics",
        "Mobile-responsive design",
        "Offline content access"
      ],
      screenshots: [vidyaImage, vidyaImage, vidyaImage]
    },
    "cbncc-guardian": {
      id: "cbncc-guardian",
      title: "CBNCC Guardian",
      description: "Advanced safety and security monitoring system",
      longDescription: "A robust security application designed to ensure safety through real-time monitoring, alert systems, and comprehensive reporting features.",
      fullContent: `CBNCC Guardian is an innovative safety and security monitoring system developed to provide comprehensive protection through advanced surveillance and alert mechanisms. This project addresses critical security challenges in modern environments by combining IoT integration, real-time monitoring, and intelligent alert systems.

The system features automated threat detection, real-time notification systems, and comprehensive reporting dashboards that allow security personnel to monitor and respond to incidents effectively. The application includes both web and mobile interfaces to ensure accessibility across different devices and scenarios.

One of the most challenging aspects of this project was implementing the real-time processing of multiple data streams from various sensors and cameras while maintaining system performance and reliability. The solution involved creating a distributed architecture that can handle high-throughput data processing and provide instant alerts when security breaches are detected.

The project demonstrates expertise in IoT integration, real-time data processing, Python backend development, and creating user-friendly interfaces for complex security systems. CBNCC Guardian showcases my ability to develop mission-critical applications that prioritize reliability, security, and user experience.`,
      image: cbnccImage,
      technologies: ["Python", "React", "Firebase", "IoT Sensors", "OpenCV", "TensorFlow", "WebSocket"],
      category: "Security",
      demoUrl: "#",
      githubUrl: "#",
      startDate: "September 2023",
      duration: "4 months",
      teamSize: "3 developers",
      myRole: "Backend Developer & IoT Integration Specialist",
      challenges: [
        "Real-time processing of multiple data streams",
        "Integrating various IoT sensors and devices",
        "Implementing machine learning for threat detection",
        "Ensuring system reliability and uptime"
      ],
      features: [
        "Real-time surveillance monitoring",
        "Automated threat detection using AI",
        "Multi-device alert system",
        "Comprehensive reporting dashboard",
        "IoT sensor integration",
        "Mobile app for remote monitoring"
      ],
      screenshots: [cbnccImage, cbnccImage, cbnccImage]
    },
    "rac-social": {
      id: "rac-social",
      title: "RAC Social Crew Web",
      description: "Dynamic club and organization website platform",
      longDescription: "A vibrant social platform designed for clubs and organizations to manage events, connect members, and foster community engagement.",
      fullContent: `RAC Social Crew Web is a comprehensive social platform specifically designed to serve the needs of clubs, organizations, and community groups. This project aims to facilitate better communication, event management, and member engagement through a centralized digital platform.

The platform includes features for event creation and management, member directories, discussion forums, and social interaction tools that help build stronger community bonds. Members can easily stay updated with club activities, participate in discussions, and collaborate on various initiatives.

The development process involved extensive user research to understand the specific needs of club organizations, followed by iterative design and development cycles to create an intuitive and engaging user experience. Special attention was given to creating features that encourage active participation and community building.

This project showcases full-stack development capabilities using the MERN stack, real-time communication features through Socket.io, and responsive design principles. RAC Social Crew Web demonstrates my ability to create solutions that bring people together and strengthen community connections through technology.`,
      image: racImage,
      technologies: ["MongoDB", "Express.js", "React", "Node.js", "Socket.io", "Tailwind CSS", "JWT"],
      category: "Social",
      demoUrl: "#",
      githubUrl: "#",
      startDate: "May 2024",
      duration: "2.5 months",
      teamSize: "2 developers",
      myRole: "Full-Stack Developer",
      challenges: [
        "Designing scalable user engagement features",
        "Implementing real-time chat and notifications",
        "Creating flexible event management system",
        "Optimizing performance for mobile users"
      ],
      features: [
        "Event creation and management",
        "Member directory and profiles",
        "Real-time messaging and notifications",
        "Discussion forums and groups",
        "Photo and media sharing",
        "Admin panel for organization management"
      ],
      screenshots: [racImage, racImage, racImage]
    }
  };

  useEffect(() => {
    if (projectId && projects[projectId]) {
      setProject(projects[projectId]);
    } else {
      navigate('/');
    }
  }, [projectId, navigate]);

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="text-center">
          <h1 className="text-2xl font-poppins font-bold text-foreground mb-4">Project not found</h1>
          <Button onClick={() => navigate('/')}>Go Home</Button>
        </div>
      </div>
    );
  }

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="min-h-screen bg-background"
    >
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Button
              variant="ghost"
              onClick={() => navigate('/')}
              className="text-foreground hover:text-primary"
            >
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Portfolio
            </Button>
            <h1 className="text-xl font-poppins font-bold portfolio-gradient-text">
              {project.title}
            </h1>
          </div>
        </div>
      </nav>

      <div className="pt-24 pb-20">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.1 }}
            className="mb-12"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8">
                <span className="bg-primary text-primary-foreground px-4 py-2 rounded-full text-sm font-semibold mb-4 inline-block">
                  {project.category}
                </span>
                <h1 className="text-4xl md:text-6xl font-poppins font-bold text-white mb-4">
                  {project.title}
                </h1>
                <p className="text-xl text-white/90 max-w-2xl">
                  {project.description}
                </p>
              </div>
            </div>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content */}
            <motion.div
              initial={{ x: -20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-2 space-y-8"
            >
              {/* Project Description */}
              <Card className="portfolio-card">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-poppins font-bold mb-6 portfolio-gradient-text">
                    Project Overview
                  </h2>
                  <div className="prose prose-invert max-w-none">
                    {project.fullContent.split('\n\n').map((paragraph, index) => (
                      <p key={index} className="text-muted-foreground mb-4 leading-relaxed">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Key Features */}
              <Card className="portfolio-card">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-poppins font-bold mb-6 portfolio-gradient-text">
                    Key Features
                  </h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {project.features.map((feature, index) => (
                      <motion.div
                        key={index}
                        initial={{ scale: 0.9, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ delay: 0.3 + index * 0.1 }}
                        className="flex items-center p-4 bg-muted/50 rounded-lg"
                      >
                        <div className="w-2 h-2 bg-gradient-accent rounded-full mr-3 flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Challenges */}
              <Card className="portfolio-card">
                <CardContent className="p-8">
                  <h2 className="text-3xl font-poppins font-bold mb-6 portfolio-gradient-text">
                    Technical Challenges
                  </h2>
                  <div className="space-y-4">
                    {project.challenges.map((challenge, index) => (
                      <motion.div
                        key={index}
                        initial={{ x: -20, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.4 + index * 0.1 }}
                        className="p-4 bg-muted/30 rounded-lg border-l-4 border-primary"
                      >
                        <p className="text-muted-foreground">{challenge}</p>
                      </motion.div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </motion.div>

            {/* Sidebar */}
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="space-y-6"
            >
              {/* Project Info */}
              <Card className="portfolio-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-poppins font-semibold mb-4 portfolio-gradient-text">
                    Project Details
                  </h3>
                  <div className="space-y-4">
                    <div className="flex items-center">
                      <Calendar className="w-5 h-5 text-primary mr-3" />
                      <div>
                        <p className="text-sm text-muted-foreground">Start Date</p>
                        <p className="font-semibold text-foreground">{project.startDate}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <User className="w-5 h-5 text-primary mr-3" />
                      <div>
                        <p className="text-sm text-muted-foreground">Team Size</p>
                        <p className="font-semibold text-foreground">{project.teamSize}</p>
                      </div>
                    </div>
                    <div className="flex items-center">
                      <Tag className="w-5 h-5 text-primary mr-3" />
                      <div>
                        <p className="text-sm text-muted-foreground">My Role</p>
                        <p className="font-semibold text-foreground">{project.myRole}</p>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Technologies */}
              <Card className="portfolio-card">
                <CardContent className="p-6">
                  <h3 className="text-xl font-poppins font-semibold mb-4 portfolio-gradient-text">
                    Technologies Used
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.map((tech, index) => (
                      <motion.span
                        key={tech}
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.4 + index * 0.05 }}
                        className="bg-gradient-accent text-background px-3 py-1 rounded-full text-sm font-semibold"
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </CardContent>
              </Card>

              {/* Action Buttons */}
              <Card className="portfolio-card">
                <CardContent className="p-6 space-y-3">
                  {project.demoUrl && (
                    <Button className="w-full portfolio-glow bg-gradient-accent text-background hover:scale-105 transition-all duration-300">
                      <ExternalLink className="w-4 h-4 mr-2" />
                      View Live Demo
                    </Button>
                  )}
                  {project.githubUrl && (
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-background hover:scale-105 transition-all duration-300">
                      <Github className="w-4 h-4 mr-2" />
                      View Source Code
                    </Button>
                  )}
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ProjectDetail;