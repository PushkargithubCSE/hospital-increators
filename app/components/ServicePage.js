import Link from "next/link";

export default function ServicePage({ letter, title, tagline, intro, listTitle = "Offered Key Services", services, valueHeading, valueText }) {
  return (
    <>
      <Link href="/#services" className="svc-back">← All services</Link>

      <header className="svc-hero">
        <div className="svc-letter">{letter}</div>
        <h1>{title}</h1>
        <p className="svc-tag">{tagline}</p>
      </header>

      <div className="glass svc-intro">
        <p>{intro}</p>
      </div>

      <h2 className="svc-h2">{listTitle}</h2>
      <div className="svc-grid">
        {services.map((s, i) => (
          <article key={s.t} className="svc-card glass">
            <span className="svc-n">{i + 1}</span>
            <h3>{s.t}</h3>
            <p>{s.d}</p>
          </article>
        ))}
      </div>

      <section className="svc-value">
        <small>Our Value Proposition</small>
        <h2>{valueHeading}</h2>
        <p>{valueText}</p>
        <Link href="/#consult" className="btn svc-cta">Request consultation</Link>
      </section>
    </>
  );
}