"use client";

import { useState } from "react";
import Image from "next/image";

const neurodivergenciasList = [
  "TEA (Autismo)",
  "TDAH",
  "Dislexia",
  "Discalculia",
  "Deficiência Intelectual Leve",
  "Hiperlexia",
  "Altas Habilidades / Superdotação",
  "Outros",
];

export default function AtividadesAdaptadas() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selecionadas, setSelecionadas] = useState([]);

  function toggleNeuro(nome) {
    if (selecionadas.includes(nome)) {
      setSelecionadas(selecionadas.filter((n) => n !== nome));
    } else {
      setSelecionadas([...selecionadas, nome]);
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
        }
      `}</style>

      <main className="flex justify-center items-center w-screen h-screen bg-[#9ddeff] relative">
        <div className="relative w-[480px] h-[720px]">
          <Image
            src="/adaptada.jpeg"
            alt="Atividades Adaptadas"
            fill
            priority
            className="object-contain"
          />

          {/* BOTÃO CORRETO */}
          <button
            onClick={() => setModalOpen(true)}
            className="absolute left-1/2 -translate-x-1/2 bottom-[160px] bg-purple-600 text-white px-6 py-3 rounded-full shadow-lg font-bold"
          >
            + Selecionar Neurodivergências
          </button>
        </div>

        {/* MODAL */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-6 w-[360px] max-h-[80vh] overflow-y-auto shadow-xl">
              <h2 className="text-center text-blue-700 font-bold text-lg mb-4">
                Selecione as Neurodivergências da Criança
              </h2>

              <div className="grid grid-cols-2 gap-3">
                {neurodivergenciasList.map((item) => (
                  <button
                    key={item}
                    onClick={() => toggleNeuro(item)}
                    className={`px-3 py-2 rounded-xl font-semibold text-sm transition
                      ${
                        selecionadas.includes(item)
                          ? "bg-green-500 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                  >
                    {selecionadas.includes(item) ? "✔ " : ""}
                    {item}
                  </button>
                ))}
              </div>

              <div className="flex justify-between mt-6">
                <button
                  onClick={() => setModalOpen(false)}
                  className="bg-gray-300 px-4 py-2 rounded-lg font-semibold"
                >
                  Cancelar
                </button>

                <button
                  onClick={() => setModalOpen(false)}
                  className="bg-green-500 text-white px-4 py-2 rounded-lg font-semibold"
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
