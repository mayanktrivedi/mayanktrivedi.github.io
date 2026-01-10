const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6 bg-card">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground animate-fade-in-left">About Me</h2>
        <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-right stagger-1">
          Staff Software Engineer with 11+ years of experience architecting and scaling cloud-native, 
          distributed systems across full-stack platforms. 
          Deep expertise in designing large-scale, production-grade systems, 
          with a strong focus on reliability, performance, security, and cost efficiency at scale. 
          Demonstrated technical leadership in driving architectural decisions, 
          setting engineering standards, and mentoring senior engineers. 
          Brings a strong learning mindset, continuously adopting emerging technologies 
          and evolving best practices to stay ahead of industry trends.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
