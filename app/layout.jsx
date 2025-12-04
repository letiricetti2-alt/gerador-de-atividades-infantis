import "./globals.css";
import { Baloo_2 } from "next/font/google";

const baloo2 = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
});

export const metadata = {
  title: "Gerador de Atividades Infantis",
  description: "App de atividades adaptadas e inclusivas para crianças",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body className={`${baloo2.className} bg-[#FFD83A] text-[#1E1464]`}>
        {children}
      </body>
    </html>
  );
}
