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

  const base =
    "w-full text-gray-900 border border-gray-400 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 px-4 py-2 placeholder-gray-500";

  const handleQuantityChange = (val: number) => {
    let newVal = Math.min(Math.max(val, min), max);
    setQuantity(newVal);
    onChange?.(newVal);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (variant === "location" && query.length > 2) {
        fetch(`https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`, {
          headers: {
            "Accept": "application/json",
            "User-Agent": "YourAppName/1.0"
          }
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
      <div className={`flex items-center border border-gray-400 rounded-md w-max ${className}`}>
        <button
          type="button"
          onClick={() => handleQuantityChange(quantity - 1)}
          disabled={quantity <= min}
          className={`px-3 py-1 rounded-l-md ${
            quantity <= min
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300 text-gray-700"
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
          className="w-12 text-center border-l border-r border-gray-400 outline-none"
        />
        <button
          type="button"
          onClick={() => handleQuantityChange(quantity + 1)}
          disabled={quantity >= max}
          className={`px-3 py-1 rounded-r-md ${
            quantity >= max
              ? "bg-gray-100 text-gray-400 cursor-not-allowed"
              : "bg-gray-200 hover:bg-gray-300 text-gray-700"
          }`}
        >
          +
        </button>
      </div>
    );
  } else if (variant === "phone") {
    return (
      <div className={`relative w-full max-w-sm mt-4 ${className}`}>
        <PhoneInput
          country={"bd"}
          value={phoneValue}
          onChange={(value) => {
            setPhoneValue(value);
            onChange?.(value);
          }}
          inputStyle={{
            width: "100%",
            borderRadius: "0.375rem",
            borderColor: "#d1d5db",
            padding: "0.5rem",
          }}
        />
      </div>
    );
  } else if (variant === "search") {
    return (
      <div className={`relative w-full max-w-sm mt-4 ${className}`}>
        <Search className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
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
  } else if (variant === "email") {
    return (
      <div className={`relative w-full max-w-sm mt-4 ${className}`}>
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
  } else if (variant === "password") {
    return (
      <div className={`relative w-full max-w-sm mt-4 ${className}`}>
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
          className="absolute right-3 top-2 text-gray-600"
        >
          {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
        </button>
      </div>
    );
  } else if (variant === "location") {
    return (
      <div className={`relative w-full max-w-sm mt-4 ${className}`}>
        <MapPin className="absolute left-3 top-2.5 text-gray-500 w-5 h-5" />
        <input
          type="text"
          placeholder={text || "Search location"}
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className={`${base} pl-10`}
        />
        {suggestions.length > 0 && (
          <ul className="absolute bg-white border border-gray-300 mt-1 w-full rounded-md shadow-md max-h-40 overflow-auto z-10">
            {suggestions.map((s) => (
              <li
                key={s.place_id}
                onClick={() => {
                  setQuery(s.display_name);
                  setSuggestions([]);
                  onChange?.(s.display_name);
                }}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {s.display_name}
              </li>
            ))}
          </ul>
        )}
      </div>
    );
  } else {
    return (
      <div className={`relative w-full max-w-sm mt-4 ${className}`}>
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
  }
};

export default Input;
