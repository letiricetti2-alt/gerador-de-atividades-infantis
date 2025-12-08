"use client";

import Image from "next/image";

export default function AtividadesAdaptadas() {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#A9E4FF]">
      <Image
        src="/adaptada.jpeg"
        alt="Atividades Adaptadas"
        fill
        priority
        className="object-contain"
      />
    </main>
  );
}
