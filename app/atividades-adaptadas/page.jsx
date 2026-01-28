"use client";

import { useState } from "react";
import Image from "next/image";

export default function AtividadesAdaptadas() {
  const [showModal, setShowModal] = useState(false);

  function confirmarNeuro() {
    setShowModal(false);
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

        {/* IMAGEM BASE */}
        <div className="relative flex justify-center items-center w-[480px] h-[720px]">
          <Image
            src="/adaptada.jpeg"
            alt="Atividades Adaptadas"
            fill
            priority
            className="object-contain"
          />

          {/* BOTÃO INVISÍVEL SOBRE A ÁREA DO BOTÃO DA IMAGEM */}
          <button
            onClick={() => setShowModal(true)}
            className="absolute bottom-[230px] left-1/2 -translate-x-1/2 w-[380px] h-[70px] opacity-0"
          />
        </div>

        {/* MODAL */}
        {showModal && (
          <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-6 w-[360px] shadow-xl">

              <h2 className="text-center text-xl font-bold text-blue-900 mb-4">
                Selecione as Neurodivergências da Criança
              </h2>

              <div className="grid grid-cols-2 gap-3 mb-4">

                <button className="bg-indigo-500 text-white py-2 rounded-xl">
                  TEA (Autismo)
                </button>

                <button className="bg-purple-500 text-white py-2 rounded-xl">
                  TDAH
                </button>

                <button className="bg-green-500 text-white py-2 rounded-xl">
                  Dislexia
                </button>

                <button className="bg-yellow-400 text-white py-2 rounded-xl">
                  Discalculia
                </button>

                <button className="bg-orange-400 text-white py-2 rounded-xl col-span-2">
                  Deficiência Intelectual Leve
                </button>

                <button className="bg-cyan-500 text-white py-2 rounded-xl">
                  Hiperlexia
                </button>

                <button className="bg-pink-500 text-white py-2 rounded-xl col-span-2">
                  Altas Habilidades / Superdotação
                </button>

                <button className="bg-gray-200 text-gray-800 py-2 rounded-xl col-span-2">
                  Outros
                </button>

              </div>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setShowModal(false)}
                  className="bg-gray-300 px-4 py-2 rounded-xl"
                >
                  Cancelar
                </button>

                <button
                  onClick={confirmarNeuro}
                  className="bg-green-500 text-white px-4 py-2 rounded-xl"
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
