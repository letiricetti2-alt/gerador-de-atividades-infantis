"use client";

import Image from "next/image";

export default function AtividadesAdaptadas() {
  return (
    <main className="fixed inset-0 flex items-center justify-center bg-[#A9E4FF] z-50">
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
