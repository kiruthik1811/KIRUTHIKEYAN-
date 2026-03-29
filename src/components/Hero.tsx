import profileImage from "@/assets/profile.png";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, ArrowRight, ArrowDownToLine } from "lucide-react";

const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center px-6 py-20 relative overflow-hidden">
      {/* Subtle background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-primary/10"></div>

      <div className="container mx-auto max-w-6xl relative">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="space-y-6 animate-fade-in">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight">
              <span className="text-primary italic">Hello,</span>{" "}
              <span className="text-foreground">I'm Kiruthikeyan</span>
              <br />
              <span className="text-foreground">UI/UX Designer</span>
            </h1>

            <p className="text-muted-foreground text-lg max-w-md">
              A Passionate Designer & Developer With Experience In Creating Beautiful Digital Experiences And Intuitive Interfaces.
            </p>

            <div className="flex items-center gap-4 pt-2">
              <Button
                onClick={() => scrollToSection("contact")}
                className="rounded-full px-8"
                size="lg"
              >
                Hire Me
              </Button>
              <button
                onClick={() => scrollToSection("projects")}
                className="flex items-center gap-2 text-foreground hover:text-primary transition-colors font-medium"
              >
                View Projects <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>

          {/* Right - Profile Image with Red Circle */}
          <div className="flex flex-col items-center md:items-end animate-scale-in">
            <div className="relative">
              {/* Red circle behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 bg-primary rounded-full"></div>
              
              {/* Profile image */}
              <div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-96 md:h-96 rounded-full overflow-hidden border-4 border-foreground/10">
                <img
                  src={profileImage}
                  alt="Kiruthikeyan S"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Social Links Row */}
        <div className="mt-16 flex flex-wrap items-center gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
          <a
            href="/resume/KIRUTHIKEYAN.pdf"
            download
            className="flex items-center gap-3 bg-primary text-primary-foreground rounded-full px-6 py-3 hover:bg-primary/90 transition-all duration-300 group"
          >
            <ArrowDownToLine className="w-5 h-5" />
            <div>
              <p className="font-medium text-sm">Resume</p>
              <p className="text-xs text-primary-foreground/80">Download CV</p>
            </div>
          </a>
          <a
            href="https://github.com/kiruthik1811"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3 hover:bg-card-hover transition-all duration-300 group"
          >
            <Github className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            <div>
              <p className="font-medium text-sm text-foreground">GitHub</p>
              <p className="text-xs text-muted-foreground">See My Work</p>
            </div>
          </a>
          <a
            href="https://linkedin.com/in/s-kiruthikeyan"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 bg-card border border-border rounded-full px-6 py-3 hover:bg-card-hover transition-all duration-300 group"
          >
            <Linkedin className="w-5 h-5 text-foreground group-hover:text-primary transition-colors" />
            <div>
              <p className="font-medium text-sm text-foreground">LinkedIn</p>
              <p className="text-xs text-muted-foreground">Connect With Me</p>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Hero;
