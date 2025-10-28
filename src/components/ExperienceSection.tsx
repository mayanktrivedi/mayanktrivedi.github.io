import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Staff Software Engineer - GenAI",
    company: "CBA Services Ltd.",
    period: "2021 - Present",
    description: "Leading the development of core product features and mentoring junior developers.",
    achievements: [
      "Architected and implemented microservices infrastructure serving 1M+ users",
      "Reduced application load time by 40% through performance optimization",
      "Led team of 5 developers in successful product launch",
    ],
    technologies: ["React", "Node.js", "TypeScript", "AWS", "PostgreSQL"],
  },
  {
    title: "Technical Team Lead",
    company: "PayNet Systems Pvt. Ltd.",
    period: "2018 - 2021",
    description: "Developed and maintained full-stack web applications for enterprise clients.",
    achievements: [
      "Built responsive web applications used by 500K+ users",
      "Implemented CI/CD pipeline reducing deployment time by 60%",
      "Collaborated with UX team to improve user satisfaction by 35%",
    ],
    technologies: ["React", "Python", "Django", "Docker", "MySQL"],
  },
  {
    title: "Software Engineer",
    company: "IBM India Pvt. Ltd.",
    period: "2014 - 2017",
    description: "Contributed to frontend and backend development of SaaS platform.",
    achievements: [
      "Developed key features for MVP launch",
      "Maintained 95%+ code coverage through comprehensive testing",
      "Participated in agile development processes",
    ],
    technologies: ["JavaScript", "Vue.js", "Express", "MongoDB"],
  },
];

const ExperienceSection = () => {
  return (
    <section className="py-16 px-6 bg-gradient-subtle">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground animate-fade-in">Experience</h2>
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <Card 
              key={index} 
              className={`p-6 hover-lift border-border animate-slide-up stagger-${Math.min(index + 1, 5)}`}
            >
              <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
                <div>
                  <h3 className="text-xl font-semibold text-foreground mb-1">{exp.title}</h3>
                  <p className="text-primary font-medium">{exp.company}</p>
                </div>
                <span className="text-sm text-muted-foreground mt-2 md:mt-0">{exp.period}</span>
              </div>
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              <ul className="list-disc list-inside space-y-2 mb-4 text-muted-foreground">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
              <div className="flex flex-wrap gap-2">
                {exp.technologies.map((tech, idx) => (
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

export default ExperienceSection;
