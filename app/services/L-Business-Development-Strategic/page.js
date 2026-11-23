import ServicePage from "../../components/ServicePage";

export const metadata = { title: "Healthcare Business Development & Strategic Advisory — The Hospital Increators" };

const SERVICES = [
  { t: "Healthcare Business Modelling", d: "Developing innovative, financially viable, and scalable healthcare business models that optimise revenue streams, resource utilisation, operational efficiency, and long-term profitability." },
  { t: "Clinical Service Launch & Expansion Strategy", d: "Formulating comprehensive strategies for introducing new clinical specialities, healthcare services, and centres of excellence, ensuring market relevance, operational readiness, and sustainable revenue generation." },
  { t: "Schedule of Charges (SOC) & Pricing Policies", d: "Developing competitive, transparent, and financially sustainable pricing frameworks based on market benchmarking, service costing, payer dynamics, and institutional positioning." },
  { t: "Hospital Strategy Formulation & Growth Planning", d: "Designing comprehensive institutional strategies encompassing market positioning, service diversification, competitive differentiation, strategic investments, and long-term business expansion." },
  {
    t: "Strategic Outsourcing & Partnership Management",
    d: "Evaluating outsourcing opportunities for clinical, diagnostic, and support services to enhance operational efficiency, service quality, cost-effectiveness, and institutional performance.",
    sub: [
      { t: "Memorandum of Understanding (MoU)", d: "Facilitating the development of structured partnership frameworks defining collaborative objectives, roles, responsibilities, and commercial arrangements." },
      { t: "Service Level Agreements (SLA)", d: "Developing performance-oriented service agreements with clearly defined deliverables, quality standards, accountability mechanisms, and measurable performance indicators." },
    ],
  },
  { t: "Medical Consultant Engagement & Onboarding Framework", d: "Establishing structured consultant recruitment, engagement, credentialing, privileging, and onboarding mechanisms aligned with clinical requirements, institutional policies, and sustainable professional relationships." },
];

export default function Page() {
  return (
    <ServicePage
      letter="L"
      title="Healthcare Business Development & Strategic Advisory"
      tagline="Envisioning Growth. Formulating Strategies. Creating Value. Driving Sustainable Healthcare Success."
      intro="We provide comprehensive healthcare business development and strategic advisory services to help healthcare institutions identify growth opportunities, strengthen market positioning, optimise revenue potential, and achieve long-term financial and operational sustainability. Our approach integrates healthcare market intelligence, clinical service planning, financial expertise, and strategic partnerships to develop innovative business models and actionable growth strategies aligned with institutional objectives and evolving healthcare demands."
      listTitle="Our Key Services"
      services={SERVICES}
      valueHeading="Strategic Vision. Intelligent Partnerships. Sustainable Growth."
      valueText="We believe that successful healthcare business development requires more than identifying opportunities—it demands a clear strategic direction, commercially sound decisions, effective partnerships, and disciplined execution. Through our integrated business development and strategic advisory approach, we enable healthcare institutions to achieve stronger market positioning, optimised service portfolios, diversified revenue streams, improved financial performance, and sustainable institutional growth. Our commitment is to transform healthcare business opportunities into strategically aligned, operationally efficient, financially rewarding, and future-ready healthcare enterprises."
    />
  );
}