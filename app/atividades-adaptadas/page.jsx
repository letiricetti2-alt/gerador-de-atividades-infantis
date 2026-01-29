"use client";

import { useState } from "react";

export default function Page() {
  const [showSupport, setShowSupport] = useState(false);
  const [showType, setShowType] = useState(false);
  const [showNeuro, setShowNeuro] = useState(false);

  const [support, setSupport] = useState("");
  const [type, setType] = useState("");
  const [neuro, setNeuro] = useState([]);

  const supportOptions = [
    { label: "Baixo", color: "bg-teal-400" },
    { label: "Moderado", color: "bg-yellow-400" },
    { label: "Alto", color: "bg-pink-500" },
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
    { label: "Atividades Temáticas", color: "bg-emerald-400" },
    { label: "Caligrafia Personalizada", color: "bg-blue-400" },
  ];

  const neuroOptions = [
    "TEA (Autismo)",
    "TDAH",
    "Dislexia",
    "Discalculia",
    "Deficiência Intelectual Leve",
    "Hiperlexia",
    "Altas Habilidades / Superdotação",
  ];

  function toggleNeuro(item) {
    if (neuro.includes(item)) {
      setNeuro(neuro.filter((n) => n !== item));
    } else {
      setNeuro([...neuro, item]);
    }
  }

  return (
    <main className="min-h-screen bg-sky-300 flex items-center justify-center p-6">
      <div className="bg-sky-400 p-8 rounded-xl shadow-xl w-[380px] text-center">

        <h1 className="text-4xl font-extrabold text-yellow-100 drop-shadow mb-6">
          Atividades Adaptadas
        </h1>

        {/* NÍVEL DE SUPORTE */}
        <button
          onClick={() => setShowSupport(true)}
          className="w-full bg-orange-500 rounded-full px-4 py-3 text-white font-semibold mb-3 flex justify-between items-center"
        >
          <span>Nível de Suporte:</span>
          <span className="bg-yellow-100 text-blue-700 px-4 py-1 rounded-full min-w-[120px] text-center">
            {support || ""}
          </span>
        </button>

        {/* TIPO DE ATIVIDADE */}
        <button
          onClick={() => setShowType(true)}
          className="w-full bg-orange-400 rounded-full px-4 py-3 text-white font-semibold mb-4 flex justify-between items-center"
        >
          <span>Tipo de Atividade:</span>
          <span className="bg-yellow-100 text-blue-700 px-4 py-1 rounded-full min-w-[120px] text-center">
            {type || ""}
          </span>
        </button>

        {/* NEURODIVERGÊNCIAS */}
        <button
          onClick={() => setShowNeuro(true)}
          className="w-full bg-purple-600 text-white py-3 rounded-full mb-4 font-semibold"
        >
          + Selecionar Neurodivergências
        </button>

        <button className="w-full bg-pink-400 text-white py-3 rounded-full mb-4 font-semibold">
          + Gerar Sequência de 5 Atividades
        </button>

        <button className="w-full bg-green-500 text-white py-3 rounded-full font-semibold">
          Voltar para o início
        </button>
      </div>

      {/* MODAL SUPORTE */}
      {showSupport && (
        <Modal
          onClose={() => setShowSupport(false)}
          title="Quanto apoio a criança precisa para realizar a atividade?"
        >
          {supportOptions.map((opt) => (
            <button
              key={opt.label}
              onClick={() => setSupport(opt.label)}
              className={`${opt.color} w-full py-2 mb-2 rounded-full text-white font-semibold`}
            >
              {support === opt.label && "✓ "} {opt.label}
            </button>
          ))}
          <ModalActions onCancel={() => setShowSupport(false)} />
        </Modal>
      )}

      {/* MODAL TIPO */}
      {showType && (
        <Modal
          onClose={() => setShowType(false)}
          title="Qual o tipo de atividade?"
        >
          {typeOptions.map((opt) => (
            <button
              key={opt.label}
              onClick={() => setType(opt.label)}
              className={`${opt.color} w-full py-2 mb-2 rounded-full text-white font-semibold`}
            >
              {type === opt.label && "✓ "} {opt.label}
            </button>
          ))}
          <ModalActions onCancel={() => setShowType(false)} />
        </Modal>
      )}

      {/* MODAL NEURO */}
      {showNeuro && (
        <Modal
          onClose={() => setShowNeuro(false)}
          title="Selecione as Neurodivergências da Criança"
        >
          {neuroOptions.map((item) => (
            <button
              key={item}
              onClick={() => toggleNeuro(item)}
              className={`w-full py-2 mb-2 rounded-full font-semibold ${
                neuro.includes(item)
                  ? "bg-green-400 text-white"
                  : "bg-gray-200"
              }`}
            >
              {neuro.includes(item) && "✓ "} {item}
            </button>
          ))}
          <ModalActions onCancel={() => setShowNeuro(false)} />
        </Modal>
      )}
    </main>
  );
}

/* COMPONENTES AUXILIARES */

function Modal({ children, title, onClose }) {
  return (
    <div className="fixed inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-xl w-[320px] shadow-xl">
        <h2 className="text-blue-600 font-bold mb-4 text-center">
          {title}
        </h2>
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
