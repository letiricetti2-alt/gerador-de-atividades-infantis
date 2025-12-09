"use client";

import Image from "next/image";

export default function Perfil() {
  return (
    <>
      {/* Fundo idêntico ao da imagem (sem sobrinhas) */}
      <style jsx global>{`
        html, body {
          background-color: #B38FE8 !important; /* lilás exato do fundo */
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>

      {/* Container central com mesmo padrão das outras páginas */}
      <main className="flex justify-center items-center w-screen h-screen bg-[#B38FE8]">
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
