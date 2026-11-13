export default function SubHero({ eyebrow, title, lead }) {
  return (
    <header className="sub-hero">
      <div className="pill glass"><b />{eyebrow}</div>
      <h1>{title}</h1>
      <p className="lead">{lead}</p>
    </header>
  );
}