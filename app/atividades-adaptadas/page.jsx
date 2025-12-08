"use client";

import Image from "next/image";

export default function AtividadesAdaptadas() {
  return (
    <>
      {/* Força o fundo azul para esta página */}
      <style jsx global>{`
        html, body {
          background-color: #A9E4FF !important;
          height: 100%;
          margin: 0;
          padding: 0;
        }
      `}</style>

      <main className="flex justify-center items-center min-h-screen bg-[#A9E4FF]">
        <div className="relative w-[390px] h-[844px]">
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
