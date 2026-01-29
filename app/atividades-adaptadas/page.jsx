"use client";

import { useState } from "react";

export default function AtividadesAdaptadas() {
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showTypeModal, setShowTypeModal] = useState(false);
  const [showNeuroModal, setShowNeuroModal] = useState(false);

  const [supportLevel, setSupportLevel] = useState("");
  const [activityType, setActivityType] = useState("");
  const [selectedNeuros, setSelectedNeuros] = useState([]);
  const [otherNeuro, setOtherNeuro] = useState("");

  const supportOptions = ["Baixo", "Moderado", "Alto"];

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
    <main className="min-h-screen bg-sky-300 flex items-center justify-center p-4">
      <div className="bg-sky-400 w-full max-w-sm rounded-3xl shadow-xl p-4 flex flex-col items-center gap-4">

        {/* TOPO */}
        <div className="bg-yellow-100 rounded-2xl p-3 text-center text-blue-800 font-bold">
          Vamos criar uma atividade adaptada com carinho e inclusão!
        </div>

        <h1 className="text-3xl font-extrabold text-yellow-100 drop-shadow text-center">
          Atividades Adaptadas
        </h1>

        {/* NÍVEL DE SUPORTE */}
        <button
          onClick={() => setShowSupportModal(true)}
          className="w-full bg-orange-500 rounded-full px-4 py-3 text-white font-semibold flex justify-between items-center"
        >
          <span>Nível de Suporte:</span>
          <span className="bg-yellow-100 text-blue-700 px-4 py-1 rounded-full min-w-[120px] text-center">
            {supportLevel ? "✨ Pronto!" : ""}
          </span>
        </button>

        {/* TIPO DE ATIVIDADE */}
        <button
          onClick={() => setShowTypeModal(true)}
          className="w-full bg-orange-400 rounded-full px-4 py-3 text-white font-semibold flex justify-between items-center"
        >
          <span>Tipo de Atividade:</span>
          <span className="bg-yellow-100 text-blue-700 px-4 py-1 rounded-full min-w-[120px] text-center">
            {activityType ? "✨ Pronto!" : ""}
          </span>
        </button>

        {/* NEURO */}
        <button
          onClick={() => setShowNeuroModal(true)}
          className="w-full bg-purple-600 text-white py-3 rounded-full font-semibold"
        >
          + Selecionar Neurodivergências
        </button>

        <button className="w-full bg-pink-400 text-white py-3 rounded-full font-semibold">
          + Gerar Sequência de 5 Atividades
        </button>

        <button className="w-full bg-green-500 text-white py-3 rounded-full font-semibold">
          Voltar para o início
        </button>
      </div>

      {/* MODAL SUPORTE */}
      {showSupportModal && (
        <Modal
          title="Quanto apoio a criança precisa?"
          onClose={() => setShowSupportModal(false)}
        >
          {supportOptions.map((level) => (
            <button
              key={level}
              onClick={() => setSupportLevel(level)}
              className={`w-full py-3 mb-2 rounded-full text-white font-semibold ${
                supportLevel === level ? "ring-4 ring-green-400" : ""
              } ${
                level === "Baixo"
                  ? "bg-teal-400"
                  : level === "Moderado"
                  ? "bg-yellow-400"
                  : "bg-pink-400"
              }`}
            >
              {supportLevel === level && "✓ "} {level}
            </button>
          ))}
          <ModalActions onCancel={() => setShowSupportModal(false)} />
        </Modal>
      )}

      {/* MODAL TIPO */}
      {showTypeModal && (
        <Modal
          title="Qual o tipo de atividade?"
          onClose={() => setShowTypeModal(false)}
        >
          {typeOptions.map((item) => (
            <button
              key={item}
              onClick={() => setActivityType(item)}
              className={`w-full py-2 mb-2 rounded-full font-semibold text-white bg-blue-400 ${
                activityType === item ? "ring-4 ring-green-400" : ""
              }`}
            >
              {activityType === item && "✓ "} {item}
            </button>
          ))}
          <ModalActions onCancel={() => setShowTypeModal(false)} />
        </Modal>
      )}

      {/* MODAL NEURO */}
      {showNeuroModal && (
        <Modal
          title="Selecione as Neurodivergências"
          onClose={() => setShowNeuroModal(false)}
        >
          <div className="grid grid-cols-2 gap-2">
            {neuroOptions.map((item) => {
              const selected = selectedNeuros.includes(item);
              return (
                <button
                  key={item}
                  onClick={() => toggleNeuro(item)}
                  className={`rounded-full py-2 px-2 text-sm font-semibold text-white ${
                    selected ? "ring-4 ring-green-400" : ""
                  } ${
                    item === "TEA" ? "bg-indigo-500" :
                    item === "TDAH" ? "bg-purple-500" :
                    item === "Dislexia" ? "bg-green-500" :
                    item === "Discalculia" ? "bg-yellow-400" :
                    item === "Deficiência Intelectual Leve" ? "bg-orange-400 col-span-2" :
                    item === "Hiperlexia" ? "bg-cyan-400" :
                    item === "Altas Habilidades / Superdotação" ? "bg-pink-500 col-span-2" :
                    "bg-gray-400 col-span-2"
                  }`}
                >
                  {selected && "✓ "} {item}
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

          <ModalActions onCancel={() => setShowNeuroModal(false)} />
        </Modal>
      )}
    </main>
  );
}

/* COMPONENTES AUXILIARES */

function Modal({ children, title, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-3xl p-5 w-full max-w-sm shadow-xl">
        <h2 className="text-blue-600 font-bold mb-4 text-center">{title}</h2>
        {children}
      </div>
    </div>
  );
}

function ModalActions({ onCancel }) {
  return (
    <div className="flex justify-between mt-4">
      <button
        onClick={onCancel}
        className="bg-gray-300 px-4 py-2 rounded-full"
      >
        Cancelar
      </button>
      <button className="bg-green-500 text-white px-4 py-2 rounded-full">
        Confirmar
      </button>
    </div>
  );
}
