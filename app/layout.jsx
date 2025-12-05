import "./globals.css";

export const metadata = {
  title: "Gerador de Atividades Infantis",
  description: "App educativo para criação de atividades adaptadas e comuns.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen flex items-center justify-center bg-[#FFD53A]">
        {children}
      </body>
    </html>
  );
}
