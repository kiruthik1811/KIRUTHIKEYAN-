import { Briefcase, Calendar } from "lucide-react";
const Experience = () => {
  const experiences = [{
    role: "Robotics and Machine Learning Intern",
    company: "Atlanwa",
    period: "November 2024 – December 2024",
    description: "Developed ML models and designed user-friendly interfaces for AI applications. Focused on integrating robotics with machine learning algorithms.",
    skills: ["Python", "Machine Learning", "Robotics", "UI/UX"]
  }, {
    role: "Python Development Intern",
    company: "Octanet Services Pvt Ltd",
    period: "July 2024 – August 2024",
    description: "Specialized in UI/UX and Frontend Development. Created intuitive interfaces and implemented responsive designs for web applications.",
    skills: ["Python", "Flask", "Frontend Development", "UI/UX Design"]
  }, {
    role: "Task Manager UI/UX Design (Web & Mobile App)",
    company: "Amdox",
    period: "November 2025 – February 2026",
    description: "Designed a modern Task Management system including a landing page, web dashboard, and mobile app interface. Created user-friendly workflows for task creation, tracking, and collaboration. Focused on clean UI, intuitive navigation, and responsive layouts to improve productivity and user experience.",
    skills: ["Figma", "UI/UX Design", "Wireframing", "Prototyping", "Responsive Design"]
  }];
  return <section id="experience" className="py-20 px-6">
      <div className="container mx-auto">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Work <span className="text-primary">Internship</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Practical experience in machine learning and development
          </p>
        </div>

        <div className="max-w-4xl mx-auto space-y-8">
          {experiences.map((exp, index) => <div key={index} className="relative pl-8 pb-8 border-l-2 border-primary/30 last:pb-0 animate-slide-in-left" style={{
          animationDelay: `${index * 0.2}s`
        }}>
              {/* Timeline dot */}
              <div className="absolute left-[-9px] top-0 w-4 h-4 bg-primary rounded-full border-4 border-background"></div>

              <div className="bg-card border border-border rounded-2xl p-6 hover:bg-card-hover transition-all duration-300 ml-4">
                <div className="flex items-start justify-between mb-4 flex-wrap gap-2">
                  <div>
                    <h3 className="text-xl font-bold mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-primary">
                      <Briefcase className="w-4 h-4" />
                      <span className="font-medium">{exp.company}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span className="text-sm">{exp.period}</span>
                  </div>
                </div>

                <p className="text-muted-foreground mb-4">{exp.description}</p>

                <div className="flex flex-wrap gap-2">
                  {exp.skills.map(skill => <span key={skill} className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm font-medium">
                      {skill}
                    </span>)}
                </div>
              </div>
            </div>)}
        </div>
      </div>
    </section>;
};
export default Experience;