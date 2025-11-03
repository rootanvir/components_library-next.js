import React, { FC, useState } from "react";
import { Search } from "lucide-react";

interface Props {
  text?: string;
  variant?: "text" | "email" | "search";
  className?: string;
}

const Input: FC<Props> = ({ text = "Text", variant = "text", className = "" }) => {
  const [value, setValue] = useState("");

  const base =
    "w-full text-gray-900 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 px-4 py-2 placeholder-gray-500 bg-transparent";

  if (variant === "search") {
    return (
      <div className={`relative w-full max-w-sm mt-4 ${className}`}>
        <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
        <input
          type="text"
          placeholder={text || "Search"}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={`${base} pl-10`}
        />
      </div>
    );
  } else {
    return (
      <div className={`relative w-full max-w-sm mt-4 ${className}`}>
        <input
          type={variant === "email" ? "email" : "text"}
          placeholder={text}
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className={base}
        />
      </div>
    );
  }
};

export default Input;
