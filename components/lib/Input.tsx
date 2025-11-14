"use client";

import React, { FC, useState, useEffect } from "react";
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

  // Dark-mode base styles
  const base =
    "w-full bg-gray-800/90 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all duration-200 px-4 py-2 placeholder-gray-400";

  const handleQuantityChange = (val: number) => {
    const newVal = Math.min(Math.max(val, min), max);
    setQuantity(newVal);
    onChange?.(newVal);
  };

  // Location autocomplete
  useEffect(() => {
    const timer = setTimeout(() => {
      if (variant === "location" && query.length > 2) {
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`, {
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

  // === QUANTITY ===
  if (variant === "quantity") {
    return (
      <div className={`flex items-center border border-gray-600 rounded-md w-max ${className}`}>
        <button
          type="button"
          onClick={() => handleQuantityChange(quantity - 1)}
          disabled={quantity <= min}
          className={`px-3 py-1 rounded-l-md transition ${
            quantity <= min
              ? "bg-gray-700 text-gray-500 cursor-not-allowed"
              : "bg-gray-600 hover:bg-gray-500 text-white"
          }`}
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
          className={`px-3 py-1 rounded-r-md transition ${
            quantity >= max
              ? "bg-gray-700 text-gray-500 cursor-not-allowed"
              : "bg-gray-600 hover:bg-gray-500 text-white"
          }`}
        >
          +
        </button>
      </div>
    );
  }

  // === PHONE ===
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

  // === SEARCH ===
  if (variant === "search") {
    return (
      <div className={`relative ${className}`}>
        <Search className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder={text || "Search"}
          value={textValue}
          onChange={(e) => {
            setTextValue(e.target.value);
            onChange?.(e.target.value);
          }}
          className={`${base} pl-10`}
        />
      </div>
    );
  }

  // === EMAIL ===
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

  // === PASSWORD ===
  if (variant === "password") {
    return (
      <div className={`relative ${className}`}>
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

  // === LOCATION ===
  if (variant === "location") {
    return (
      <div className={`relative ${className}`}>
        <MapPin className="absolute left-3 top-2.5 w-5 h-5 text-gray-400" />
        <input
          type="text"
          placeholder={text || "Search location"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`${base} pl-10`}
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

  // === DEFAULT (TEXT) ===
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

export default Input;