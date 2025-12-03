"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPuzzlePiece, FaPalette, FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#FDD835] text-center px-4">
      
      {/* Seção de boas-vindas */}
      <div className="flex flex-col items-center">
        <div className="relative mb-4">
          <Image
            src="/tina.svg"
            alt="Tina"
            width={160}
            height={160}
            className="drop-shadow-lg"
          />
          <div className="absolute top-5 left-[120px] bg-[#FFF4C3] text-[#1A1A1A] text-lg font-semibold px-6 py-3 rounded-[20px] w-max shadow-md">
            Olá e bem-vindo(a)!
          </div>
        </div>

        {/* Título */}
        <h1 className="text-5xl font-extrabold text-[#1A1A1A] mb-10 text-shadow leading-tight">
          Gerador de
          <br />
          Atividades Infantis
        </h1>
      </div>

      {/* Personagens */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        className="flex justify-center gap-10 mb-12 flex-wrap"
      >
        {[
          { name: "Luno", file: "luno.svg" },
          { name: "Malu", file: "malu.svg" },
          { name: "Theo", file: "theo.svg" },
          { name: "Nilo", file: "nilo.svg" },
        ].map((char, i) => (
          <div key={i} className="flex flex-col items-center">
            <Image
              src={`/${char.file}`}
              alt={char.name}
              width={110}
              height={110}
              className="drop-shadow-md"
            />
          </div>
        ))}
      </motion.div>

      {/* Botões */}
      <div className="flex flex-col gap-5 w-full max-w-[420px]">
        <Link href="/atividades-adaptadas">
          <button className="w-full bg-[#2D2671] hover:bg-[#231e5b] text-white text-lg font-bold py-4 rounded-[40px] shadow-lg flex items-center justify-center gap-3">
            <FaPuzzlePiece /> Gerar Atividade Adaptada
          </button>
        </Link>

        <Link href="/atividades-comuns">
          <button className="w-full bg-[#EF5DA8] hover:bg-[#d94f90] text-white text-lg font-bold py-4 rounded-[40px] shadow-lg flex items-center justify-center gap-3">
            <FaPalette /> Gerar Atividade Comum
          </button>
        </Link>

        <Link href="/perfil">
          <button className="w-full bg-[#4FC3F7] hover:bg-[#39b2e9] text-white text-lg font-bold py-4 rounded-[40px] shadow-lg flex items-center justify-center gap-3">
            <FaUser /> Meu Perfil
          </button>
        </Link>
      </div>
    </main>
  );
}
