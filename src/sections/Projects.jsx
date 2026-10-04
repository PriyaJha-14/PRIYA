import { ArrowUpRight, Github } from "lucide-react";
import { AnimatedBorderButton } from "@/components/AnimatedBorderButton";

const projects = [
  {
    title: "Google Play Store Data Visualization",
    description:
      "Built six interactive Plotly visualizations to analyze Google Play Store data, uncovering category trends, geographic patterns, growth trends, and app performance.",
    tags: ["Python", "Pandas", "NumPy", "Plotly", "Jupyter"],
    github:
      "https://github.com/PriyaJha-14/PriyaJha-14-Google_play-store_data_analytics",
  },

  {
    title: "Diwali Sales Analysis",
    description:
      "Analyzed 11,251 Diwali sales transactions to identify valuable customer segments, purchasing patterns, and product trends, followed by business recommendations.",
    tags: ["Python", "Pandas", "Matplotlib", "Seaborn", "EDA"],
    github:
      "https://github.com/PriyaJha-14/Diwali_Sales_Analysis",
  },

  {
    title: "E-Commerce Sales Dashboard",
    description:
      "Built an interactive Power BI dashboard to analyze sales, profit, quantity, payment modes, and product categories using Power Query, DAX, slicers, and cross-filtering.",
    tags: ["Power BI", "DAX", "Power Query"],
    github:
      "https://github.com/PriyaJha-14/E-commerce_Sales_Dashboard_Powerbi",
  },

  {
    title: "Retail Sales Analysis",
    description:
      "Built a retail sales database and used SQL to clean, explore, and analyze sales data while answering real business questions through analytical queries.",
    tags: ["SQL", "PostgreSQL", "EDA"],
    github:
      "https://github.com/PriyaJha-14/Sql_retail_sales_analysis",
  },

  {
    title: "Customer Shopping Behavior Analysis",
    description:
      "Analyzed 3,900 customer transactions to uncover spending patterns, customer segments, product preferences, and subscription behavior to support strategic business decisions.",
    tags: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "Power BI",
      "EDA",
    ],
    github: "https://github.com/PriyaJha-14/Customer_Trend_Data_Analysis",
  },
];

export const Projects = () => {
  return (
    <section
      id="projects"
      className="py-32 relative overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />

      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">

          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>

          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Turning data into
            <span className="font-serif italic font-normal text-white">
              {" "}
              meaningful insights.
            </span>
          </h2>

          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A selection of my data analytics projects covering SQL,
            Python, exploratory data analysis, data visualization,
            and Power BI dashboards.
          </p>

        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">

          {projects.map((project, idx) => (
            <div
              key={project.title}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{
                animationDelay: `${(idx + 1) * 100}ms`,
              }}
            >

              {/* Project Visual Header */}
              <div className="relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 via-card to-card">

                {/* Decorative Data Visualization */}
                <div className="absolute inset-0 flex items-center justify-center">

                  <div className="grid grid-cols-6 items-end gap-2 h-24 opacity-40 group-hover:opacity-70 transition-opacity duration-500">

                    <div
                      className="w-4 bg-primary/40 rounded-t"
                      style={{ height: "35%" }}
                    />

                    <div
                      className="w-4 bg-primary/50 rounded-t"
                      style={{ height: "60%" }}
                    />

                    <div
                      className="w-4 bg-primary/60 rounded-t"
                      style={{ height: "45%" }}
                    />

                    <div
                      className="w-4 bg-primary/70 rounded-t"
                      style={{ height: "80%" }}
                    />

                    <div
                      className="w-4 bg-primary/80 rounded-t"
                      style={{ height: "65%" }}
                    />

                    <div
                      className="w-4 bg-primary rounded-t"
                      style={{ height: "95%" }}
                    />

                  </div>

                </div>

                {/* Gradient Overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-card via-card/40 to-transparent"
                />

                {/* Project Number */}
                <div className="absolute top-5 left-6">

                  <span className="text-xs font-medium tracking-widest text-primary">
                    PROJECT {String(idx + 1).padStart(2, "0")}
                  </span>

                </div>

                {/* GitHub Button */}
                <div className="absolute top-5 right-6">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${project.title} on GitHub`}
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all duration-300 inline-flex"
                  >
                    <Github className="w-5 h-5" />
                  </a>

                </div>

              </div>

              {/* Project Content */}
              <div className="p-6 space-y-4">

                {/* Title */}
                <div className="flex items-start justify-between gap-4">

                  <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>

                  <ArrowUpRight
                    className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0"
                  />

                </div>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {project.description}
                </p>

                {/* Technology Tags */}
                <div className="flex flex-wrap gap-2">

                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}

                </div>

                {/* GitHub Link */}
                <div className="pt-2">

                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    View Project
                    <ArrowUpRight className="w-4 h-4" />
                  </a>

                </div>

              </div>

            </div>
          ))}

        </div>

        {/* View All Projects CTA */}
        <div className="text-center mt-12 animate-fade-in animation-delay-500">

          <a
            href="https://github.com/PriyaJha-14"
            target="_blank"
            rel="noopener noreferrer"
          >
            <AnimatedBorderButton>
              View All Projects
              <ArrowUpRight className="w-5 h-5" />
            </AnimatedBorderButton>
          </a>

        </div>

      </div>
    </section>
  );
};