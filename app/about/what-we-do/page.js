import Link from "next/link";
import SubHero from "../../components/SubHero";

export const metadata = { title: "What We Do — The Hospital Increators" };

const ITEMS = [
  ["Insight", "Feasibility, market and clinical-demand studies before you commit capital."],
  ["Advise", "Independent guidance on strategy, accreditation and growth."],
  ["Create", "Planning, design coordination and equipment for new or expanding hospitals."],
  ["Operate", "Day-to-day management that keeps quality high and costs in check."],
];

export default function Page() {
  return (
    <>
      <SubHero eyebrow="About Us" title="What We Do" lead="One team, from first idea to daily operations." />
      <div className="cols">
        {ITEMS.map(([t, p]) => (
          <div key={t} className="glass panel"><h3>{t}</h3><p>{p}</p></div>
        ))}
      </div>
      <p style={{ marginTop: 28 }}><Link href="/#services" className="btn">See all services</Link></p>
    </>
  );
}