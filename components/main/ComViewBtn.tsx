"use client";

import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import SideBar from "./Sidebar";
import Btn from "../lib/Btn";

const ComViewBtn = () => {
  const [copied, setCopied] = useState(false);

  // Safe Prism highlighting
  useEffect(() => {
    const highlight = () => {
      if (typeof window !== "undefined" && Prism) {
        Prism.highlightAll();
      }
    };

    highlight();

    if (copied) {
      const timer = setTimeout(highlight, 100);
      return () => clearTimeout(timer);
    }
  }, [copied]);

  const code = `import React, { FC } from 'react';

interface BtnProps {
  text: string;
  variant?: 'filled' | 'outline' | '3d' | 'glow' | 'filling' | 'leftbar' | 'default';
  className?: string;
  image?: string;
  onClick?: () => void;
}

const Btn: FC<BtnProps> = ({ text, variant, className = '', image, onClick }) => {
  // ...button code
};

export default Btn;`;

  const handleCopy = () => {
    navigator.clipboard.writeText(code.trim());
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex w-full min-h-screen bg-gray-950 text-gray-100">
      {/* Fixed Sidebar - Starts 20px below top nav */}
      <div className="fixed top-0 w-64  z-40  overflow-y-auto mt-20">
        <SideBar />
      </div>

      {/* Main Scrollable Content - Padded to avoid top nav */}
      <div className="flex-1 ml-64 min-h-screen overflow-y-auto pt-5">
        <div className="flex flex-col items-center w-full max-w-[800px] mx-auto px-4 sm:px-6 lg:px-10 py-8 lg:py-12 space-y-8">
          {/* Title */}
          <h1 className="text-3xl lg:text-4xl font-bold mb-2 text-center">Button Component</h1>
          <p className="text-gray-400 mb-8 text-center max-w-2xl">
            A minimal interactive button showcase. Each button variant is displayed below,
            followed by the complete code with syntax highlighting using PrismJS.
          </p>

          {/* Preview Section */}
          <div className="border border-gray-800 bg-gray-900/70 rounded-xl p-6 lg:p-8 shadow-md w-full overflow-x-auto">
            <h2 className="text-xl font-semibold mb-4 text-center">Preview</h2>
            <div className="flex flex-wrap justify-center gap-4 p-4">
              <Btn text="Filled" variant="filled" />
              <Btn text="Outline" variant="outline" />
              <Btn text="3D" variant="3d" />
              <Btn text="Glow" variant="glow" />
              <Btn text="Filling" variant="filling" />
              <Btn text="Leftbar" variant="leftbar" />
            </div>
          </div>

          {/* Source Code Section */}
          <div className="relative border border-gray-800 bg-[#0b0b0b] rounded-xl p-4 lg:p-6 shadow-md w-full">
            <p className="text-gray-100 text-sm mb-2 text-center">
              Copy the source code<br />
              <span className="text-gray-400 text-xs">components/ui/Btn.tsx</span>
            </p>

            <button
              onClick={handleCopy}
              className="absolute top-4 right-4 text-sm border border-gray-700 px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
            >
              {copied ? "Copied!" : "Copy"}
            </button>

            <div className="max-h-[500px] overflow-y-auto rounded-lg bg-[#0b0b0b] p-4 font-mono text-sm">
              <pre className="language-jsx !m-0">
                <code className="language-jsx">{code.trim()}</code>
              </pre>
            </div>
          </div>

          {/* Enhanced Props Table - NO SHAKE, NO SCROLLBAR */}
          <div className="border border-gray-800 bg-gray-900/50 backdrop-blur-sm rounded-xl p-4 lg:p-6 w-full overflow-x-auto">
            <h2 className="text-2xl font-bold mb-6 text-center bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Props
            </h2>

            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse min-w-[600px]">
                <thead>
                  <tr className="border-b border-gray-700">
                    <th className="px-4 py-3 text-sm font-semibold text-gray-300 uppercase tracking-wider">Prop</th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-300 uppercase tracking-wider">Type</th>
                    <th className="px-4 py-3 text-sm font-semibold text-gray-300 uppercase tracking-wider">Description</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-800">
                  {[
                    {
                      prop: "text",
                      type: "string",
                      desc: "The text displayed inside the button.",
                    },
                    {
                      prop: "variant",
                      type: (
                        <div className="flex flex-wrap gap-1">
                          {['filled', 'outline', '3d', 'glow', 'filling', 'leftbar', 'default'].map((v) => (
                            <span
                              key={v}
                              className="px-2 py-1 text-xs font-mono bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-md shadow-sm"
                            >
                              {v}
                            </span>
                          ))}
                        </div>
                      ),
                      desc: "Determines the button style.",
                    },
                    {
                      prop: "className",
                      type: "string",
                      desc: "Additional CSS classes to customize the button.",
                    },
                    {
                      prop: "image",
                      type: "string",
                      desc: "Optional image/icon URL to display inside the button.",
                    },
                    {
                      prop: "onClick",
                      type: <code className="text-xs">{"() => void"}</code>,
                      desc: "Function called when the button is clicked.",
                    },
                  ].map((row, idx) => (
                    <tr
                      key={idx}
                      className="group transition-all duration-200 hover:bg-gradient-to-r hover:from-gray-800/70 hover:to-gray-800/50"
                    >
                      <td className="px-4 py-4 pl-8 border-l-4 border-l-transparent group-hover:border-l-blue-500 transition-colors">
                        <code className="bg-gray-800/80 text-cyan-400 px-2 py-1 rounded text-sm font-medium">
                          {row.prop}
                        </code>
                      </td>
                      <td className="px-4 py-4">
                        {typeof row.type === "string" ? (
                          <code className="bg-gray-800/80 text-emerald-400 px-2 py-1 rounded text-sm font-medium">
                            {row.type}
                          </code>
                        ) : (
                          row.type
                        )}
                      </td>
                      <td className="px-4 py-4 text-gray-300 text-sm leading-relaxed">
                        {row.desc}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Footer */}
          <footer className="w-full text-gray-400 text-sm text-center py-4 border-t border-gray-800 mt-8">
            © 2025 Dracarys Components. All rights reserved.
          </footer>
        </div>
      </div>
    </div>
  );
};

export default ComViewBtn;