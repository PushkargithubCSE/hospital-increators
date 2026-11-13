"use client";
import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { ABOUT_LINKS } from "./aboutLinks";

export function Mark({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden>
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#1c5a86" /><stop offset="1" stopColor="#123B5D" /></linearGradient>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#2aa6b3" /><stop offset="1" stopColor="#087E8B" /></linearGradient>
        <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#5ab8d6" /><stop offset="1" stopColor="#3fb8b0" /></linearGradient>
        <linearGradient id="g4" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#3d7fae" /><stop offset="1" stopColor="#123B5D" /></linearGradient>
      </defs>
      <path d="M8 40C4 18 22 4 42 8c8 2 8 14 6 24-2 12-10 18-22 14C16 44 9 44 8 40Z" fill="url(#g1)" />
      <path d="M92 40c4-22-14-36-34-32-8 2-8 14-6 24 2 12 10 18 22 14 8-2 17-2 18 2Z" fill="url(#g2)" />
      <path d="M8 60c-4 22 14 36 34 32 8-2 8-14 6-24-2-12-10-18-22-14-10 2-17 2-18 6Z" fill="url(#g3)" />
      <path d="M92 60c4 22-14 36-34 32-8-2-8-14-6-24 2-12 10-18 22-14 8 2 17 2 18 6Z" fill="url(#g4)" />
      <path d="M40 22h20v18h18v20H60v18H40V60H22V40h18Z" fill="#EAF4F7" stroke="#fff" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
}

export default function Island() {
  const [scrolled, setScrolled] = useState(false);
  const [hover, setHover] = useState(false);
  const [menu, setMenu] = useState(false);
  const [x, setX] = useState(0);
  const aboutRef = useRef(null);
  const timer = useRef(null);

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 90);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);

  const openMenu = () => {
    clearTimeout(timer.current);
    if (aboutRef.current) {
      const r = aboutRef.current.getBoundingClientRect();
      setX(r.left + r.width / 2);
    }
    setMenu(true);
  };
  const closeMenu = () => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setMenu(false), 140);
  };

  const compact = scrolled && !hover && !menu;

  return (
    <>
      <header
        className={`island ${compact ? "compact" : ""}`}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        onFocus={() => setHover(true)}
        onBlur={() => setHover(false)}
      >
        <Link href="/#top" className="brand"><Mark />Hospital Increators</Link>
        <nav className="links" aria-label="Main">
          <Link href="/#top">Home</Link>
          <Link
            href="/#about"
            ref={aboutRef}
            className="has-menu"
            aria-haspopup="true"
            aria-expanded={menu}
            onMouseEnter={openMenu}
            onMouseLeave={closeMenu}
            onFocus={openMenu}
            onBlur={closeMenu}
          >
            About Us
          </Link>
          <Link href="/#services">Services</Link>
        </nav>
        <Link href="/#consult" className="btn sm">Book a call</Link>
      </header>

      <div
        className={`menu ${menu ? "open" : ""}`}
        style={{ left: x }}
        onMouseEnter={openMenu}
        onMouseLeave={closeMenu}
        onFocus={openMenu}
        onBlur={closeMenu}
      >
        <div className="menu-panel">
          {ABOUT_LINKS.map((l, i) => (
            <Link
              key={l.href}
              href={l.href}
              className="menu-item"
              style={{ "--i": i }}
              tabIndex={menu ? 0 : -1}
              onClick={() => setMenu(false)}
            >
              <span className="mi-n">{i + 1}</span>
              {l.label}
            </Link>
          ))}
        </div>
      </div>
    </>
  );
}