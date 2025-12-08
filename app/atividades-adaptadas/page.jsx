"use client";

import Image from "next/image";

export default function AtividadesAdaptadas() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-[#A9E4FF]">
      <div className="relative w-[430px] max-w-full h-[900px]">
        <Image
          src="/adaptada.jpeg"
          alt="Atividades Adaptadas"
          fill
          priority
          className="object-cover rounded-2xl"
        />
      </div>
    </main>
  );
}
