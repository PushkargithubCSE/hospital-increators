import Island from "../components/Island";
import Footer from "../components/Footer";

export default function ServicesLayout({ children }) {
  return (
    <>
      <div className="aurora"><i /><i /><i /><i /></div>
      <Island />
      <main className="svc">{children}</main>
      <Footer />
    </>
  );
}