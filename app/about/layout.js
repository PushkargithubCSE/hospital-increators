import Link from "next/link";
import Island, { Mark } from "../components/Island";
import { ABOUT_LINKS } from "../components/aboutLinks";

export default function AboutLayout({ children }) {
  return (
    <>
      <div className="aurora"><i /><i /><i /><i /></div>
      <Island />
      <main className="sub">
        {children}
        <nav className="sub-nav" aria-label="More about us">
          {ABOUT_LINKS.map((l) => (
            <Link key={l.href} href={l.href} className="chip">{l.label}</Link>
          ))}
        </nav>
      </main>
      <footer>
        <span style={{ display: "flex", alignItems: "center", gap: 10 }}><Mark size={24} />The Hospital Increators</span>
        <span>Insight · Advise · Create · Operate</span>
      </footer>
    </>
  );
}