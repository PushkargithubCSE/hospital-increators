
import { GeistSans } from "geist/font/sans";
import "./globals.css";

export const metadata = {
  metadataBase: new URL("https://thehospitalincreators.com"),

  title: "The Hospital Increators",

  description:
    "Strategically Planned. Efficiently Operated. Digitally Transformed.",

  openGraph: {
    title: "The Hospital Increators",
    description:
      "Strategically Planned. Efficiently Operated. Digitally Transformed.",
    url: "https://thehospitalincreators.com/",
    siteName: "The Hospital Increators",
    type: "website",

    images: [
      {
        url: "/images/logo.jpg",
        width: 1200,
        height: 1200,
        alt: "The Hospital Increators Official Logo",
        type: "image/jpg",
      },
    ],
  },

  twitter: {
    card: "summary",
    title: "The Hospital Increators",
    description:
      "Strategically Planned. Efficiently Operated. Digitally Transformed.",
    images: [
      "/images/logo.jpg",
    ],
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={GeistSans.variable}>
      <body>{children}</body>
    </html>
  );
}
