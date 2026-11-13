"use client";
import { useState } from "react";
import Link from "next/link";
import { Mark } from "./Island";

// Replace these with your real details
const LINKEDIN_URL = "#"; // e.g. "https://www.linkedin.com/company/your-page"
const X_URL = "#";        // e.g. "https://x.com/your-handle"
const PHONE = "123456789";
const EMAIL = "info@hospitalincreators.com";

function Logo() {
  const [bad, setBad] = useState(false);
  if (bad)
    return (
      <span className="foot-fallback"><Mark size={34} />The Hospital Increators</span>
    );
  return <img src="/logo.jpg" alt="The Hospital Increators" className="foot-logo" onError={() => setBad(true)} />;
}

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="foot glass">
        <div className="foot-grid">
          <div className="foot-brand">
            <Link href="/#top" aria-label="The Hospital Increators home"><Logo /></Link>
          </div>

          <div className="foot-col">
            <h4>Contact Us</h4>
            <a href={`tel:${PHONE}`}>{PHONE}</a>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
            <Link href="/privacy-policy">Privacy Policy</Link>
          </div>

          <div className="foot-col">
            <h4>Follow us</h4>
            <div className="social">
              <a href={LINKEDIN_URL} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" className="soc">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9.75h4v11.5H3V9.75Zm6.5 0h3.84v1.57h.06c.53-1 1.84-2.07 3.8-2.07 4.06 0 4.8 2.67 4.8 6.14v5.86h-4v-5.2c0-1.24-.02-2.84-1.73-2.84-1.73 0-2 1.35-2 2.75v5.29h-4V9.75Z" />
                </svg>
              </a>
              <a href={X_URL} target="_blank" rel="noopener noreferrer" aria-label="X" className="soc">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
                  <path d="M18.24 2.25h3.31l-7.23 8.26 8.5 11.24h-6.66l-5.21-6.82-5.97 6.82H1.67l7.73-8.84L1.25 2.25h6.83l4.71 6.23 5.45-6.23Zm-1.16 17.52h1.83L7.08 4.13H5.12l11.96 15.64Z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="foot-bottom">© 2026 Hospital Increators. All rights reserved.</div>
      </div>
    </footer>
  );
}