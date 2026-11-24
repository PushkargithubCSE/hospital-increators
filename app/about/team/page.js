import SubHero from "../../components/SubHero";
import Link from "next/link";

export const metadata = { title: "Team — The Hospital Increators" };

const LEADERSHIP = [
  { name: "Dr. Arun Verma", photo: "/images/photo.png", designation: "Director and CEO", href: "/about/dr-arun-verma" },
  { name: "Dr. Nitin Garg", photo: "/images/image2.png", designation: "Associate", href: "/about/dr-nitin-garg" },
];

const TEAM = [
  { id: "team-member-1", name: "Ar. Varun Sharma", photo: "/images/t1.png", designation: "Senior Medical Architect" },
  { id: "team-member-3", name: "Ar. Hirdesh Sharma", photo: "/images/t3.png", designation: "Senior Medical Architect" },
  { id: "team-member-2", name: "Kuldeep Singh", photo: "/images/t2.png", designation: "Chartered Accountant | Healthcare Financial Consultant" },
  { id: "team-member-4", name: "Dr. Harshita Kapil", photo: "/images/t4.png", designation: "BDS, PGDM (Healthcare Management)- IIHMR Delhi" },
  { id: "team-member-5", name: "Pushkar Chandra", photo: "/images/t5.png", designation: "IT Analyst | B.Tech CSE " },
];

export default function Page() {
  return (
    <>
      <SubHero title="Our Team" lead="The people behind your project." />
      <section aria-labelledby="leadership-heading">
        <h2 id="leadership-heading" style={{ fontSize: 40, marginBottom: 8 }}>The Leadership</h2>
        <div className="cols">
          {LEADERSHIP.map(({ name, photo, designation, href }) => (
            <article
              key={name}
              className="glass panel center"
              style={{ padding: 32, minHeight: 340 }}
            >
              <Link href={href} aria-label={`View ${name}'s profile`}>
                <img
                  src={photo}
                  alt={name}
                  style={{
                    width: 220,
                    height: 220,
                    objectFit: "cover",
                    borderRadius: "50%",
                    margin: "0 auto 14px",
                    display: "block",
                  }}
                />
              </Link>
              <h3>{name}</h3>
              <p>{designation}</p>
            </article>
          ))}
        </div>
      </section>

      <section aria-labelledby="team-heading" style={{ marginTop: 40 }}>
        <h2 id="team-heading">The Team</h2>
        <div className="cols">
          {TEAM.map(({ id, name, photo, designation, experience }) => (
            <article key={id} className="glass panel center">
              {photo ? (
                <img
                  src={photo}
                  alt={name}
                  style={{
                    width: 160,
                    height: 160,
                    objectFit: "cover",
                    borderRadius: "50%",
                    margin: "0 auto 14px",
                    display: "block",
                  }}
                />
              ) : (
                <div className="avatar" aria-hidden="true">+</div>
              )}
              <h3>{name}</h3>
              <p>{designation}</p>
              <p>{experience}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}