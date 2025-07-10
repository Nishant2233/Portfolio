"use client";
import React from "react";
import { cn } from "@/lib/utils";

// Pure CSS shimmer/reveal effect (no three.js, no canvas)
export const CanvasRevealEffect = ({
  animationSpeed = 2,
  containerClassName,
  showGradient = true,
}: {
  animationSpeed?: number;
  containerClassName?: string;
  showGradient?: boolean;
}) => {
  return (
    <div className={cn("relative w-full h-full overflow-hidden", containerClassName)}>
      {/* Shimmer effect */}
      <div className="absolute inset-0 w-full h-full pointer-events-none">
        <div
          className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"
          style={{
            animationDuration: `${animationSpeed}s`,
          }}
        />
      </div>
      {showGradient && (
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-[84%] pointer-events-none" />
      )}
      {/* Content slot for children if needed */}
      <div className="relative z-10 w-full h-full" />
    </div>
  );
};

// Add shimmer animation to global CSS if not present:
// .animate-shimmer {
//   animation: shimmer 2s linear infinite;
// }
// @keyframes shimmer {
//   0% { transform: translateX(-100%); }
//   100% { transform: translateX(100%); }
// } 