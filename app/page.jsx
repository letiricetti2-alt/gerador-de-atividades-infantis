"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();

  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-yellow-300 p-6">
      {/* Container principal */}
      <div className="bg-[#FFF4C3] rounded-3xl shadow-xl p-10 max-w-md w-full text-center">
        {/* Título */}
        <h1 className="text-4xl font-extrabold text-black mb-2" style={{ fontFamily: "'Comic Neue', cursive" }}>
          Gerador de
        </h1>
        <h1 className="text-4xl font-extrabold text-black mb-6" style={{ fontFamily: "'Comic Neue', cursive" }}>
          Atividades Infantis
        </h1>

        {/* Personagens */}
        <div className="flex justify-center gap-4 mb-8">
          <Image src="/personagens/amarelo.png" alt="Personagem amarelo" width={80} height={80} />
          <Image src="/personagens/rosa.png" alt="Personagem rosa" width={80} height={80} />
          <Image src="/personagens/verde.png" alt="Personagem verde" width={80} height={80} />
          <Image src="/personagens/roxo.png" alt="Personagem roxo" width={80} height={80} />
        </div>

        {/* Botões */}
        <div className="flex flex-col gap-4">
          <button
            onClick={() => router.push("/atividades-adaptadas")}
            className="bg-[#2B2A78] text-white font-bold py-3 rounded-2xl shadow-md hover:scale-105 transition-transform"
          >
            🌼 Gerar Atividade Adaptada
          </button>

          <button
            onClick={() => router.push("/atividades-comuns")}
            className="bg-[#F46B82] text-white font-bold py-3 rounded-2xl shadow-md hover:scale-105 transition-transform"
          >
            🎨 Gerar Atividade Comum
          </button>

          <button
            onClick={() => router.push("/perfil")}
            className="bg-[#4BBDEB] text-white font-bold py-3 rounded-2xl shadow-md hover:scale-105 transition-transform"
          >
            👤 Meu Perfil
          </button>
        </div>
      </div>
    </main>
  );
}
