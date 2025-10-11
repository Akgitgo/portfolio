import type { Metadata } from "next";
import { Poppins, Inter } from "next/font/google";
import "./globals.css";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Arya Kulkarni | Automation & IoT Engineer",
  description: "I build scalable, innovative applications with Next.js, Node.js, and MongoDB that drive real business impact and delight users. Portfolio showcasing modern web development, AI/ML integration, and IoT projects.",
  keywords: ["React.js", "Next.js", "Full-Stack Developer", "Node.js", "MongoDB", "TypeScript", "AI Engineer", "IoT", "Automation", "Embedded Systems", "Portfolio"],
  authors: [{ name: "Arya Kulkarni" }],
  openGraph: {
    title: "Arya Kulkarni | Automation & IoT Engineer",
    description: "Building exceptional web applications with modern technologies",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <body
        className={`${poppins.variable} ${inter.variable} antialiased`}
        suppressHydrationWarning
      >
        {children}
      </body>
    </html>
  );
}
