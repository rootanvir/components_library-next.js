"use client";

import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import SideBar from "./Sidebar";
import Btn from "../lib/Btn";

const ComViewBtn = () => {
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    Prism.highlightAll();
  }, []);

  const code = `
import React, { FC } from 'react';

interface BtnProps {
  text: string;
  variant?: 'filled' | 'outline' | '3d' | 'glow' | 'filling' | 'leftbar' | 'default';
  className?: string;
  image?: string;
  onClick?: () => void;
}

const Btn: FC<BtnProps> = ({ text, variant, className = '', image, onClick }) => {
  let base =
    'px-3 py-2 rounded-md cursor-pointer flex items-center justify-center gap-2 transition-all duration-150 font-medium transform';
  let btnStyle = '';

  if (variant === 'filled') btnStyle = 'bg-blue-500 text-white hover:bg-blue-600 hover:scale-105 active:scale-95 shadow-md';
  else if (variant === 'outline') btnStyle = 'border border-gray-500 text-white hover:text-black hover:bg-gray-100 hover:scale-105 active:scale-95';
  else if (variant === '3d') btnStyle = 'bg-blue-600 text-white font-semibold px-6 py-3 rounded-lg shadow-[0_6px_0_#1e40af] hover:bg-blue-700 hover:scale-105 hover:-translate-y-0.5 active:translate-y-1 active:shadow-[0_2px_0_#1e40af]';
  else if (variant === 'glow') btnStyle = 'bg-blue-600 text-white shadow-md hover:shadow-[0_0_15px_#3b82f6] hover:scale-105 active:scale-95';
  else if (variant === 'filling') btnStyle = 'relative overflow-hidden px-6 py-2 text-blue-600 font-semibold border-2 border-blue-600 rounded-md transition-all duration-200 ease-out active:scale-95 before:absolute before:inset-0 before:bg-blue-600 before:scale-x-0 before:origin-left before:transition-transform before:duration-500 before:ease-out hover:before:scale-x-100 hover:text-white before:-z-10';
  else if (variant === 'leftbar') btnStyle = 'relative px-3 py-0 flex items-center gap-1 text-gray-400 text-sm rounded-md before:content-[\'\'] before:absolute before:left-0 before:top-1/2 before:-translate-y-1/2 before:w-1 before:h-4 before:bg-blue-500 before:opacity-0 before:rounded hover:before:opacity-100 hover:scale-105 hover:text-md transition-all duration-200 hover:text-white';
  else btnStyle = 'text-gray-700 hover:scale-105 active:scale-95';

  return (
    <button onClick={onClick} className={\`\${base} \${btnStyle} \${className}\`}>
      {image && <img src={image} alt="icon" className="w-5 h-5" />}
      <span className="text-center">{text}</span>
    </button>
  );
};

export default Btn;
`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex w-full h-screen bg-gray-950 text-gray-100">
      <SideBar />

      <div className="flex-1 overflow-y-auto px-10 py-12 space-y-8">
        <h1 className="text-4xl font-bold mb-2">Button Component</h1>
        <p className="text-gray-400 mb-8">
          A minimal interactive button showcase. Each button variant is displayed below,
          followed by the complete code with syntax highlighting using PrismJS.
        </p>

        <div className="border border-gray-800 bg-gray-900/70 rounded-xl p-8 shadow-md">
          <h2 className="text-xl font-semibold mb-4">Preview</h2>
          <div className="flex flex-wrap gap-4 justify-center border border-gray-800 p-6 rounded-lg bg-gray-900">
            <Btn text="Filled" variant="filled" />
            <Btn text="Outline" variant="outline" />
            <Btn text="3D" variant="3d" />
            <Btn text="Glow" variant="glow" />
            <Btn text="Filling" variant="filling" />
            <Btn text="Leftbar" variant="leftbar" />
          </div>
        </div>

        <div className="relative border border-gray-800 bg-[#0b0b0b] rounded-xl p-4 shadow-md">
          <p className="text-gray-100 text-sm mb-2">
            Copy the source code<br />
            <span className="text-gray-400 text-xs">components/ui/Btn.tsx</span>
          </p>

          <button
            onClick={handleCopy}
            className="absolute top-4 right-4 text-sm border border-gray-700 px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700 transition"
          >
            {copied ? "Copied!" : "Copy"}
          </button>

          <div className="max-h-[500px] overflow-auto rounded-lg bg-[#0b0b0b] p-4">
            <pre className="language-jsx text-sm">
              <code className="language-jsx">{code.trim()}</code>
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComViewBtn;
