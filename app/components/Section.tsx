"use client";

import { useEffect, useRef, useState } from "react";
import GradArt from "./GradArt";

type Props = {
  id: string;
  /** Position on the page; alternates which side the cap art floats on. */
  index: number;
  className?: string;
  children: React.ReactNode;
};

/** A page section that gets the "in" class once scrolled into view (drives the scroll unrolling). */
export default function Section({ id, index, className, children }: Props) {
  const ref = useRef<HTMLElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (!("IntersectionObserver" in window)) {
      setInView(true);
      return;
    }
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) {
          setInView(true);
          io.disconnect();
        }
      },
      { threshold: 0.25 },
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const classes = [className, inView && "in"].filter(Boolean).join(" ") || undefined;

  return (
    <section id={id} ref={ref} className={classes}>
      <GradArt side={index % 2 ? "l" : "r"} delay={index * -0.9} />
      {children}
    </section>
  );
}
