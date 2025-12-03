"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft, FaPlay } from "react-icons/fa";

export default function AtividadesAdaptadas() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-gradient-to-b from-[#FFF4C3] to-[#FFE082] p-6">
      <div className="bg-white shadow-2xl rounded-[30px] p-8 max-w-md w-full text-center border-4 border-[#FFE58F]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl font-extrabold text-[#1A1A1A] mb-6 font-[var(--font-title)] [text-shadow:_2px_2px_0_#FFD54F]">
            Atividades Adaptadas
          </h1>

          <Image
            src="/nilo.svg"
            alt="Nilo mascote"
            width={180}
            height={180}
            className="mx-auto mb-4 drop-shadow-lg"
          />

          <p className="text-lg text-[#333] mb-8 font-[var(--font-body)]">
            “Vamos criar uma atividade adaptada com carinho e inclusão.”
          </p>

          <div className="flex flex-col gap-4">
            <button className="w-full bg-[#2D2671] hover:bg-[#241e5d] text-white font-bold py-4 rounded-[30px] shadow-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 font-[var(--font-title)]">
              <FaPlay />
              Gerar Atividade Adaptada
            </button>

            <Link href="/">
              <button className="w-full bg-[#7FE1B2] hover:bg-[#6bc99d] text-white font-bold py-4 rounded-[30px] shadow-lg flex items-center justify-center gap-3 transition-all hover:scale-[1.02] active:scale-95 font-[var(--font-title)]">
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
