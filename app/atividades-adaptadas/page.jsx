"use client";

import Image from "next/image";

export default function AtividadesAdaptadas() {
  return (
    <>
      <style jsx global>{`
        html, body {
          background-color: #9DDEFC !important;
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>

      <main className="flex justify-center items-center w-screen h-screen bg-[#9DDEFC]">
        <div className="relative w-[480px] h-[720px]">

          {/* IMAGEM BASE */}
          <Image
            src="/adaptada.jpeg"
            alt="Atividades Adaptadas"
            fill
            priority
            className="object-contain"
          />

          {/* NOVO TEXTO DO PRIMEIRO BOTÃO (POSIÇÃO CORRETA) */}
          <div className="absolute top-[345px] left-[90px] w-[300px] text-white font-bold">
            <div className="text-[13px] leading-tight">
              Nível de Suporte Necessário
            </div>
            <div className="text-[9px] font-normal leading-tight">
              quanto apoio a criança precisa para realizar a atividade
            </div>
          </div>

        </div>
      </main>
    </>
  );
}
