'use client';

import { PixelBackground } from "@/components/ui/pixel-background";

const PixelBackgroundDemo = () => {
  return (
    <div className="relative min-h-screen">
      {/* Pixel Background */}
      <PixelBackground 
        pixelCount={80}
        color="#888888"
        speed={15}
        className="z-0"
      />
      
      {/* Content */}
      <div className="relative z-10 flex items-center justify-center min-h-screen">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-4">Pixel Animation Background</h1>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Modern animated pixels moving around
          </p>
        </div>
      </div>
    </div>
  );
};

export { PixelBackgroundDemo }; 