"use client";

import Image from "next/image";

export default function AtividadesAdaptadas() {
  return (
    <main className="relative flex items-center justify-center min-h-screen">
      {/* Cor de fundo azul fixa sobrepondo o amarelo global */}
      <div className="absolute inset-0 bg-[#A9E4FF] -z-10" />

      {/* Conteúdo principal com limite de tamanho */}
      <div className="relative w-full max-w-[420px] aspect-[9/16] flex items-center justify-center">
        <Image
          src="/adaptada.jpeg"
          alt="Atividades Adaptadas"
          fill
          priority
          sizes="(max-width: 768px) 100vw, 420px"
          className="object-contain"
        />
      </div>
    </main>
  );
}
