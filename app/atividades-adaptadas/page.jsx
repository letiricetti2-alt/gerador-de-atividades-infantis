"use client";

import Image from "next/image";

export default function AtividadesAdaptadas() {
  return (
    <>
      {/* Fundo global idêntico */}
      <style jsx global>{`
        html, body {
          background-color: #A9E4FF !important;
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>

      {/* Container central com proporção igual à home */}
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
