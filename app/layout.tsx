import type { Metadata } from "next";
import { Roboto, Geist } from "next/font/google";
import { BackgroundBeams } from "@/components/ui/beams";
import { TechParticles } from "@/components/ui/TechParticles";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import "./globals.css";
import { cn } from "@/lib/utils";

const geist = Geist({ subsets: ["latin"], variable: "--font-sans" });

const roboto = Roboto({
  variable: "--font-roboto",
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "700", "900"],
});

export const metadata: Metadata = {
  title: "Official ISE Student Community",
  description:
    "The official portal for Information Systems Engineering students to learn, collaborate, and innovate.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={cn("h-full", "antialiased", roboto.variable, "font-sans", geist.variable)}
    >
      <body
        className={`${roboto.className} relative min-h-full flex flex-col bg-white text-slate-900`}
      >
        <div className="fixed inset-0 z-0">
          <BackgroundBeams />
        </div>
        <TechParticles />
        <Navbar />
        <div className="relative z-10 flex flex-col flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
