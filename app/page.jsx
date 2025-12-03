"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPuzzlePiece, FaPalette, FaUser, FaSignOutAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#FDD835] p-6">
      <div className="bg-[#FFF4C3] shadow-2xl rounded-[30px] p-10 max-w-md w-full text-center">
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-[#1A1A1A] mb-6 font-[var(--font-title)] [text-shadow:_3px_3px_0_#FFD54F]"
        >
          Gerador de
          <br />
          Atividades Infantis
        </motion.h1>

        {/* Personagens */}
        <motion.div
          className="flex flex-wrap justify-center gap-6 mb-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {[
            { name: "Luno", color: "#FFC107", file: "luno.svg" },
            { name: "Tina", color: "#3DC4FF", file: "tina.svg" },
            { name: "Malu", color: "#B388EB", file: "malu.svg" },
            { name: "Theo", color: "#6DD48C", file: "theo.svg" },
            { name: "Nilo", color: "#FF8A47", file: "nilo.svg" },
          ].map((char, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.1, rotate: 2 }}
              transition={{ type: "spring", stiffness: 200 }}
              className="flex flex-col items-center"
            >
              <div
                className="w-20 h-20 flex items-center justify-center rounded-full shadow-md"
                style={{ backgroundColor: char.color }}
              >
                <Image
                  src={`/${char.file}`}
                  alt={char.name}
                  width={64}
                  height={64}
                  className="object-contain drop-shadow-lg"
                />
              </div>
              <p className="mt-2 font-semibold text-[#1A1A1A] text-sm font-[var(--font-body)] [text-shadow:_1px_1px_0_#FFD54F]">
                {char.name}
              </p>
            </motion.div>
          ))}
        </motion.div>

        {/* Botões */}
        <motion.div
          className="flex flex-col gap-5"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.8 }}
        >
          <Link href="/atividades-adaptadas">
            <button className="w-full bg-[#2D2671] hover:bg-[#231e5b] text-white font-bold py-4 rounded-[25px] shadow-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.03] active:scale-95 font-[var(--font-title)]">
              <FaPuzzlePiece /> Gerar Atividade Adaptada
            </button>
          </Link>

          <Link href="/atividades-comuns">
            <button className="w-full bg-[#EF5DA8] hover:bg-[#d94f90] text-white font-bold py-4 rounded-[25px] shadow-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.03] active:scale-95 font-[var(--font-title)]">
              <FaPalette /> Gerar Atividade Comum
            </button>
          </Link>

          <Link href="/perfil">
            <button className="w-full bg-[#4FC3F7] hover:bg-[#39b2e9] text-white font-bold py-4 rounded-[25px] shadow-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.03] active:scale-95 font-[var(--font-title)]">
              <FaUser /> Meu Perfil
            </button>
          </Link>

          <button className="w-full bg-[#F9B233] hover:bg-[#e0a12f] text-white font-bold py-4 rounded-[25px] shadow-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.03] active:scale-95 font-[var(--font-title)]">
            <FaSignOutAlt /> Sair
          </button>
        </motion.div>
      </div>
    </main>
  );
}
