"use client";

import { useState } from "react";
import Image from "next/image";

export default function AtividadesAdaptadas() {
  const [showNeuroModal, setShowNeuroModal] = useState(false);
  const [showSuporteModal, setShowSuporteModal] = useState(false);

  const [selectedSuporte, setSelectedSuporte] = useState(null);

  return (
    <>
      <style jsx global>{`
        html, body {
          background-color: #9DDEFC;
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>

      <main className="flex justify-center items-center w-screen h-screen bg-[#9DDEFC] relative">

        {/* IMAGEM BASE */}
        <div className="relative w-[390px] h-[700px]">
          <Image
            src="/adaptada.jpeg"
            alt="Atividades Adaptadas"
            fill
            priority
            className="object-contain"
          />
        </div>

        {/* TEXTO DINÂMICO DO NÍVEL DE SUPORTE */}
        <div className="absolute top-[370px] left-1/2 -translate-x-1/2 w-[240px] text-center font-bold text-blue-900">
          {selectedSuporte ? selectedSuporte : "Todas"}
        </div>

        {/* BOTÃO NIVEL DE SUPORTE (área invisível) */}
        <button
          onClick={() => setShowSuporteModal(true)}
          className="absolute top-[360px] w-[300px] h-[55px] opacity-0"
        />

        {/* BOTÃO NEURODIVERGÊNCIAS */}
        <button
          onClick={() => setShowNeuroModal(true)}
          className="absolute top-[455px] w-[300px] h-[60px] opacity-0"
        />

        {/* MODAL SUPORTE */}
        {showSuporteModal && (
          <div className="absolute inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white rounded-3xl p-6 w-[320px] text-center shadow-xl">
              <h2 className="text-blue-600 font-bold mb-4">
                Quanto apoio a criança precisa para realizar a atividade?
              </h2>

              <div className="space-y-3">

                <button
                  onClick={() => setSelectedSuporte("Baixo")}
                  className={`w-full py-3 rounded-full text-white ${
                    selectedSuporte === "Baixo"
                      ? "bg-teal-500 border-4 border-green-400"
                      : "bg-teal-400"
                  }`}
                >
                  {selectedSuporte === "Baixo" && "✓ "}Baixo
                </button>

                <button
                  onClick={() => setSelectedSuporte("Moderado")}
                  className={`w-full py-3 rounded-full text-white ${
                    selectedSuporte === "Moderado"
                      ? "bg-yellow-400 border-4 border-green-400"
                      : "bg-yellow-300"
                  }`}
                >
                  {selectedSuporte === "Moderado" && "✓ "}Moderado
                </button>

                <button
                  onClick={() => setSelectedSuporte("Alto")}
                  className={`w-full py-3 rounded-full text-white ${
                    selectedSuporte === "Alto"
                      ? "bg-pink-600 border-4 border-green-400"
                      : "bg-pink-500"
                  }`}
                >
                  {selectedSuporte === "Alto" && "✓ "}Alto
                </button>

              </div>

              <div className="flex justify-between mt-5">
                <button
                  onClick={() => {
                    setShowSuporteModal(false);
                    setSelectedSuporte(null);
                  }}
                  className="bg-gray-300 px-4 py-2 rounded-full"
                >
                  Cancelar
                </button>

                <button
                  onClick={() => setShowSuporteModal(false)}
                  className="bg-green-500 text-white px-4 py-2 rounded-full"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL NEURODIVERGÊNCIAS */}
        {showNeuroModal && (
          <div className="absolute inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white rounded-3xl p-6 w-[340px] text-center shadow-xl">
              <h2 className="text-blue-600 font-bold mb-4">
                Selecione as Neurodivergências da Criança
              </h2>

              <div className="grid grid-cols-2 gap-3 text-white">
                <button className="bg-indigo-500 rounded-full py-2">TEA</button>
                <button className="bg-purple-500 rounded-full py-2">TDAH</button>
                <button className="bg-green-500 rounded-full py-2">Dislexia</button>
                <button className="bg-yellow-400 rounded-full py-2">Discalculia</button>

                <button className="bg-orange-400 rounded-full py-2 col-span-2">
                  Deficiência Intelectual Leve
                </button>

                <button className="bg-cyan-400 rounded-full py-2">Hiperlexia</button>

                <button className="bg-pink-500 rounded-full py-2 col-span-2">
                  Altas Habilidades / Superdotação
                </button>

                <button className="bg-gray-300 text-black rounded-full py-2 col-span-2">
                  Outros
                </button>
              </div>

              <div className="flex justify-between mt-5">
                <button
                  onClick={() => setShowNeuroModal(false)}
                  className="bg-gray-300 px-4 py-2 rounded-full"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => setShowNeuroModal(false)}
                  className="bg-green-500 text-white px-4 py-2 rounded-full"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        )}

      </main>
    </>
  );
}
