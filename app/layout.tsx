import type { Metadata } from "next";
import { Roboto } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["200", "400", "700", "900"], 
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "Tropa Digital",
  description: "Deafio frontend Tropa Digital",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} antialiased bg-[#f8f8f8] `} >
        {children}
      </body>
    </html>
  );
}
