import { useId } from "react";

/** Animated graduation cap and diploma that floats beside each section. */
export default function GradArt({ side, delay }: { side: "l" | "r"; delay: number }) {
  // Each copy needs its own gradient ids, or every copy would reference the first one.
  const uid = useId().replace(/[^a-zA-Z0-9_-]/g, "");
  const gb = `gb${uid}`;
  const gp = `gp${uid}`;
  const gr = `gr${uid}`;

  return (
    <svg className={`grad ${side}`} style={{ animationDelay: `${delay}s` }} viewBox="0 0 300 300" aria-hidden="true">
      <defs>
        <linearGradient id={gb} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0" stopColor="#3d6bc0" />
          <stop offset="1" stopColor="#1b3a78" />
        </linearGradient>
        <linearGradient id={gp} x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#fffdf6" />
          <stop offset="1" stopColor="#e6dcc3" />
        </linearGradient>
        <radialGradient id={gr} cx=".4" cy=".35">
          <stop offset="0" stopColor="#e04a57" />
          <stop offset="1" stopColor="#a51f2e" />
        </radialGradient>
      </defs>
      {/* diploma roll */}
      <path d="M20 224Q10 240 22 264L274 254Q294 234 282 202L40 212Z" fill={`url(#${gp})`} stroke="#d6ccb2" strokeWidth="2" />
      <ellipse cx="30" cy="242" rx="11" ry="22" fill="#efe6d0" stroke="#d6ccb2" strokeWidth="2" />
      <ellipse cx="277" cy="228" rx="10" ry="26" fill="#efe6d0" stroke="#d6ccb2" strokeWidth="2" />
      {/* ribbon tails */}
      <path className="g-tail1" d="M142 250 112 296l22-8 12 14 6-50z" fill="#c42a3a" />
      <path className="g-tail2" d="M158 250 192 296l-22-8-12 14-6-50z" fill="#a51f2e" />
      {/* rosette */}
      <g className="g-rose">
        <circle cx="150" cy="232" r="26" fill={`url(#${gr})`} stroke="#8f1a28" strokeWidth="3" strokeDasharray="5 3" />
        <circle cx="150" cy="232" r="18" fill="#c42a3a" />
        <circle cx="150" cy="232" r="11" fill="#fff7df" stroke="#c9a45c" strokeWidth="4" />
      </g>
      {/* cap */}
      <g className="g-cap">
        <path d="M88 110v42q0 30 62 34t62-34v-42z" fill="#1a3166" />
        <path d="M90 150q60 34 120 0" fill="none" stroke="#e8cf92" strokeWidth="2" />
        <path d="M92 158q58 26 116 0" fill="#0e1c3d" opacity=".6" />
        <path d="M30 98 135 24l130 62-114 52z" fill={`url(#${gb})`} stroke="#8fb0ea" strokeWidth="2.5" strokeLinejoin="round" />
        <path d="M135 24 265 86" stroke="#c4d6f5" strokeWidth="2" opacity=".7" />
        <circle cx="150" cy="96" r="5" fill="#e8cf92" />
        <g className="g-tas">
          <path d="M36 100q-14 6-9 30" fill="none" stroke="#c42a3a" strokeWidth="3" />
          <rect x="20" y="126" width="14" height="9" rx="3" fill="#e8cf92" />
          <path d="M20 135h14l6 62q-13 10-26 0z" fill="#c42a3a" />
          <path d="M24 140l-2 52M30 140l1 54" stroke="#8f1a28" strokeWidth="1.3" opacity=".7" />
        </g>
      </g>
    </svg>
  );
}
