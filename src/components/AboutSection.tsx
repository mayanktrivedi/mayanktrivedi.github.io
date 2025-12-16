const AboutSection = () => {
  return (
    <section id="about" className="py-16 px-6 bg-card">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-6 text-foreground animate-fade-in-left">About Me</h2>
        <p className="text-lg text-muted-foreground leading-relaxed animate-fade-in-right stagger-1">
          Passionate software engineer with 11+ years of experience building scalable web applications 
          and leading development teams. Specialized in full-stack development with expertise in React, 
          Node.js, and cloud infrastructure. Proven track record of delivering high-quality solutions 
          that drive business growth and improve user experience.
        </p>
      </div>
    </section>
  );
};

export default AboutSection;
