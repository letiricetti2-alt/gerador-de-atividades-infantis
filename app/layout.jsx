import "./globals.css";
import { Fredoka } from "next/font/google";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata = {
  title: "Gerador de Atividades Infantis",
  description: "App de atividades adaptadas e inclusivas para crianças",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={fredoka.className}>
        {children}
      </body>
    </html>
  );
}
