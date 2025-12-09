"use client";

import Image from "next/image";

export default function Perfil() {
  return (
    <>
      {/* Fundo global idêntico ao da imagem */}
      <style jsx global>{`
        html, body {
          background-color: #B38FE8 !important;
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>

      <main className="flex justify-center items-center w-screen h-screen bg-[#B38FE8]">
        <div className="relative flex justify-center items-center w-[480px] h-[950px] overflow-hidden">
          <Image
            src="/perfil.jpeg"
            alt="Meu Perfil"
            fill
            priority
            className="object-cover"  // <- cobre tudo, sem sobrinhas
          />
        </div>
      </main>
    </>
  );
}
