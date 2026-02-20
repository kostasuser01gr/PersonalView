import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Konstantinos Foskolakis — Full Stack Engineer",
  description:
    "Full Stack Engineer specializing in React, TypeScript, Python APIs, and scalable web applications. Certified by micro1.",
  keywords: ["Full Stack Engineer", "React", "TypeScript", "Python", "Next.js", "Konstantinos Foskolakis"],
  authors: [{ name: "Konstantinos Foskolakis" }],
  openGraph: {
    title: "Konstantinos Foskolakis — Full Stack Engineer",
    description:
      "Full Stack Engineer specializing in React, TypeScript, Python APIs, and scalable web applications.",
    type: "website",
    images: [{ url: "/profile.png", width: 1024, height: 1536, alt: "Konstantinos Foskolakis" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Konstantinos Foskolakis — Full Stack Engineer",
    description: "Full Stack Engineer: React, TypeScript, Python APIs & scalable web apps.",
    images: ["/profile.png"],
  },
  icons: {
    icon: "/favicon.svg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
      </body>
    </html>
  );
}
