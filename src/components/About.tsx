import aboutPhoto from "@/assets/about-photo.jpg";
import { Button } from "@/components/ui/button";

const About = () => {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="about" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left - Image with stats badge */}
          <div className="relative animate-slide-in-left">
            <div className="relative w-full max-w-sm mx-auto">
              <div className="bg-primary rounded-full overflow-hidden aspect-square">
                <img
                  src={aboutPhoto}
                  alt="Kiruthikeyan S"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              {/* Stats badge */}
              <div className="absolute bottom-4 left-4 bg-primary text-primary-foreground rounded-xl px-4 py-3 shadow-lg">
                <p className="text-2xl font-bold">5+</p>
                <p className="text-sm">Notable Projects</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="space-y-6 animate-slide-in-right">
            <p className="text-primary font-medium">About Me</p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
              I'm Kiruthikeyan
            </h2>
            <div className="text-muted-foreground text-lg leading-relaxed space-y-4">
              <p className="text-foreground font-medium">Building interfaces that look great and work even better.</p>
              <p>
                I am a Frontend Developer and UI/UX Designer focused on transforming ideas into clean, functional, and visually engaging digital experiences. I believe that great products come from the perfect balance of thoughtful design and solid development.
              </p>
              <p>
                With a background in Artificial Intelligence and Data Science, I bring a deeper understanding of the systems behind the interface. This perspective allows me to design more intelligently and develop solutions that are not only visually appealing but also technically robust.
              </p>
            </div>
            <Button
              onClick={() => scrollToSection("contact")}
              className="rounded-full px-8"
              size="lg"
            >
              Hire Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
