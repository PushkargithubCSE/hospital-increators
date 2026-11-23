import ServicePage from "../../components/ServicePage";

export const metadata = { title: "Healthcare Peer Review & Technical Advisory Services — The Hospital Increators" };

const SERVICES = [
  { t: "1.  Comprehensive Peer Review of Greenfield Healthcare Projects", d: "Independent evaluation of proposed healthcare projects covering architectural layouts, departmental functionality, medical equipment planning, engineering services, and statutory compliance Our review focuses on identifying design inconsistencies, infrastructure gaps, inefficient space utilisation, equipment integration challenges, and potential regulatory concerns, ensuring that project plans are clinically appropriate, technically sound, and operationally efficient." },
  { t: "2.	Hospital Information Technology (IT) Systems Review", d: "Comprehensive assessment of proposed hospital IT infrastructure, digital healthcare architecture, and technology integration strategies. Our services encompass the evaluation of Hospital Information Management Systems (HIMS/HIS), Electronic Medical Records (EMR), Laboratory and Radiology Information Systems, PACS, IT networking, cybersecurity considerations, interoperability, and digital workflow integration. We aim to ensure that technology investments support seamless clinical operations, reliable information management, and scalable digital healthcare delivery." },
  { t: "3.	Clinical Planning & Medical Best Practices Review", d: "Expert evaluation of healthcare facility planning against contemporary clinical practices, patient safety principles, infection prevention requirements, and recognised healthcare quality standards. Our review examines clinical workflows, departmental adjacencies, patient and staff circulation, critical care infrastructure, infection control provisions, and functional design considerations to promote efficient and patient-centric healthcare delivery." },
 
];

export default function Page() {
  return (
    <ServicePage
      letter="E"
      title="Healthcare Peer Review & Technical Advisory Services"
      tagline="Independent Expertise. Objective Evaluation. Excellence in Healthcare Planning."
      intro="We provide comprehensive and independent peer review services to ensure that healthcare projects are planned, designed, and developed in alignment with contemporary medical practices, established healthcare standards, regulatory requirements, and operational best practices.
Our multidisciplinary team brings together clinical, architectural, engineering, medical equipment, and healthcare IT expertise to critically evaluate project plans, identify potential gaps, and recommend practical improvements.
Through our structured review process, we help healthcare promoters and institutions optimise infrastructure investments, enhance clinical functionality, minimise design deficiencies, and create efficient, safe, and future-ready healthcare facilities.

"
      services={SERVICES}
      valueHeading="An Independent Perspective. A Stronger Healthcare Vision."
      valueText="We believe that an independent expert review is a valuable safeguard against costly design oversights, infrastructure inefficiencies, technology mismatches, and operational challenges.
Our commitment is to deliver greater design confidence, optimised investments, improved patient safety, operational efficiency, and sustainable healthcare excellence.

 "
    />
  );
}
