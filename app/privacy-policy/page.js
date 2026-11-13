import Island from "../components/Island";
import Footer from "../components/Footer";
import SubHero from "../components/SubHero";

export const metadata = { title: "Privacy Policy — The Hospital Increators" };

export default function Page() {
  return (
    <>
      <div className="aurora"><i /><i /><i /><i /></div>
      <Island />
      <main className="sub">
        <SubHero eyebrow="Legal" title="Privacy Policy" lead="How we handle your information." />
        <div className="glass panel">
          <h3>Your privacy</h3>
          <p>Replace this text with your privacy policy: what you collect, how you use it, and how people can contact you.</p>
        </div>
      </main>
      <Footer />
    </>
  );
}