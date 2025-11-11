'use client';
import React from "react";
import Btn from "../lib/Btn";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { FlipWords } from "../ui/flip-words";
import { ThreeDCardDemo } from "../sub/card";

interface LandingProps {
  setActivePage: React.Dispatch<
    React.SetStateAction<"landing" | "comview" | "docs" | "template">
  >;
}

const Landing: React.FC<LandingProps> = ({ setActivePage }) => {
  const words = ["faster", "smart", "better", "easy", "beautiful", "modern"];

  return (
    <div className="flex flex-col min-h-[100vh] bg-[#0b0c10] text-white">

      {/* HERO SECTION */}
      <section className="flex flex-col lg:flex-row items-center justify-between w-full px-16 py-24 lg:py-32 gap-12">
        
        {/* Left Side */}
        <div className="flex-1 flex flex-col gap-8 text-left">
          <h1 className="text-6xl lg:text-7xl font-extrabold leading-tight bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 bg-clip-text text-transparent">
            <EncryptedText
              text="Welcome to DRACARYS"
              encryptedClassName="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 text-transparent bg-clip-text"
              revealedClassName="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text"
              revealDelayMs={40}
            />
          </h1>

          <div className="text-5xl lg:text-6xl font-semibold">
            <span>Build </span>
            <FlipWords className="text-blue-400 font-bold" words={words} />
            <br />
            <span>websites with DRACARYS</span>
          </div>

          <p className="text-gray-400 text-lg max-w-xl leading-relaxed">
            Explore our collection of reusable and customizable components
            designed to help developers move faster and build modern interfaces.
          </p>

          <div className="flex gap-6 mt-4">
            <Btn text="Browse Components" variant="filled" />
            <Btn text="Documentation" variant="outline" />
          </div>
        </div>

        {/* Right Side */}
        <div className="flex-1 flex justify-center items-center">
          <div className="w-[380px] h-[380px] lg:w-[450px] lg:h-[450px]">
            <ThreeDCardDemo />
          </div>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="w-full py-24 px-10 flex flex-col items-center bg-[#0e1015]">
        <h2 className="text-4xl font-bold text-white mb-16 text-center">
          ⚡ Key Features
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-6xl w-full">
          {[
            {
              title: "Reusable Components",
              desc: "Save time with prebuilt UI elements designed for flexibility.",
            },
            {
              title: "Easy Customization",
              desc: "Modify themes, layouts, and styles to match your project.",
            },
            {
              title: "Developer Friendly",
              desc: "Clean structure, TypeScript support, and clear documentation.",
            },
          ].map((card, i) => (
            <div
              key={i}
              className="p-8 border border-gray-700 rounded-2xl bg-gray-900/40 shadow-sm 
              transition-transform hover:-translate-y-2 hover:shadow-2xl hover:border-blue-500 hover:bg-gray-900/60 cursor-pointer text-center"
            >
              <h3 className="font-semibold text-xl text-white mb-3">{card.title}</h3>
              <p className="text-sm text-gray-400">{card.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* FOOTER */}
      <footer className="text-sm text-gray-500 text-center py-8 border-t border-gray-800">
        © {new Date().getFullYear()} DRACARYS — All rights reserved.
      </footer>
    </div>
  );
};

export default Landing;
