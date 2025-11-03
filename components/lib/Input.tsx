import React, { FC, useState } from "react";

interface Props {
  text?: string;
  variant?: "floating" | "email" | "default";
  className?: string;
}

const Input: FC<Props> = ({ text = "Text", variant = "default", className = "" }) => {
  const [value, setValue] = useState("");
  const [focused, setFocused] = useState(false);

  let base = "w-full text-gray-900 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200";
  let style = "";
  let type = "text";
  let placeholder = text;
  let label = null;

  if (variant === "floating") {
    style = "px-3 pt-5 pb-2";
    placeholder = "";
    label = (
      <label
        className={`absolute left-3 text-gray-500 transition-all duration-200 ${
          focused || value
            ? "text-xs -top-1.5 bg-white px-1 text-blue-600"
            : "top-2.5 text-base"
        }`}
      >
        {text}
      </label>
    );
  } else if (variant === "email") {
    type = "email";
    style = "px-4 py-2 placeholder-gray-500";
  } else {
    style = "px-4 py-2 placeholder-gray-500";
  }

  return (
    <div className={`relative w-full max-w-sm mt-4 ${className}`}>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={(e) => setValue(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setFocused(value !== "")}
        className={`${base} ${style}`}
      />
      {label}
    </div>
  );
};

export default Input;
