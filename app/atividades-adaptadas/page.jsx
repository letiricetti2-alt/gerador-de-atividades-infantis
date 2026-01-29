"use client";

import { useState } from "react";
import Image from "next/image";

export default function AtividadesAdaptadas() {
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showTypeModal, setShowTypeModal] = useState(false);
  const [showNeuroModal, setShowNeuroModal] = useState(false);

  const [supportLevel, setSupportLevel] = useState("");
  const [activityType, setActivityType] = useState("");

  const [selectedNeuros, setSelectedNeuros] = useState([]);
  const [otherNeuro, setOtherNeuro] = useState("");

  const typeOptions = [
    { label: "Alfabetização", color: "bg-indigo-400" },
    { label: "Matemática", color: "bg-purple-400" },
    { label: "Coordenação Motora", color: "bg-green-400" },
    { label: "Atenção e Concentração", color: "bg-yellow-400" },
    { label: "Socioemocional", color: "bg-pink-400" },
    { label: "Linguagem", color: "bg-cyan-400" },
    { label: "Raciocínio Lógico", color: "bg-orange-400" },
    { label: "Artes", color: "bg-rose-400" },
    { label: "Atividades Temáticas", color: "bg-emerald-400" },
    { label: "Caligrafia Personalizada", color: "bg-blue-400" },
  ];

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

  function toggleNeuro(item) {
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

      <main className="flex justify-center items-center w-screen h-screen">
        <div className="relative w-[480px] h-[720px]">

          <Image
            src="/adaptada.jpeg"
            alt="Atividades Adaptadas"
            fill
            priority
            className="object-contain"
          />

          {/* TEXTO NÍVEL DE SUPORTE */}
          <div
            className="absolute flex items-center justify-center font-bold text-blue-800 text-center"
            style={{ top: "345px", left: "210px", width: "170px", height: "40px" }}
          >
            {supportLevel && "✨ Pronto!"}
          </div>

          {/* TEXTO TIPO DE ATIVIDADE (DESCIDO UM POUCO) */}
          <div
            className="absolute flex items-center justify-center font-bold text-blue-800 text-center"
            style={{ top: "412px", left: "210px", width: "170px", height: "40px" }}
          >
            {activityType && "✨ Pronto!"}
          </div>

          {/* ÁREAS CLICÁVEIS */}
          <div
            className="absolute"
            style={{ top: "330px", left: "60px", width: "360px", height: "70px" }}
            onClick={() => setShowSupportModal(true)}
          />
          <div
            className="absolute"
            style={{ top: "400px", left: "60px", width: "360px", height: "70px" }}
            onClick={() => setShowTypeModal(true)}
          />
          <div
            className="absolute"
            style={{ top: "470px", left: "60px", width: "360px", height: "70px" }}
            onClick={() => setShowNeuroModal(true)}
          />

          {/* MODAL SUPORTE */}
          {showSupportModal && (
            <Modal title="Quanto apoio a criança precisa?">
              {["Baixo", "Moderado", "Alto"].map((level) => (
                <button
                  key={level}
                  onClick={() => setSupportLevel(level)}
                  className={`w-full py-3 rounded-full mb-3 font-bold text-white transition
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
              <ModalActions onClose={() => setShowSupportModal(false)} />
            </Modal>
          )}

          {/* MODAL TIPO */}
          {showTypeModal && (
            <Modal title="Qual o tipo de atividade?">
              {typeOptions.map((opt) => (
                <button
                  key={opt.label}
                  onClick={() => setActivityType(opt.label)}
                  className={`${opt.color} w-full py-2 mb-2 rounded-full text-white font-semibold transition
                    ${activityType === opt.label ? "ring-4 ring-green-400" : ""}
                  `}
                >
                  {activityType === opt.label ? "✓ " : ""}
                  {opt.label}
                </button>
              ))}
              <ModalActions onClose={() => setShowTypeModal(false)} />
            </Modal>
          )}

          {/* MODAL NEURO */}
          {showNeuroModal && (
            <Modal title="Selecione as Neurodivergências">
              <div className="grid grid-cols-2 gap-3">
                {neuroOptions.map((item) => {
                  const selected = selectedNeuros.includes(item);

                  return (
                    <button
                      key={item}
                      onClick={() => toggleNeuro(item)}
                      className={`rounded-full py-2 px-3 font-bold text-white text-sm transition
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

              <ModalActions onClose={() => setShowNeuroModal(false)} />
            </Modal>
          )}

        </div>
      </main>
    </>
  );
}

function Modal({ title, children }) {
  return (
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-3xl w-[340px] shadow-xl">
        <h2 className="text-blue-600 font-bold mb-4 text-center">{title}</h2>
        {children}
      </div>
    </div>
  );
}

function ModalActions({ onClose }) {
  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={onClose}
        className="bg-gray-300 px-4 py-2 rounded-full"
      >
        Cancelar
      </button>
      <button
        onClick={onClose}
        className="bg-green-500 text-white px-4 py-2 rounded-full"
      >
        Confirmar
      </button>
    </div>
  );
}
