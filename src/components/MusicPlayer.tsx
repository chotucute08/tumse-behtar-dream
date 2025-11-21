import { useEffect, useRef, useState } from "react";
import { Play, Pause, Volume2, VolumeX } from "lucide-react";
import { Button } from "@/components/ui/button";

export const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const [bars, setBars] = useState<number[]>(Array(5).fill(0));
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Simulate equalizer animation
    const interval = setInterval(() => {
      if (isPlaying) {
        setBars(Array(5).fill(0).map(() => Math.random() * 100));
      } else {
        setBars(Array(5).fill(20));
      }
    }, 150);

    return () => clearInterval(interval);
  }, [isPlaying]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
      } else {
        audioRef.current.play().catch(() => {
          console.log("Autoplay blocked - user interaction required");
        });
      }
      setIsPlaying(!isPlaying);
    }
  };

  const toggleMute = () => {
    if (audioRef.current) {
      audioRef.current.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <div className="fixed top-6 right-6 z-50 glass rounded-2xl p-4 glow-box">
      <div className="flex items-center gap-3">
        <Button
          variant="ghost"
          size="icon"
          onClick={togglePlay}
          className="hover:bg-primary/20 hover:scale-110 transition-all"
        >
          {isPlaying ? (
            <Pause className="w-5 h-5 text-primary" />
          ) : (
            <Play className="w-5 h-5 text-primary" />
          )}
        </Button>

        <div className="flex items-end gap-1 h-8">
          {bars.map((height, i) => (
            <div
              key={i}
              className="w-1 bg-primary rounded-full transition-all duration-150 ease-out"
              style={{ height: `${height}%` }}
            />
          ))}
        </div>

        <Button
          variant="ghost"
          size="icon"
          onClick={toggleMute}
          className="hover:bg-primary/20 hover:scale-110 transition-all"
        >
          {isMuted ? (
            <VolumeX className="w-5 h-5 text-muted-foreground" />
          ) : (
            <Volume2 className="w-5 h-5 text-primary" />
          )}
        </Button>
      </div>

      {/* Audio element - Add your song URL here */}
      <audio ref={audioRef} loop>
        {/* <source src="/path-to-your-song.mp3" type="audio/mpeg" /> */}
      </audio>
    </div>
  );
};
