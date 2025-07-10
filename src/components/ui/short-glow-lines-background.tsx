"use client"

import React, { useRef, useEffect } from "react";

export const ShortGlowLinesBackground: React.FC<{
  className?: string;
  lineCount?: number;
}> = ({ className = "", lineCount = 6 }) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const animationRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    let ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = canvas.width = canvas.offsetWidth;
    let height = canvas.height = canvas.offsetHeight;

    const handleResize = () => {
      width = canvas.width = canvas.offsetWidth;
      height = canvas.height = canvas.offsetHeight;
      ctx = canvas.getContext("2d");
    };
    window.addEventListener("resize", handleResize);

    // Line parameters
    const lines = Array.from({ length: lineCount }).map((_, i) => {
      const isBlue = i % 2 === 0;
      const angle = isBlue ? 0 : (Math.random() > 0.5 ? Math.PI / 6 : -Math.PI / 6); // 0 or diagonal
      const length = 40 + Math.random() * 40;
      const y = 30 + Math.random() * (height - 60);
      const xStart = Math.random() * width;
      const speed = 0.2 + Math.random() * 0.15;
      return {
        color: isBlue ? "#3b82f6" : "#ef4444",
        angle,
        length,
        y,
        xStart,
        speed,
        thickness: 2,
        glow: 16,
        offset: Math.random() * 1000,
      };
    });

    function draw() {
      if (!ctx) return;
      ctx.clearRect(0, 0, width, height);
      // Draw grid (optional, subtle)
      ctx.save();
      ctx.strokeStyle = "rgba(255,255,255,0.04)";
      ctx.lineWidth = 1;
      for (let x = 0; x < width; x += 32) {
        ctx.beginPath();
        ctx.moveTo(x, 0);
        ctx.lineTo(x, height);
        ctx.stroke();
      }
      for (let y = 0; y < height; y += 32) {
        ctx.beginPath();
        ctx.moveTo(0, y);
        ctx.lineTo(width, y);
        ctx.stroke();
      }
      ctx.restore();

      // Animate lines
      const now = performance.now() / 1000;
      lines.forEach((line, idx) => {
        if (!ctx) return;
        ctx.save();
        ctx.shadowColor = line.color;
        ctx.shadowBlur = line.glow;
        ctx.strokeStyle = line.color;
        ctx.lineWidth = line.thickness;
        ctx.globalAlpha = 0.7;
        // Calculate position
        let x = (line.xStart + ((now * 60 + line.offset) * line.speed)) % (width + line.length) - line.length;
        let y = line.y;
        // Fade in/out at ends
        let fade = 1;
        if (x < 20) fade = x / 20;
        if (x > width - 20) fade = (width - x) / 20;
        ctx.globalAlpha *= Math.max(0, Math.min(1, fade));
        // Draw line
        ctx.beginPath();
        ctx.moveTo(x, y);
        ctx.lineTo(x + Math.cos(line.angle) * line.length, y + Math.sin(line.angle) * line.length);
        ctx.stroke();
        ctx.restore();
      });
      animationRef.current = requestAnimationFrame(draw);
    }
    draw();
    return () => {
      window.removeEventListener("resize", handleResize);
      if (animationRef.current) cancelAnimationFrame(animationRef.current);
    };
  }, [lineCount]);

  return (
    <div className={`absolute inset-0 w-full h-full pointer-events-none ${className}`}>
      <canvas
        ref={canvasRef}
        style={{ width: "100%", height: "100%", display: "block" }}
        width={800}
        height={600}
      />
    </div>
  );
}; 