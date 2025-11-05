"use client";

import { useEffect, useState } from "react";

export default function FetchDB() {
  const [data, setData] = useState<any[]>([]);
  const [error, setError] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/api/components")
      .then(res => res.json())
      .then(json => {
        if (json.error) {
          setError(json.error);
          setData([]);
        } else {
          setData(json);
          setError(null);
        }
      })
      .catch(err => {
        console.error(err);
        setError("Failed to fetch components");
      })
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p className="text-red-500">Error: {error}</p>;

  return (
    <ul>
      {data.map(item => (
        <li key={item.id}>{item.category} | {item.variants} | {item.code}</li>
      ))}
    </ul>
  );
}
