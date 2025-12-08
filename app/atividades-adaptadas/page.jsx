"use client";

import Image from "next/image";

export default function AtividadesAdaptadas() {
  return (
    <>
      <style jsx global>{`
        html, body {
          background-color: #A9E4FF !important;
          height: 100%;
          width: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
      `}</style>

      <main className="flex justify-center items-center w-screen h-screen bg-[#A9E4FF]">
        <div className="relative w-[100vw] h-[100vh] max-w-[530px] max-h-[990px] flex justify-center items-center">
          <Image
            src="/adaptada.jpeg"
            alt="Atividades Adaptadas"
            fill
            priority
            className="object-contain scale-[1.18]"
          />
        </div>
      </main>
    </>
  );
}
