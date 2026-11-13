import Link from "next/link";
import Island from "../components/Island";
import Footer from "../components/Footer";
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
      <Footer />
    </>
  );
}