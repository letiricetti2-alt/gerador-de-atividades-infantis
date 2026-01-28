"use client";

import { useState } from "react";
import Image from "next/image";

export default function AtividadesAdaptadas() {
  const [nivelSuporte, setNivelSuporte] = useState("Baixo");
  const [tipoAtividade, setTipoAtividade] = useState("Todas");

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

          {/* SELECTS POSICIONADOS SOBRE OS CAMPOS CLAROS */}
          <div className="absolute top-[285px] left-0 w-full flex flex-col items-center gap-[24px]">

            {/* NÍVEL DE SUPORTE */}
            <select
              value={nivelSuporte}
              onChange={(e) => setNivelSuporte(e.target.value)}
              className="w-[260px] h-[42px] rounded-full bg-[#FFE8B0] text-[#1E3A8A] font-bold shadow text-center"
            >
              <option value="Baixo">Baixo</option>
              <option value="Moderado">Moderado</option>
              <option value="Alto">Alto</option>
            </select>

            {/* TIPO DE ATIVIDADE */}
            <select
              value={tipoAtividade}
              onChange={(e) => setTipoAtividade(e.target.value)}
              className="w-[260px] h-[42px] rounded-full bg-[#FFE8B0] text-[#1E3A8A] font-bold shadow text-center"
            >
              <option value="Todas">Todas</option>
              <option value="Alfabetização">Alfabetização</option>
              <option value="Coordenação Motora">Coordenação Motora</option>
              <option value="Matemática Inicial">Matemática Inicial</option>
              <option value="Caligrafia">Caligrafia</option>
            </select>

          </div>

        </div>
      </main>
    </>
  );
}
