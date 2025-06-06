import type { Metadata } from "next";
import { Roboto, Poppins } from "next/font/google";
import "./globals.css";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["200", "400", "700", "900"], 
  variable: "--font-roboto",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600", "700"], // ajuste conforme sua necessidade
  variable: "--font-poppins",
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
      <body className={`${roboto.variable} ${poppins.variable} antialiased bg-[#f8f8f8] `} >
        {children}
      </body>
    </html>
  );
}
