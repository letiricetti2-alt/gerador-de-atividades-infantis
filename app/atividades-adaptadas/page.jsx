"use client";

import Image from "next/image";

export default function AtividadesAdaptadas() {
  return (
    <main className="relative flex items-center justify-center w-full min-h-screen bg-[#A9E4FF] overflow-hidden">
      {/* Fundo ocupa a tela inteira, igual à home */}
      <Image
        src="/adaptada.jpeg"
        alt="Atividades Adaptadas"
        fill
        priority
        className="object-contain"
        sizes="100vw"
      />
    </main>
  );
}
