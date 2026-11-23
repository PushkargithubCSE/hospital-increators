import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata = {
  title: "The Hospital Increators — Insight, Advise, Create, Operate",
  description: "Hospital consulting from first idea to daily operations.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>{children}</body>
    </html>
  );
}