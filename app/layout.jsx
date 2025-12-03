import "./globals.css";

export const metadata = {
  title: "Gerador de Atividades Infantis",
  description: "App educativo com inclusão e diversão!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
