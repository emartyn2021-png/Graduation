"use client";

import { useEffect, useRef, useState } from "react";
import type { CSSProperties } from "react";

type Item = { image?: string; caption?: string; bg: string };

export default function Gallery({ items }: { items: Item[] }) {
  const rail = useRef<HTMLDivElement>(null);
  const [active, setActive] = useState(0);

  useEffect(() => {
    const el = rail.current;
    if (!el) return;
    const mark = () => {
      const center = el.scrollLeft + el.clientWidth / 2;
      let best = 0;
      let bestDist = Infinity;
      Array.from(el.children).forEach((child, i) => {
        const fig = child as HTMLElement;
        const d = Math.abs(fig.offsetLeft + fig.offsetWidth / 2 - center);
        if (d < bestDist) {
          bestDist = d;
          best = i;
        }
      });
      setActive(best);
    };
    mark();
    el.addEventListener("scroll", mark, { passive: true });
    return () => el.removeEventListener("scroll", mark);
  }, []);

  return (
    <>
      <div className="rail" ref={rail} tabIndex={0} aria-label="Photo gallery, swipe sideways">
        {items.map((item, i) => (
          <figure key={item.image ?? i} style={{ "--bg": item.bg } as CSSProperties}>
            {item.image && <GalleryImage src={item.image} />}
            <figcaption>{item.caption}</figcaption>
          </figure>
        ))}
      </div>
      <div className="dots" aria-hidden="true">
        {items.map((item, i) => (
          <i key={item.image ?? i} className={i === active ? "on" : undefined} />
        ))}
      </div>
    </>
  );
}

function GalleryImage({ src }: { src: string }) {
  const [failed, setFailed] = useState(false);
  if (failed) return null;
  // eslint-disable-next-line @next/next/no-img-element
  return <img src={src} alt="" onError={() => setFailed(true)} />;
}
