export default function SubHero({ eyebrow, title, lead }) {
  return (
    <header className="sub-hero">
      <h1>{title}</h1>
      <p className="lead">{lead}</p>
    </header>
  );
}