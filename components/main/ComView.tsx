"use client";

import React, { FC, useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import SideBar from "./Sidebar";
import Btn from "../lib/Btn";

interface ComponentItem {
  id: number;
  category: string;
  variants: string;
  code: string;
}

const ComView: FC = () => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [components, setComponents] = useState<ComponentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/components");
        const json = await res.json();

        if (json.error) {
          console.error("API Error:", json.error);
          setComponents([]);
        } else {
          setComponents(json.category.button || []);
        }
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);


  useEffect(() => {
    if (activeTab === "code") Prism.highlightAll();
  }, [activeTab, components]);

  return (
    <div className="fixed flex w-full h-screen bg-gray-900 text-gray-200">
      <SideBar />

      <div className="flex-1 overflow-y-auto p-10 space-y-12">
        <header>
          <h1 className="text-6xl font-extrabold mb-3">Button Components</h1>
          <p className="text-lg text-gray-400 max-w-3xl">
            Dynamically fetched examples from your API.
          </p>
        </header>

        {loading ? (
          <p className="text-gray-400">Loading components...</p>
        ) : components.length === 0 ? (
          <p className="text-gray-400">No button components found.</p>
        ) : (
          components.map((item) => (
            <div
              key={item.id}
              className="bg-gray-800/40 rounded-2xl p-8 border border-gray-700 shadow-lg"
            >
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-semibold">
                  {item.category} — {item.variants}
                </h2>
                <div className="flex gap-4">
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
              </div>

              <div className="bg-gray-900/60 rounded-xl p-10 min-h-[200px] flex items-center justify-center text-gray-300">
                {activeTab === "preview" ? (
                  <RenderButton code={item.code} />
                ) : (
                  <pre className="language-jsx w-full rounded-lg overflow-x-auto">
                    <code className="language-jsx">{item.code}</code>
                  </pre>
                )}
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

// Safely render dynamic Btn code
const RenderButton = ({ code }: { code: string }) => {
  try {
    // simple parser for button variant
    const match = code.match(/variant="([^"]+)"/);
    const variant = match ? match[1] : "filled";
    return <Btn text="Button" variant={variant as any} />;
  } catch {
    return <p>Error rendering button</p>;
  }
};

export default ComView;
