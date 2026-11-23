import Link from "next/link";
import SubHero from "../../components/SubHero";

export const metadata = { title: "What We Do — The Hospital Increators" };



export default function Page() {
  return (
    <>
      <SubHero eyebrow="About Us" title="What We Do" lead="Transforming Healthcare Vision into Operational Excellence." />
      <div className="glass panel what-we-do-copy">
        <p>
          We deliver comprehensive, end-to-end healthcare consultancy and
          strategic advisory services, partnering with healthcare investors,
          promoters, hospital owners, and institutions throughout their journey
          — from visionary concepts to successful commissioning, operational
          excellence, and sustainable growth.
        </p>
        <p>
          Our integrated expertise spans healthcare feasibility and business
          strategy, hospital master planning and architectural design,
          infrastructure development, project management, medical equipment
          planning, regulatory advisory, hospital commissioning, digital
          transformation, and operational optimisation.
        </p>
        <p>
          By seamlessly integrating clinical expertise, strategic insight,
          technological innovation, and management excellence, we create
          intelligent, efficient, resilient, and future-ready healthcare
          ecosystems.
        </p>
        <p className="what-we-do-tagline">
          From concept to commissioning. From operational efficiency to
          institutional excellence.
        </p>
      </div>
      <p style={{ marginTop: 28 }}><Link href="/#services" className="btn">See all services</Link></p>
    </>
  );
}