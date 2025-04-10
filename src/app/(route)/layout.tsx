import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import localFont from "next/font/local";
import "../globals.css";
import Header from "@/components/layout/Header/Header";
import { ScrollProvider } from "../context/ScrollContext";
import Footer from "@/components/layout/Footer";

const pretendard = localFont({
  src: "../../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  variable: "--font-pretendard",
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
    <html lang="ko" className={`${pretendard.variable} ${geistMono.variable} antialiased`}>
      <body>
        <ScrollProvider>
          <Header />
          {children}
          {modal}
          <Footer />
        </ScrollProvider>
      </body>
    </html>
  );
}
