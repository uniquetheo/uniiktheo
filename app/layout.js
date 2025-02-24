import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavSection from "@/components/NavSection";
import Footer from "@/components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "UniikTheo",
  description: "Welcome to a World of Uniikness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NavSection />
        {children}
        <Footer />
      </body>
    </html>
  );
}
