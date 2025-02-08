import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";

export const metadata = {
  title: "Multicare",
  description: "Projeto Front-End II",
  charset: 'UTF-8',
  author: 'Júlia Pereira',
  keywords: 'CSS, JavaScript, React. Next.js'
};


export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
