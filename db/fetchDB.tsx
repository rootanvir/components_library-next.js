"use client";

import React, { useEffect, useState } from "react";
import { supabase } from "@/db/supabaseClient";

export default function FetchDB() {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const { data, error } = await supabase
        .from("components_lib")
        .select("comp_id, comp_name");

      console.log("Fetched Data:", data);
      console.log("Error:", error);

      if (error) console.error(error);
      else setData(data || []);
    };

    fetchData();
  }, []);

  return (
    <div className="p-4 text-white">
      <h1 className="text-xl font-bold mb-3">Supabase: components_lib</h1>
      {data.length === 0 ? (
        <p>No data found in <strong>components_lib</strong> table.</p>
      ) : (
        <ul>
          {data.map((item) => (
            <li key={item.comp_id}>
              {item.comp_name} — ID: {item.comp_id}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
