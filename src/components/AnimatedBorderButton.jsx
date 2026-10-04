import { Download } from "lucide-react";

// Path of your resume inside the "public" folder.
// Change the file name here if yours is different.
const RESUME_PATH = "/Priya_Jha_Resume.pdf";

export const AnimatedBorderButton = ({
  children,
  href,
  variant, // use variant="resume" for the Download Resume button
  className = "",
  ...props
}) => {
  const isResume = variant === "resume";
  const link = isResume ? RESUME_PATH : href;

  // Renders a link (<a>) when there is a link, otherwise a normal <button>
  const Component = link ? "a" : "button";

  // Resume opens in a new tab so visitors can read it and save it
  const resumeProps = isResume
    ? { target: "_blank", rel: "noopener noreferrer" }
    : {};

  return (
    <Component
      href={link}
      className={`relative inline-block text-center bg-transparent border border-border 
        text-foreground hover:border-primary/50 transition-all 
        duration-1000 focus:outline-none focus-visible:ring-2 
        focus-visible:ring-primary focus-visible:ring-offset-2 
        disabled:opacity-50 disabled:cursor-not-allowed group 
        px-8 py-4 text-lg font-medium rounded-full overflow-visible 
        animated-border ${className}`}
      {...resumeProps}
      {...props}
    >
      {/* Animated SVG Border */}
      <svg
        className="absolute left-0 top-0 w-full h-full pointer-events-none download-resume-border"
        viewBox="0 0 200 60"
        preserveAspectRatio="none"
        style={{ overflow: "visible" }}
      >
        <path
          d="M 30,1 A 29,29 0 0 0 1,30 L 1,30 A 29,29 0 0 0 30,59 L 170,59 A 29,29 0 0 0 199,30 L 199,30 A 29,29 0 0 0 170,1 Z"
          fill="none"
          stroke="var(--color-primary)"
          strokeWidth="2"
          strokeDasharray="400 550"
          strokeDashoffset="400"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="animated-border-path"
        />
      </svg>

      <span className="relative z-10 flex items-center justify-center gap-2">
        {isResume ? (
          <>
            <Download className="w-5 h-5" />
            Download Resume
          </>
        ) : (
          children
        )}
      </span>
    </Component>
  );
};