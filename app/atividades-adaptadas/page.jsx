"use client";

import { useState } from "react";
import Image from "next/image";

export default function AtividadesAdaptadas() {
  const [showNeuroModal, setShowNeuroModal] = useState(false);
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showTypeModal, setShowTypeModal] = useState(false);

  const [supportLevel, setSupportLevel] = useState("");
  const [activityType, setActivityType] = useState("");

  const [selectedNeuros, setSelectedNeuros] = useState([]);
  const [otherNeuro, setOtherNeuro] = useState("");

  const neuroOptions = [
    "TEA",
    "TDAH",
    "Dislexia",
    "Discalculia",
    "Deficiência Intelectual Leve",
    "Hiperlexia",
    "Altas Habilidades / Superdotação",
    "Outros",
  ];

  const typeOptions = [
    { label: "Alfabetização", color: "bg-indigo-400" },
    { label: "Matemática", color: "bg-purple-400" },
    { label: "Coordenação Motora", color: "bg-green-400" },
    { label: "Atenção e Concentração", color: "bg-yellow-400" },
    { label: "Socioemocional", color: "bg-pink-400" },
    { label: "Linguagem", color: "bg-cyan-400" },
    { label: "Raciocínio Lógico", color: "bg-orange-400" },
    { label: "Artes", color: "bg-rose-400" },
    { label: "Atividades Temáticas", color: "bg-teal-400" },
    { label: "Caligrafia Personalizada", color: "bg-blue-400" },
  ];

  const toggleNeuro = (item) => {
    if (item === "Outros") return;
    setSelectedNeuros((prev) =>
      prev.includes(item)
        ? prev.filter((n) => n !== item)
        : [...prev, item]
    );
  };

  return (
    <>
      <style jsx global>{`
        html,
        body {
          background-color: #9ddeff !important;
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>

      <main className="flex justify-center items-center w-screen h-screen bg-[#9ddeff]">
        <div className="relative flex justify-center items-center w-[480px] h-[720px]">
          <Image
            src="/adaptada.jpeg"
            alt="Atividades Adaptadas"
            fill
            priority
            className="object-contain"
          />

          <div className="absolute inset-0 flex flex-col items-center justify-end gap-3 pb-20">
            {/* Nivel de suporte */}
            <button
              onClick={() => setShowSupportModal(true)}
              className="w-[320px] h-[56px]"
            />

            {/* Tipo de atividade */}
            <button
              onClick={() => setShowTypeModal(true)}
              className="w-[320px] h-[56px]"
            />

            {/* Neurodivergencias */}
            <button
              onClick={() => setShowNeuroModal(true)}
              className="w-[320px] h-[60px]"
            />
          </div>
        </div>

        {/* MODAL SUPORTE */}
        {showSupportModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-6 w-[340px] text-center shadow-xl">
              <h2 className="text-blue-600 font-bold text-lg mb-4">
                Quanto apoio a criança precisa para realizar a atividade?
              </h2>

              {["Baixo", "Moderado", "Alto"].map((item) => (
                <button
                  key={item}
                  onClick={() => setSupportLevel(item)}
                  className={`w-full py-3 rounded-full mb-3 flex justify-center items-center font-bold ${
                    supportLevel === item
                      ? "bg-teal-400 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {supportLevel === item && "✓ "}
                  {item}
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
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-6 w-[360px] shadow-xl">
              <h2 className="text-blue-600 font-bold text-lg mb-4 text-center">
                Qual o tipo de atividade?
              </h2>

              <div className="flex flex-col gap-2">
                {typeOptions.map((opt) => (
                  <button
                    key={opt.label}
                    onClick={() => setActivityType(opt.label)}
                    className={`${opt.color} text-white py-2 rounded-full flex justify-center items-center font-semibold ${
                      activityType === opt.label
                        ? "ring-4 ring-green-400"
                        : ""
                    }`}
                  >
                    {activityType === opt.label && "✓ "}
                    {opt.label}
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

        {/* MODAL NEURO */}
        {showNeuroModal && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-6 w-[360px] shadow-xl">
              <h2 className="text-blue-600 font-bold text-lg mb-4 text-center">
                Selecione as Neurodivergências da Criança
              </h2>

              <div className="grid grid-cols-2 gap-2">
                {neuroOptions.map((item) => (
                  <button
                    key={item}
                    onClick={() => toggleNeuro(item)}
                    className={`py-2 px-2 rounded-full text-sm font-semibold ${
                      selectedNeuros.includes(item)
                        ? "bg-green-400 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {selectedNeuros.includes(item) && "✓ "}
                    {item}
                  </button>
                ))}
              </div>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setShowNeuroModal(false)}
                  className="bg-gray-300 px-4 py-2 rounded-full"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => setShowNeuroModal(false)}
                  className="bg-green-500 text-white px-4 py-2 rounded-full"
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
