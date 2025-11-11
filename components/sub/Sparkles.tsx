"use client";
import React from "react";
import { SparklesCore } from "../ui/sparkles";

export function SparklesPreview() {
  return (
    <div className="relative w-full h-[50vh] overflow-hidden pointer-events-none">
      <div className="absolute inset-0">
        {/* Sparkles Core (Only particles now) */}
        <SparklesCore
          background="transparent"
          minSize={0.4}
          maxSize={1}
          particleDensity={1000}
          className="w-full h-full"
          particleColor="#60a5fa"
        />

        {/* Radial Gradient Fade for smooth blending */}
        <div className="absolute inset-0 w-full h-full bg-[#0b0c10] [mask-image:radial-gradient(600px_300px_at_top,transparent_30%,black)]"></div>
      </div>
    </div>
  );
}
