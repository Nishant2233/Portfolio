"use client"

import React, { useRef, useEffect } from "react";

export const ZigzagLightsBackground: React.FC<{
  className?: string;
  lineCount?: number;
}> = ({ className = "", lineCount = 3 }) => {
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

    // Zigzag line parameters
    const lines = Array.from({ length: lineCount }).map((_, i) => ({
      color: i % 2 === 0 ? "#3b82f6" : "#ef4444", // blue or red
      y: (height / (lineCount + 1)) * (i + 1),
      phase: Math.random() * Math.PI * 2,
      speed: 0.8 + Math.random() * 0.5,
      amplitude: 18 + Math.random() * 10,
      thickness: 2,
      glow: 16,
    }));

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
        ctx.beginPath();
        for (let x = 0; x <= width; x += 8) {
          const freq = 1.2 + idx * 0.2;
          const phase = line.phase + now * line.speed;
          const y =
            line.y +
            Math.sin(phase + x * 0.04 * freq) * line.amplitude * Math.sin(phase + x * 0.01 + idx);
          if (x === 0) ctx.moveTo(x, y);
          else ctx.lineTo(x, y);
        }
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