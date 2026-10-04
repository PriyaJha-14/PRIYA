import {
  Database,
  BarChart3,
  Search,
  Lightbulb,
  FileSpreadsheet,
} from "lucide-react";

const highlights = [
  {
    icon: Database,
    title: "Data Cleaning",
    description:
      "Preparing messy datasets with Python, Pandas, and Power Query so they are accurate and analysis-ready.",
  },
  {
    icon: Search,
    title: "Exploratory Analysis",
    description:
      "Exploring sales, customer, and app data to uncover trends, patterns, relationships, and opportunities.",
  },
  {
    icon: BarChart3,
    title: "Visualization & BI",
    description:
      "Creating clear visualizations with Plotly and interactive Power BI dashboards using DAX and slicers.",
  },
  {
    icon: FileSpreadsheet,
    title: "SQL & Data Querying",
    description:
      "Using SQL to extract, filter, join, aggregate, and analyze data to answer real business questions.",
  },
  {
    icon: Lightbulb,
    title: "Business Insights",
    description:
      "Turning analytical findings into clear, actionable insights that can support better business decisions.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* Left Column - About Me */}
          <div className="space-y-8">

            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Finding stories in data,
              <span className="font-serif italic font-normal text-white">
                {" "}
                one insight at a time.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">

              <p>
                I'm Priya, a B.Sc. Computer Science graduate from Mumbai,
                passionate about turning raw data into meaningful insights and
                building data-driven solutions.
              </p>

              <p>
                I completed a Data Analytics internship at ElevanceSkills, where
                I built interactive visualizations on the Google Play Store
                dataset using Python, Pandas, and Plotly. Alongside that, I've
                worked on hands-on projects in exploratory data analysis, SQL,
                and Power BI, covering sales, customer behavior, and business
                performance.
              </p>

              <p>
                My toolkit includes SQL, Python, Excel, and Power BI. I'm
                currently looking for an entry-level Data Analyst opportunity
                where I can apply my analytical skills, continue learning, and
                contribute from day one.
              </p>

            </div>

            {/* Personal Statement */}
            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to make data simple to understand — turning numbers
                into clear insights that help teams make confident, informed
                decisions."
              </p>
            </div>

          </div>

          {/* Right Column - Data Analyst Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">

            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{
                  animationDelay: `${(idx + 1) * 100}ms`,
                }}
              >

                {/* Icon */}
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20 transition-colors">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>

              </div>
            ))}

          </div>

        </div>
      </div>
    </section>
  );
};