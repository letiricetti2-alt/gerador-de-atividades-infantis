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
    if (item === "Outros") {
      if (selectedNeuros.includes("Outros")) {
        setSelectedNeuros(selectedNeuros.filter((n) => n !== "Outros"));
        setOtherNeuro("");
      } else {
        setSelectedNeuros([...selectedNeuros, "Outros"]);
      }
      return;
    }

    if (selectedNeuros.includes(item)) {
      setSelectedNeuros(selectedNeuros.filter((n) => n !== item));
    } else {
      setSelectedNeuros([...selectedNeuros, item]);
    }
  };

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

          <Image
            src="/adaptada.jpeg"
            alt="Atividades Adaptadas"
            fill
            priority
            className="object-contain pointer-events-none"
          />

          {/* TEXTO NÍVEL DE SUPORTE */}
          <div
            className="absolute flex items-center justify-center font-bold text-blue-800 text-center pointer-events-none"
            style={{ top: "345px", left: "210px", width: "170px", height: "40px" }}
          >
            {supportLevel}
          </div>

          {/* TEXTO TIPO DE ATIVIDADE (centralização corrigida) */}
          <div
            className="absolute flex items-center justify-center font-bold text-blue-800 text-center pointer-events-none"
            style={{
              top: "415px",
              left: "210px",
              width: "170px",
              height: "40px",
              lineHeight: "1.1"
            }}
          >
            {activityType}
          </div>

          {/* ÁREAS CLICÁVEIS */}
          <div
            className="absolute z-10 cursor-pointer"
            style={{ top: "330px", left: "60px", width: "360px", height: "70px" }}
            onClick={() => setShowSupportModal(true)}
          />
          <div
            className="absolute z-10 cursor-pointer"
            style={{ top: "400px", left: "60px", width: "360px", height: "70px" }}
            onClick={() => setShowTypeModal(true)}
          />
          <div
            className="absolute z-10 cursor-pointer"
            style={{ top: "470px", left: "60px", width: "360px", height: "70px" }}
            onClick={() => setShowNeuroModal(true)}
          />

          {/* MODAL SUPORTE */}
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
                    className={`w-full py-3 rounded-full mb-3 font-bold text-white
                      ${supportLevel === level ? "ring-4 ring-green-400" : ""}
                      ${
                        level === "Baixo"
                          ? "bg-teal-400"
                          : level === "Moderado"
                          ? "bg-yellow-400"
                          : "bg-pink-400"
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

          {/* MODAL TIPO */}
          {showTypeModal && (
            <div className="absolute inset-0 bg-black/40 flex justify-center items-center z-50">
              <div className="bg-white rounded-3xl p-6 w-[350px] shadow-xl">
                <h2 className="text-blue-600 font-bold text-center mb-4">
                  Qual o tipo de atividade?
                </h2>

                <div className="grid grid-cols-1 gap-3">
                  {typeOptions.map((item) => (
                    <button
                      key={item.label}
                      onClick={() => setActivityType(item.label)}
                      className={`rounded-full py-2 px-3 font-bold text-white
                        ${item.color}
                        ${activityType === item.label ? "ring-4 ring-green-400" : ""}
                      `}
                    >
                      {activityType === item.label ? "✓ " : ""}
                      {item.label}
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
            <div className="absolute inset-0 bg-black/40 flex justify-center items-center z-50">
              <div className="bg-white rounded-3xl p-6 w-[340px] shadow-xl">
                <h2 className="text-blue-600 font-bold text-center mb-4">
                  Selecione as Neurodivergências da Criança
                </h2>

                <div className="grid grid-cols-2 gap-3">
                  {neuroOptions.map((item) => {
                    const selected = selectedNeuros.includes(item);

                    return (
                      <button
                        key={item}
                        onClick={() => toggleNeuro(item)}
                        className={`rounded-full py-2 px-3 font-bold text-white text-sm
                          ${
                            item === "TEA" ? "bg-indigo-500" :
                            item === "TDAH" ? "bg-purple-500" :
                            item === "Dislexia" ? "bg-green-500" :
                            item === "Discalculia" ? "bg-yellow-400" :
                            item === "Deficiência Intelectual Leve" ? "bg-orange-400 col-span-2" :
                            item === "Hiperlexia" ? "bg-cyan-400" :
                            item === "Altas Habilidades / Superdotação" ? "bg-pink-500 col-span-2" :
                            "bg-gray-300 text-gray-700 col-span-2"
                          }
                          ${selected ? "ring-4 ring-green-400" : ""}
                        `}
                      >
                        {selected ? "✓ " : ""}
                        {item}
                      </button>
                    );
                  })}
                </div>

                {selectedNeuros.includes("Outros") && (
                  <input
                    type="text"
                    placeholder="Descreva a neurodivergência..."
                    value={otherNeuro}
                    onChange={(e) => setOtherNeuro(e.target.value)}
                    className="w-full mt-3 p-2 border rounded-xl"
                  />
                )}

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

        </div>
      </main>
    </>
  );
}
