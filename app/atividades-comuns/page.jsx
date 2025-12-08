"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowLeft } from "react-icons/fa";

export default function AtividadesComuns() {
  return (
    <main className="relative min-h-screen w-full flex items-center justify-center overflow-hidden">
      {/* 🔹 Imagem de fundo (comum.jpeg) */}
      <Image
        src="/comum.jpeg"
        alt="Atividades Comuns"
        fill
        priority
        style={{
          objectFit: "cover", // preenche completamente
          objectPosition: "center", // centraliza
        }}
      />

      {/* 🔹 Conteúdo sobreposto */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center gap-4"
        >
          {/* Botão voltar */}
          <Link
            href="/"
            className="bg-green-500 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            Voltar para o início
          </Link>
        </motion.div>
      </div>

      {/* 🔹 Ícone voltar no topo esquerdo */}
      <Link
        href="/"
        className="absolute top-6 left-6 bg-white/70 hover:bg-white p-3 rounded-full shadow-md text-gray-800 transition"
      >
        <FaArrowLeft size={20} />
      </Link>
    </main>
  );
}
