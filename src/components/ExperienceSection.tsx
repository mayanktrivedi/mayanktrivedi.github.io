import { Card } from "./ui/card";
import { Badge } from "./ui/badge";

interface Experience {
  title: string;
  company: string;
  period: string;
  description: string;
  achievements: React.ReactNode[];
  technologies: string[];
}

const experiences: Experience[] = [
  {
    title: "Staff Software Engineer - GenAI",
    company: "CBA India Services Ltd.",
    period: "2021 - Present",
    description: "Leading GenAI initiatives and security compliance in enterprise banking solutions.",
    achievements: [
      <>Contributed to Security RISE (Risk Identification and Security Evaluation) lifecycle for the <strong>GenAI</strong> <strong>LLM</strong> Gateway platform, ensuring all architectural designs met stringent enterprise security and risk compliance standards.</>,
      <>Mentored the team in developing an automated model provisioning system, reducing the manual onboarding overhead for new <strong>AI</strong> initiatives from weeks to hours.</>,
      <>Re-architected the Guardrails ecosystem into a high-performance Monorepo, utilizing <strong>SageMaker</strong> and <strong>GitHub Actions</strong> for automated evaluation pipelines (<strong>GaaS</strong>), resulting in a <strong>30–40%</strong> reduction in dev-to-prod cycle time.</>,
      <>Achieved a "<strong>Zero-Risk</strong>" security posture prior to enterprise-wide rollout of <strong>GaaS</strong>, ensuring a safe and compliant integration for multiple consumer teams across the organization.</>,
      <>Led the end-to-end redesign and production deployment of the Payment Initiation Credit Transfer engine using <strong>Kotlin</strong>, <strong>Micronaut</strong> and <strong>AWS</strong> Cloud-Native, stabilizing the platform by engineering core libraries and Infrastructure as Code (<strong>IaC</strong>) via <strong>SST Dev</strong>.</>,
      <>Eliminated critical <strong>AWS Lambda</strong> cold start issues by implementing <strong>SnapStart</strong>, significantly improving latency for real-time payment processing.</>,
      <>Served as a certified <strong>AppSec</strong> Champion, driving security remediation</>,
      <>Appointed Code Owner for the <strong>PaaS</strong> monorepo; authored and patched mission-critical external libraries (<strong>SST Dev</strong>) to resolve cross-platform compatibility issues for the engineering team.</>,
      <>Engineered health-check <strong>Lambda</strong> services for downstream connectivity testing and established automated alerting configurations to ensure <strong>99.9%</strong> availability for regulatory and innovation consumers.</>,
      <>Orchestrated the High-Level Design (<strong>HLD</strong>) and development of cloud-native microservices using <strong>Spring Boot</strong> and <strong>IBM MQ</strong>, enabling seamless mediation between diverse banking channels.</>,
      <>Spearheaded the technical journey for onboarding regulatory consumers to the Payment Service Utility, ensuring strict adherence to <strong>SDLC</strong> practices, <strong>PenTesting</strong>, and Non-Functional Testing (<strong>NFT</strong>) standards.</>,
      <>Rapidly upskilled in <strong>.NET Core</strong> to deliver a mission-critical microservice under a tight deadline, despite a primary background in <strong>Java</strong>/<strong>JVM</strong>; ensured on-time deployment while maintaining enterprise coding standards.</>,
      <>integrating automated reporting for <strong>Checkmarx</strong> and <strong>SonarQube</strong>, reducing manual audit effort by [Estimated <strong>30%</strong>]</>,
    ],
    technologies: ["Kotlin", "Micronaut", "AWS", "SageMaker", "GitHub Actions", "Spring Boot", "IBM MQ", ".NET Core", "SST Dev"],
  },
  {
    title: "Technical Team Lead",
    company: "Payment Systems Pvt Ltd",
    period: "2018 - 2021",
    description: "Led technical initiatives in payment systems and digital banking solutions for enterprise clients.",
    achievements: [
      <>Architected and deployed NMB Bank's digital banking ecosystem, integrating Core Banking Systems (CBS) and national clearinghouses to facilitate seamless interbank transactions for <strong>160+</strong> branches.</>,
      <>Engineered a 0-to-1 "Social Banking" platform in <strong>10 days</strong> during the COVID-19 pandemic, enabling account opening via <strong>Facebook</strong>/<strong>Viber</strong> and maintaining business continuity for national financial institutions.</>,
      <>Led the development of the <strong>CUANet</strong> service hub, a centralized microservices-based transaction engine designed to modernize the credit union movement across <strong>Ghana</strong>.</>,
      <>Technical Lead for <strong>CellPay</strong>'s payment gateway, implementing international-grade security protocols for web and mobile fund transfers directly from bank accounts.</>,
      <>Directed cross-functional teams of up to <strong>6 engineers</strong> to deliver complex features using <strong>Spring Boot</strong>, <strong>Microservices</strong>, and <strong>Angular 7</strong>, while managing end-to-end production configurations and social platform integrations.</>,
    ],
    technologies: ["Spring Boot", "Microservices", "Angular 7", "Core Banking Systems", "Payment Gateways"],
  },
  {
    title: "Software Engineer",
    company: "IBM India Pvt. Ltd.",
    period: "2014 - 2017",
    description: "Contributed to frontend and backend development of enterprise pricing platform.",
    achievements: [
      <>Contributed to transition of a global pricing engine from <strong>Struts 1.x</strong> to a modular <strong>Angular</strong>/<strong>RequireJS</strong> architecture, improving application responsiveness and maintainability for users across <strong>4 global regions</strong> (AP, NA, LA, EMEA).</>,
      <>Optimized business logic within a <strong>Spring</strong>/<strong>JPA</strong> framework, reducing database latency by refining parameter exchange protocols between front-end and <strong>DB2</strong> back-end.</>,
      <>Contributed in unit testing and rigorous bug-fixing phases during the global rollout, resulting in a stable production environment and <strong>zero high-priority defects</strong> during the initial launch.</>,
    ],
    technologies: ["Struts 1.x", "Angular", "RequireJS", "Spring", "JPA", "DB2"],
  },
];

const ExperienceSection = () => {
  return (
    <section id="experience" className="py-16 px-6 bg-gradient-subtle">
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
