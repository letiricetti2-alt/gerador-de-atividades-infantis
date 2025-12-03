import "./globals.css";
import { Comic_Neue } from "next/font/google";

const comicNeue = Comic_Neue({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata = {
  title: "Gerador de Atividades Infantis",
  description: "Aplicativo para gerar atividades personalizadas e inclusivas para crianças",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${comicNeue.className} bg-yellow-300 flex items-center justify-center min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}
