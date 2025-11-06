"use client"

import React, { useRef, useState, Suspense } from 'react';
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from '@react-three/drei';
import FlyingShip from './FlyingShip';

const StarBackground = (props: any) => {
  const ref = useRef<any>(null);

  const [sphere] = useState(() => {
    const arr = new Float32Array(5000);
    for (let i = 0; i < arr.length; i += 3) {
      let x = Math.random() * 2 - 1;
      let y = Math.random() * 2 - 1;
      let z = Math.random() * 2 - 1;
      let len = Math.sqrt(x*x + y*y + z*z);
      if (len === 0) len = 1; 
      arr[i]   = (x / len) * 1.2;
      arr[i+1] = (y / len) * 1.2;
      arr[i+2] = (z / len) * 1.2;
    }
    return arr;
  });

  useFrame((state, delta) => {
    if (ref.current) {
      ref.current.rotation.x -= delta / 10;
      ref.current.rotation.y -= delta / 15;
    }
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
        <PointMaterial
          transparent
          color="#3b82f6" 
          size={0.009}
          sizeAttenuation
          depthWrite={false}
          opacity={0.9}
        />
      </Points>
    </group>
  );
};

const StarCanvas = () => (
  <div className="w-full h-full fixed inset-0 z-0">
    <Canvas 
      camera={{ position: [0, 0, 1] }}
      gl={{ antialias: true, alpha: false }}
      style={{ background: '#383333ff' }} 
    >
      <Suspense fallback={null}>
        <StarBackground />
      </Suspense>
    </Canvas>

    {/* Flying spaceship behind form */}
    
  </div>
);

export default StarCanvas;
