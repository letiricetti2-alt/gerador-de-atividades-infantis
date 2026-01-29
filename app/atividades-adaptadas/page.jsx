"use client";

import { useState } from "react";
import Image from "next/image";

export default function AtividadesAdaptadas() {
  const [showSupportModal, setShowSupportModal] = useState(false);
  const [showTypeModal, setShowTypeModal] = useState(false);
  const [showNeuroModal, setShowNeuroModal] = useState(false);

  const [supportDefined, setSupportDefined] = useState(false);
  const [typeDefined, setTypeDefined] = useState(false);

  const [selectedNeuros, setSelectedNeuros] = useState([]);

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
  ];

  function toggleNeuro(item) {
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

          {/* IMAGEM */}
          <Image
            src="/adaptada.jpeg"
            alt="Atividades Adaptadas"
            fill
            priority
            className="object-contain"
          />

          {/* TEXTO NÍVEL DE SUPORTE */}
          <div
            className="absolute flex items-center justify-center font-bold text-blue-800 text-center cursor-pointer"
            style={{ top: "345px", left: "210px", width: "170px", height: "40px" }}
            onClick={() => setShowSupportModal(true)}
          >
            {supportDefined && "✨ Pronto!"}
          </div>

          {/* TEXTO TIPO DE ATIVIDADE */}
          <div
            className="absolute flex items-center justify-center font-bold text-blue-800 text-center cursor-pointer"
            style={{ top: "415px", left: "210px", width: "170px", height: "40px" }}
            onClick={() => setShowTypeModal(true)}
          >
            {typeDefined && "✨ Pronto!"}
          </div>

          {/* ÁREA CLICÁVEL SUPORTE */}
          <div
            className="absolute"
            style={{ top: "330px", left: "60px", width: "360px", height: "70px" }}
            onClick={() => setShowSupportModal(true)}
          />

          {/* ÁREA CLICÁVEL TIPO */}
          <div
            className="absolute"
            style={{ top: "400px", left: "60px", width: "360px", height: "70px" }}
            onClick={() => setShowTypeModal(true)}
          />

          {/* ÁREA CLICÁVEL NEURO */}
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
                  onClick={() => setSupportDefined(true)}
                  className="w-full py-3 rounded-full mb-3 font-bold bg-orange-400 text-white"
                >
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
                  onClick={() => setTypeDefined(true)}
                  className={`${opt.color} w-full py-2 mb-2 rounded-full text-white font-semibold`}
                >
                  {opt.label}
                </button>
              ))}

              <ModalActions onClose={() => setShowTypeModal(false)} />
            </Modal>
          )}

          {/* MODAL NEURO */}
          {showNeuroModal && (
            <Modal title="Selecione as Neurodivergências">
              {neuroOptions.map((item) => (
                <button
                  key={item}
                  onClick={() => toggleNeuro(item)}
                  className={`w-full py-2 mb-2 rounded-full font-semibold ${
                    selectedNeuros.includes(item)
                      ? "bg-green-400 text-white"
                      : "bg-gray-200"
                  }`}
                >
                  {selectedNeuros.includes(item) && "✓ "} {item}
                </button>
              ))}

              <ModalActions onClose={() => setShowNeuroModal(false)} />
            </Modal>
          )}

        </div>
      </main>
    </>
  );
}

/* COMPONENTES AUXILIARES */

function Modal({ title, children }) {
  return (
    <div className="absolute inset-0 bg-black/40 flex items-center justify-center z-50">
      <div className="bg-white p-6 rounded-3xl w-[330px] shadow-xl">
        <h2 className="text-blue-600 font-bold mb-4 text-center">
          {title}
        </h2>
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
