import ServicePage from "../../components/ServicePage";

export const metadata = { title: "Hospital Statutes & Compliances — The Hospital Increators" };

const SERVICES = [
  { t: "1.	Building Statutes & Infrastructure Regulatory Compliance", d: "We provide strategic guidance on statutory building requirements and infrastructure-related approvals to ensure that healthcare facilities are planned, designed, and developed in accordance with applicable building regulations, safety standards, and healthcare infrastructure norms." },
  { t: "2.	Environmental Safety & Sustainability Compliance" , d: "Ensuring compliance with environmental safety regulations and standards." },
  { t: "3.	Radiation Safety & Regulatory Compliance", d: "Maintaining compliance with radiation safety protocols and regulations." },
  { t: "4.	Operational Statutes, Licensing & Regulatory Readiness", d: "Ensuring that the hospital operates in accordance with all applicable laws and regulations." },
]

export default function Page() {
  return (
    <ServicePage
      letter="B"
      title="Hospital Statutes & Compliances"
      tagline="Ensuring Safety, Compliance & Operational Readiness."
      intro="Establishing and operating a healthcare institution requires meticulous adherence to a complex framework of statutory regulations, building codes, environmental standards, safety protocols, and operational licensing requirements.
We provide comprehensive statutory compliance and regulatory advisory services to assist healthcare promoters, developers, and hospital management teams in navigating these requirements with clarity, confidence, and efficiency.
Our multidisciplinary expertise enables us to integrate regulatory compliance into every stage of healthcare infrastructure development—from initial project conceptualisation and architectural planning to commissioning, operational readiness, and ongoing regulatory compliance.
"
      services={SERVICES}
      valueHeading="Compliance by Design. Safety by Commitment. Excellence by Practice."
      valueText="By integrating statutory requirements into infrastructure planning, project execution, and hospital operations, we help healthcare organisations achieve regulatory preparedness, risk mitigation, efficient commissioning, and sustainable operational performance."
    />
  );
}