import type { Metadata } from "next";
import { Inter, Jua } from "next/font/google";
import "./globals.css";
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jua = Jua({
  variable: "--font-jua",
  subsets: ["latin"],
   weight: "400",
});

export const metadata: Metadata = {
  title: "Golden Sweet Creations",
  description: "Home Bakery",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jua.variable} h-full antialiased`}
    >
      <body className="body">
        {/* min-h-full flex flex-col */}
        <Header></Header>
        {/* <main className="pt-24"> */}
        <main>
        {children}
        </main>
        <Footer></Footer>
        </body>
    </html>
  );
}
