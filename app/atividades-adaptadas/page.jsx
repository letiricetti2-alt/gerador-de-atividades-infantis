"use client";

import { useState } from "react";
import Image from "next/image";

const neuroOpcoes = [
  "TEA (Autismo)",
  "TDAH",
  "Dislexia",
  "Discalculia",
  "Deficiência Intelectual Leve",
  "Hiperlexia",
  "Altas Habilidades / Superdotação",
  "Outros",
];

const neuroCores = {
  "TEA (Autismo)": "bg-indigo-500",
  "TDAH": "bg-purple-500",
  "Dislexia": "bg-green-500",
  "Discalculia": "bg-yellow-400 text-black",
  "Deficiência Intelectual Leve": "bg-orange-400",
  "Hiperlexia": "bg-cyan-500",
  "Altas Habilidades / Superdotação": "bg-pink-500",
  "Outros": "bg-gray-300 text-black",
};

const suporteOpcoes = ["Baixo", "Moderado", "Alto"];

export default function AtividadesAdaptadas() {
  const [modalNeuro, setModalNeuro] = useState(false);
  const [modalSuporte, setModalSuporte] = useState(false);

  const [neuroSelecionadas, setNeuroSelecionadas] = useState([]);
  const [nivelSuporte, setNivelSuporte] = useState(null);

  function toggleNeuro(opcao) {
    if (neuroSelecionadas.includes(opcao)) {
      setNeuroSelecionadas(neuroSelecionadas.filter((o) => o !== opcao));
    } else {
      setNeuroSelecionadas([...neuroSelecionadas, opcao]);
    }
  }

  return (
    <>
      <style jsx global>{`
        html,
        body {
          background-color: #9ddeff;
          margin: 0;
          padding: 0;
        }
      `}</style>

      <main className="flex justify-center items-center min-h-screen bg-[#9ddeff]">
        <div className="relative w-[430px] h-[760px]">
          <Image
            src="/adaptada.jpeg"
            alt="Atividades Adaptadas"
            fill
            className="object-contain"
            priority
          />

          {/* BOTÃO INVISÍVEL SOBRE "NÍVEL DE SUPORTE" */}
          <button
            onClick={() => setModalSuporte(true)}
            className="absolute left-1/2 -translate-x-1/2 top-[340px] w-[300px] h-[60px] opacity-0"
          />

          {/* BOTÃO NEURODIVERGÊNCIAS */}
          <button
            onClick={() => setModalNeuro(true)}
            className="absolute left-1/2 -translate-x-1/2 bottom-[210px] w-[300px] h-[60px] rounded-full bg-purple-700 text-white font-bold text-lg shadow-lg"
          >
            + Selecionar Neurodivergências
          </button>

          {/* MODAL NÍVEL DE SUPORTE */}
          {modalSuporte && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-50">
              <div className="bg-white rounded-3xl p-6 w-[340px] shadow-xl">
                <h2 className="text-blue-600 font-bold text-lg text-center mb-4">
                  Quanto apoio a criança precisa para realizar a atividade?
                </h2>

                <div className="flex flex-col gap-3 mb-4">
                  {suporteOpcoes.map((opcao) => (
                    <button
                      key={opcao}
                      onClick={() => setNivelSuporte(opcao)}
                      className={`rounded-full py-3 font-bold text-white text-lg ${
                        opcao === "Baixo"
                          ? "bg-green-500"
                          : opcao === "Moderado"
                          ? "bg-yellow-400 text-black"
                          : "bg-red-500"
                      } ${
                        nivelSuporte === opcao
                          ? "ring-4 ring-blue-500"
                          : ""
                      }`}
                    >
                      {nivelSuporte === opcao ? "✓ " : ""}
                      {opcao}
                    </button>
                  ))}
                </div>

                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => setModalSuporte(false)}
                    className="bg-gray-300 px-4 py-2 rounded-full font-bold text-blue-700"
                  >
                    Cancelar
                  </button>

                  <button
                    onClick={() => setModalSuporte(false)}
                    className="bg-green-500 px-4 py-2 rounded-full font-bold text-white"
                  >
                    Confirmar
                  </button>
                </div>
              </div>
            </div>
          )}

          {/* MODAL NEURODIVERGÊNCIAS */}
          {modalNeuro && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-50">
              <div className="bg-white rounded-3xl p-6 w-[340px] shadow-xl">
                <h2 className="text-blue-600 font-bold text-lg text-center mb-4">
                  Selecione as Neurodivergências da Criança
                </h2>

                <div className="grid grid-cols-2 gap-3 mb-4">
                  {neuroOpcoes.map((opcao) => {
                    const ativa = neuroSelecionadas.includes(opcao);
                    return (
                      <button
                        key={opcao}
                        onClick={() => toggleNeuro(opcao)}
                        className={`rounded-full px-3 py-2 text-sm font-bold ${
                          neuroCores[opcao]
                        } text-white ${
                          ativa ? "ring-4 ring-green-500" : ""
                        }`}
                      >
                        {ativa ? "✓ " : ""}
                        {opcao}
                      </button>
                    );
                  })}
                </div>

                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => setModalNeuro(false)}
                    className="bg-gray-300 px-4 py-2 rounded-full font-bold text-blue-700"
                  >
                    Cancelar
                  </button>

                  <button
                    onClick={() => setModalNeuro(false)}
                    className="bg-green-500 px-4 py-2 rounded-full font-bold text-white"
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
