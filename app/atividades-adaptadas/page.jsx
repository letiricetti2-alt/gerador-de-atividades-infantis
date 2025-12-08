"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AtividadesAdaptadas() {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#A9E4FF]">
      {/* 🔹 Imagem de fundo com proporção exata */}
      <Image
        src="/adaptada.jpeg"
        alt="Atividades Adaptadas"
        width={1080}
        height={2340}
        priority
        className="absolute top-0 left-1/2 -translate-x-1/2 h-auto w-auto max-h-screen"
        style={{
          objectFit: "contain",
        }}
      />

      {/* 🔹 Conteúdo principal */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-12 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-full flex flex-col items-center gap-4"
        >
          <Link
            href="/"
            className="bg-green-500 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg hover:scale-105 transition"
          >
            Voltar para o início
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
