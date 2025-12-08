"use client";

import Image from "next/image";

export default function AtividadesAdaptadas() {
  return (
    <>
      {/* 🔹 Corrige o fundo do layout global */}
      <style jsx global>{`
        body {
          background-color: #A9E4FF !important;
        }
      `}</style>

      <main className="flex justify-center items-center min-h-screen">
        <div className="relative w-[440px] max-w-full aspect-[9/16]">
          <Image
            src="/adaptada.jpeg"
            alt="Atividades Adaptadas"
            fill
            priority
            className="object-contain"
          />
        </div>
      </main>
    </>
  );
}
