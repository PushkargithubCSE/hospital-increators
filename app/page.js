"use client";
import { useEffect, useRef, useState } from "react";
import ServicesOffered from "./ServicesOffered";
import Projects from "./Projects";
import Link from "next/link";

import Island from "./components/Island";
import Footer from "./components/Footer";

/* Logo mark: four gradient petals + cream cross, matching the supplied logo */
/*function Mark({ size = 30 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 100 100" aria-hidden>
      <defs>
        <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#e23cf0" /><stop offset="1" stopColor="#c02bd8" /></linearGradient>
        <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#e3a98b" /><stop offset="1" stopColor="#e8506e" /></linearGradient>
        <linearGradient id="g3" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#4fc3f7" /><stop offset="1" stopColor="#4fdda0" /></linearGradient>
        <linearGradient id="g4" x1="0" y1="0" x2="1" y2="1"><stop offset="0" stopColor="#c06af5" /><stop offset="1" stopColor="#5b8def" /></linearGradient>
      </defs>
      <path d="M8 40C4 18 22 4 42 8c8 2 8 14 6 24-2 12-10 18-22 14C16 44 9 44 8 40Z" fill="url(#g1)" />
      <path d="M92 40c4-22-14-36-34-32-8 2-8 14-6 24 2 12 10 18 22 14 8-2 17-2 18 2Z" fill="url(#g2)" />
      <path d="M8 60c-4 22 14 36 34 32 8-2 8-14 6-24-2-12-10-18-22-14-10 2-17 2-18 6Z" fill="url(#g3)" />
      <path d="M92 60c4 22-14 36-34 32-8-2-8-14-6-24 2-12 10-18 22-14 8 2 17 2 18 6Z" fill="url(#g4)" />
      <path d="M40 22h20v18h18v20H60v18H40V60H22V40h18Z" fill="#efe8cf" stroke="#fff" strokeWidth="3" strokeLinejoin="round" />
    </svg>
  );
} */

function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (es) => es.forEach((e) => e.isIntersecting && (e.target.classList.add("in"), io.unobserve(e.target))),
      { threshold: 0.12 }
    );
    document.querySelectorAll(".rv").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

/*function Island() {
  const [scrolled, setScrolled] = useState(false);
  const [hover, setHover] = useState(false);
  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 90);
    f();
    window.addEventListener("scroll", f, { passive: true });
    return () => window.removeEventListener("scroll", f);
  }, []);
  const compact = scrolled && !hover;
  return (
    <header
      className={`island ${compact ? "compact" : ""}`}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      onFocus={() => setHover(true)}
      onBlur={() => setHover(false)}
    >
      <a href="#top" className="brand"><Mark />Hospital Increators</a>
            <nav className="links" aria-label="Main">
        <a href="#top">Home</a>
        <a href="#about">About Us</a>
        <a href="#services">Services</a>
      </nav>
      <a href="#consult" className="btn sm">Book a call</a>
    </header>
  );
}  */

function SpotCard({ className = "", children }) {
  const move = (e) => {
    const r = e.currentTarget.getBoundingClientRect();
    e.currentTarget.style.setProperty("--mx", `${e.clientX - r.left}px`);
    e.currentTarget.style.setProperty("--my", `${e.clientY - r.top}px`);
  };
  return <div className={`card glass rv ${className}`} onMouseMove={move}>{children}</div>;
}

const SERVICES = [
  { k: "Insight", c: "linear-gradient(135deg,#e23cf0,#c02bd8)", t: "Know where you stand", p: "Feasibility, market and clinical-demand studies before you commit capital.", l: ["Feasibility reports", "Market mapping", "Financial models"] },
  { k: "Advise", c: "linear-gradient(135deg,#e3a98b,#e8506e)", t: "Decide with clarity", p: "Independent guidance on strategy, accreditation and growth.", l: ["NABH / JCI readiness", "Growth strategy", "Turnaround support"] },
  { k: "Create", c: "linear-gradient(135deg,#4fc3f7,#4fdda0)", t: "Build it right", p: "Planning, design coordination and equipment for new or expanding hospitals.", l: ["Master planning", "Medical equipment", "Hiring and training"] },
  { k: "Operate", c: "linear-gradient(135deg,#c06af5,#5b8def)", t: "Run it well", p: "Day-to-day management that keeps quality high and costs in check.", l: ["Operations setup", "Revenue cycle", "Quality systems"] },
];

const OPTIONS = ["Feasibility study", "Hospital planning and design", "Accreditation (NABH / JCI)", "Hospital operations management", "Medical equipment advisory", "Staffing and training", "Something else"];

