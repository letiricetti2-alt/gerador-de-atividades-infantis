"use client";

import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Fundo global amarelo */}
      <style jsx global>{`
        html, body {
          background-color: #FFDB3A !important; /* mesmo tom do fundo das outras */
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>

      {/* Container central igual às outras páginas */}
      <main className="flex justify-center items-center w-screen h-screen bg-[#FFDB3A]">
        <div className="relative flex justify-center items-center w-[480px] h-[950px]">
          <Image
            src="/home.jpeg"
            alt="Página Inicial"
            fill
            priority
            className="object-contain"
          />
        </div>
      </main>
    </>
  );
}
