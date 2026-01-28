"use client";

import { useState } from "react";
import Image from "next/image";

export default function AtividadesAdaptadas() {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState([]);
  const [outrosTexto, setOutrosTexto] = useState("");

  const opcoes = [
    "TEA (Autismo)",
    "TDAH",
    "Dislexia",
    "Discalculia",
    "Deficiência Intelectual Leve",
    "Hiperlexia",
    "Altas Habilidades / Superdotação",
    "Outros",
  ];

  function toggleOpcao(opcao) {
    if (selected.includes(opcao)) {
      setSelected(selected.filter((o) => o !== opcao));
    } else {
      setSelected([...selected, opcao]);
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
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>

      <main className="flex justify-center items-center w-screen h-screen bg-[#9ddeff]">
        <div className="relative w-[480px] h-[720px]">
          <Image
            src="/adaptada.jpeg"
            alt="Atividades Adaptadas"
            fill
            priority
            className="object-contain"
          />

          {/* Botão Selecionar Neurodivergências */}
          <button
            onClick={() => setShowModal(true)}
            className="absolute left-1/2 -translate-x-1/2 bottom-[210px] w-[340px] h-[60px] bg-[#4b3bbf] text-white rounded-full text-lg font-bold shadow-lg"
          >
            + Selecionar Neurodivergências
          </button>

          {/* MODAL */}
          {showModal && (
            <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-50">
              <div className="bg-white rounded-3xl p-6 w-[360px]">
                <h2 className="text-xl font-bold text-blue-600 text-center mb-4">
                  Selecione as Neurodivergências da Criança
                </h2>

                <div className="grid grid-cols-2 gap-3">
                  {opcoes.map((opcao) => {
                    const ativo = selected.includes(opcao);

                    const cores = {
                      "TEA (Autismo)": "bg-indigo-500",
                      TDAH: "bg-purple-500",
                      Dislexia: "bg-green-500",
                      Discalculia: "bg-yellow-400",
                      "Deficiência Intelectual Leve": "bg-orange-400 col-span-2",
                      Hiperlexia: "bg-cyan-500",
                      "Altas Habilidades / Superdotação": "bg-pink-500 col-span-2",
                      Outros: "bg-gray-300 col-span-2",
                    };

                    return (
                      <button
                        key={opcao}
                        onClick={() => toggleOpcao(opcao)}
                        className={`${
                          cores[opcao]
                        } rounded-xl p-2 text-sm font-bold ${
                          ativo ? "ring-4 ring-green-400 text-white" : "text-white"
                        }`}
                      >
                        {ativo ? "✓ " : ""}
                        {opcao}
                      </button>
                    );
                  })}
                </div>

                {/* Campo "Outros" */}
                {selected.includes("Outros") && (
                  <input
                    type="text"
                    placeholder="Descreva a neurodivergência..."
                    value={outrosTexto}
                    onChange={(e) => setOutrosTexto(e.target.value)}
                    className="w-full mt-3 p-2 border rounded-lg"
                  />
                )}

                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-gray-300 px-4 py-2 rounded-xl"
                  >
                    Cancelar
                  </button>

                  <button
                    onClick={() => setShowModal(false)}
                    className="bg-green-500 text-white px-4 py-2 rounded-xl"
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
