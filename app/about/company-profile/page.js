import SubHero from "../../components/SubHero";

export const metadata = { title: "Company Profile — The Hospital Increators" };

export default function Page() {
  return (
    <>
      <SubHero eyebrow="About Us" title="Company Profile" lead="Who we are and what drives us." />
      <div className="glass panel"><h3>Who we are</h3><p>Replace this with your company introduction, founding story and experience.</p></div>
      <div className="cols">
        <div className="glass panel"><h3>Our mission</h3><p>Replace with your mission statement.</p></div>
        <div className="glass panel"><h3>Our vision</h3><p>Replace with your vision statement.</p></div>
      </div>
    </>
  );
}