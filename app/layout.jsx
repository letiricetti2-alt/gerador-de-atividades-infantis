import "./globals.css";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
});

export const metadata = {
  title: "Gerador de Atividades Infantis",
  description: "App de atividades adaptadas e inclusivas para crianças",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body className={`${fredoka.variable} bg-[#FFD83A] text-[#1E1464]`}>
        {children}
      </body>
    </html>
  );
}
