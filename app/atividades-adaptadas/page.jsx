"use client";

import Image from "next/image";

export default function AtividadesAdaptadas() {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#A9E4FF]">
      <div className="relative w-full max-w-[480px] aspect-[3/4] flex items-center justify-center">
        <Image
          src="/adaptada.jpeg"
          alt="Atividades Adaptadas"
          fill
          priority
          className="object-contain"
        />
      </div>
    </main>
  );
}
