"use client";

import Image from "next/image";

export default function AtividadesAdaptadas() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#A9E4FF]">
      {/* Container central com proporção e largura ajustadas */}
      <div className="relative w-full max-w-[400px] aspect-[9/16] flex items-center justify-center">
        <Image
          src="/adaptada.jpeg"
          alt="Atividades Adaptadas"
          fill
          sizes="(max-width: 768px) 100vw, 400px"
          priority
          className="object-contain"
        />
      </div>
    </main>
  );
}
