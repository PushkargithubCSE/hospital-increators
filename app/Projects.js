"use client";
import { useEffect, useState } from "react";
import { PROJECTS } from "./projects-data";

function Photo({ src, name }) {
  const [bad, setBad] = useState(false);
  if (!src || bad)
    return (
      <div className="ph-empty">
        <span>+</span>
        <small>Add project photo</small>
      </div>
    );
  return <img src={src} alt={name} onError={() => setBad(true)} draggable={false} />;
}

export default function Projects() {
  const [i, setI] = useState(0);
  const [per, setPer] = useState(3);
  const [paused, setPaused] = useState(false);
  const max = Math.max(0, PROJECTS.length - per);

  useEffect(() => {
    const f = () => setPer(window.innerWidth < 640 ? 1 : window.innerWidth < 1000 ? 2 : 3);
    f();
    window.addEventListener("resize", f);
    return () => window.removeEventListener("resize", f);
  }, []);

  useEffect(() => {
    if (i > max) setI(max);
  }, [max, i]);

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setI((p) => (p >= max ? 0 : p + 1)), 3500);
    return () => clearInterval(t);
  }, [paused, max]);

  const prev = () => setI((p) => (p <= 0 ? max : p - 1));
  const next = () => setI((p) => (p >= max ? 0 : p + 1));

  return (
    <div onMouseEnter={() => setPaused(true)} onMouseLeave={() => setPaused(false)}>
      <div className="head rv">
        <h2>Projects done by Dr. Arun Verma</h2>
        <p>A selection of hospital and healthcare projects.</p>
      </div>

      <div className="proj-viewport">
        <div className="proj-track" style={{ "--per": per, "--gap": "18px", "--i": i }}>
          {PROJECTS.map((p) => (
            <article key={p.name} className="proj-card glass">
              <div className="proj-photo">
                <Photo src={p.photo} name={p.name} />
              </div>
              <div className="proj-body">
                <h3>{p.name}</h3>
                <div className="cap">
                  <small>In capacity of</small>
                  <p>{p.capacity}</p>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="proj-nav">
        <button className="arrow glass" onClick={prev} aria-label="Previous projects">‹</button>
        <div className="dots">
          {Array.from({ length: max + 1 }).map((_, n) => (
            <button key={n} className={n === i ? "on" : ""} onClick={() => setI(n)} aria-label={`Go to slide ${n + 1}`} />
          ))}
        </div>
        <button className="arrow glass" onClick={next} aria-label="Next projects">›</button>
      </div>
    </div>
  );
}