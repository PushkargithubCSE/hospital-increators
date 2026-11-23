import ServicePage from "../../components/ServicePage";

export const metadata = { title: "Healthcare IT & Digital Transformation — The Hospital Increators" };

const SERVICES = [
  { t: "Healthcare Software Solutions & Hosting (HIS, EMR, ERP, HRMS & PACS)", d: "Providing strategic advisory for the selection, integration, and hosting of comprehensive healthcare software solutions to enable seamless clinical, administrative, and financial operations." },
  { t: "IT Needs Assessment", d: "Evaluating institutional requirements, existing technological capabilities, and operational challenges to develop customised and future-ready digital transformation strategies." },
  { t: "Clinical & Operational Workflow Definition", d: "Mapping and optimising clinical, administrative, and financial workflows to ensure seamless integration between hospital processes and digital systems." },
  { t: "Software Requirements Specification (SRS) & Functional Requirements Specification (FRS)", d: "Developing comprehensive technical and functional requirement documents to ensure software solutions align with institutional objectives and operational needs." },
  { t: "Software Product Shortlisting", d: "Identifying and evaluating suitable healthcare technology solutions based on functionality, interoperability, scalability, security, vendor capabilities, and cost-effectiveness." },
  { t: "Software Product Evaluation & Selection", d: "Facilitating objective product comparisons, technical assessments, and vendor evaluations to support informed technology investment decisions." },
  { t: "IT Implementation & Post-Implementation Support", d: "Coordinating software deployment, system integration, data migration, user training, go-live readiness, and ongoing technical support to ensure successful digital adoption." },
  { t: "Management Information Systems (MIS) & Business Intelligence", d: "Developing integrated reporting frameworks, executive dashboards, and performance analytics to enable real-time monitoring, informed decision-making, and institutional performance optimisation." },
  { t: "Healthcare Website Design & Digital Presence", d: "Creating professional, responsive, patient-centric healthcare websites that strengthen institutional identity, enhance patient engagement, and enable seamless access to healthcare information and digital services." },
];

export default function Page() {
  return (
    <ServicePage
      letter="H"
      title="Healthcare IT & Digital Transformation"
      tagline="Empowering Healthcare Through Technology. Connecting Systems. Enhancing Efficiency. Enabling Smarter Healthcare Delivery."
      intro="We provide comprehensive healthcare IT and digital transformation advisory services to help healthcare institutions adopt intelligent, integrated, secure, and scalable digital solutions that enhance clinical efficiency, streamline hospital operations, and support data-driven decision-making."
      services={SERVICES}
      valueHeading="Digitally Connected. Operationally Intelligent. Future-Ready Healthcare."
      valueText="We bridge the gap between healthcare delivery and digital innovation by aligning technology investments with clinical priorities, operational requirements, and institutional growth strategies. Our approach empowers healthcare organisations to achieve seamless digital integration, enhanced patient experiences, improved operational efficiency, stronger data governance, and sustainable digital transformation."
    />
  );
}