"use client";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-yellow-300 font-sans p-6">
      {/* Container principal */}
      <div className="relative bg-yellow-200 rounded-3xl shadow-xl p-10 max-w-md w-full text-center">
        
        {/* PERSONAGEM AZUL COM BALÃO */}
        <div className="absolute -top-32 -left-20 flex flex-col items-center">
          <Image
            src="/mascote-azul.png"
            alt="Mascote Azul"
            width={180}
            height={180}
            className="drop-shadow-md"
          />
          <div className="bg-yellow-100 text-gray-800 font-bold rounded-2xl px-6 py-3 shadow-md -mt-4">
            Olá e bem-vindo(a)!
          </div>
        </div>

        {/* TÍTULO */}
        <h1 className="text-4xl font-extrabold text-gray-900 drop-shadow-[3px_3px_0px_#f9f3d5] leading-tight mb-8">
          Gerador de <br />
          <span className="text-gray-900">Atividades Infantis</span>
        </h1>

        {/* PERSONAGENS INFERIORES */}
        <div className="flex justify-center gap-3 mb-6">
          <Image src="/personagem1.png" alt="Personagem 1" width={60} height={60} />
          <Image src="/personagem2.png" alt="Personagem 2" width={60} height={60} />
          <Image src="/personagem3.png" alt="Personagem 3" width={60} height={60} />
          <Image src="/personagem4.png" alt="Personagem 4" width={60} height={60} />
        </div>

        {/* BOTÕES */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full bg-indigo-900 text-white font-semibold text-lg py-4 rounded-full shadow-md mb-4"
        >
          Gerar Atividade Adaptada
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full bg-pink-400 text-white font-semibold text-lg py-4 rounded-full shadow-md mb-4"
        >
          Gerar Atividade Comum
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          className="w-full bg-blue-500 text-white font-semibold text-lg py-4 rounded-full shadow-md"
        >
          Meu Perfil
        </motion.button>
      </div>
    </main>
  );
}
