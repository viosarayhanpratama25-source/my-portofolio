import type { Metadata } from "next";
import "./globals.css";
import PageLoader from "@/components/PageLoader";
import ScrollProgressBar from "@/components/ScrollProgressBar";

export const metadata: Metadata = {
  title: "Viosa Rayhan Pratama — Frontend Engineer",
  description:
    "Viosa Rayhan Pratama — Frontend Engineer & UI/UX Designer specializing in responsive web applications with React, Next.js, and Node.js.",
  keywords: [
    "Viosa Rayhan Pratama",
    "Frontend Engineer",
    "UI/UX Designer",
    "React",
    "Next.js",
    "Web Developer",
    "Portfolio",
  ],
  authors: [{ name: "Viosa Rayhan Pratama" }],
  openGraph: {
    title: "Viosa Rayhan Pratama — Frontend Engineer",
    description:
      "Crafting digital experiences that matter. Specializing in React, Next.js, and modern web technologies.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://cdn.jsdelivr.net/npm/boxicons@latest/css/boxicons.min.css"
        />
      </head>
      <body>
        <PageLoader />
        <ScrollProgressBar />
        {children}
      </body>
    </html>
  );
}
