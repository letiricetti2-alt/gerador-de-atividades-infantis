"use client";

import Image from "next/image";

export default function AtividadesComuns() {
  return (
    <>
      {/* Fundo global idêntico à home */}
      <style jsx global>{`
        html, body {
          background-color: #FFDB3A !important;
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>

      {/* Container central com as mesmas proporções (480x950px) */}
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
