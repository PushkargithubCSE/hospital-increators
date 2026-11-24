"use client";
import { useState } from "react";
import { SERVICES_OFFERED } from "./services-data";
import Link from "next/link";
const TONES = [
  "linear-gradient(135deg,#e23cf0,#c02bd8)",
  "linear-gradient(135deg,#e3a98b,#e8506e)",
  "linear-gradient(135deg,#4fc3f7,#4fdda0)",
  "linear-gradient(135deg,#c06af5,#5b8def)",
];

export default function ServicesOffered() {
  const [open, setOpen] = useState(-1);
  return (
    <div className="offered">
      <div className="head rv" style={{ marginTop: 90, marginBottom: 28 }}>
        <h2>Services Offered</h2>
        <p>Tap any service to see everything it covers.</p>
      </div>
      <div className="acc">
        {SERVICES_OFFERED.map((s, i) => {
          const isOpen = open === i;
          const letter = String.fromCharCode(65 + i);
          return (
            <div key={s.t} className={`acc-item glass ${isOpen ? "open" : ""}`}>
              <button className="acc-btn" aria-expanded={isOpen} aria-controls={`acc-${i}`} onClick={() => setOpen(isOpen ? -1 : i)}>
                <span className="letter" style={{ background: TONES[i % TONES.length] }}>{letter}</span>
                <span className="acc-title">{s.t}</span>
                <span className="acc-count">{s.items.length}</span>
                <span className="chev" aria-hidden />
              </button>
              <div className="acc-body" id={`acc-${i}`} role="region">
                <div>
                  <ol>
                    {s.items.map((it) =>
                      typeof it === "string" ? (
                        <li key={it}>{it}</li>
                      ) : (
                        <li key={it.t}>
                          {it.t}
                          <ol className="roman">{it.sub.map((x) => <li key={x}>{x}</li>)}</ol>
                        </li>
                      )
                    )}
                  </ol>
                  {s.href && <Link href={s.href} className="acc-more">View full details →</Link>}

                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}