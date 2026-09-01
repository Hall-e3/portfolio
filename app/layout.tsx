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

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://hallenochasanda.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Hall Enoch Asanda — Full-Stack Software Engineer & Systems Architect",
    template: "%s | Hall Enoch Asanda",
  },
  description:
    "Full-stack software engineer with 3+ years shipping production web and mobile apps. Specializing in TypeScript, React, Next.js, Node.js, NestJS, React Native, PostgreSQL, TDD, and Cypress E2E testing.",
  keywords: [
    "Hall Enoch Asanda",
    "Full-Stack Software Engineer",
    "Software Engineer Kampala Uganda",
    "React Developer",
    "Next.js Developer",
    "NestJS Backend Developer",
    "React Native Mobile App Developer",
    "TypeScript Developer",
    "PostgreSQL",
    "MongoDB",
    "Test-Driven Development TDD",
    "Cypress E2E Automation",
    "Monorepo Architecture",
  ],
  authors: [{ name: "Hall Enoch Asanda", url: "https://github.com/hall-e3" }],
  creator: "Hall Enoch Asanda",
  publisher: "Hall Enoch Asanda",
  icons: {
    icon: avatar.src,
    apple: avatar.src,
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: siteUrl,
    title: "Hall Enoch Asanda — Full-Stack Software Engineer",
    description:
      "From Figma mockups to App Store release — building scalable web and mobile software with React, Next.js, NestJS, and TDD rigor.",
    siteName: "Hall Enoch Asanda Portfolio",
    images: [
      {
        url: avatar.src,
        width: 800,
        height: 800,
        alt: "Hall Enoch Asanda — Full-Stack Software Engineer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hall Enoch Asanda — Full-Stack Software Engineer",
    description:
      "Full-stack engineer shipping production web & mobile apps. React, Next.js, NestJS, React Native, TDD, and Cypress E2E.",
    images: [avatar.src],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "/",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Hall Enoch Asanda",
  jobTitle: "Full-Stack Software Engineer",
  url: siteUrl,
  sameAs: [
    "https://github.com/hall-e3",
    "https://www.linkedin.com/in/enoch-asanda-hall-839312217/",
  ],
  address: {
    "@type": "PostalAddress",
    addressLocality: "Kampala",
    addressCountry: "Uganda",
  },
  knowsAbout: [
    "Software Engineering",
    "Full-Stack Web Development",
    "TypeScript",
    "React.js",
    "Next.js",
    "Node.js",
    "NestJS",
    "React Native",
    "PostgreSQL",
    "MongoDB",
    "Test-Driven Development (TDD)",
    "Cypress E2E Testing",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      data-theme="dark"
      data-scroll-behavior="smooth"
      suppressHydrationWarning
      className={`${newsreader.variable} ${instrumentSans.variable} ${jetBrainsMono.variable}`}
    >
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeInitScript }} />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
