import { Card } from "./ui/card";
import { GraduationCap } from "lucide-react";

interface Education {
  degree: string;
  institution: string;
  period: string;
  description?: string;
}

const education: Education[] = [
  {
    degree: "Bachelor of Technology in Computer Science and Engineering",
    institution: "National Institute of Technology, Meghalaya",
    period: "2010 - 2014",
    description: "Graduated, GPA: 8.59/10.0",
  },
];

const EducationSection = () => {
  return (
    <section className="py-16 px-6 bg-card">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-foreground animate-fade-in">Education</h2>
        <div className="space-y-6">
          {education.map((edu, index) => (
            <Card 
              key={index} 
              className={`p-6 hover-lift border-border animate-fade-in-left stagger-${index + 1}`}
            >
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                    <div>
                      <h3 className="text-xl font-semibold text-foreground mb-1">{edu.degree}</h3>
                      <p className="text-primary font-medium">{edu.institution}</p>
                    </div>
                    <span className="text-sm text-muted-foreground mt-2 md:mt-0">{edu.period}</span>
                  </div>
                  {edu.description && (
                    <p className="text-muted-foreground">{edu.description}</p>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default EducationSection;
