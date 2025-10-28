import { Card } from "./ui/card";
import { Badge } from "./ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { Button } from "./ui/button";

interface Project {
  title: string;
  description: string;
  technologies: string[];
  liveUrl?: string;
  githubUrl?: string;
}

const projects: Project[] = [
  {
    title: "E-Commerce Platform",
    description: "Built a full-stack e-commerce platform with real-time inventory management, payment integration, and admin dashboard. Handles 10K+ daily transactions.",
    technologies: ["React", "Node.js", "PostgreSQL", "Stripe", "AWS"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    title: "Real-Time Analytics Dashboard",
    description: "Developed a real-time analytics dashboard for monitoring application metrics and user behavior. Features customizable widgets and data visualization.",
    technologies: ["Next.js", "TypeScript", "WebSocket", "D3.js", "Redis"],
    liveUrl: "https://example.com",
    githubUrl: "https://github.com/yourusername/project",
  },
  {
    title: "Task Management SaaS",
    description: "Created a collaborative task management application with team workspace, real-time updates, and integrations with popular tools.",
    technologies: ["Vue.js", "Express", "MongoDB", "Socket.io", "Docker"],
    githubUrl: "https://github.com/yourusername/project",
  },
];

const ProjectsSection = () => {
  return (
    <section className="py-16 px-6 bg-card">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground animate-fade-in">Featured Projects</h2>
        <div className="grid gap-6 md:grid-cols-1">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className={`p-6 hover-lift border-border animate-scale-in stagger-${index + 1} group`}
            >
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors duration-300">{project.title}</h3>
                <div className="flex gap-2">
                  {project.githubUrl && (
                    <Button variant="ghost" size="icon" asChild className="h-8 w-8 hover:scale-110 transition-transform duration-300">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                  {project.liveUrl && (
                    <Button variant="ghost" size="icon" asChild className="h-8 w-8 hover:scale-110 transition-transform duration-300">
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4" />
                      </a>
                    </Button>
                  )}
                </div>
              </div>
              <p className="text-muted-foreground mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, idx) => (
                  <Badge key={idx} variant="secondary">{tech}</Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;
