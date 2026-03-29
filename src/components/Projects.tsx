import { useState } from "react";
import { ExternalLink, Github, Code, Palette } from "lucide-react";
import { Button } from "@/components/ui/button";

const Projects = () => {
  const [activeTab, setActiveTab] = useState<"development" | "design">("development");

  const developmentProjects = [
    {
      title: "Digital Character Recognition",
      description:
        "Advanced character recognition system using YOLO v11 with 16x2 LCD display integration for real-time detection.",
      tech: ["Python", "YOLO v11", "Deep Learning", "OpenCV", "Label Studio"],
      link: "https://github.com/vlarjun20/-Digital-Character-Recognition-",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop",
    },
    {
      title: "Real-Time Blood Donor Tracking",
      description:
        "Location-based application for tracking blood donors in real-time using Google Maps API and Flask backend.",
      tech: ["Python", "Flask", "Google Maps API", "REST APIs"],
      link: "https://github.com/kiruthik1811/red-line-project",
      image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    },
    {
      title: "Fake Social Media",
      description:
        "A simulated social media platform with core features like posts, profiles, and interactions.",
      tech: ["GitHub"],
      link: "https://github.com/dashboard",
      image: "https://images.unsplash.com/photo-1611162617213-7d7a39e9b1d7?w=600&h=400&fit=crop",
    },
    {
      title: "Task Management",
      description:
        "A web-based task management application to create, track and manage tasks efficiently.",
      tech: ["GitHub"],
      link: "https://github.com/kiruthik1811/task",
      image: "https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?w=600&h=400&fit=crop",
    },
    {
      title: "Text Summarization",
      description:
        "An AI-powered text summarization tool that condenses large content into concise summaries.",
      tech: ["Python", "AI", "NLP"],
      link: "https://github.com/kiruthik1811/Text-Summarization",
      image: "https://images.unsplash.com/photo-1456324504439-367cee3b3c32?w=600&h=400&fit=crop",
    },
  ];

  const designProjects = [
    {
      title: "Torus – Tourist App UI",
      description: "Modern and intuitive UI concept for a tourist application with seamless navigation.",
      tech: ["Figma", "UI Design", "Prototyping"],
      link: "https://www.figma.com/proto/swlvScagHDTz3Nwffz2jqy/Untitled?node-id=21-11&t=mT1yn3BJNS0ucOqm-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=21%3A11",
      image: "https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=600&h=400&fit=crop",
    },
    {
      title: "Cupcake Shop Website",
      description: "Delightful e-commerce design for a cupcake bakery with warm, inviting aesthetics.",
      tech: ["Figma", "E-commerce", "Branding"],
      link: "https://www.figma.com/proto/2SJqg0iE0zMorWVUOv0xDS/Untitled?node-id=8-2&starting-point-node-id=8%3A2&t=KjLXNp9HPLQtV37Z-1",
      image: "https://images.unsplash.com/photo-1486427944299-d1955d23e34d?w=600&h=400&fit=crop",
    },
    {
      title: "Water Bottle Website",
      description: "Clean and refreshing product showcase design with minimal aesthetics.",
      tech: ["Figma", "Product Design", "Landing Page"],
      link: "https://www.figma.com/proto/3ewNKuup9vWwM0RAFPbKAD/Untitled?node-id=3-27&p=f&t=k8Z7f8RIEMaAOOTE-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1",
      image: "https://images.unsplash.com/photo-1602143407151-7111542de6e8?w=600&h=400&fit=crop",
    },
    {
      title: "Juice Website UI",
      description: "Vibrant and appetizing beverage brand website with dynamic visuals.",
      tech: ["Figma", "Branding", "Web Design"],
      link: "https://www.figma.com/proto/yaQXMB8QGEGltre5lP88UP/Untitled?node-id=104-52&t=3XyKD6beDdb6g7em-1",
      image: "https://images.unsplash.com/photo-1534353473418-4cfa6c56fd38?w=600&h=400&fit=crop",
    },
    {
      title: "Music App UI",
      description: "Sleek music streaming application interface with dark mode focus.",
      tech: ["Figma", "Mobile UI", "Dark Theme"],
      link: "https://www.figma.com/proto/zOazRjcWUCXZ2EkKDffoBY/Untitled?node-id=1-2&p=f&t=Tvp5uFGLD2ZFlQJ2-1&scaling=scale-down&content-scaling=fixed&page-id=0%3A1&starting-point-node-id=1%3A2",
      image: "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=600&h=400&fit=crop",
    },
    {
      title: "Task Management Website",
      description: "A clean and intuitive task management web app UI designed for productivity and ease of use.",
      tech: ["Figma", "UI Design", "Productivity"],
      link: "https://www.figma.com/proto/ZSE8Y2yxujNDI3FXO0eL2a/task-pro?page-id=0%3A1&node-id=183-401&viewport=183%2C398%2C0.02&t=bqJR8UW7UDZVH8z1-1&scaling=scale-down&content-scaling=fixed",
      image: "/src/assets/task-management.jpg",
    },
  ];

  const currentProjects = activeTab === "development" ? developmentProjects : designProjects;

  return (
    <section id="projects" className="py-20 px-6 bg-background">
      <div className="container mx-auto">
        {/* Header */}
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="text-primary">Projects</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto mb-8">
            Showcasing technical excellence and creative design
          </p>

          {/* Tab Toggle */}
          <div className="inline-flex bg-card border border-border rounded-full p-1.5 gap-1">
            <button
              onClick={() => setActiveTab("development")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "development"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Code className="w-4 h-4" />
              Development
            </button>
            <button
              onClick={() => setActiveTab("design")}
              className={`flex items-center gap-2 px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${
                activeTab === "design"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "text-muted-foreground hover:text-foreground"
              }`}
            >
              <Palette className="w-4 h-4" />
              UI/UX Design
            </button>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentProjects.map((project, index) => (
            <a
              key={project.title}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="group block bg-card border border-border rounded-2xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover:shadow-xl hover:shadow-primary/10 animate-scale-in cursor-pointer"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-transparent to-transparent opacity-60" />
                <div className="absolute top-4 right-4">
                  <div className="w-10 h-10 rounded-full bg-background/80 backdrop-blur-sm flex items-center justify-center group-hover:bg-primary group-hover:text-primary-foreground transition-all duration-300">
                    {activeTab === "development" ? (
                      <Github className="w-5 h-5" />
                    ) : (
                      <ExternalLink className="w-5 h-5" />
                    )}
                  </div>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Tech Tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 bg-secondary/50 text-foreground rounded-full text-xs font-medium border border-border"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Button */}
                <div className="flex items-center gap-2 text-primary font-medium text-sm group-hover:gap-3 transition-all">
                  <span>{activeTab === "development" ? "View Project" : "View on Figma"}</span>
                  <ExternalLink className="w-4 h-4" />
                </div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
