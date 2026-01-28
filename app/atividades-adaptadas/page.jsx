"use client";

import { useState } from "react";
import Image from "next/image";

const neurodivergencias = [
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
  const [modalAberto, setModalAberto] = useState(false);
  const [selecionados, setSelecionados] = useState([]);

  function toggleSelecao(item) {
    if (selecionados.includes(item)) {
      setSelecionados(selecionados.filter((i) => i !== item));
    } else {
      setSelecionados([...selecionados, item]);
    }
  }

  function confirmarSelecao() {
    console.log("Selecionados:", selecionados);
    setModalAberto(false);
  }

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
        <div className="relative w-[480px] h-[720px]">

          {/* IMAGEM FUNDO */}
          <Image
            src="/adaptada.jpeg"
            alt="Atividades Adaptadas"
            fill
            priority
            className="object-contain"
          />

          {/* BOTÃO REAL (em cima da imagem) */}
          <button
            onClick={() => setModalAberto(true)}
            className="absolute left-1/2 -translate-x-1/2 bottom-[265px]
                       w-[360px] h-[64px] rounded-full
                       bg-purple-600 text-white font-bold text-lg
                       shadow-xl hover:scale-105 transition"
          >
            + Selecionar Neurodivergências
          </button>
        </div>

        {/* MODAL */}
        {modalAberto && (
          <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
            <div className="bg-white rounded-3xl w-[360px] p-6 text-center shadow-2xl">
              <h2 className="text-xl font-bold text-blue-900 mb-4">
                Selecione as Neurodivergências da Criança
              </h2>

              <div className="grid grid-cols-2 gap-3 mb-4">
                {neurodivergencias.map((item) => {
                  const ativo = selecionados.includes(item);

                  return (
                    <button
                      key={item}
                      onClick={() => toggleSelecao(item)}
                      className={`relative px-3 py-2 rounded-xl font-semibold transition
                        ${ativo ? "scale-105 ring-4 ring-white" : ""}
                        ${
                          item.includes("TEA") ? "bg-indigo-500 text-white" :
                          item === "TDAH" ? "bg-purple-500 text-white" :
                          item === "Dislexia" ? "bg-green-500 text-white" :
                          item === "Discalculia" ? "bg-yellow-400 text-black" :
                          item.includes("Deficiência") ? "bg-orange-400 text-white" :
                          item === "Hiperlexia" ? "bg-cyan-500 text-white" :
                          item.includes("Altas") ? "bg-pink-500 text-white col-span-2" :
                          "bg-gray-300 text-black col-span-2"
                        }
                      `}
                    >
                      {item}
                      {ativo && (
                        <span className="absolute top-1 right-2 text-white text-lg">
                          ✔
                        </span>
                      )}
                    </button>
                  );
                })}
              </div>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setModalAberto(false)}
                  className="px-6 py-2 rounded-xl bg-gray-300 text-gray-800 font-semibold"
                >
                  Cancelar
                </button>

                <button
                  onClick={confirmarSelecao}
                  className="px-6 py-2 rounded-xl bg-green-500 text-white font-semibold"
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
