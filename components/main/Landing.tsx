'use client';
import React from "react";
import Btn from "../lib/Btn";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { FlipWords } from "../ui/flip-words";

interface LandingProps {
  setActivePage: React.Dispatch<React.SetStateAction<"landing" | "comview" | "docs" | "template">>;
}

const Landing: React.FC<LandingProps> = ({ setActivePage }) => {
  const words = ["faster", "smart", "better", "easy", "beautiful", "modern"];

  return (
    <div className="flex flex-col justify-center h-[calc(100vh-80px)] px-20 py-10 gap-20">

      {/* Main Info */}
      <div className="max-w-5xl text-left flex flex-col gap-10">
        <h1 className="text-7xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text whitespace-nowrap">
          <EncryptedText
            text="Welcome to DRACARYS"
            encryptedClassName="bg-gradient-to-r from-blue-200 via-blue-300 to-blue-400 text-transparent bg-clip-text"
            revealedClassName="bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 text-transparent bg-clip-text"
            revealDelayMs={50}
          />
        </h1>



        {/* Build {word} rest of line */}
        <div className="mt-16">
          <div className="text-6xl font-bold text-white dark:text-white">
            <span>Build </span>
            <FlipWords className="text-white font-semibold" words={words} />
            <br />
            <span>websites with DRACARYS</span>
          </div>
        </div>


        <p className="text-gray-500 text-lg max-w-xl leading-relaxed">
          Explore our collection of reusable and customizable components made for developers.
        </p>

        <div className="flex flex-wrap gap-6">
          <Btn text="Browse Components" variant="filled" />
          <Btn text="Documentation" variant="outline" />
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full flex justify-start">
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-10 max-w-5xl w-full">
          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="font-semibold mb-2">Reusable Components</h2>
            <p className="text-sm text-gray-500">
              Save time with prebuilt UI elements designed for flexibility.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="font-semibold mb-2">Easy Customization</h2>
            <p className="text-sm text-gray-500">
              Modify themes, layouts, and styles to match your project.
            </p>
          </div>

          <div className="p-6 border rounded-lg shadow-sm hover:shadow-md transition">
            <h2 className="font-semibold mb-2">Developer Friendly</h2>
            <p className="text-sm text-gray-500">
              Clean structure, TypeScript support, and well-documented setup.
            </p>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="text-sm text-gray-500 w-full text-center mt-10">
        © All rights reserved.
      </div>
    </div>
  );
};

export default Landing;
