import "./globals.css";
import { Baloo_2, Poppins } from "next/font/google";

const baloo = Baloo_2({
  subsets: ["latin"],
  weight: ["400", "600", "700"],
  variable: "--font-baloo",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-poppins",
});

export const metadata = {
  title: "Gerador de Atividades Infantis",
  description:
    "App inclusivo e educativo para criação de atividades adaptadas e comuns, com personagens representando diversidade e neurodivergências.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body
        className={`${baloo.variable} ${poppins.variable} font-sans bg-[#FDD835] text-slate-900`}
      >
        {children}
      </body>
    </html>
  );
}
