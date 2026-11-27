"use client";

import { useState } from "react";

export default function HeroPhoto({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="photo">
      {/* The placeholder sits behind the photo and shows only if the photo is missing. */}
      <span>Add your graduation photo here</span>
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} onError={() => setFailed(true)} />
      )}
    </div>
  );
}
