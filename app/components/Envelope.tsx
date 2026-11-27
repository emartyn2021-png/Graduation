"use client";

import { useState } from "react";

export default function Envelope() {
  const [open, setOpen] = useState(false);

  function openEnvelope() {
    setOpen(true);
    document.body.classList.remove("locked");
    window.scrollTo(0, 0);
  }

  return (
    <div
      id="envelope"
      className={open ? "open" : undefined}
      aria-label="Sealed announcement"
      aria-hidden={open || undefined}
      onClick={(e) => {
        if (e.target === e.currentTarget) openEnvelope();
      }}
    >
      <div className="flap top" />
      <div className="flap bot" />
      <div className="meander m1" />
      <div className="meander m2" />
      <button className="seal" aria-label="Open" onClick={openEnvelope} tabIndex={open ? -1 : 0}>
        <svg viewBox="0 0 64 64" aria-hidden="true">
          <path d="M32 12 4 26l28 14 28-14z" fill="#fff7df" />
          <path d="M16 34v12c0 4 7 8 16 8s16-4 16-8V34l-16 8z" fill="#fff7df" opacity=".9" />
          <path d="M56 28v18" stroke="#fff7df" strokeWidth="3" strokeLinecap="round" />
        </svg>
      </button>
      <div className="tap">TAP THE SEAL TO OPEN</div>
    </div>
  );
}
