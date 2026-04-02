import "./globals.css";
import { Inter, Playfair_Display } from "next/font/google";
import LayoutAnimations from "../components/ui/LayoutAnimations";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata = {
  title: "HackMSIT 1.0",
  description: "Built on Legacy. Driven by Innovation.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className={`${inter.variable} ${playfair.variable} font-sans bg-parchment text-foreground`}>
        <LayoutAnimations>{children}</LayoutAnimations>
      </body>
    </html>
  );
}
