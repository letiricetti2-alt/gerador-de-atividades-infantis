"use client";

import Image from "next/image";

export default function AtividadesAdaptadas() {
  return (
    <>
      {/* Fundo azul idêntico ao da home */}
      <style jsx global>{`
        html, body {
          background-color: #A9E4FF !important;
          height: 100%;
          margin: 0;
          padding: 0;
        }
      `}</style>

      <main className="flex justify-center items-center min-h-screen bg-[#A9E4FF]">
        {/* Container no mesmo tamanho e proporção da home */}
        <div className="relative w-[480px] h-[950px] scale-[1.05] flex justify-center items-center">
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