function Form() {
  const [f, setF] = useState({ name: "", whatsapp: "", email: "", org: "", city: "", service: "", need: "" });
  const [state, setState] = useState("idle");
  const set = (k) => (e) => setF({ ...f, [k]: e.target.value });
  const submit = async (e) => {
    e.preventDefault();
    setState("sending");
    try {
      const r = await fetch("/api/consult", { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(f) });
      setState(r.ok ? "done" : "error");
    } catch { setState("error"); }
  };
  if (state === "done")
    return (
      <div className="form glass rv in done">
        <div className="tick">✓</div>
        <h3 className="display" style={{ fontSize: 28, color: "var(--plum)" }}>Request received</h3>
        <p className="fine" style={{ marginTop: 8 }}>We will message you on WhatsApp or email within one working day.</p>
      </div>
    );
  return (
    <form className="form glass rv" onSubmit={submit}>
      <div className="two">
        <div className="field"><input id="n" placeholder=" " value={f.name} onChange={set("name")} /><label htmlFor="n">Your name</label></div>
        <div className="field"><input id="w" type="tel" placeholder=" " value={f.whatsapp} onChange={set("whatsapp")} /><label htmlFor="w">WhatsApp number</label></div>
      </div>
      <div className="field"><input id="e" type="email" required placeholder=" " value={f.email} onChange={set("email")} /><label htmlFor="e">Email *</label></div>
      <div className="two">
        <div className="field"><input id="o" placeholder=" " value={f.org} onChange={set("org")} /><label htmlFor="o">Hospital / organization</label></div>
        <div className="field"><input id="c" placeholder=" " value={f.city} onChange={set("city")} /><label htmlFor="c">City</label></div>
      </div>
      <div className={`field sel ${f.service ? "has" : ""}`}>
        <select id="s" value={f.service} onChange={set("service")}>
          <option value="" hidden></option>
          {OPTIONS.map((o) => <option key={o}>{o}</option>)}
        </select>
        <label htmlFor="s">Service you need</label>
      </div>
      <div className="field"><textarea id="d" placeholder=" " value={f.need} onChange={set("need")} /><label htmlFor="d">Describe your requirement</label></div>
      {state === "error" && <p className="err">Could not send. Check your email address and try again.</p>}
      <div style={{ display: "flex", alignItems: "center", gap: 14, flexWrap: "wrap" }}>
        <button className="btn" disabled={state === "sending"}>{state === "sending" ? "Sending…" : "Request consultation"}</button>
        <span className="fine">Email is required. We never share your details.</span>
      </div>
    </form>
  );
}

export default function Page() {
  useReveal();
  const [showMore, setShowMore] = useState(false);
  return (
    <>
      <div className="aurora"><i /><i /><i /><i /></div>
      <Island />
      <main id="top">
       
        <section className="yc-hero">
          <div className="yc-card">
            <div className="yc-copy">
              <span className="yc-pill"><b />Hospital consulting, end to end</span>
              <h1>
  <span style={{ display: "block", whiteSpace: "nowrap" }}>Strategically Planned . . .</span>
  <span style={{ display: "block", whiteSpace: "nowrap" }}>Efficiently Operated . . .</span>
  <span style={{ display: "block", whiteSpace: "nowrap" }}>Digitally Transformed . . .</span>
</h1>
              <p className="yc-quote">
                <h2>Dr. Arun Verma | Director & CEO</h2>

A distinguished healthcare strategist, institutional leader & President’s Gold Medalist in Hospital Administration, with extensive experience across premier healthcare institutions.

A former faculty member at AIIMS New Delhi, Senior Consultant with PMU & Chief Operating Officer at 500+ bed greenfield hospital, he has contributed to development of landmark healthcare infrastructure and  their operations. 

He brings a unique confluence of clinical insight, strategic foresight, technical expertise and managerial acumen across hospital planning, infrastructure development, commissioning, operational excellence and digital transformation.
              </p>
              <div className="yc-actions">
                <a href="#consult" className="yc-btn dark">Book a call</a>
                <Link href="/about/dr-arun-verma" className="yc-btn line">Read more →</Link>
              </div>
            </div>

            <div className="yc-photo">
              <img src="/images/photo.png" alt="Dr. Arun Verma" />
              <div className="yc-tag"><b>Dr. Arun Verma</b><span>MBBS | DNB (Gold Medalist) | PGDHHM | CDM | MNAMS | CORe (HBS) | Fellow, ISQua | NABH & NQAS Assessor | Guinness Record Holder | Former Faculty, AIIMS New Delhi </span></div>
            </div>
          </div>
        </section>
  


                <section id="projects">
          <Projects />
        </section>
        <section id="services">
          <ServicesOffered />
        </section>

      

        <section id="consult">
          <div className="consult">
            <div className="head rv" style={{ marginBottom: 0 }}>
              <h2>Tell us what you are building</h2>
              <p>Share a few details and a consultant will reach out on WhatsApp or email within one working day.</p>
            </div>
            <Form />
          </div>
        </section>
      </main>
            <Footer />
    </>
  );
}
