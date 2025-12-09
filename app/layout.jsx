import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Gerador de Atividades Infantis",
  description: "Aplicativo para criar e personalizar atividades infantis",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={inter.className}
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "transparent", // 💜 fundo global neutro
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}
