"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#FFE060] flex flex-col items-center justify-center p-6 text-center font-poppins">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="max-w-md w-full bg-white/60 backdrop-blur-lg p-8 rounded-3xl shadow-lg"
      >
        {/* MASCOTES E TÍTULO */}
        <div className="flex flex-col items-center mb-6">
          <h1 className="text-4xl font-extrabold text-black drop-shadow-[2px_2px_0px_#FFFFFF] mb-3">
            Gerador de Atividades Infantis
          </h1>

          {/* MASCOTES */}
          <div className="flex justify-center gap-4 mt-2">
            <span className="text-[#FF6B6B] text-5xl">🌸</span>
            <span className="text-[#4CD7D0] text-5xl">💚</span>
            <span className="text-[#F6B93B] text-5xl">🧡</span>
            <span className="text-[#6C63FF] text-5xl">💙</span>
          </div>
        </div>

        {/* BOTÕES */}
        <div className="flex flex-col gap-4 mt-6">
          <button
            onClick={() => router.push("/atividades-adaptadas")}
            className="bg-[#8E7DFF] hover:bg-[#7A6EE0] text-white font-bold py-3 rounded-2xl shadow-md"
          >
            🧩 Gerar Atividade Adaptada
          </button>

          <button
            onClick={() => router.push("/atividades-comuns")}
            className="bg-[#F67280] hover:bg-[#EB5A68] text-white font-bold py-3 rounded-2xl shadow-md"
          >
            🎨 Gerar Atividade Comum
          </button>

          <button
            onClick={() => router.push("/perfil")}
            className="bg-[#4CD7D0] hover:bg-[#34BDB5] text-white font-bold py-3 rounded-2xl shadow-md"
          >
            👤 Meu Perfil
          </button>

          <button
            onClick={() => alert('Você saiu do app!')}
            className="bg-[#FFB84C] hover:bg-[#F3A229] text-black font-bold py-3 rounded-2xl shadow-md"
          >
            🚪 Sair
          </button>
        </div>
      </motion.div>
    </div>
  );
}
