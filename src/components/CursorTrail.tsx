import { useEffect, useState } from "react";

interface Position {
  x: number;
  y: number;
}

export const CursorTrail = () => {
  const [cursorPos, setCursorPos] = useState<Position>({ x: 0, y: 0 });
  const [trails, setTrails] = useState<Position[]>([]);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
      
      setTrails((prev) => {
        const newTrail = { x: e.clientX, y: e.clientY };
        const updated = [newTrail, ...prev].slice(0, 8);
        return updated;
      });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <>
      <div
        className="custom-cursor"
        style={{
          left: `${cursorPos.x}px`,
          top: `${cursorPos.y}px`,
          transform: "translate(-50%, -50%)",
        }}
      />
      {trails.map((trail, index) => (
        <div
          key={index}
          className="cursor-trail"
          style={{
            left: `${trail.x}px`,
            top: `${trail.y}px`,
            transform: "translate(-50%, -50%)",
            opacity: 0.6 - index * 0.08,
          }}
        />
      ))}
    </>
  );
};
