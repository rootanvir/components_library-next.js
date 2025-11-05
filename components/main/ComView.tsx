"use client";

import React, { FC, useState, useEffect } from "react";
import Btn from "../lib/Btn";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css"; 
import "prismjs/components/prism-jsx";  
import Input from "../lib/Input";
import FetchDB from "@/db/fetchDB";


interface Props {
  className?: string;
}

const ComView: FC<Props> = ({ className = "" }) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");

  useEffect(() => {
    if (activeTab === "code") Prism.highlightAll();
  }, [activeTab]);

  const codeString = `<Btn text="Button" variant="filled" />`;

  return (
    <section className={`flex flex-col px-20 py-16 space-y-12 ${className}`}>
      <header>
        <h1 className="text-6xl font-extrabold mb-3">Button</h1>
        <p className="text-lg text-gray-400 max-w-3xl">
          A simple yet powerful button component supporting multiple variants for elegant UI design.
        </p>
      </header>



      <div className="bg-gray-800/40 rounded-2xl p-8 border border-gray-700 shadow-lg">
        <div className="flex justify-end gap-4 mb-6">
          <Btn
            text="Preview"
            variant={activeTab === "preview" ? "filled" : "outline"}
            onClick={() => setActiveTab("preview")}
          />
          <Btn
            text="Code"
            variant={activeTab === "code" ? "filled" : "outline"}
            onClick={() => setActiveTab("code")}
          />
        </div>

        <div className="bg-gray-900/60 rounded-xl p-10 min-h-[240px] flex items-center justify-center text-gray-300">
          {activeTab === "preview" ? (
            <Btn text="Button" variant="filled" />
          ) : (
            <pre className="language-jsx w-full rounded-lg overflow-x-auto">
              <code className="language-jsx">{codeString}</code>
            </pre>
          )}
        </div>
      </div>
      <div>
        <h2 className="text-4xl font-semibold mb-6">Installation</h2>
        <div className="p-6 bg-gray-800/30 rounded-2xl border border-gray-700 flex flex-col md:flex-row items-center gap-6">
          <Btn text="Download" variant="filling" />
          <p className="text-lg text-gray-300 leading-relaxed">
            and save <span className="font-mono text-blue-400">Btn.tsx</span> inside your{" "}
            <span className="font-mono text-blue-400">/components/</span> directory for easy reuse.
          </p>
        </div>
      </div>
      <Input  text="Search" variant="search"/>
      <Input  variant="text"/>
      <Input  variant="quantity"/>
      <Input  variant="phone"/>
      <Input />
      <Input variant="password" text="Enter password" pass={false} />
      <Input text="Location" variant="location"/>
      <Btn text="Text" variant ="filling"/>

      <FetchDB  />
    </section>
  );
};

export default ComView;
