"use client";

import { useState } from "react";
import Image from "next/image";

export default function AtividadesAdaptadas() {
  const [showNeuro, setShowNeuro] = useState(false);
  const [showSupport, setShowSupport] = useState(false);
  const [showType, setShowType] = useState(false);

  const [support, setSupport] = useState("");
  const [type, setType] = useState("");
  const [neuros, setNeuros] = useState([]);

  const neuroOptions = [
    "TEA",
    "TDAH",
    "Dislexia",
    "Discalculia",
    "Deficiência Intelectual Leve",
    "Hiperlexia",
    "Altas Habilidades / Superdotação",
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

  function toggleNeuro(n) {
    setNeuros((prev) =>
      prev.includes(n) ? prev.filter((x) => x !== n) : [...prev, n]
    );
  }

  return (
    <>
      <style jsx global>{`
        html,
        body {
          background-color: #9ddeff !important;
          margin: 0;
          padding: 0;
          overflow: hidden;
        }
      `}</style>

      <main className="flex justify-center items-center w-screen h-screen bg-[#9ddeff]">
        <div className="relative w-[480px] h-[720px]">
          <Image
            src="/adaptada.jpeg"
            alt="Atividades Adaptadas"
            fill
            priority
            className="object-contain"
          />

          {/* BOTÕES INVISÍVEIS SOBRE A IMAGEM */}
          <div className="absolute inset-0">

            {/* Nível de suporte */}
            <button
              onClick={() => setShowSupport(true)}
              className="absolute top-[350px] left-[80px] w-[320px] h-[55px]"
            />

            {/* Tipo de atividade */}
            <button
              onClick={() => setShowType(true)}
              className="absolute top-[420px] left-[80px] w-[320px] h-[55px]"
            />

            {/* Neurodivergências */}
            <button
              onClick={() => setShowNeuro(true)}
              className="absolute top-[490px] left-[80px] w-[320px] h-[60px]"
            />

          </div>
        </div>

        {/* MODAL SUPORTE */}
        {showSupport && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-6 w-[340px] text-center">
              <h2 className="text-blue-600 font-bold mb-4">
                Quanto apoio a criança precisa para realizar a atividade?
              </h2>

              {["Baixo", "Moderado", "Alto"].map((item, i) => (
                <button
                  key={i}
                  onClick={() => setSupport(item)}
                  className={`w-full py-3 rounded-full mb-3 font-bold ${
                    support === item ? "bg-teal-400 text-white" : "bg-gray-200"
                  }`}
                >
                  {support === item && "✓ "}
                  {item}
                </button>
              ))}

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setShowSupport(false)}
                  className="bg-gray-300 px-4 py-2 rounded-full"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => setShowSupport(false)}
                  className="bg-green-500 text-white px-4 py-2 rounded-full"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL TIPO */}
        {showType && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-6 w-[360px]">
              <h2 className="text-blue-600 font-bold mb-4 text-center">
                Qual o tipo de atividade?
              </h2>

              {typeOptions.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => setType(opt.label)}
                  className={${opt.color} w-full py-2 mb-2 rounded-full text-white font-semibold}
                >
                  {type === opt.label && "✓ "}
                  {opt.label}
                </button>
              ))}

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setShowType(false)}
                  className="bg-gray-300 px-4 py-2 rounded-full"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => setShowType(false)}
                  className="bg-green-500 text-white px-4 py-2 rounded-full"
                >
                  Confirmar
                </button>
              </div>
            </div>
          </div>
        )}

        {/* MODAL NEURO */}
        {showNeuro && (
          <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
            <div className="bg-white rounded-3xl p-6 w-[360px]">
              <h2 className="text-blue-600 font-bold mb-4 text-center">
                Selecione as Neurodivergências da Criança
              </h2>

              <div className="grid grid-cols-2 gap-2">
                {neuroOptions.map((n) => (
                  <button
                    key={n}
                    onClick={() => toggleNeuro(n)}
                    className={`py-2 rounded-full font-semibold ${
                      neuros.includes(n)
                        ? "bg-green-400 text-white"
                        : "bg-gray-200"
                    }`}
                  >
                    {neuros.includes(n) && "✓ "}
                    {n}
                  </button>
                ))}
              </div>

              <div className="flex justify-between mt-4">
                <button
                  onClick={() => setShowNeuro(false)}
                  className="bg-gray-300 px-4 py-2 rounded-full"
                >
                  Cancelar
                </button>
                <button
                  onClick={() => setShowNeuro(false)}
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
