"use client";

import { useState } from "react";
import Image from "next/image";

export default function AtividadesAdaptadas() {
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showTypeModal, setShowTypeModal] = useState(false);

  const [supportLevel, setSupportLevel] = useState("");
  const [activityType, setActivityType] = useState("");

  const typeOptions = [
    "Alfabetização",
    "Matemática",
    "Coordenação Motora",
    "Atenção e Concentração",
    "Socioemocional",
    "Linguagem",
    "Raciocínio Lógico",
    "Artes",
    "Atividades Temáticas",
    "Caligrafia Personalizada",
  ];

  return (
    <main className="flex justify-center items-center min-h-screen bg-[#9DDEFC]">
      <div className="relative w-[480px] h-[720px]">

        {/* IMAGEM DO LAYOUT */}
        <Image
          src="/adaptada.jpeg"
          alt="Atividades Adaptadas"
          fill
          priority
          className="object-contain pointer-events-none"
        />

        {/* TEXTO - NÍVEL DE SUPORTE */}
        <div
          className="absolute flex items-center justify-center text-blue-800 font-bold text-center pointer-events-none"
          style={{
            top: "342px",
            left: "215px",
            width: "160px",
            height: "38px"
          }}
        >
          {supportLevel}
        </div>

        {/* TEXTO - TIPO DE ATIVIDADE */}
        <div
          className="absolute flex items-center justify-center text-blue-800 font-bold text-center pointer-events-none"
          style={{
            top: "402px",
            left: "215px",
            width: "160px",
            minHeight: "38px"
          }}
        >
          {activityType}
        </div>

        {/* ÁREA CLICÁVEL - SUPORTE */}
        <div
          className="absolute cursor-pointer"
          style={{ top: "330px", left: "60px", width: "360px", height: "70px" }}
          onClick={() => setShowSupportModal(true)}
        />

        {/* ÁREA CLICÁVEL - TIPO */}
        <div
          className="absolute cursor-pointer"
          style={{ top: "395px", left: "60px", width: "360px", height: "70px" }}
          onClick={() => setShowTypeModal(true)}
        />

        {/* MODAL SUPORTE */}
        {showSupportModal && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl w-[320px] text-center shadow-xl">
              <h2 className="text-blue-600 font-bold mb-4">
                Quanto apoio a criança precisa para realizar a atividade?
              </h2>

              {["Baixo", "Moderado", "Alto"].map((level) => (
                <button
                  key={level}
                  onClick={() => setSupportLevel(level)}
                  className="w-full py-3 rounded-full mb-3 font-bold text-white
                    bg-orange-400"
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

        {/* MODAL TIPO */}
        {showTypeModal && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl w-[350px] shadow-xl">
              <h2 className="text-blue-600 font-bold text-center mb-4">
                Qual o tipo de atividade?
              </h2>

              <div className="grid grid-cols-1 gap-3">
                {typeOptions.map((type) => (
                  <button
                    key={type}
                    onClick={() => setActivityType(type)}
                    className="rounded-full py-2 px-3 font-bold text-white bg-blue-400"
                  >
                    {activityType === type ? "✓ " : ""}
                    {type}
                  </button>
                ))}
              </div>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setShowTypeModal(false)}
                  className="bg-gray-300 px-4 py-2 rounded-full"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => setShowTypeModal(false)}
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
  );
}
