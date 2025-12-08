"use client";

import Image from "next/image";

export default function AtividadesComuns() {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#FFD6E0]">
      <Image
        src="/comum.jpeg"
        alt="Atividades Comuns"
        fill
        priority
        className="object-contain"
      />
    </main>
  );
}
