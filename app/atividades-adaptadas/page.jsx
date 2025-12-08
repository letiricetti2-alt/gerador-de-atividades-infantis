"use client";

import Image from "next/image";
import Link from "next/link";

export default function AtividadesAdaptadas() {
  return (
    <main className="relative flex items-center justify-center w-full min-h-screen bg-[#A9E4FF] overflow-hidden">
      {/* 🔹 Fundo que cobre toda a tela */}
      <Image
        src="/adaptada.jpeg"
        alt="Atividades Adaptadas"
        fill
        priority
        className="object-cover md:object-contain"
      />

      {/* 🔹 Botão fixo visível no mesmo estilo da home */}
      <div className="absolute bottom-10 w-full flex justify-center z-10">
        <Link
          href="/"
          className="bg-green-500 text-white font-semibold py-3 px-8 rounded-2xl shadow-lg hover:scale-105 transition text-lg"
        >
          Voltar para o início
        </Link>
      </div>
    </main>
  );
}
