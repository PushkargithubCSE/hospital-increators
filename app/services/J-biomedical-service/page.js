import ServicePage from "../../components/ServicePage";

export const metadata = { title: "Biomedical Engineering & Specialised Healthcare Infrastructure Services — The Hospital Increators" };

const SERVICES = [
  { t: "Medical Gas Pipeline System (MGPS)", d: "Providing comprehensive planning, design coordination, technical specifications, and implementation advisory for medical gas distribution systems to ensure safe, reliable, and uninterrupted gas supply across hospital." },
  { t: "Operation Theatre (OT) Infrastructure", d: "Delivering specialised planning and technical advisory for modular operation theatres, including air circulation & filteration, medical gas integration, surgical lighting, equipment integration, and infection prevention requirements to support safe and efficient surgical environments." },
  { t: "Central Sterile Supply Department (CSSD)", d: "Designing efficient CSSD layouts, equipment configurations, sterilisation workflows, and clean-to-dirty segregation systems to ensure effective instrument reprocessing, infection prevention, and operational efficiency." },
  { t: "Nurse Call System (NCS)", d: "Planning and integrating intelligent nurse call and patient communication systems to facilitate timely clinical assistance, improve response coordination, and enhance patient safety and care delivery." },
  { t: "Pneumatic Tube System (PTS)", d: "Providing planning and integration advisory for automated pneumatic transport systems to enable rapid, secure, and efficient movement of suitable clinical samples, medications, and essential materials across hospital departments." },
];

export default function Page() {
  return (
    <ServicePage
      letter="J"
      title="Biomedical Engineering & Specialised Healthcare Infrastructure Services"
      tagline="Biomedical Engineering. Integrating Technology. Enhancing Patient Safety. Enabling Clinical Excellence."
      intro="We provide comprehensive biomedical engineering and specialised healthcare infrastructure advisory services to ensure the seamless integration of critical medical systems within healthcare facilities. Our approach combines clinical functionality, engineering expertise, technological innovation, and regulatory compliance to create safe, efficient, reliable, and future-ready healthcare environments."
      listTitle="Our Key Services"
      services={SERVICES}
      valueHeading="Intelligent Biomedical Engineering. Seamless Integration. Reliable Healthcare Infrastructure."
      valueText="We believe that specialised biomedical infrastructure forms the backbone of safe, efficient, and high-performing healthcare institutions. Through our integrated approach to biomedical engineering and infrastructure planning, we help healthcare organisations achieve enhanced patient safety, optimised clinical workflows, reliable system performance, regulatory compliance, and long-term operational sustainability. Our commitment is to create technologically advanced, clinically responsive, and future-ready healthcare environments that empower medical professionals and elevate the standards of patient care."
    />
  );
}