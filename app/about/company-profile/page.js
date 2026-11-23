import SubHero from "../../components/SubHero";
import Link from "next/link";

export const metadata = { title: "Company Profile — The Hospital Increators" };


export default function Page() {
  return (
    <>
      <SubHero eyebrow="About Us" title="Company Profile" lead="From Strategic Vision to Institutional Excellence." />
      <div className="glass panel what-we-do-copy">
        <p>
         We are a distinguished multidisciplinary healthcare consultancy bringing together experienced medical professionals, hospital planners, healthcare architects, financial strategists, technology specialists, quality experts, and project management professionals. Our collective expertise enables us to transform ambitious healthcare visions into high-performing, patient-centric, and sustainable healthcare institutions.
        </p>
        <p>
       Our comprehensive expertise spans the entire healthcare development journey — from initial concept and strategic planning to successful commissioning and operational excellence. We provide integrated advisory services encompassing healthcare feasibility and business strategy, hospital planning and design, infrastructure development, project management, medical equipment planning and procurement, regulatory compliance, digital transformation, hospital commissioning, hospital relaunch, and operational optimisation.
        </p>
        <p>
         Our distinctive strength lies in the seamless integration of clinical insight, strategic foresight, innovative design, financial discipline, and operational expertise. We recognise that successful healthcare institutions are built not merely through advanced infrastructure and technology, but through thoughtful planning that harmonises clinical excellence, patient experience, operational efficiency, and long-term financial sustainability.
         With a commitment to innovation, precision, and professional excellence, we collaborate closely with healthcare investors, promoters, and institutions to develop intelligent, efficient, adaptable, and future-ready healthcare environments.
        </p>
        <p className="what-we-do-tagline">
          Beyond traditional consultancy, we aspire to be trusted strategic partners — translating healthcare ambitions into thoughtfully planned, efficiently managed, and enduring institutions that create lasting value for patients, healthcare providers, and stakeholders.
        </p>
      </div>
      <p style={{ marginTop: 28 }}><Link href="/#services" className="btn">See all services</Link></p>
    </>
  );
}