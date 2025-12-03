"use client";
import { motion } from "framer-motion";
import { FaPuzzlePiece, FaPalette, FaUser, FaSignOutAlt } from "react-icons/fa";

export default function Home() {
  return (
    <div className="flex justify-center items-center min-h-screen bg-yellow-400">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-[#fff4cc] rounded-3xl shadow-xl p-8 w-[380px] flex flex-col items-center"
      >
        {/* Título */}
        <h1 className="text-3xl font-extrabold text-center text-black mb-6 leading-tight">
          Gerador de <br /> Atividades Infantis
        </h1>

        {/* Personagens */}
        <div className="grid grid-cols-4 gap-3 mb-6 text-center">
          <div>
            <img
              src="/personagens/personagem-amarelo.png"
              alt="Personagem amarelo"
              className="w-16 h-16 mx-auto drop-shadow-md"
            />
            <p className="text-sm text-gray-800 font-medium mt-1">Amarelo</p>
          </div>
          <div>
            <img
              src="/personagens/personagem-rosa.png"
              alt="Personagem rosa"
              className="w-16 h-16 mx-auto drop-shadow-md"
            />
            <p className="text-sm text-gray-800 font-medium mt-1">Rosa</p>
          </div>
          <div>
            <img
              src="/personagens/personagem-verde.png"
              alt="Personagem verde"
              className="w-16 h-16 mx-auto drop-shadow-md"
            />
            <p className="text-sm text-gray-800 font-medium mt-1">Verde</p>
          </div>
          <div>
            <img
              src="/personagens/personagem-roxo.png"
              alt="Personagem roxo"
              className="w-16 h-16 mx-auto drop-shadow-md"
            />
            <p className="text-sm text-gray-800 font-medium mt-1">Roxo</p>
          </div>
        </div>

        {/* Botões */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-indigo-700 hover:bg-indigo-800 text-white font-semibold py-3 px-6 rounded-2xl shadow-md w-full mb-3 flex items-center justify-center gap-2"
        >
          <FaPuzzlePiece /> Gerar Atividade Adaptada
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-rose-500 hover:bg-rose-600 text-white font-semibold py-3 px-6 rounded-2xl shadow-md w-full mb-3 flex items-center justify-center gap-2"
        >
          <FaPalette /> Gerar Atividade Comum
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-sky-400 hover:bg-sky-500 text-white font-semibold py-3 px-6 rounded-2xl shadow-md w-full mb-3 flex items-center justify-center gap-2"
        >
          <FaUser /> Meu Perfil
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.97 }}
          className="bg-amber-400 hover:bg-amber-500 text-white font-semibold py-3 px-6 rounded-2xl shadow-md w-full flex items-center justify-center gap-2"
        >
          <FaSignOutAlt /> Sair
        </motion.button>
      </motion.div>
    </div>
  );
}
