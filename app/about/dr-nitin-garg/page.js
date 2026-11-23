import SubHero from "../../components/SubHero";

export const metadata = { title: "Dr. Nitin Garg — The Hospital Increators" };

export default function Page() {
  return (
    <>
      <SubHero eyebrow="About Us" title="Dr. Nitin Garg" lead="MBBS | MD (AIIMS, New Delhi) | MAHA | FISQua" />

      <div className="glass panel profile">
        <div className="avatar">NG</div>
        <div>
          <h3>Healthcare Planning, Hospital Administration & Quality Excellence</h3>
          <p style={{ fontWeight: 600, color: "var(--magenta)", marginTop: 6 }}>
            Combining Clinical Insight, Strategic Vision and Global Best Practices to Shape Healthcare Excellence.
          </p>
        </div>
      </div>

      <div className="glass panel" style={{ display: "grid", gap: 20 }}>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--plum)" }}>
          Dr. Nitin Garg is an accomplished healthcare professional and hospital planning expert with over two decades
          of extensive experience in healthcare administration, hospital planning and design, quality management, and
          healthcare infrastructure development.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--plum)" }}>
          An alumnus of the prestigious All India Institute of Medical Sciences (AIIMS), New Delhi, where he earned
          his postgraduate degree in Hospital Administration, Dr. Garg brings together clinical knowledge, strategic
          foresight, and a comprehensive understanding of the complexities of modern healthcare delivery.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--plum)" }}>
          His professional expertise spans hospital master planning, healthcare facility design, project planning and
          execution, quality assurance, healthcare policy, medical equipment planning and procurement, supply chain
          management, and healthcare information technology. He has provided technical and medical consultancy to
          numerous government and corporate healthcare institutions, both independently and in collaboration with
          architectural firms.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.8, color: "var(--plum)" }}>
          Dr. Garg's approach to healthcare development is guided by a distinctive philosophy: every healthcare
          institution must reflect the needs, cultural context, and healthcare practices of the community it serves,
          while embracing internationally recognised standards of quality, safety, and operational excellence.
        </p>
        <p style={{ fontSize: 17, lineHeight: 1.8, fontWeight: 600, color: "var(--magenta)" }}>
          Guided by this philosophy and a commitment to innovation and excellence, he strives to create thoughtfully
          designed, operationally efficient, sustainable, and future-ready healthcare institutions that harmonise
          global best practices with local healthcare needs, enhance patient experiences, and deliver enduring value
          to healthcare providers and the communities they serve.
        </p>
      </div>
    </>
  );
}