import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";


import AOSInitializer from "@/component/AOS";// ✅ Adjust the path if needed

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Dr. Hemendra Agarwal",
  description:
    "Dr. Hemendra Agarwal is a leading orthopedic surgeon in Jaipur specializing in joint replacement, arthroscopy, and sports injury treatments. Book your appointment today.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/Images/just-logo.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <AOSInitializer /> {/* ✅ Init AOS on client */}
        {children}
      </body>
    </html>
  );
}
