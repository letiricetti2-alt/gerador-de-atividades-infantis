"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPuzzlePiece, FaPalette, FaUser, FaSignOutAlt } from "react-icons/fa";

export default function Home() {
  const personagens = [
    { nome: "Luno", img: "/luno.png" },
    { nome: "Tina", img: "/tina.png" },
    { nome: "Malu", img: "/malu.png" },
    { nome: "Theo", img: "/theo.png" },
    { nome: "Nilo", img: "/nilo.png" },
  ];

  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FDD835] p-6 font-[var(--font-body)]">
      <div className="bg-[#FEF5DA] shadow-2xl rounded-[30px] p-10 max-w-md w-full text-center border-4 border-[#FFE58F]">
        {/* 🧠 Título */}
        <h1 className="text-4xl font-extrabold mb-8 text-[#1A1A1A] title-shadow leading-tight font-[var(--font-title)]">
          Gerador de <br /> Atividades Infantis
        </h1>

        {/* 💛 Personagens */}
        <div className="flex justify-center items-start gap-6 mb-10 flex-wrap">
          {personagens.map((p) => (
            <div key={p.nome} className="flex flex-col items-center w-20">
              <div className="relative w-16 h-16">
                <Image
                  src={p.img}
                  alt={p.nome}
                  width={64}
                  height={64}
                  className="object-contain drop-shadow-md"
                />
              </div>
              <p className="mt-2 text-sm font-semibold text-[#1A1A1A] character-name-shadow font-[var(--font-body)]">
                {p.nome}
              </p>
            </div>
          ))}
        </div>

        {/* 🎨 Botões */}
        <div className="flex flex-col gap-5 mt-4">
          <Link href="/atividades-adaptadas">
            <button className="w-full bg-[#2D2671] hover:bg-[#241e5d] text-white font-bold py-4 rounded-[30px] shadow-lg flex items-center justify-center gap-3 transition-transform duration-150 hover:scale-[1.02] active:scale-95 font-[var(--font-title)]">
              <FaPuzzlePiece className="text-lg" />
              <span>Gerar Atividade Adaptada</span>
            </button>
          </Link>

          <Link href="/atividades-comuns">
            <button className="w-full bg-[#F26D7D] hover:bg-[#d65c6b] text-white font-bold py-4 rounded-[30px] shadow-lg flex items-center justify-center gap-3 transition-transform duration-150 hover:scale-[1.02] active:scale-95 font-[var(--font-title)]">
              <FaPalette className="text-lg" />
              <span>Gerar Atividade Comum</span>
            </button>
          </Link>

          <Link href="/login">
            <button className="w-full bg-[#3FA9F5] hover:bg-[#2f95e1] text-white font-bold py-4 rounded-[30px] shadow-lg flex items-center justify-center gap-3 transition-transform duration-150 hover:scale-[1.02] active:scale-95 font-[var(--font-title)]">
              <FaUser className="text-lg" />
              <span>Meu Perfil</span>
            </button>
          </Link>

          <button className="w-full bg-[#F9B233] hover:bg-[#e1a02c] text-white font-bold py-4 rounded-[30px] shadow-lg flex items-center justify-center gap-3 transition-transform duration-150 hover:scale-[1.02] active:scale-95 font-[var(--font-title)]">
            <FaSignOutAlt className="text-lg" />
            <span>Sair</span>
          </button>
        </div>
      </div>
    </main>
  );
}
