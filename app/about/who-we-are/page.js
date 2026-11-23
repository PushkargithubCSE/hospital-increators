import SubHero from "../../components/SubHero";
import Link from "next/link";

export const metadata = { title: "Who We Are — The Hospital Increators" };

export default function Page() {
  return (
    <>
      <SubHero eyebrow="About Us" title="Who We Are" lead="A Convergence of Expertise. A Vision for Healthcare Excellence." />
      <div className="glass panel">
        <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--plum)" }}>
          We are a distinguished collective of healthcare visionaries, accomplished medical professionals, strategic
          hospital planners, innovative healthcare architects, financial strategists, digital transformation
          specialists, quality experts, and seasoned project management professionals.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--plum)", marginTop: 20 }}>
          United by a shared commitment to excellence, we bring together clinical intelligence, strategic foresight,
          architectural innovation, technological expertise, and operational acumen to transform healthcare
          aspirations into world-class, patient-centric, financially sustainable, and future-ready institutions.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.8, fontWeight: 600, color: "var(--magenta)", marginTop: 20 }}>
          We go beyond planning hospitals — we envision, shape, and empower healthcare institutions for enduring success.
        </p>
      </div>
    </>
  );
}