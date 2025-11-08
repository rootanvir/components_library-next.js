"use client";

import React, { useRef, useState, Suspense } from "react";
import Image from "next/image";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import "../../styles/globals.css";

const StarBackground = (props: any) => {
  const ref = useRef<any>(null);

  const [stars] = useState(() => {
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
    return arr;
  });

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.x += delta / 40;
      ref.current.rotation.y += delta / 50;
    }
  });

  return (
    <group ref={ref}>
      <Points positions={stars} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#ffffff"
          size={0.015}
          sizeAttenuation
          depthWrite={false}
          opacity={0.9}
        />
      </Points>

      <Points positions={stars} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#ff5fc0"
          size={0.008}
          sizeAttenuation
          depthWrite={false}
          opacity={0.6}
          toneMapped={false}
        />
      </Points>

      <Points positions={stars} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#5cf0ff"
          size={0.008}
          sizeAttenuation
          depthWrite={false}
          opacity={0.6}
          toneMapped={false}
        />
      </Points>
    </group>
  );
};

const StarCanvas = () => (
  <div className="w-full h-full fixed inset-0 z-0 overflow-hidden bg-black">
    {/* === Star Field === */}
    <Canvas
      camera={{ position: [0, 0, 1] }}
      gl={{ antialias: true }}
      className="absolute inset-0 z-0"
    >
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>

    {/* === Galaxy Images (Above Canvas) === */}
    <div className="pointer-events-none absolute inset-0 z-10">
      {/* Left */}
      <div className="absolute left-8 top-1/2 -translate-y-1/2 w-[180px] h-[180px] opacity-60">
        <Image
          src="/gif/galaxy1.gif"
          alt="galaxy-left"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Right */}
      <div className="absolute right-8 top-1/2 -translate-y-1/2 w-[180px] h-[180px] opacity-60">
        <Image
          src="/gif/galaxy2.gif"
          alt="galaxy-right"
          fill
          className="object-contain"
          priority
        />
      </div>

      {/* Bottom */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-[200px] h-[200px] opacity-60">
        <Image
          src="/gif/galaxy3.gif"
          alt="galaxy-bottom"
          fill
          className="object-contain"
          priority
        />
      </div>
    </div>
  </div>
);

export default StarCanvas;
