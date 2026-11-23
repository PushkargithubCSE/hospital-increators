import ServicePage from "../../components/ServicePage";

export const metadata = { title: "Healthcare Marketing, Branding & Public Relations — The Hospital Increators" };

const SERVICES = [
  { t: "Marketing Strategy & Brand Positioning", d: "Developing comprehensive marketing strategies and distinctive brand positioning frameworks to strengthen institutional identity, competitive differentiation, and market leadership." },
  { t: "Digital Marketing", d: "Designing and implementing targeted digital marketing strategies to enhance online visibility, expand patient outreach, and drive measurable institutional growth." },
  { t: "Social Media Management", d: "Building and managing engaging social media platforms to strengthen brand awareness, foster meaningful patient connections, and enhance institutional reputation." },
  { t: "Content Creation & Communication", d: "Developing compelling, informative, and medically responsible content that communicates institutional expertise, builds patient trust, and strengthens brand credibility." },
  { t: "Doctor Branding & Professional Reputation Management", d: "Creating ethical, personalised branding strategies that highlight medical expertise, strengthen professional visibility, and establish credibility among patients and healthcare stakeholders." },
  { t: "Healthcare Service Launch & Promotional Strategy", d: "Planning and executing strategic marketing campaigns for new hospitals, clinical specialities, and healthcare services to maximise market awareness, patient engagement, and successful service introduction." },
  { t: "Website Development & Search Engine Optimisation (SEO)", d: "Developing professional, patient-centric websites supported by effective SEO strategies to improve digital discoverability, user experience, and online patient engagement." },
];

export default function Page() {
  return (
    <ServicePage
      letter="I"
      title="Healthcare Marketing, Branding & Public Relations"
      tagline="Building Trust. Enhancing Visibility. Strengthening Brand Identity. Driving Sustainable Healthcare Growth."
      intro="We provide comprehensive healthcare marketing, branding, and public relations advisory services to help healthcare institutions establish a distinctive market presence, strengthen patient engagement, enhance institutional credibility, and achieve sustainable growth through strategic, ethical, and innovative marketing solutions."
      services={SERVICES}
      valueHeading="Strategic Visibility. Trusted Reputation. Meaningful Patient Connections."
      valueText="We believe that successful healthcare marketing extends beyond conventional promotion—it is about establishing trust, communicating clinical excellence, and building lasting relationships with patients and communities. Through our integrated marketing and public relations approach, we help healthcare institutions achieve stronger brand recognition, enhanced digital presence, improved patient engagement, differentiated market positioning, and sustainable institutional growth, while maintaining the highest standards of professional ethics and responsible healthcare communication."
    />
  );
}