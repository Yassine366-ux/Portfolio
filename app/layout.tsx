import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://yassine-azouanat.dev"),
  title: {
    default: "Yassine Azouanat | Full Stack Developer Portfolio",
    template: "%s | Yassine Azouanat"
  },
  description:
    "Premium developer portfolio for Yassine Azouanat, a computer engineering student focused on full-stack web development, secure APIs, testing, and digital products.",
  keywords: [
    "Yassine Azouanat",
    "Full Stack Developer",
    "Next.js Developer",
    "React Developer",
    "Morocco Developer",
    "Spring Boot",
    "Laravel",
    "Express.js"
  ],
  authors: [{ name: "Yassine Azouanat" }],
  creator: "Yassine Azouanat",
  openGraph: {
    title: "Yassine Azouanat | Full Stack Developer",
    description:
      "Modern portfolio showcasing full-stack projects, secure APIs, testing work, education, and professional experience.",
    url: "https://yassine-azouanat.dev",
    siteName: "Yassine Azouanat Portfolio",
    images: [
      {
        url: "/assets/profile-orbit.svg",
        width: 1200,
        height: 1200,
        alt: "Yassine Azouanat futuristic developer profile visual"
      }
    ],
    locale: "en_US",
    type: "website"
  },
  twitter: {
    card: "summary_large_image",
    title: "Yassine Azouanat | Full Stack Developer",
    description:
      "Computer engineering portfolio with full-stack, API, testing, and software design projects.",
    images: ["/assets/profile-orbit.svg"]
  },
  alternates: {
    canonical: "/"
  }
};

export const viewport: Viewport = {
  themeColor: "#050816",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body>{children}</body>
    </html>
  );
}
