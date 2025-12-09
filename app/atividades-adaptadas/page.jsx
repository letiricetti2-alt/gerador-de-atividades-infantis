"use client";

import Image from "next/image";

export default function AtividadesAdaptadas() {
  return (
    <>
      <style jsx global>{`
        html, body {
          background-color: #9DDEFC !important; /* azul da imagem */
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>

      <main className="flex justify-center items-center w-screen h-screen bg-[#9DDEFC]">
        <div className="relative flex justify-center items-center w-[480px] h-[880px]">
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
