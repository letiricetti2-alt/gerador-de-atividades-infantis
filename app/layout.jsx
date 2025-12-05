// app/layout.jsx
import "./globals.css";
import { Baloo_2 } from "next/font/google";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-baloo",
});

export const metadata = {
  title: "Gerador de Atividades Infantis",
  description: "App de atividades adaptadas e inclusivas para crianças",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${baloo.variable} font-baloo bg-[#FFD83A] text-[#1E1464] flex justify-center`}
      >
        {children}
      </body>
    </html>
  );
}
