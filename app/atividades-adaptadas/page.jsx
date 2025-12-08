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
        {/* Largura e altura levemente maiores que antes */}
        <div className="relative w-[500px] h-[990px] flex justify-center items-center">
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
