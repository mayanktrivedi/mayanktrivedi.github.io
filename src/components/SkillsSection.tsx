import { Badge } from "./ui/badge";

interface SkillCategory {
  category: string;
  skills: string[];
}

const skillCategories: SkillCategory[] = [
  {
    category: "Frontend",
    skills: ["React", "TypeScript", "Next.js", "Vue.js", "Tailwind CSS", "Redux", "GraphQL"],
  },
  {
    category: "Backend",
    skills: ["Node.js", "Python", "Django", "Express", "RESTful APIs", "Microservices"],
  },
  {
    category: "Database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "MySQL", "DynamoDB"],
  },
  {
    category: "DevOps & Cloud",
    skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "GitHub Actions", "Terraform"],
  },
  {
    category: "Tools & Others",
    skills: ["Git", "Agile/Scrum", "Testing (Jest, Cypress)", "System Design", "Leadership"],
  },
];

const SkillsSection = () => {
  return (
    <section className="py-16 px-6 bg-gradient-subtle">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground animate-fade-in">Skills</h2>
        <div className="grid gap-8 md:grid-cols-2">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className={`space-y-4 animate-fade-in-left stagger-${Math.min(index + 1, 5)}`}
            >
              <h3 className="text-xl font-semibold text-foreground">{category.category}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, idx) => (
                  <Badge 
                    key={idx} 
                    variant="outline" 
                    className="text-sm py-1.5 px-3 border-primary/20 hover:bg-primary/10 hover:scale-110 hover:shadow-soft transition-all duration-300 cursor-default"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
