import { Geist, Geist_Mono } from "next/font/google";
import { Geologica } from "next/font/google";
import { Roboto_Condensed } from "next/font/google";
import "./globals.css";

const geologica = Geologica({
  subsets: ['latin'],
  variable: '--font-geologica',
});

const robotoCondensed = Roboto_Condensed({
  subsets: ['latin'],
  weight: ['300', '700'],
  variable: '--font-roboto-condensed',
});

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Filaquin",
  description: "Filaquin anal gland health supplement for dogs",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${geologica.variable} ${robotoCondensed.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
