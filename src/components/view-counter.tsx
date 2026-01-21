"use client";

import { useEffect, useState } from "react";

interface ViewCounterProps {
  slug: string;
  trackView?: boolean;
}

export function ViewCounter({ slug, trackView = false }: ViewCounterProps) {
  const [views, setViews] = useState<number | null>(null);

  useEffect(() => {
    const recordView = async () => {
      try {
        if (trackView) {
          // Increment and get count
          const res = await fetch("/api/views", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ slug }),
          });
          const data = await res.json();
          setViews(data.count);
        } else {
          // Just get count
          const res = await fetch(`/api/views?slug=${encodeURIComponent(slug)}`);
          const data = await res.json();
          setViews(data.count);
        }
      } catch (error) {
        console.error("Failed to fetch views:", error);
      }
    };

    recordView();
  }, [slug, trackView]);

  if (views === null) {
    return <span className="text-muted">–</span>;
  }

  return (
    <span className="text-muted">
      {views.toLocaleString()} {views === 1 ? "view" : "views"}
    </span>
  );
}
