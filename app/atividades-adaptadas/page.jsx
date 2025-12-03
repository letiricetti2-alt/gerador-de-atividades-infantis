"use client";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";

export default function AtividadesAdaptadas() {
  const router = useRouter();

  return (
    <div className="min-h-screen bg-[#FFE1C7] flex flex-col items-center justify-center p-6 text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-md w-full bg-white/70 backdrop-blur-md p-6 rounded-3xl shadow-lg"
      >
        {/* MASCOTE + BALÃO */}
        <div className="flex items-center justify-start mb-6">
          <div className="relative">
            <div className="bg-green-500 rounded-full w-24 h-24 flex items-center justify-center text-white text-3xl font-bold shadow-md">
              🧠
            </div>
            <div className="absolute top-[-20px] left-[90px] bg-[#FFF6EB] text-black font-bold rounded-2xl px-4 py-2 shadow">
              Vamos criar uma atividade adaptada com carinho e inclusão!
            </div>
          </div>
        </div>

        {/* TÍTULO */}
        <h1 className="text-3xl font-extrabold text-[#4B2E83] drop-shadow-md mb-6">
          Atividades Adaptadas
        </h1>

        {/* SELECTS */}
        <div className="flex flex-col gap-4">
          <div className="bg-[#FF6F91] text-white py-3 px-5 rounded-2xl shadow-md">
            <label className="font-bold mr-2">Nível de Suporte:</label>
            <select className="bg-white text-black rounded-lg px-2 py-1">
              <option>Todos</option>
              <option>1</option>
              <option>2</option>
              <option>3</option>
            </select>
          </div>

          <div className="bg-[#82D8D8] text-white py-3 px-5 rounded-2xl shadow-md">
            <label className="font-bold mr-2">Tipo de Atividade:</label>
            <select className="bg-white text-black rounded-lg px-2 py-1">
              <option>Todas</option>
              <option>Matemática</option>
              <option>Leitura</option>
              <option>Motricidade</option>
            </select>
          </div>
        </div>

        {/* BOTÕES */}
        <div className="flex flex-col gap-4 mt-6">
          <button className="bg-[#55C271] hover:bg-[#4CAF50] text-white font-bold py-3 rounded-2xl shadow-md">
            ✨ Gerar Atividade
          </button>

          <button
            onClick={() => router.push("/")}
            className="bg-[#FFD43B] hover:bg-[#FFC300] text-black font-bold py-3 rounded-2xl shadow-md"
          >
            ← Voltar para o início
          </button>
        </div>
      </motion.div>
    </div>
  );
}
