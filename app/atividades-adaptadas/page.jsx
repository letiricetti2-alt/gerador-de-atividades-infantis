"use client";

import { useState } from "react";
import Image from "next/image";

export default function AtividadesAdaptadas() {
  const [mostrarNeuro, setMostrarNeuro] = useState(false);
  const [mostrarSuporte, setMostrarSuporte] = useState(false);
  const [nivelSuporte, setNivelSuporte] = useState("");

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

      <main className="flex justify-center items-center w-screen h-screen bg-[#9DDEFC] relative">
        <div className="relative w-[480px] h-[720px]">

          {/* IMAGEM BASE */}
          <Image
            src="/adaptada.jpeg"
            alt="Atividades Adaptadas"
            fill
            priority
            className="object-contain"
          />

          {/* TEXTO DO NÍVEL SELECIONADO (DENTRO DO CAMPO) */}
          {nivelSuporte && (
            <div className="absolute top-[360px] left-[265px] text-blue-900 font-bold">
              {nivelSuporte}
            </div>
          )}

          {/* BOTÃO NÍVEL DE SUPORTE */}
          <button
            className="absolute top-[345px] left-[40px] w-[400px] h-[60px] opacity-0"
            onClick={() => setMostrarSuporte(true)}
          />

          {/* BOTÃO SELECIONAR NEURODIVERGÊNCIAS */}
          <button
            className="absolute top-[465px] left-[40px] w-[400px] h-[60px] opacity-0"
            onClick={() => setMostrarNeuro(true)}
          />

          {/* MODAL SUPORTE */}
          {mostrarSuporte && (
            <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
              <div className="bg-white rounded-[24px] p-6 w-[340px] shadow-xl">

                <h2 className="text-center text-blue-600 font-bold mb-4">
                  Quanto apoio a criança precisa para realizar a atividade?
                </h2>

                <div className="flex flex-col gap-3">

                  {["Baixo", "Moderado", "Alto"].map((opcao) => (
                    <button
                      key={opcao}
                      onClick={() => setNivelSuporte(opcao)}
                      className={`rounded-full py-3 text-white font-bold ${
                        opcao === "Baixo"
                          ? "bg-teal-400"
                          : opcao === "Moderado"
                          ? "bg-yellow-400"
                          : "bg-pink-500"
                      } ${nivelSuporte === opcao ? "ring-4 ring-green-400" : ""}`}
                    >
                      {nivelSuporte === opcao ? "✓ " : ""}
                      {opcao}
                    </button>
                  ))}

                </div>

                <div className="flex justify-between mt-6">
                  <button
                    onClick={() => setMostrarSuporte(false)}
                    className="bg-gray-300 text-blue-800 px-4 py-2 rounded-full"
                  >
                    Cancelar
                  </button>

                  <button
                    onClick={() => setMostrarSuporte(false)}
                    className="bg-green-500 text-white px-4 py-2 rounded-full"
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* MODAL NEURODIVERGÊNCIAS (mantido como você já tinha) */}
          {mostrarNeuro && (
            <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
              <div className="bg-white rounded-[24px] p-6 w-[340px] shadow-xl">
                <h2 className="text-center text-blue-600 font-bold mb-4">
                  Selecione as Neurodivergências da Criança
                </h2>

                <div className="flex justify-between mt-6">
                  <button
                    onClick={() => setMostrarNeuro(false)}
                    className="bg-gray-300 text-blue-800 px-4 py-2 rounded-full"
                  >
                    Cancelar
                  </button>

                  <button
                    onClick={() => setMostrarNeuro(false)}
                    className="bg-green-500 text-white px-4 py-2 rounded-full"
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          )}

        </div>
      </main>
    </>
  );
}
