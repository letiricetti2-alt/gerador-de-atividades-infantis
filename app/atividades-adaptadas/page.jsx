"use client";

import Image from "next/image";

export default function AtividadesAdaptadas() {
  return (
    <>
      {/* Fundo azul idêntico à home */}
      <style jsx global>{`
        html, body {
          background-color: #A9E4FF !important;
          height: 100%;
          margin: 0;
          padding: 0;
          overflow: hidden; /* evita barra de rolagem */
        }
      `}</style>

      {/* Container principal ocupando toda a tela */}
      <main className="flex justify-center items-center w-screen h-screen bg-[#A9E4FF]">
        <div className="relative w-[100vw] h-[100vh] max-w-[480px] max-h-[950px] flex justify-center items-center">
          <Image
            src="/adaptada.jpeg"
            alt="Atividades Adaptadas"
            fill
            priority
            className="object-contain scale-[1.12]" // ajuste exato pra igualar à home
          />
        </div>
      </main>
    </>
  );
}
