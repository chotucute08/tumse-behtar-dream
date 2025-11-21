import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

interface LyricsSectionProps {
  title?: string;
  lines: string[];
  variant?: "intro" | "verse" | "chorus" | "outro";
  delay?: number;
}

export const LyricsSection = ({ 
  title, 
  lines, 
  variant = "verse",
  delay = 0 
}: LyricsSectionProps) => {
  const [visibleLines, setVisibleLines] = useState<number[]>([]);

  useEffect(() => {
    const timeouts: NodeJS.Timeout[] = [];
    
    lines.forEach((_, index) => {
      const timeout = setTimeout(() => {
        setVisibleLines((prev) => [...prev, index]);
      }, delay + index * 1000);
      
      timeouts.push(timeout);
    });

    return () => timeouts.forEach(clearTimeout);
  }, [lines, delay]);

  const getVariantStyles = () => {
    switch (variant) {
      case "intro":
        return "text-5xl md:text-7xl font-serif glow-text";
      case "chorus":
        return "text-4xl md:text-6xl font-bold glow-text";
      case "outro":
        return "text-2xl md:text-4xl font-serif italic";
      default:
        return "text-2xl md:text-4xl font-serif";
    }
  };

  return (
    <section className="min-h-screen flex flex-col items-center justify-center px-6 py-20">
      {title && (
        <h2 className="text-xl md:text-2xl text-muted-foreground mb-12 animate-fade-in">
          {title}
        </h2>
      )}
      
      <div className="max-w-4xl w-full space-y-8">
        {lines.map((line, index) => (
          <div
            key={index}
            className={cn(
              "transition-all duration-1000 transform",
              getVariantStyles(),
              visibleLines.includes(index)
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-10 scale-95"
            )}
            style={{
              animationDelay: `${index * 0.3}s`,
            }}
          >
            {variant === "chorus" && (
              <span className="inline-block animate-zoom-glow">
                {line}
              </span>
            )}
            {variant !== "chorus" && line}
          </div>
        ))}
      </div>
    </section>
  );
};
