import "./globals.css";
import { Plus_Jakarta_Sans, Spline_Sans } from "next/font/google";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-plus-jakarta",
  weight: ["300", "400", "500", "600", "700", "800"]
});

const splineSans = Spline_Sans({
  subsets: ["latin"],
  variable: "--font-spline-sans",
  weight: ["300", "400", "500", "600", "700"]
});

import LayoutAnimations from "../components/ui/LayoutAnimations";

export const metadata = {
  title: "HackMSIT | Electric Scribble",
  description: "Electric Scribble Hackathon website"
};

export default function RootLayout({ children }) {
  return (
    <html className="light" lang="en">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body
        className={`${plusJakartaSans.variable} ${splineSans.variable} bg-background font-body text-on-background selection:bg-secondary-container selection:text-on-secondary-container`}
      >
        <LayoutAnimations>{children}</LayoutAnimations>
      </body>
    </html>
  );
}
