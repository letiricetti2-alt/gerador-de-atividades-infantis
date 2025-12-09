"use client";

import Image from "next/image";

export default function AtividadesAdaptadas() {
  return (
    <>
      {/* Fundo igual ao das outras páginas */}
      <style jsx global>{`
        html, body {
          background-color: #A9E4FF !important; /* azul claro */
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>

      {/* Container central no mesmo padrão */}
      <main className="flex justify-center items-center w-screen h-screen bg-[#A9E4FF]">
        <div className="relative flex justify-center items-center w-[480px] h-[950px]">
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
