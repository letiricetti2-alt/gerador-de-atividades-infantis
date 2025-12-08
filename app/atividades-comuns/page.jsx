"use client";

import Image from "next/image";

export default function AtividadesComuns() {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#FFD6E0]">
      <Image
        src="/comum.jpeg"
        alt="Atividades Comuns"
        width={1080}
        height={1920}
        className="max-w-full h-auto"
        priority
      />
    </main>
  );
}
