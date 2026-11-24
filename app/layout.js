
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://thehospitalincreators.com"),

  title: "The Hospital Increators | Healthcare Consulting",

  description:
    "Strategically Planned. Efficiently Operated. Digitally Transformed.",

  openGraph: {
    title: "The Hospital Increators",
    description:
      "Insight. Advise. Create. Operate.",
    url: "https://thehospitalincreators.com/",
    siteName: "The Hospital Increators",
    type: "website",
    images: [
      {
        url: "/images/logo.png",
        width: 1200,
        height: 1200,
        alt: "The Hospital Increators - Official Logo",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "The Hospital Increators",
    description: "Insight. Advise. Create. Operate.",
    images: ["/images/logo.png"],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
