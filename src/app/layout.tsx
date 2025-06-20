import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./reset.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const poppins = Poppins({
  weight: ["400", "500", "600", "700"],
  subsets: ["latin"],
  variable: "--font-heading",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SafeBus - School Bus Transportation Services",
  description: "Safe and reliable school bus transportation services for educational institutions. Featuring GPS tracking, trained drivers, and comprehensive safety measures.",
  keywords: "school bus, student transportation, safe bus service, school transport, GPS tracking",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${poppins.variable} font-sans antialiased`}>
        {children}
      </body>
    </html>
  );
}
