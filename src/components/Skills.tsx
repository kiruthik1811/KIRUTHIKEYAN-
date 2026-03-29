import { Code2, Database, Palette, Wrench } from "lucide-react";

const Skills = () => {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code2,
      skills: [
        { name: "Python", level: 90 },
        { name: "Java", level: 80 },
        { name: "JavaScript", level: 85 },
        { name: "HTML/CSS", level: 90 },
        { name: "SQL", level: 75 },
      ],
    },
    {
      title: "Frameworks & Libraries",
      icon: Database,
      skills: [
        { name: "NumPy", level: 85 },
        { name: "Pandas", level: 85 },
        { name: "Flask", level: 80 },
        { name: "OpenCV", level: 75 },
      ],
    },
    {
      title: "Tools & Platforms",
      icon: Wrench,
      skills: [
        { name: "PowerBI", level: 85 },
        { name: "Git", level: 85 },
        { name: "VS Code", level: 90 },
        { name: "Google Colab", level: 85 },
        { name: "GitHub", level: 85 },
      ],
    },
    {
      title: "Design & Soft Skills",
      icon: Palette,
      skills: [
        { name: "Figma", level: 90 },
        { name: "Communication", level: 85 },
        { name: "Leadership", level: 80 },
        { name: "Wireframing", level: 85 },
        { name: "Prototyping", level: 85 },
        { name: "Typography", level: 80 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 px-6 bg-card/30">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Technical <span className="text-primary">Skills</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            A diverse skillset spanning AI, development, and design
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={category.title}
              className="bg-card border border-border rounded-2xl p-8 hover:bg-card-hover transition-all duration-300 animate-scale-in"
              style={{ animationDelay: `${categoryIndex * 0.1}s` }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <category.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-xl font-bold">{category.title}</h3>
              </div>

              <div className="space-y-4">
                {category.skills.map((skill) => (
                  <div key={skill.name}>
                    <div className="flex justify-between mb-2">
                      <span className="text-sm font-medium">{skill.name}</span>
                      <span className="text-sm text-muted-foreground">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-primary to-accent transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          animationDelay: `${categoryIndex * 0.1}s`,
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
