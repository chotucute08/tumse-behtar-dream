import { useEffect } from "react";
import { CursorTrail } from "@/components/CursorTrail";
import { FloatingParticles } from "@/components/FloatingParticles";
import { MusicPlayer } from "@/components/MusicPlayer";
import { LyricsSection } from "@/components/LyricsSection";
import romanticBg from "@/assets/romantic-bg.jpg";

const Index = () => {
  useEffect(() => {
    // Smooth scroll behavior
    document.documentElement.style.scrollBehavior = "smooth";
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Background */}
      <div 
        className="fixed inset-0 z-0"
        style={{
          backgroundImage: `url(${romanticBg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background/80" />
      </div>

      {/* Cursor Effects */}
      <CursorTrail />
      
      {/* Floating Particles */}
      <FloatingParticles />
      
      {/* Music Player */}
      <MusicPlayer />

      {/* Content */}
      <div className="relative z-10">
        {/* Intro Section */}
        <LyricsSection
          variant="intro"
          lines={[
            "A Moment",
            "Frozen in Time"
          ]}
          delay={500}
        />

        {/* Verse 1 */}
        <LyricsSection
          title="Chapter One"
          variant="verse"
          lines={[
            "Your placeholder text here",
            "Line two of your story",
            "Every word a memory",
            "Every moment forever"
          ]}
          delay={1000}
        />

        {/* Verse 2 */}
        <LyricsSection
          variant="verse"
          lines={[
            "More beautiful words",
            "That paint your feelings",
            "In colors only hearts understand"
          ]}
          delay={1500}
        />

        {/* Chorus - Main Highlight */}
        <LyricsSection
          title="The Heart Speaks"
          variant="chorus"
          lines={[
            "Replace with your",
            "Most meaningful words",
            "That capture everything"
          ]}
          delay={2000}
        />

        {/* Post-Chorus */}
        <LyricsSection
          variant="verse"
          lines={[
            "Echoes of emotion",
            "Rippling through time",
            "Forever and always"
          ]}
          delay={2500}
        />

        {/* Outro */}
        <LyricsSection
          variant="outro"
          lines={[
            "💗",
            "Dedicated to the one",
            "without whom life feels incomplete"
          ]}
          delay={3000}
        />

        {/* Bottom Spacing */}
        <div className="h-32" />
      </div>

      {/* Copyright Notice */}
      <div className="fixed bottom-6 left-6 z-50 glass rounded-xl p-3 text-xs text-muted-foreground max-w-xs">
        <p>
          ⚠️ Add your own audio file to the MusicPlayer component.
          Replace placeholder text with your content.
        </p>
      </div>
    </div>
  );
};

export default Index;
