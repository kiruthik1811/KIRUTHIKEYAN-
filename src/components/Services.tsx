import { Figma, BarChart3, Code, ArrowUpRight } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Figma,
      title: "UI/UX Design",
      description:
        "Creating modern, intuitive wireframes and prototypes for web and mobile applications.",
    },
    {
      icon: Code,
      title: "Web Development",
      description:
        "Developing responsive web applications using modern frameworks and best practices.",
    },
    {
      icon: BarChart3,
      title: "Product Design",
      description:
        "Building interactive data visualization dashboards and comprehensive analytics solutions.",
    },
  ];

  return (
    <section id="services" className="py-20 px-6">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            My <span className="text-primary">Services</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            I'm your design partner. Let's transform your vision into a captivating digital reality.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className="bg-card border border-border rounded-2xl p-8 hover:bg-card-hover transition-all duration-300 group animate-scale-in flex flex-col justify-between"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <div className="bg-primary/10 p-4 rounded-xl group-hover:scale-110 transition-transform duration-300">
                    <service.icon className="w-8 h-8 text-primary" />
                  </div>
                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>

                <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                  {service.title}
                </h3>

                <p className="text-muted-foreground text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-3 gap-6 mt-12">
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.2s" }}>
            <p className="text-3xl md:text-4xl font-bold text-primary">5+</p>
            <p className="text-muted-foreground text-sm mt-1">Projects Completed</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <p className="text-3xl md:text-4xl font-bold text-primary">2+</p>
            <p className="text-muted-foreground text-sm mt-1">Internships</p>
          </div>
          <div className="text-center animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <p className="text-3xl md:text-4xl font-bold text-primary">3+</p>
            <p className="text-muted-foreground text-sm mt-1">Design Tools</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
