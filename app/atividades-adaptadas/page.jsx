"use client";

import { useState } from "react";
import Image from "next/image";

export default function AtividadesAdaptadas() {
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [supportLevel, setSupportLevel] = useState("");

  return (
    <>
      <style jsx global>{`
        html, body {
          background-color: #9DDEFC !important;
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
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

          {/* CAMPO SOBRE A CAIXA BEGE (NÍVEL DE SUPORTE) */}
          <div
            className="absolute flex items-center justify-center text-blue-800 font-bold"
            style={{
              top: "345px",
              left: "210px",
              width: "170px",
              height: "40px",
              cursor: "pointer",
            }}
            onClick={() => setShowSupportModal(true)}
          >
            {supportLevel}
          </div>

          {/* BOTÃO INVISÍVEL SOBRE A FAIXA VERMELHA */}
          <div
            className="absolute"
            style={{
              top: "330px",
              left: "60px",
              width: "360px",
              height: "70px",
              cursor: "pointer",
            }}
            onClick={() => setShowSupportModal(true)}
          />

          {/* MODAL NÍVEL DE SUPORTE */}
          {showSupportModal && (
            <div className="absolute inset-0 bg-black/40 flex justify-center items-center z-50">
              <div className="bg-white rounded-3xl p-6 w-[320px] text-center shadow-xl">

                <h2 className="text-blue-600 font-bold mb-4">
                  Quanto apoio a criança precisa para realizar a atividade?
                </h2>

                {["Baixo", "Moderado", "Alto"].map((level) => (
                  <button
                    key={level}
                    onClick={() => setSupportLevel(level)}
                    className={`w-full py-3 rounded-full mb-3 font-bold transition
                      ${
                        supportLevel === level
                          ? "ring-4 ring-green-400"
                          : ""
                      }
                      ${
                        level === "Baixo"
                          ? "bg-teal-400 text-white"
                          : level === "Moderado"
                          ? "bg-yellow-400 text-white"
                          : "bg-pink-400 text-white"
                      }`}
                  >
                    {supportLevel === level ? "✓ " : ""}
                    {level}
                  </button>
                ))}

                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => setShowSupportModal(false)}
                    className="bg-gray-300 px-4 py-2 rounded-full"
                  >
                    Cancelar
                  </button>
                  <button
                    onClick={() => setShowSupportModal(false)}
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
