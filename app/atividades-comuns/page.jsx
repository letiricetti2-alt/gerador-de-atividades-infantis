"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaPlay } from "react-icons/fa";

export default function AtividadesComuns() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FFE0E0] to-[#FBCFE8] p-6">
      <div className="bg-white shadow-2xl rounded-[30px] p-8 max-w-md w-full text-center border-4 border-[#FCA5A5]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-extrabold text-[#1A1A1A] mb-6 font-[var(--font-title)] [text-shadow:_2px_2px_0_#FFD54F]">
            Atividades Comuns
          </h1>

          <Image
            src="/theo.svg"
            alt="Theo mascote"
            width={180}
            height={180}
            className="mx-auto mb-4 drop-shadow-lg"
          />

          <p className="text-lg text-[#333] mb-8 font-[var(--font-body)]">
            “Vamos criar atividades divertidas e educativas!”
          </p>

          <div className="flex flex-col gap-4">
            <button className="w-full bg-[#4ADE80] hover:bg-[#22C55E] text-white font-bold py-4 rounded-[30px] shadow-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 font-[var(--font-title)]">
              <FaPlay />
              Gerar Atividade
            </button>

            <Link href="/">
              <button className="w-full bg-[#F9B233] hover:bg-[#e1a02c] text-white font-bold py-4 rounded-[30px] shadow-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 font-[var(--font-title)]">
                <FaArrowLeft />
                Voltar para o Início
              </button>
            </Link>
          </div>
        </motion.div>
      </div>
    </main>
  );
}
