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

        {/* IMAGEM DE FUNDO */}
        <Image
          src="/adaptada.jpeg"
          alt="Atividades Adaptadas"
          fill
          className="object-contain pointer-events-none"
        />

        {/* CAIXA REAL - NÍVEL DE SUPORTE */}
        <div
          className="absolute flex items-center justify-center font-bold text-blue-800 text-center bg-yellow-100 rounded-full"
          style={{
            top: "330px",
            left: "210px",
            width: "170px",
            height: "40px"
          }}
          onClick={() => setShowSupportModal(true)}
        >
          {supportLevel}
        </div>

        {/* CAIXA REAL - TIPO DE ATIVIDADE */}
        <div
          className="absolute flex items-center justify-center font-bold text-blue-800 text-center bg-yellow-100 rounded-full"
          style={{
            top: "400px",
            left: "210px",
            width: "170px",
            minHeight: "40px",
            padding: "4px"
          }}
          onClick={() => setShowTypeModal(true)}
        >
          {activityType}
        </div>

        {/* MODAL SUPORTE */}
        {showSupportModal && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl w-[300px] text-center">
              <h2 className="font-bold mb-4">Nível de suporte</h2>

              {["Baixo", "Moderado", "Alto"].map((level) => (
                <button
                  key={level}
                  onClick={() => setSupportLevel(level)}
                  className="w-full py-2 mb-2 rounded-full bg-orange-400 text-white font-bold"
                >
                  {level}
                </button>
              ))}

              <button
                onClick={() => setShowSupportModal(false)}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full"
              >
                Confirmar
              </button>
            </div>
          </div>
        )}

        {/* MODAL TIPO */}
        {showTypeModal && (
          <div className="fixed inset-0 bg-black/40 flex justify-center items-center z-50">
            <div className="bg-white p-6 rounded-xl w-[320px] text-center">
              <h2 className="font-bold mb-4">Tipo de atividade</h2>

              {typeOptions.map((type) => (
                <button
                  key={type}
                  onClick={() => setActivityType(type)}
                  className="w-full py-2 mb-2 rounded-full bg-blue-400 text-white font-bold"
                >
                  {type}
                </button>
              ))}

              <button
                onClick={() => setShowTypeModal(false)}
                className="mt-4 bg-green-500 text-white px-4 py-2 rounded-full"
              >
                Confirmar
              </button>
            </div>
          </div>
        )}

      </div>
    </main>
  );
}
