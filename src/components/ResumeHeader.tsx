import { Mail, Phone, MapPin, Linkedin, Github, Globe } from "lucide-react";
import { Button } from "./ui/button";

const ResumeHeader = () => {
  return (
    <header className="relative overflow-hidden bg-gradient-primary py-20 px-6 text-center">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNiIgc3Ryb2tlPSJyZ2JhKDI1NSwyNTUsMjU1LDAuMSkiLz48L2c+PC9zdmc+')] opacity-20 animate-float"></div>
      <div className="container mx-auto max-w-4xl relative z-10">
        <h1 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-4 animate-fade-in">
          Mayank Trivedi
        </h1>
        <p className="text-xl md:text-2xl text-primary-foreground/90 mb-8 font-light animate-fade-in stagger-1">
          Staff Software Engineer - GenAI
        </p>
        
        <div className="flex flex-wrap justify-center gap-4 text-primary-foreground/90 mb-8 animate-fade-in stagger-2">
          <a href="mailto:mayank.trivedi58@gmail.com" className="flex items-center gap-2 hover:text-primary-foreground hover:scale-110 transition-all duration-300">
            <Mail className="w-4 h-4" />
            <span className="text-sm">mayank.trivedi58@gmail.com</span>
          </a>
          <a href="tel:+1234567890" className="flex items-center gap-2 hover:text-primary-foreground hover:scale-110 transition-all duration-300">
            <Phone className="w-4 h-4" />
            <span className="text-sm">+91 8826334458</span>
          </a>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span className="text-sm">Banglore, India</span>
          </div>
        </div>

        <div className="flex justify-center gap-3 mb-8 animate-scale-in stagger-3">
          <Button variant="outline" size="sm" asChild className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300">
            <a href="https://www.linkedin.com/in/mayank-trivedi-6956487a/" target="_blank" rel="noopener noreferrer">
              <Linkedin className="w-4 h-4 mr-2" />
              LinkedIn
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300">
            <a href="https://github.com/mayanktrivedi" target="_blank" rel="noopener noreferrer">
              <Github className="w-4 h-4 mr-2" />
              GitHub
            </a>
          </Button>
          <Button variant="outline" size="sm" asChild className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground hover:bg-primary-foreground/20 hover:scale-110 transition-all duration-300">
            <a href="https://mayanktrivedi.github.io/" target="_blank" rel="noopener noreferrer">
              <Globe className="w-4 h-4 mr-2" />
              Website
            </a>
          </Button>
        </div>

        <Button size="lg" variant="secondary" onClick={() => window.print()} className="shadow-elegant hover:shadow-lg hover:scale-105 transition-all duration-300 animate-scale-in stagger-4 no-print">
          Download Resume
        </Button>
      </div>
    </header>
  );
};

export default ResumeHeader;
