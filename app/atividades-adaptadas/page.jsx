"use client";

import Image from "next/image";

export default function AtividadesAdaptadas() {
  return (
    <>
      {/* Fundo azul fixo substituindo o amarelo do layout global */}
      <style jsx global>{`
        body {
          background-color: #A9E4FF !important;
        }
      `}</style>

      <main className="flex items-center justify-center min-h-screen">
        <div className="relative w-full max-w-[400px] aspect-[9/16] flex items-center justify-center">
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
