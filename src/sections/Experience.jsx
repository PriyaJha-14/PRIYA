const experiences = [
  {
    period: "May 2026 – Jun 2026",
    role: "Data Analytics Intern",
    company: "ElevanceSkills",
    description:
      "Worked on data analytics projects involving the Google Play Store dataset. Cleaned and analyzed data using Python and Pandas, and created interactive Plotly visualizations to identify trends, patterns, and insights.",
    technologies: ["Python", "Pandas", "NumPy", "Plotly", "Jupyter"],
    current: false,
  },
  {
    period: "Hands-on Projects",
    role: "Data Analyst Projects",
    company: "Personal & Academic Projects",
    description:
      "Developed end-to-end data analytics projects covering exploratory data analysis, SQL analysis, customer behavior, retail sales, and interactive business dashboards.",
    technologies: ["SQL", "Python", "Pandas", "Power BI", "DAX"],
    current: true,
  },
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 relative overflow-hidden">
      {/* Background Glow */}
      <div
        className="absolute top-1/2 left-1/4 w-96 h-96
        bg-primary/5 rounded-full blur-3xl -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <span
            className="text-secondary-foreground text-sm
            font-medium tracking-wider uppercase animate-fade-in"
          >
            My Journey
          </span>

          <h2
            className="text-4xl md:text-5xl font-bold
            mt-4 mb-6 animate-fade-in animation-delay-100
            text-secondary-foreground"
          >
            Building my career in{" "}
            <span className="font-serif italic font-normal text-white">
              data analytics.
            </span>
          </h2>

          <p
            className="text-muted-foreground
            animate-fade-in animation-delay-200"
          >
            My journey through data analytics, combining practical experience
            and hands-on projects to solve real-world problems using data.
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Timeline Line */}
          <div
            className="timeline-glow absolute left-0 md:left-1/2
            top-0 bottom-0 w-[2px]
            bg-gradient-to-b from-primary/70 via-primary/30 to-transparent
            md:-translate-x-1/2
            shadow-[0_0_25px_rgba(32,178,166,0.8)]"
          />

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((exp, idx) => (
              <div
                key={idx}
                className="relative grid md:grid-cols-2 gap-8 animate-fade-in"
                style={{
                  animationDelay: `${(idx + 1) * 150}ms`,
                }}
              >
                {/* Timeline Dot */}
                <div
                  className="absolute left-0 md:left-1/2 top-0
                  w-3 h-3 bg-primary rounded-full
                  -translate-x-1/2 ring-4 ring-background z-10"
                >
                  {exp.current && (
                    <span
                      className="absolute inset-0 rounded-full
                      bg-primary animate-ping opacity-75"
                    />
                  )}
                </div>

                {/* Content: cards alternate sides, but all text stays left-aligned */}
                <div
                  className={`pl-8 md:pl-0 ${
                    idx % 2 === 0 ? "md:pr-16" : "md:col-start-2 md:pl-16"
                  }`}
                >
                  <div
                    className="glass p-6 rounded-2xl text-left
                    border border-primary/30
                    hover:border-primary/50
                    transition-all duration-500"
                  >
                    {/* Period */}
                    <span className="text-sm text-primary font-medium">
                      {exp.period}
                    </span>

                    {/* Role */}
                    <h3 className="text-xl font-semibold mt-2">{exp.role}</h3>

                    {/* Company */}
                    <p className="text-muted-foreground">{exp.company}</p>

                    {/* Description */}
                    <p className="text-sm text-muted-foreground mt-4 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2 mt-4">
                      {exp.technologies.map((tech, techIdx) => (
                        <span
                          key={techIdx}
                          className="px-3 py-1 bg-surface
                          text-xs rounded-full
                          text-muted-foreground"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};