"use client";

import Image from "next/image";

export default function AtividadesAdaptadas() {
  return (
    <>
      <style jsx global>{`
        html, body {
          background-color: #A9E4FF !important;
          height: 100%;
          margin: 0;
          padding: 0;
        }
      `}</style>

      <main className="flex justify-center items-center min-h-screen bg-[#A9E4FF]">
        <div className="relative w-[520px] h-[1020px] flex justify-center items-center">
          <Image
            src="/adaptada.jpeg"
            alt="Atividades Adaptadas"
            fill
            priority
            className="object-contain scale-[1.08]"
          />
        </div>
      </main>
    </>
  );
}
