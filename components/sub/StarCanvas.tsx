"use client";

import React, { useRef, useState, useEffect, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import "../../styles/globals.css";
import { Vortex } from "@/components/ui/vortex";

const StarBackground = (props) => {
  const ref = useRef(null);
  const [stars, setStars] = useState(null);

  useEffect(() => {
    const arr = new Float32Array(6000);
    for (let i = 0; i < arr.length; i += 3) {
      let x = Math.random() * 10 - 5;
      let y = Math.random() * 10 - 5;
      let z = Math.random() * 10 - 5;
      const len = Math.sqrt(x * x + y * y + z * z) || 1;
      arr[i] = (x / len) * 3;
      arr[i + 1] = (y / len) * 3;
      arr[i + 2] = (z / len) * 3;
    }
    setStars(arr);
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 40;
      ref.current.rotation.y += delta / 50;
    }
  });

  if (!stars) return null;

  return (
    <group ref={ref}>
      <Points positions={stars} stride={3} frustumCulled {...props}>
        <PointMaterial transparent color="#ffffff" size={0.015} sizeAttenuation depthWrite={false} opacity={0.9} />
      </Points>

      <Points positions={stars} stride={3} frustumCulled>
        <PointMaterial transparent color="#ff5fc0" size={0.008} sizeAttenuation depthWrite={false} opacity={0.6} toneMapped={false} />
      </Points>

      <Points positions={stars} stride={3} frustumCulled>
        <PointMaterial transparent color="#5cf0ff" size={0.008} sizeAttenuation depthWrite={false} opacity={0.6} toneMapped={false} />
      </Points>
    </group>
  );
};

const StarCanvas = () => (
  <div className="relative w-full h-full fixed inset-0 overflow-hidden bg-black">
    {/* Canvas background */}
    <Canvas camera={{ position: [0, 0, 1] }} gl={{ antialias: true }} className="absolute inset-0 z-0">
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>

    {/* Vortex on top */}
    <div className="absolute inset-0 z-10">
      <Vortex
        backgroundColor="transparent"
        rangeY={800}
        particleCount={500}
        baseHue={120}
        className="flex items-center justify-center w-full h-full"
      />
    </div>
  </div>
);

export default StarCanvas;
