// app/page.jsx
"use client";

import Image from "next/image";

export default function HomePage() {
  const personagens = [
    { name: "Luno", src: "/personagens/luno.png" },
    { name: "Malu", src: "/personagens/malu.png" },
    { name: "Theo", src: "/personagens/theo.png" },
    { name: "Nilo", src: "/personagens/nilo.png" },
  ];

  return (
    <main className="w-full flex justify-center py-10">
      <div className="relative w-full max-w-[520px]">
        {/* CARD PRINCIPAL */}
        <div className="main-card bg-[#FFEFB5] rounded-[40px] pt-32 pb-16 px-10 relative overflow-visible">
          {/* PERSONAGEM AZUL + BALÃO DE FALA */}
          <div className="absolute -top-32 left-1/2 -translate-x-[55%]">
            <div className="relative">
              <Image
                src="/personagens/tina.png"
                alt="Personagem de boas-vindas"
                width={220}
                height={220}
                priority
              />

              {/* Balãozinho */}
              <div className="absolute top-6 left-[64%] -translate-x-1/2 bg-[#FFEFB5] rounded-[24px] px-5 py-3 main-card">
                <p className="text-sm font-semibold text-[#1E1464] whitespace-nowrap">
                  Olá e bem-vindo(a)!
                </p>
              </div>
            </div>
          </div>

          {/* TÍTULO */}
          <h1 className="title-shadow text-[#1E1464] text-center font-extrabold text-[44px] leading-tight mt-4 mb-12">
            <span className="block">Gerador de</span>
            <span className="block">Atividades</span>
            <span className="block">Infantis</span>
          </h1>

          {/* PERSONAGENS */}
          <div className="grid grid-cols-4 gap-4 mb-12">
            {personagens.map((char) => (
              <div
                key={char.name}
                className="flex flex-col items-center justify-start gap-3"
              >
                <Image
                  src={char.src}
                  alt={char.name}
                  width={96}
                  height={96}
                  className="object-contain"
                />
                <p className="text-base font-semibold">{char.name}</p>
              </div>
            ))}
          </div>

          {/* BOTÕES */}
          <div className="space-y-7">
            <button className="w-full rounded-full bg-[#191A63] btn-shadow text-white text-lg font-semibold py-4">
              Gerar Atividade Adaptada
            </button>

            <button className="w-full rounded-full bg-[#F875AA] btn-shadow text-white text-lg font-semibold py-4">
              Gerar Atividade Comum
            </button>

            <button className="w-full rounded-full bg-[#1F88FF] btn-shadow text-white text-lg font-semibold py-4">
              Meu Perfil
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
