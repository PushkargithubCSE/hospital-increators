import SubHero from "../../components/SubHero";

export const metadata = { title: "Why Choose Us — The Hospital Increators" };

const REASONS = [
  ["End to end", "One partner from feasibility to daily operations."],
  ["Independent advice", "Recommendations based on your goals, not on vendors."],
  ["Hands-on delivery", "We stay with you through planning, launch and beyond."],
  ["Measurable results", "Clear targets, regular reviews and honest reporting."],
];

export default function Page() {
  return (
    <>
      <SubHero eyebrow="About Us" title="Why Choose Us" lead="What sets us apart. Replace these points with your own." />
      <div className="cols">
        {REASONS.map(([t, p]) => (
          <div key={t} className="glass panel"><h3>{t}</h3><p>{p}</p></div>
        ))}
      </div>
    </>
  );
}