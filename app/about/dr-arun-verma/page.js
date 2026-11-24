import SubHero from "../../components/SubHero";

export const metadata = { title: "Dr. Arun Verma — The Hospital Increators" };

export default function Page() {
  return (
    <>
      <SubHero
        eyebrow="About Us"
        title="Dr. Arun Verma"
        lead="MBBS | DNB (Gold Medalist) | PGDHHM | CDM | MNAMS | CORe (HBS) | Fellow, ISQua | NABH & NQAS Assessor | Guinness Record Holder | CXO | Former Faculty, AIIMS New Delhi"
      />

      <div className="glass panel profile">
        <div className="avatar">AV</div>
        <div>
          <h3>Director & CEO | Healthcare Strategy, Hospital Planning & Institutional Development</h3>
          <p style={{ fontWeight: 600, color: "var(--magenta)", marginTop: 6 }}>
            “Shaping healthcare institutions that inspire confidence, deliver excellence, and create lasting value.”
          </p>
        </div>
      </div>

      <div className="glass panel" style={{ display: "grid", gap: 20 }}>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--plum)" }}>
          Dr. Arun Verma is a distinguished healthcare professional and strategic leader with extensive experience in
          hospital planning, infrastructure development, healthcare operations, and digital transformation. His
          professional journey spans some of India's leading healthcare institutions, including AIIMS New Delhi, Sant
          Nirankari Healthcity, and Sir Ganga Ram Hospital.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--plum)" }}>
          With a strong foundation in clinical medicine and hospital administration, Dr. Verma brings a unique
          combination of strategic vision, clinical insight, technical expertise, and operational leadership to the
          development of modern healthcare institutions.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--plum)" }}>
          During his association of more than seven years with AIIMS New Delhi as faculty & Senior Consultant Project
          Management Unit (PMU), he contributed to major hospital & healthcare university master planning and
          infrastructure initiatives encompassing over 4,000 beds and 20 million square feet of built-up area. He was
          also instrumental in the planning and commissioning of the 700+ bed National Cancer Institute, AIIMS Jhajjar.
          As Chief Operating Officer of Sant Nirankari Healthcity, he led key aspects of the planning, development,
          commissioning, and operational readiness including IT & HR of a 500+ bed multispecialty hospital.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--plum)" }}>
          A strong advocate of technology-enabled healthcare, Dr. Verma has also spearheaded major digital
          transformation initiatives, including the comprehensive IT modernisation of AIIMS New Delhi, encompassing
          hospital information systems, digital infrastructure, process re-engineering, and cybersecurity.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--plum)" }}>
          A President's Gold Medalist in Hospital Administration, Fellow of ISQua, and NABH & NQAS Assessor, Dr. Verma
          combines professional excellence with a forward-looking approach to healthcare development.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--plum)" }}>
          His vision is to create healthcare institutions where clinical excellence, intelligent infrastructure,
          advanced technology, operational efficiency, and financial sustainability come together seamlessly.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.8, fontWeight: 600, color: "var(--magenta)" }}>
          As Director and CEO , he brings this philosophy to the organisation, guiding its commitment to delivering thoughtfully
          planned, patient-centric, high-performing, and future-ready healthcare institutions.
        </p>
      </div>
    </>
  );
}