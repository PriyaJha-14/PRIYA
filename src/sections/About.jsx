import {
  Database,
  BarChart3,
  Search,
  Lightbulb,
  FileSpreadsheet,
  Github,
  ArrowUpRight,
} from "lucide-react";

const highlights = [
  {
    icon: Database,
    title: "Data Cleaning",
    description:
      "Preparing messy datasets with Python, Pandas, and Power Query so they're accurate and analysis-ready.",
  },
  {
    icon: Search,
    title: "Exploratory Analysis",
    description:
      "Digging into sales, customer, and app data to uncover trends, segments, and patterns.",
  },
  {
    icon: BarChart3,
    title: "Visualization & BI",
    description:
      "Building interactive charts with Plotly and dashboards in Power BI with DAX and slicers.",
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
      "Turning analytical findings into clear, actionable recommendations that support better decisions.",
  },
];

const projects = [
  {
    title: "Google Play Store Data Visualization",
    tag: "Internship Project · Python · Plotly",
    description:
      "Built six interactive Plotly visualizations to analyze Google Play Store data, uncovering category trends, geographic patterns, growth trends, and app performance.",
    stack: ["Python", "Pandas", "NumPy", "Plotly", "Jupyter"],
    href:
      "https://github.com/PriyaJha-14/PriyaJha-14-Google_play-store_data_analytics",
  },

  {
    title: "Diwali Sales Analysis",
    tag: "Exploratory Data Analysis",
    description:
      "Analyzed 11,251 Diwali sales transactions to identify valuable customer segments, purchasing patterns, and product trends, followed by business recommendations.",
    stack: ["Python", "Pandas", "Matplotlib", "Seaborn"],
    href: "https://github.com/PriyaJha-14/Diwali_Sales_Analysis",
  },

  {
    title: "E-commerce Sales Dashboard",
    tag: "Power BI Dashboard",
    description:
      "Built an interactive Power BI dashboard covering sales, profit, quantity, payment modes, and product categories using Power Query, DAX, slicers, and cross-filtering.",
    stack: ["Power BI", "DAX", "Power Query"],
    href:
      "https://github.com/PriyaJha-14/E-commerce_Sales_Dashboard_Powerbi",
  },

  {
    title: "Retail Sales Analysis SQL Project",
    tag: "Data Analysis · PostgreSQL",
    description:
      "Built a retail sales database and used SQL to clean, explore, and analyze sales data while answering business questions through analytical queries.",
    stack: ["SQL", "PostgreSQL", "EDA"],
    href: "https://github.com/PriyaJha-14/Sql_retail_sales_analysis",
  },

  {
    title: "Customer Shopping Behavior Analysis",
    tag: "Data Analysis",
    description:
      "Analyzed 3,900 customer transactions to uncover spending patterns, customer segments, product preferences, and subscription behavior to support strategic business decisions.",
    stack: [
      "Python",
      "Pandas",
      "NumPy",
      "SQL",
      "EDA",
      "Power BI",
      "Jupyter",
    ],
    href: "https://github.com/PriyaJha-14/Customer_Trend_Data_Analysis",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
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
                I built a series of interactive visualizations on the Google
                Play Store dataset using Python, Pandas, and Plotly. Alongside
                that, I've worked on hands-on projects in exploratory data
                analysis, SQL, and Power BI, covering sales, customer behavior,
                and profit trends.
              </p>

              <p>
                My toolkit includes SQL, Python, Excel, and Power BI. I'm
                currently looking for an entry-level Data Analyst opportunity
                where I can apply my analytical skills, continue learning, and
                contribute from day one.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "My goal is to make data simple to understand — turning numbers
                into clear insights that help teams make confident, informed
                decisions."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>

                <h3 className="text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Projects */}
        <div className="mt-24">
          <div className="flex items-end justify-between flex-wrap gap-4 mb-10 animate-fade-in">
            <div>
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                Featured Projects
              </span>

              <h3 className="text-3xl md:text-4xl font-bold mt-2 text-secondary-foreground">
                Work I've{" "}
                <span className="font-serif italic font-normal text-white">
                  built.
                </span>
              </h3>
            </div>

            <a
              href="https://github.com/PriyaJha-14"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
            >
              <Github className="w-4 h-4" />
              View all on GitHub
            </a>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {projects.map((project, idx) => (
              <a
                key={project.title}
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass rounded-2xl p-6 flex flex-col gap-4 group hover:bg-primary/5 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="text-xs text-primary font-medium mb-1">
                      {project.tag}
                    </p>

                    <h4 className="text-xl font-semibold">
                      {project.title}
                    </h4>
                  </div>

                  <ArrowUpRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 group-hover:-translate-y-1 transition-all shrink-0" />
                </div>

                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 mt-auto">
                  {project.stack.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full text-xs bg-primary/10 text-primary"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};