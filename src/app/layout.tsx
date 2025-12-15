import type { Metadata } from "next";
// Importamos os componentes Header e Footer
import Header from '../components/Header';
import Footer from '../components/Footer';

// O restante das importações de fontes
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Edson Flores | Currículo Full-Stack",
  description: "Portfólio e Currículo Online de Edson Iago Flores: Especialista em Suporte de TI e Desenvolvedor Full-Stack (MERN) em formação.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }} 
      >
        <Header />

        <main style={{ flexGrow: 1 }}>
          {children}
        </main>
        
        <Footer />
      </body>
    </html>
  );
}