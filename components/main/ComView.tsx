"use client";

import React, { FC, useState } from "react";
import Btn from "../lib/Btn";

interface Props {
  className?: string;
}

const ComView: FC<Props> = ({ className = "" }) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  return (
    <section className={`flex flex-col px-20 py-16 space-y-12 ${className}`}>
      <header>
        <h1 className="text-6xl font-extrabold mb-3">Button</h1>
        <p className="text-lg text-gray-400 max-w-3xl">
          A simple yet powerful button component supporting multiple variants for elegant UI design.
        </p>
      </header>

      <div>
        <h2 className="text-4xl font-semibold mb-6">Installation</h2>
        <div className="p-6 bg-gray-800/30 rounded-2xl border border-gray-700 flex flex-col md:flex-row items-center gap-6">
          <Btn text="Download" variant="filling" />
          <p className="text-lg text-gray-300 leading-relaxed">
            Save <span className="font-mono text-blue-400">Btn.tsx</span> inside your{" "}
            <span className="font-mono text-blue-400">/components/</span> directory for easy reuse.
          </p>
        </div>
      </div>

      <div className="bg-gray-800/40 rounded-2xl p-8 border border-gray-700 shadow-lg">
        <div className="flex justify-end gap-4 mb-6">
          <Btn
            text="Preview"
            variant="outline"
          />
          <Btn
            text="Code"
            variant="filled"
          />
        </div>

        <div className="bg-gray-900/60 rounded-xl p-10 min-h-[240px] flex items-center justify-center text-gray-300">
          {activeTab === "preview" ? (
            <Btn text="Button" variant="filled" />
          ) : (
            <pre className="text-left text-sm text-gray-400 bg-gray-950/50 p-4 rounded-lg w-full overflow-x-auto">
              &lt;Btn text="Button" variant="filled" /&gt;
            </pre>
          )}
        </div>
      </div>
    </section>
  );
};

export default ComView;
