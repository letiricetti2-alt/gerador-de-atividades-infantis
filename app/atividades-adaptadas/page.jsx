"use client";

import Image from "next/image";

export default function AtividadesAdaptadas() {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-[#A9E4FF] overflow-hidden">
      <div className="relative w-[480px] max-w-full h-[950px]">
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
