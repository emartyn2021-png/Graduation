"use client";

import { useState } from "react";

export default function HeroPhoto({ src, alt }: { src: string; alt: string }) {
  const [failed, setFailed] = useState(false);

  return (
    <div className="photo">
      {failed ? (
        <span>Add your graduation photo here</span>
      ) : (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={src} alt={alt} onError={() => setFailed(true)} />
      )}
    </div>
  );
}
