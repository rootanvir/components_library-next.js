"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";

const FlyingShip: React.FC = () => {
  const [pos, setPos] = useState({
    left: Math.random() * 80 + 10,
    bottom: -(Math.random() * 150 + 60),
    duration: Math.random() * 2 + 4, 
    key: 0,
  });

  useEffect(() => {
    const timer = setTimeout(() => {
      setPos({
        left: Math.random() * 80 + 10,
        bottom: -(Math.random() * 150 + 60),
        duration: Math.random() * 2 + 3,
        key: pos.key + 1,
      });
    }, pos.duration * 1000);

    return () => clearTimeout(timer);
  }, [pos]);

  return (
    <div
      key={pos.key}
      style={{
        position: "fixed",
        bottom: `${pos.bottom}px`,
        left: `${pos.left}vw`,
        zIndex: 50,
        animation: `flyUp ${pos.duration}s cubic-bezier(0.3, 0, 0.8, 1) forwards`, // faster acceleration
        filter: "blur(1px)",
      }}
    >
      <Image src="/gif/spaceship1.gif" width={50} height={50} alt="Spaceship" />
      <style jsx>{`
        @keyframes flyUp {
          0% {
            transform: translateY(0);
            opacity: 1;
          }
          80% {
            opacity: 1;
          }
          100% {
            transform: translateY(-120vh);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default FlyingShip;
