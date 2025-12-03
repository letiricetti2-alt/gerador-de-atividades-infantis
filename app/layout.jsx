import "./globals.css";

export const metadata = {
  title: "Gerador de Atividades Infantis",
  description: "Aplicativo para gerar atividades personalizadas para crianças",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className="flex flex-col items-center justify-center min-h-screen bg-yellow-300 font-poppins text-gray-800">
        {children}
      </body>
    </html>
  );
}
