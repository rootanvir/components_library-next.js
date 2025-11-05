"use client";

import React, { useEffect, useState } from "react";

interface ComponentItem {
  id: number;
  category: string;
  variants: string;
  code: string;
}

export default function FetchDB() {
  const [data, setData] = useState<ComponentItem[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/api/components");
        const json = await res.json();

        if (json.error) {
          console.error("API Error:", json.error);
          setData([]);
        } else {
          setData(json.category.button || []);
        }
      } catch (err) {
        console.error("Fetch Error:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) return <p className="text-white p-4">Loading...</p>;
  if (data.length === 0) return <p className="text-white p-4">No components found</p>;

  return (
    <div className="p-4 text-white">
      <h1 className="text-xl font-bold mb-3">Components</h1>
      <ul>
        {data.map((item) => (
          <li key={item.id}>
            {item.category} — {item.variants} — {item.code}
          </li>
        ))}
      </ul>
    </div>
  );
}
