"use client";

import Image from "next/image";

export default function AtividadesComuns() {
  return (
    <>
      {/* Fundo global igual às outras páginas */}
      <style jsx global>{`
        html, body {
          background-color: #FFDB3A !important; /* fundo amarelo da home */
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>

      {/* Container central fixo — mesma largura e altura da home */}
      <main className="flex justify-center items-center w-screen h-screen bg-[#FFDB3A]">
        <div className="relative flex justify-center items-center w-[480px] h-[950px]">
          <Image
            src="/comum.jpeg"
            alt="Atividades Comuns"
            fill
            priority
            className="object-contain"
          />
        </div>
      </main>
    </>
  );
}
