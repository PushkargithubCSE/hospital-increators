import SubHero from "../../components/SubHero";
import Link from "next/link";

export const metadata = { title: "Why Choose Us — The Hospital Increators" };



export default function Page() {
  return (
    <>
      <SubHero eyebrow="About Us" title="Why Choose Us" lead="Experience That Inspires Confidence. Expertise That Creates Lasting Value." />
      <div className="glass panel what-we-do-copy">
        <p>
          The success of a healthcare institution begins with the right vision, the right strategy, and the right expertise.
Our strength lies in our multidisciplinary perspective, deep understanding of healthcare complexities, and ability to align clinical excellence with infrastructure efficiency, technological advancement, and financial sustainability

        </p>
        <p>
We approach every healthcare project with a commitment to strategic precision, innovative thinking, operational practicality, and long-term value creation.
Our philosophy ensures that healthcare investments are guided by sound business fundamentals, clinically driven planning, intelligent resource optimisation, and sustainable operational strategies.


        </p>
        <p>
       We aspire to be more than consultants — we strive to be trusted strategic partners in shaping healthcare institutions that deliver exceptional patient experiences, operational excellence, and enduring institutional value.

        </p>
        <p className="what-we-do-tagline">
          Where Healthcare Expertise Meets Strategic Vision — and Vision Becomes Excellence.
        </p>
      </div>
      <p style={{ marginTop: 28 }}><Link href="/#services" className="btn">See all services</Link></p>
    </>
  );
}