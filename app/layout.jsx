export const metadata = {
  title: "Gerador de Atividades Infantis",
  description: "Aplicativo para gerar atividades personalizadas para crianças",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <head />
      <body
        style={{
          margin: 0,
          padding: 0,
          backgroundColor: "#fafafa",
          fontFamily: "sans-serif",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}

