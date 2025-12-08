"use client";

import Image from "next/image";

export default function AtividadesAdaptadas() {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#A9E4FF]">
      {/* Apenas a imagem, sem nenhum botão sobreposto */}
      <Image
        src="/adaptada.jpeg"
        alt="Atividades Adaptadas"
        width={1080}
        height={2340}
        priority
        className="object-contain"
      />
    </main>
  );
}
