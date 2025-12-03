"use client";
import { FaPuzzlePiece, FaPalette, FaUser, FaSignOutAlt } from "react-icons/fa";
import Image from "next/image";

export default function Home() {
  const personagens = [
    { nome: "Luno", cor: "amarelo", img: "/personagens/personagem-amarelo.png" },
    { nome: "Tina", cor: "azul", img: "/personagens/personagem-azul.png" },
    { nome: "Malu", cor: "roxo", img: "/personagens/personagem-roxo.png" },
    { nome: "Theo", cor: "verde", img: "/personagens/personagem-verde.png" },
    { nome: "Nilo", cor: "laranja", img: "/personagens/personagem-laranja.png" },
  ];

  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-400">
      <div className="bg-[#fff4cc] rounded-3xl shadow-xl p-8 w-[400px] flex flex-col items-center">
        <h1 className="text-3xl font-extrabold text-center text-black mb-8 leading-tight">
          Gerador de <br /> Atividades Infantis
        </h1>

        <div className="grid grid-cols-5 gap-3 mb-8 text-center">
          {personagens.map((p, index) => (
            <div
              key={index}
              className="flex flex-col items-center transition-transform duration-200 hover:scale-110"
            >
              <div className="w-16 h-16 flex items-center justify-center">
                <Image
                  src={p.img}
                  alt={p.nome}
                  width={64}
                  height={64}
                  className="drop-shadow-md"
                />
              </div>
              <p className="text-sm text-gray-800 font-semibold mt-1">{p.nome}</p>
            </div>
          ))}
        </div>

        <button className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 px-6 rounded-2xl shadow-md w-full mb-3 flex items-center justify-center gap-2 transition-transform active:scale-95">
          <FaPuzzlePiece /> Gerar Atividade Adaptada
        </button>

        <button className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-md w-full mb-3 flex items-center justify-center gap-2 transition-transform active:scale-95">
          <FaPalette /> Gerar Atividade Comum
        </button>

        <button className="bg-sky-400 hover:bg-sky-500 text-white font-semibold py-3 px-6 rounded-2xl shadow-md w-full mb-3 flex items-center justify-center gap-2 transition-transform active:scale-95">
          <FaUser /> Meu Perfil
        </button>

        <button className="bg-amber-400 hover:bg-amber-500 text-white font-semibold py-3 px-6 rounded-2xl shadow-md w-full flex items-center justify-center gap-2 transition-transform active:scale-95">
          <FaSignOutAlt /> Sair
        </button>
      </div>
    </div>
  );
}
