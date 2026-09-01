import type { Metadata } from "next";
import { Instrument_Sans, JetBrains_Mono, Newsreader } from "next/font/google";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import ModalHost from "@/components/modals/ModalHost";
import { themeInitScript } from "@/lib/theme-context";
import avatar from "@/public/enoch.jpeg";
import { Providers } from "./providers";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
  variable: "--font-newsreader",
});

const instrumentSans = Instrument_Sans({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-instrument-sans",
});

const jetBrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "Hall Enoch Asanda — Full-Stack Software Engineer",
  description:
    "Full-stack engineer shipping production web and mobile apps across real estate, legal-tech, e-commerce, and fintech. React, Next.js, React Native, NestJS, Node.js.",
  icons: {
    icon: avatar.src,
    apple: avatar.src,
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      suppressHydrationWarning
      className={`${newsreader.variable} ${instrumentSans.variable} ${jetBrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
      </head>
      <body className="min-h-screen bg-bg font-sans text-fg antialiased">
        <Providers>
          <Header />
          <main className="mx-auto max-w-265 px-6 sm:px-10">{children}</main>
          <Footer />
          <ModalHost />
        </Providers>
      </body>
    </html>
  );
}
