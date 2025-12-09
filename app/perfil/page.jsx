"use client";

import Image from "next/image";

export default function Perfil() {
  return (
    <>
      {/* Fundo igual ao das outras páginas */}
      <style jsx global>{`
        html, body {
          background-color: #B490F7 !important; /* lilás */
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>

      {/* Container central no mesmo padrão */}
      <main className="flex justify-center items-center w-screen h-screen bg-[#B490F7]">
        <div className="relative flex justify-center items-center w-[480px] h-[950px]">
          <Image
            src="/perfil.jpeg"
            alt="Meu Perfil"
            fill
            priority
            className="object-contain"
          />
        </div>
      </main>
    </>
  );
}
