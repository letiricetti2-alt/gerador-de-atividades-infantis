"use client";

import { useState } from "react";
import Image from "next/image";

const neurodivergenciasList = [
  { label: "TEA (Autismo)", color: "bg-indigo-500" },
  { label: "TDAH", color: "bg-purple-500" },
  { label: "Dislexia", color: "bg-green-500" },
  { label: "Discalculia", color: "bg-yellow-400 text-black" },
  { label: "Deficiência Intelectual Leve", color: "bg-orange-400" },
  { label: "Hiperlexia", color: "bg-cyan-500" },
  { label: "Altas Habilidades / Superdotação", color: "bg-pink-500 col-span-2" },
  { label: "Outros", color: "bg-gray-300 text-black col-span-2" },
];

export default function AtividadesAdaptadas() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selecionadas, setSelecionadas] = useState([]);

  function toggleNeuro(item) {
    if (selecionadas.includes(item)) {
      setSelecionadas(selecionadas.filter((n) => n !== item));
    } else {
      setSelecionadas([...selecionadas, item]);
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
          {/* IMAGEM BASE */}
          <Image
            src="/adaptada.jpeg"
            alt="Atividades Adaptadas"
            fill
            priority
            className="object-contain"
          />

          {/* BOTÃO INVISÍVEL SOBRE O BOTÃO DA IMAGEM */}
          <button
            onClick={() => setModalOpen(true)}
            className="absolute left-1/2 -translate-x-1/2 bottom-[185px] w-[320px] h-[60px] bg-transparent"
            aria-label="Selecionar Neurodivergências"
          />
        </div>

        {/* MODAL */}
        {modalOpen && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-6 w-[380px] shadow-xl">
              <h2 className="text-center text-blue-600 font-bold text-lg mb-4">
                Selecione as Neurodivergências da Criança
              </h2>

              <div className="grid grid-cols-2 gap-3 mb-5">
                {neurodivergenciasList.map((item) => {
                  const ativo = selecionadas.includes(item.label);

                  return (
                    <button
                      key={item.label}
                      onClick={() => toggleNeuro(item.label)}
                      className={`
                        ${item.color}
                        ${ativo ? "ring-4 ring-green-500 scale-105" : ""}
                        px-3 py-2 rounded-xl font-semibold text-sm text-white
                        transition-all
                      `}
                    >
                      {ativo ? "✔ " : ""}
                      {item.label}
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-between">
                <button
                  onClick={() => setModalOpen(false)}
                  className="bg-gray-300 px-4 py-2 rounded-lg font-semibold text-blue-700"
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
