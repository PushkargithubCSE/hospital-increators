import SubHero from "../../components/SubHero";

export const metadata = { title: "Team — The Hospital Increators" };

const TEAM = [
  ["Team Member 1", "Role"],
  ["Team Member 2", "Role"],
  ["Team Member 3", "Role"],
  ["Team Member 4", "Role"],
];

export default function Page() {
  return (
    <>
      <SubHero eyebrow="About Us" title="Our Team" lead="The people behind your project." />
      <div className="cols">
        {TEAM.map(([n, r]) => (
          <div key={n} className="glass panel center">
            <div className="avatar">{n.split(" ").map((w) => w[0]).join("").slice(0, 2)}</div>
            <h3>{n}</h3>
            <p>{r}</p>
          </div>
        ))}
      </div>
    </>
  );
}