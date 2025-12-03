"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPuzzlePiece, FaPalette, FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#FDD835] px-6 py-10">
      {/* Container geral */}
      <div className="flex flex-col items-center text-center max-w-[500px] w-full">

        {/* Personagem de boas-vindas */}
        <motion.div
          initial={{ opacity: 0, y: -15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="flex flex-col items-center mb-4"
        >
          <Image
            src="/tina.svg"
            alt="Tina"
            width={130}
            height={130}
            className="drop-shadow-md"
          />
          <div className="bg-[#FFF4C3] px-6 py-3 rounded-[20px] mt-[-15px]">
            <p className="text-[#2D2671] font-[var(--font-body)] font-semibold text-lg">
              Olá e bem-vindo(a)!
            </p>
          </div>
        </motion.div>

        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-5xl font-extrabold text-[#1A1A1A] mb-10 font-[var(--font-title)] text-shadow leading-tight"
        >
          Gerador de
          <br />
          Atividades Infantis
        </motion.h1>

        {/* Personagens */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          className="flex justify-center gap-8 mb-10 flex-wrap"
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
                width={90}
                height={90}
                className="drop-shadow-md"
              />
            </div>
          ))}
        </motion.div>

        {/* Botões */}
        <motion.div
          className="flex flex-col gap-5 w-full max-w-[400px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <Link href="/atividades-adaptadas">
            <button className="w-full bg-[#2D2671] hover:bg-[#231e5b] text-white text-lg font-bold py-4 rounded-[30px] shadow-lg flex items-center justify-center gap-3">
              <FaPuzzlePiece /> Gerar Atividade Adaptada
            </button>
          </Link>

          <Link href="/atividades-comuns">
            <button className="w-full bg-[#EF5DA8] hover:bg-[#d94f90] text-white text-lg font-bold py-4 rounded-[30px] shadow-lg flex items-center justify-center gap-3">
              <FaPalette /> Gerar Atividade Comum
            </button>
          </Link>

          <Link href="/perfil">
            <button className="w-full bg-[#4FC3F7] hover:bg-[#39b2e9] text-white text-lg font-bold py-4 rounded-[30px] shadow-lg flex items-center justify-center gap-3">
              <FaUser /> Meu Perfil
            </button>
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
