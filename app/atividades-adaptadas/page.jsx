"use client";

import { useState } from "react";
import Image from "next/image";

export default function AtividadesAdaptadas() {
  const [modalAberto, setModalAberto] = useState(false);
  const [selecionados, setSelecionados] = useState([]);

  const opcoes = [
    "TEA (Autismo)",
    "TDAH",
    "Dislexia",
    "Discalculia",
    "Deficiência Intelectual Leve",
    "Hiperlexia",
    "Altas Habilidades / Superdotação",
  ];

  function toggleOpcao(opcao) {
    if (selecionados.includes(opcao)) {
      setSelecionados(selecionados.filter((o) => o !== opcao));
    } else {
      setSelecionados([...selecionados, opcao]);
    }
  }

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
          <Image
            src="/adaptada.jpeg"
            alt="Atividades Adaptadas"
            fill
            priority
            className="object-contain"
          />

          {/* BOTÃO INVISÍVEL SOBRE "Selecionar Neurodivergências" */}
          <button
            onClick={() => setModalAberto(true)}
            className="absolute left-1/2 -translate-x-1/2 top-[430px] w-[380px] h-[60px] bg-transparent"
          />

          {/* MODAL */}
          {modalAberto && (
            <div className="absolute inset-0 bg-black/50 flex justify-center items-center">
              <div className="bg-white rounded-2xl p-5 w-[400px] max-h-[80%] overflow-y-auto">
                <h2 className="text-lg font-bold text-center mb-4">
                  Selecione as Neurodivergências
                </h2>

                <div className="grid grid-cols-1 gap-2">
                  {opcoes.map((opcao) => (
                    <button
                      key={opcao}
                      onClick={() => toggleOpcao(opcao)}
                      className={`px-3 py-2 rounded-xl text-sm font-semibold ${
                        selecionados.includes(opcao)
                          ? "bg-purple-600 text-white"
                          : "bg-gray-200 text-gray-800"
                      }`}
                    >
                      {opcao}
                    </button>
                  ))}
                </div>

                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => setModalAberto(false)}
                    className="bg-gray-300 px-4 py-2 rounded-xl"
                  >
                    Cancelar
                  </button>

                  <button
                    onClick={() => {
                      console.log("Selecionados:", selecionados);
                      setModalAberto(false);
                    }}
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
