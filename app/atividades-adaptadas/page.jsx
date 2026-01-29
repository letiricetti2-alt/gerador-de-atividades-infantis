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

          {/* TEXTO TIPO DE ATIVIDADE (CENTRALIZAÇÃO CORRETA) */}
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
            className="absolute z-10"
            style={{ top: "330px", left: "60px", width: "360px", height: "70px" }}
            onClick={() => setShowSupportModal(true)}
          />
          <div
            className="absolute z-10"
            style={{ top: "400px", left: "60px", width: "360px", height: "70px" }}
            onClick={() => setShowTypeModal(true)}
          />
          <div
            className="absolute z-10"
            style={{ top: "470px", left: "60px", width: "360px", height: "70px" }}
            onClick={() => setShowNeuroModal(true)}
          />

          {/* (modais permanecem iguais — não mexi neles) */}

        </div>
      </main>
    </>
  );
}
