import { Inter } from "next/font/google";
import "./globals.css";

import { ThemeToggle } from "@/components/ui/theme-toggle";
import NavSection from "@/components/NavSection";
import Footer from "@/components/Footer";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const metadata = {
  title: "UniikTheo",
  description: "Welcome to a World of Uniikness",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavSection />
          {children}
          <div className="fixed bottom-4 right-4 z-50">
            <ThemeToggle />
          </div>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
