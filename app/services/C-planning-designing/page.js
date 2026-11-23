import ServicePage from "../../components/ServicePage";

export const metadata = { title: "Healthcare Planning & Designing — The Hospital Increators" };

const SERVICES = [
  { t: "1.  Hospital Master Planning", d: "Developing comprehensive and future-oriented master plans that optimise land utilisation, infrastructure development, departmental zoning, accessibility, circulation, and provisions for future expansion." },
  { t: "2.	Functional Planning & Clinical Workflow Design", d: "Creating efficient, patient-centric functional layouts that integrate clinical processes, departmental interrelationships, patient and staff movement, infection prevention, and operational requirements to enhance safety and healthcare delivery." },
  { t: "3.	Space Programming & Area Optimisation", d: "Establishing detailed departmental area requirements, space allocation, room schedules, and infrastructure specifications to ensure optimal utilisation of built-up space while balancing clinical needs, operational efficiency, and investment considerations." },
  { t: "4.	Healthcare Architectural Design Services", d: "Providing innovative, functional, and aesthetically refined architectural design solutions that harmonise patient comfort, clinical efficiency, accessibility, safety, regulatory requirements, and sustainable design principles." },
  { t: "5.  Medical MEP Engineering & Infrastructure Planning", d: "Integrating specialised mechanical, electrical, and plumbing engineering solutions tailored to healthcare environments for complex medical equipments." },
  
];

export default function Page() {
  return (
    <ServicePage
      letter="C"
      title="Healthcare Planning & Designing"
      tagline="Envisioning Excellence. Designing Efficiency. Creating Future-Ready Healthcare Infrastructure."
      intro="We offer comprehensive healthcare planning and design solutions that seamlessly integrate clinical functionality, architectural innovation, engineering excellence, and operational efficiency. Our multidisciplinary approach ensures that every healthcare facility is thoughtfully conceptualised and meticulously designed to deliver optimal patient experiences, efficient clinical workflows, regulatory compliance, and long-term sustainability.
"
      services={SERVICES}
      valueHeading="Intelligently Planned. Purposefully Designed. Built for Healthcare Excellence."
      valueText="We believe that exceptional healthcare infrastructure begins with intelligent planning and purposeful design. Our integrated approach transforms healthcare visions into safe, efficient, adaptable, sustainable, and future-ready healing environments that create lasting value for patients, healthcare professionals, and institutional stakeholders."
    />
  );
}
