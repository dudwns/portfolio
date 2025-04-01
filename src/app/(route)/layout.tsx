import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "../globals.css";
import Header from "@/components/common/Header/Header";
import { ScrollProvider } from "../context/ScrollContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "김영준 | 프론트엔드 개발자 포트폴리오",
  description: "프론트엔드 개발자 김영준의 포트폴리오입니다.",
  keywords: "프론트엔드, 개발자, 포트폴리오, 김영준",
  openGraph: {
    title: "프론트엔드 김영준 | 포트폴리오",
    description: "프론트엔드 개발자 김영준의 포트폴리오입니다.",
    type: "website",
  },
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ScrollProvider>
          <Header />
          {children}
          {modal}
        </ScrollProvider>
      </body>
    </html>
  );
}
