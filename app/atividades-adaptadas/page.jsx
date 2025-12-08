"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

export default function AtividadesAdaptadas() {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#A9E4FF]">
      {/* Fundo */}
      <Image
        src="/adaptada.jpeg"
        alt="Atividades Adaptadas"
        fill
        priority
        className="object-contain"
      />

      {/* Conteúdo */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-10 text-center z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col items-center gap-4"
        >
          {/* 🔹 único botão (o duplicado foi removido) */}
          <Link
            href="/"
            className="bg-green-500 text-white font-semibold py-3 px-6 rounded-2xl shadow-lg hover:scale-105 transition w-[80%] max-w-xs text-center"
          >
            Voltar para o início
          </Link>
        </motion.div>
      </div>
    </main>
  );
}
