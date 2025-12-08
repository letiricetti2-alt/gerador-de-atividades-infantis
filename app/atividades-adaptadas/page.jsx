"use client";

import Image from "next/image";

export default function AtividadesAdaptadas() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#A9E4FF]">
      <div className="relative w-full max-w-[390px] aspect-[9/16] flex items-center justify-center">
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
