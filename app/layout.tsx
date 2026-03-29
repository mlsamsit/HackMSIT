import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HACKMSIT | Innovate. Build. Transcend.',
  description: 'A 24-hour hackathon for developers, designers, and visionaries.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="antialiased min-h-screen text-on-surface font-body overflow-x-hidden">
        {/* Background Video */}
        <video
          autoPlay
          loop
          muted
          playsInline
          className="fixed top-0 left-0 w-screen h-screen object-cover -z-50"
          src="/bg.mp4"
          disablePictureInPicture
          controls={false}
        />
        {/* Overlay to dim the video so focus remains on content */}
        <div className="fixed top-0 left-0 w-screen h-screen  -z-40 pointer-events-none "></div>

        {children}
      </body>
    </html>
  );
}
