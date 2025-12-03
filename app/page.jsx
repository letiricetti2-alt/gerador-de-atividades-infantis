"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPuzzlePiece, FaPalette, FaUser, FaSignOutAlt } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[var(--color-yellow)] p-6">
      {/* Card principal */}
      <div className="bg-[var(--color-cream)] shadow-card rounded-[30px] p-10 w-full max-w-[420px] text-center">
        
        {/* Título */}
        <motion.h1
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-extrabold text-[#1A1A1A] mb-10 font-[var(--font-title)] text-shadow"
        >
          Gerador de
          <br />
          Atividades Infantis
        </motion.h1>

        {/* Personagens */}
        <motion.div
          className="grid grid-cols-3 gap-6 justify-items-center mb-10"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          {[
            { name: "Luno", file: "luno.svg" },
            { name: "Tina", file: "tina.svg" },
            { name: "Malu", file: "malu.svg" },
            { name: "Theo", file: "theo.svg" },
            { name: "Nilo", file: "nilo.svg" },
          ].map((char, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.08 }}
              transition={{ type: "spring", stiffness: 300 }}
              className="flex flex-col items-center"
            >
              <Image
                src={`/${char.file}`}
                alt={char.name}
                width={80}
                height={80}
                className="object-contain drop-shadow-md"
              />
              <p className="mt-2 font-semibold text-[#1A1A1A] text-sm font-[var(--font-body)] text-shadow-small">
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
            <button className="w-full bg-[var(--color-purple)] hover:brightness-90 text-white font-bold py-4 rounded-[25px] shadow-lg flex items-center justify-center gap-3 transition-all">
              <FaPuzzlePiece /> Gerar Atividade Adaptada
            </button>
          </Link>

          <Link href="/atividades-comuns">
            <button className="w-full bg-[var(--color-pink)] hover:brightness-90 text-white font-bold py-4 rounded-[25px] shadow-lg flex items-center justify-center gap-3 transition-all">
              <FaPalette /> Gerar Atividade Comum
            </button>
          </Link>

          <Link href="/perfil">
            <button className="w-full bg-[var(--color-blue)] hover:brightness-90 text-white font-bold py-4 rounded-[25px] shadow-lg flex items-center justify-center gap-3 transition-all">
              <FaUser /> Meu Perfil
            </button>
          </Link>

          <button className="w-full bg-[var(--color-orange)] hover:brightness-90 text-white font-bold py-4 rounded-[25px] shadow-lg flex items-center justify-center gap-3 transition-all">
            <FaSignOutAlt /> Sair
          </button>
        </motion.div>
      </div>
    </main>
  );
}
