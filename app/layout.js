
import "@fontsource-variable/geist";
import "./globals.css";

export const metadata = {
  title: "The Hospital Increators — Insight, Advise, Create, Operate",
  description: "Hospital consulting from first idea to daily operations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
