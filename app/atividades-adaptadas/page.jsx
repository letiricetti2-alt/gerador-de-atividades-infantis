"use client";

import { useState } from "react";
import Image from "next/image";

export default function AtividadesAdaptadas() {
  const [mostrarSuporte, setMostrarSuporte] = useState(false);
  const [nivelSuporte, setNivelSuporte] = useState("");

  return (
    <>
      <style jsx global>{`
        html, body {
          background-color: #9DDEFC;
          margin: 0;
          padding: 0;
          height: 100%;
          width: 100%;
          overflow: hidden;
        }
      `}</style>

      <main className="flex justify-center items-center w-screen h-screen bg-[#9DDEFC]">
        <div className="relative w-[480px] h-[720px]">

          {/* IMAGEM BASE */}
          <Image
            src="/adaptada.jpeg"
            alt="Atividades Adaptadas"
            fill
            priority
            className="object-contain"
          />

          {/* BOTÃO NÍVEL DE SUPORTE */}
          <button
            onClick={() => setMostrarSuporte(true)}
            className="absolute top-[350px] left-[170px] w-[230px] h-[60px]"
          >
            <span className="sr-only">Selecionar nível de suporte</span>
          </button>

          {/* TEXTO DO NÍVEL SELECIONADO (DENTRO DO CAMPO) */}
          {nivelSuporte && (
            <div className="absolute top-[370px] left-[230px] text-blue-900 font-bold">
              {nivelSuporte}
            </div>
          )}

          {/* MODAL NÍVEL DE SUPORTE */}
          {mostrarSuporte && (
            <div className="absolute inset-0 bg-black/40 flex justify-center items-center">
              <div className="bg-white w-[360px] rounded-2xl p-6 shadow-xl">

                <h2 className="text-blue-600 text-center font-bold mb-4">
                  Quanto apoio a criança precisa para realizar a atividade?
                </h2>

                {["Baixo", "Moderado", "Alto"].map((opcao) => (
                  <button
                    key={opcao}
                    onClick={() => setNivelSuporte(opcao)}
                    className={`w-full py-3 rounded-full mb-3 text-white font-bold transition ${
                      nivelSuporte === opcao ? "ring-4 ring-green-500" : ""
                    } ${
                      opcao === "Baixo"
                        ? "bg-teal-400"
                        : opcao === "Moderado"
                        ? "bg-yellow-400"
                        : "bg-pink-500"
                    }`}
                  >
                    {nivelSuporte === opcao ? "✓ " : ""}{opcao}
                  </button>
                ))}

                <div className="flex justify-between mt-4">
                  <button
                    onClick={() => setMostrarSuporte(false)}
                    className="bg-gray-300 px-4 py-2 rounded-full"
                  >
                    Cancelar
                  </button>

                  <button
                    onClick={() => setMostrarSuporte(false)}
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
