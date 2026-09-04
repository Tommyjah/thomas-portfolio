import type { Metadata, Viewport } from "next";
import "./globals.css";

/* 🔁 Change this to your real domain once you have it
   (works with your Vercel URL in the meantime) */
const siteUrl = "https://thomas.pro.et";


export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Thomas Debebe | Full-Stack Developer & AI Product Builder",
    template: "%s | Thomas Debebe",
  },
  description:
    "Portfolio of Thomas Debebe — Full-Stack Developer and AI Product Builder from Addis Ababa, Ethiopia. Building AI-powered web products for Africa with Next.js, TypeScript, React, Python and Generative AI. Explore live projects, skills and certifications.",
  keywords: [
    "Thomas Debebe",
    "Full-Stack Developer",
    "AI Product Builder",
    "Next.js Developer",
    "React Developer",
    "TypeScript",
    "Machine Learning",
    "Generative AI",
    "Developer Portfolio",
    "Ethiopia Software Developer",
    "AI Engineer",
    "Data Analytics",
  ],
  authors: [{ name: "Thomas Debebe", url: "https://github.com/Tommyjah" }],
  creator: "Thomas Debebe",
  publisher: "Thomas Debebe",
  applicationName: "Thomas Debebe Portfolio",
  category: "Portfolio",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: siteUrl,
    siteName: "Thomas Debebe",
    title: "Thomas Debebe | Full-Stack Developer & AI Product Builder",
    description:
      "AI-powered web products for Africa — Next.js, TypeScript, React, Python & Generative AI. See live projects, skills and credentials.",
    locale: "en_US",
    images: [
      {
        url: "/profile.jpg", // resolved to an absolute URL via metadataBase
        width: 1200,
        height: 630,
        alt: "Thomas Debebe — Full-Stack Developer & AI Product Builder",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Thomas Debebe | Full-Stack Developer & AI Product Builder",
    description:
      "AI-powered web products for Africa — Next.js, TypeScript, React, Python & Generative AI.",
    images: ["/profile.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

/* In Next.js 14+, themeColor/width/scale live here, not in metadata */
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f8fafc" },
    { media: "(prefers-color-scheme: dark)", color: "#06060e" },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>
        {children}
        {/* JSON-LD structured data — helps Google connect your name, skills & profiles */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              name: "Thomas Debebe",
              url: siteUrl,
              jobTitle: "Full-Stack Developer & AI Product Builder",
              alumniOf: { "@type": "CollegeOrUniversity", name: "Unity University" },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Addis Ababa",
                addressCountry: "ET",
              },
              email: "mailto:tomiti2552@gmail.com",
              knowsAbout: [
                "Next.js", "React", "TypeScript", "Python",
                "Machine Learning", "Generative AI", "Supabase",
                "Data Analytics", "Microsoft Fabric",
              ],
              sameAs: [
                "https://github.com/Tommyjah",
                "https://www.linkedin.com/in/thomas-debebe",
                "https://credly.com/users/thomas-debebe",
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
