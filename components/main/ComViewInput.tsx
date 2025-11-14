// components/ComViewInput.tsx
"use client";

import React, { useEffect, useState } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-tomorrow.css";
import "prismjs/components/prism-jsx";
import Input from "../lib/Input";
import "../../styles/globals.css";

const ComViewInput = () => {
  const [copied, setCopied] = useState(false);

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
  const [copiedCss, setCopiedCss] = useState(false);

const cssCode = `/* react-phone-input-2 — FULL DARK MODE + VISIBLE SELECTION */
.react-tel-input .form-control {
  @apply !bg-gray-800/90 !text-white !border-gray-600 !placeholder-gray-400 !rounded-md !px-4 !py-2 !pl-12;
  @apply focus:!outline-none focus:!ring-2 focus:!ring-blue-500 focus:!border-blue-500;
}
.react-tel-input .flag-dropdown,
.react-tel-input .selected-flag {
  @apply !bg-gray-700 !border-gray-600 !rounded-l-md;
}
.react-tel-input .selected-flag {
  @apply !bg-gray-600; /* selected country highlight */
}
.react-tel-input .country-list {
  @apply !bg-gray-800 !border !border-gray-700 !shadow-xl;
}
.react-tel-input .country-list .country {
  @apply !text-white hover:!bg-gray-700;
}
.react-tel-input .country-list .country.highlight {
  @apply !bg-gray-600 !text-white;
}
.react-tel-input .country-list .search {
  @apply !bg-gray-700 !text-white !placeholder-gray-400 !border-b !border-gray-600;
}`.trim();

const code = `import React, { FC, useState, useEffect } from "react";
import { Search, MapPin, Eye, EyeOff } from "lucide-react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";

interface Props {
  text?: string;
  variant?: "text" | "email" | "quantity" | "search" | "phone" | "password" | "location";
  className?: string;
  onChange?: (value: string | number) => void;
  initial?: number;
  min?: number;
  max?: number;
  pass?: boolean;
}

const Input: FC<Props> = ({
  text = "Text",
  variant = "text",
  className = "",
  onChange,
  initial = 1,
  min = 1,
  max = 99,
  pass = true,
}) => {
  const [textValue, setTextValue] = useState("");
  const [quantity, setQuantity] = useState(initial);
  const [phoneValue, setPhoneValue] = useState("");
  const [showPassword, setShowPassword] = useState(!pass);
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState<any[]>([]);

  const base =
    "w-full bg-gray-800/90 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 px-4 py-2 placeholder-gray-400";

  const handleQuantityChange = (val: number) => {
    const newVal = Math.min(Math.max(val, min), max);
    setQuantity(newVal);
    onChange?.(newVal);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (variant === "location" && query.length > 2) {
        fetch(\`https://nominatim.openstreetmap.org/search?format=json&q=\${encodeURIComponent(query)}\`, {
          headers: {
            "Accept": "application/json",
            "User-Agent": "YourAppName/1.0",
          },
        })
          .then((res) => res.json())
          .then((data) => setSuggestions(data.slice(0, 5)))
          .catch(() => setSuggestions([]));
      } else {
        setSuggestions([]);
      }
    }, 400);
    return () => clearTimeout(timer);
  }, [query, variant]);

  if (variant === "quantity") {
    return (
      <div className={\`flex items-center border border-gray-600 rounded-md w-max \${className}\`}>
        <button
          type="button"
          onClick={() => handleQuantityChange(quantity - 1)}
          disabled={quantity <= min}
          className={\`px-3 py-1 rounded-l-md transition \${
            quantity <= min
              ? "bg-gray-700 text-gray-500 cursor-not-allowed"
              : "bg-gray-600 hover:bg-gray-500 text-white"
          }\`}
        >
          -
        </button>
        <input
          type="number"
          value={quantity}
          min={min}
          max={max}
          onChange={(e) => handleQuantityChange(Number(e.target.value))}
          className="w-12 text-center bg-gray-800 text-white border-x border-gray-600 outline-none"
        />
        <button
          type="button"
          onClick={() => handleQuantityChange(quantity + 1)}
          disabled={quantity >= max}
          className={\`px-3 py-1 rounded-r-md transition \${
            quantity >= max
              ? "bg-gray-700 text-gray-500 cursor-not-allowed"
              : "bg-gray-600 hover:bg-gray-500 text-white"
          }\`}
        >
          +
        </button>
      </div>
    );
  }

  if (variant === "phone") {
    return (
      <div className={className}>
        <PhoneInput
          country="bd"
          value={phoneValue}
          onChange={(value) => {
            setPhoneValue(value);
            onChange?.(value);
          }}
          containerClass="react-tel-input-container"
          inputClass="react-tel-input-input"
          buttonClass="react-tel-input-button"
          dropdownClass="react-tel-input-dropdown"
          searchClass="react-tel-input-search"
        />
      </div>
    );
  }

  if (variant === "search") {
    return (
      <div className={\`relative \${className}\`}>
        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder={text || "Search"}
          value={textValue}
          onChange={(e) => {
            setTextValue(e.target.value);
            onChange?.(e.target.value);
          }}
          className={\`\${base} pl-10\`}
        />
      </div>
    );
  }

  if (variant === "email") {
    return (
      <div className={className}>
        <input
          type="email"
          placeholder={text}
          value={textValue}
          onChange={(e) => {
            setTextValue(e.target.value);
            onChange?.(e.target.value);
          }}
          className={base}
        />
      </div>
    );
  }

  if (variant === "password") {
    return (
      <div className={\`relative \${className}\`}>
        <input
          type={showPassword ? "text" : "password"}
          placeholder={text || "Password"}
          value={textValue}
          onChange={(e) => {
            setTextValue(e.target.value);
            onChange?.(e.target.value);
          }}
          className={base}
        />
        <button
          type="button"
          onClick={() => setShowPassword(!showPassword)}
          className="absolute right-3 top-2 text-gray-400 hover:text-white transition"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    );
  }

  if (variant === "location") {
    return (
      <div className={\`relative \${className}\`}>
        <MapPin className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder={text || "Search location"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={\`\${base} pl-10\`}
        />
        {suggestions.length > 0 && (
          <ul className="absolute left-0 right-0 mt-1 bg-gray-800 border border-gray-700 rounded-md shadow-xl max-h-48 overflow-y-auto z-50">
            {suggestions.map((s) => (
              <li
                key={s.place_id}
                onClick={() => {
                  setQuery(s.display_name);
                  setSuggestions([]);
                  onChange?.(s.display_name);
                }}
                className="px-4 py-2 text-white hover:bg-gray-700 cursor-pointer transition"
              >
                {s.display_name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  }

  return (
    <div className={className}>
      <input
        type="text"
        placeholder={text}
        value={textValue}
        onChange={(e) => {
          setTextValue(e.target.value);
          onChange?.(e.target.value);
        }}
        className={base}
      />
    </div>
  );
};

export default Input;`.trim();

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="max-w-[1000px] mx-auto px-4 sm:px-6 lg:px-16 py-8 lg:py-12 space-y-8">
      <h1 className="text-5xl lg:text-4xl font-bold mb-2 text-center">
        Input Component
      </h1>
      <p className="text-gray-400 mb-8 text-center max-w-2xl">
        A feature-rich, variant-driven input with built-in search, phone, password toggle, and more.
      </p>
      
      {/* PREVIEW – 2 Inputs, Perfectly Centered */}
      <div className="border border-gray-800 bg-gray-900/70 rounded-xl p-6 lg:p-8 shadow-md w-full">
        <h2 className="text-xl font-semibold mb-6 text-center">Preview</h2>

        <div className="flex justify-center items-center gap-8 flex-wrap">
          {/* Location */}
          <div className="w-full max-w-xs">
            <label className="block text-sm font-medium text-gray-400 mb-2 text-center">Location</label>
            <Input variant="location" text="Enter city…" />
          </div>

          {/* Phone */}
          <div className="w-full max-w-xs">
            <label className="block text-sm font-medium text-gray-400 mb-2 text-center">Phone</label>
            <Input variant="phone" />
          </div>
        </div>
      </div>

      {/* SOURCE CODE */}
      <div className="relative border border-gray-800 bg-[#0b0b0b] rounded-xl p-4 lg:p-6 shadow-md w-full">
        <p className="text-gray-100 text-sm mb-2 text-center">
          Copy the source code
          <br />
          <span className="text-gray-400 text-xs">components/ui/Input.tsx</span>
        </p>
        <button
          onClick={handleCopy}
          className="absolute top-4 right-4 text-sm border border-gray-700 px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
        >
          {copied ? "Copied!" : "Copy"}
        </button>
        <div className="max-h-[500px] overflow-y-auto rounded-lg bg-[#0b0b0b] p-4 font-mono text-sm">
          <pre className="language-jsx !m-0">
            <code className="language-jsx">{code}</code>
          </pre>
        </div>
      </div>
            {/* CSS STYLES – globals.css */}
      <div className="relative border border-gray-800 bg-[#0b0b0b] rounded-xl p-4 lg:p-6 shadow-md w-full mt-8">
        <p className="text-gray-100 text-sm mb-2 text-center">
          Copy the required CSS
          <br />
          <span className="text-gray-400 text-xs">styles/globals.css</span>
        </p>

        {/* Copy button */}
        <button
          onClick={() => {
            navigator.clipboard.writeText(cssCode);
            setCopiedCss(true);
            setTimeout(() => setCopiedCss(false), 2000);
          }}
          className="absolute top-4 right-4 text-sm border border-gray-700 px-3 py-1 rounded-md bg-gray-800 hover:bg-gray-700 transition-colors duration-200"
        >
          {copiedCss ? "Copied!" : "Copy"}
        </button>

        {/* CSS code block */}
        <div className="max-h-[400px] overflow-y-auto rounded-lg bg-[#0b0b0b] p-4 font-mono text-sm">
          <pre className="language-css !m-0">
            <code className="language-css">{cssCode}</code>
          </pre>
        </div>
      </div>

      {/* PROPS TABLE */}
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
                <th className="px-4 py-3 text-sm font-semibold text-gray-300 uppercase tracking-wider">Default</th>
                <th className="px-4 py-3 text-sm font-semibold text-gray-300 uppercase tracking-wider">Description</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-800">
              {[
                { prop: "text", type: "string", def: '"Text"', desc: "Placeholder text for the input." },
                {
                  prop: "variant",
                  type: (
                    <div className="flex flex-wrap gap-1">
                      {["text", "email", "password", "search", "location", "phone", "quantity"].map((v) => (
                        <span key={v} className="px-2 py-1 text-xs font-mono bg-gradient-to-br from-blue-600 to-purple-600 text-white rounded-md shadow-sm">
                          {v}
                        </span>
                      ))}
                    </div>
                  ),
                  def: '"text"',
                  desc: "Determines the input style and behavior.",
                },
                { prop: "initial", type: "number", def: "1", desc: "Starting value for quantity variant." },
                { prop: "min / max", type: "number", def: "1 / 99", desc: "Limits for the quantity stepper." },
                { prop: "onChange", type: <code className="text-xs">{"(value: string | number) => void"}</code>, def: "—", desc: "Callback fired when the value changes." },
                { prop: "className", type: "string", def: '""', desc: "Additional classes for the wrapper div." },
                { prop: "pass", type: "boolean", def: "true", desc: "Controls initial password visibility (internal)." },
              ].map((row, idx) => (
                <tr key={idx} className="group transition-all duration-200 hover:bg-gradient-to-r hover:from-gray-800/70 hover:to-gray-800/50">
                  <td className="px-4 py-4 pl-8 border-l-4 border-l-transparent group-hover:border-l-blue-500 transition-colors">
                    <code className="bg-gray-800/80 text-cyan-400 px-2 py-1 rounded text-sm font-medium">{row.prop}</code>
                  </td>
                  <td className="px-4 py-4">
                    {typeof row.type === "string" ? (
                      <code className="bg-gray-800/80 text-emerald-400 px-2 py-1 rounded text-sm font-medium">{row.type}</code>
                    ) : (
                      row.type
                    )}
                  </td>
                  <td className="px-4 py-4">
                    <code className="bg-gray-800/80 text-yellow-400 px-2 py-1 rounded text-sm font-medium">{row.def}</code>
                  </td>
                  <td className="px-4 py-4 text-gray-300 text-sm leading-relaxed">{row.desc}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <footer className="w-full text-gray-400 text-sm text-center py-4 mt-8">
        © 2025 Dracarys Components. All rights reserved.
      </footer>
    </div>
  );
};

export default ComViewInput;