import SubHero from "../../components/SubHero";

export const metadata = { title: "Dr. Arun Verma — The Hospital Increators" };

export default function Page() {
  return (
    <>
      <SubHero eyebrow="About Us" title="Dr. Arun Verma" lead="Add his title, for example Founder and Lead Consultant." />
      <div className="glass panel profile">
        <div className="avatar">AV</div>
        <div>
          <h3>Profile</h3>
          <p>Replace this with Dr. Verma's biography, qualifications, experience and achievements.</p>
        </div>
      </div>
    </>
  );
}