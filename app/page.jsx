"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import {
  FaPuzzlePiece,
  FaPalette,
  FaUser,
  FaSignOutAlt,
} from "react-icons/fa";

export default function Home() {
  const personagens = [
    { nome: "Luno", imagem: "/personagens/personagem-amarelo.png" },
    { nome: "Tina", imagem: "/personagens/personagem-azul.png" },
    { nome: "Malu", imagem: "/personagens/personagem-roxo.png" },
    { nome: "Theo", imagem: "/personagens/personagem-verde.png" },
    { nome: "Nilo", imagem: "/personagens/personagem-laranja.png" },
  ];

  return (
    <main className="flex items-center justify-center min-h-screen bg-[#FDD835]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="bg-[#FFF3C4] p-10 rounded-3xl shadow-2xl text-center max-w-md w-full"
      >
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 text-center title-shadow mb-8">
          Gerador de Atividades Infantis
        </h1>

        <div className="flex justify-center space-x-4 mb-10">
          {personagens.map((p) => (
            <motion.div
              key={p.nome}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="text-center"
            >
              <Image
                src={p.imagem}
                alt={p.nome}
                width={70}
                height={70}
                className="mx-auto"
              />
              <p className="mt-2 text-sm font-semibold text-slate-800 character-name-shadow">
                {p.nome}
              </p>
            </motion.div>
          ))}
        </div>

        <div className="space-y-4">
          <Link href="/atividades-adaptadas">
            <button className="w-full bg-[#2D2671] hover:bg-[#241e5d] text-white font-bold py-3 px-6 rounded-2xl shadow-md flex items-center justify-center space-x-2">
              <FaPuzzlePiece /> <span>Gerar Atividade Adaptada</span>
            </button>
          </Link>

          <Link href="/atividades-comuns">
            <button className="w-full bg-[#F26D7D] hover:bg-[#d65c6b] text-white font-bold py-3 px-6 rounded-2xl shadow-md flex items-center justify-center space-x-2">
              <FaPalette /> <span>Gerar Atividade Comum</span>
            </button>
          </Link>

          <Link href="/login">
            <button className="w-full bg-[#3FA9F5] hover:bg-[#2f95e1] text-white font-bold py-3 px-6 rounded-2xl shadow-md flex items-center justify-center space-x-2">
              <FaUser /> <span>Meu Perfil</span>
            </button>
          </Link>

          <button className="w-full bg-[#F9B233] hover:bg-[#e1a02c] text-white font-bold py-3 px-6 rounded-2xl shadow-md flex items-center justify-center space-x-2">
            <FaSignOutAlt /> <span>Sair</span>
          </button>
        </div>
      </motion.div>
    </main>
  );
}
