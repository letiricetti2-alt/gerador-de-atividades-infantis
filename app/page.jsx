"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { FaUser, FaSignOutAlt, FaPuzzlePiece, FaPalette } from "react-icons/fa";

export default function Home() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#FDD835]">
      <div className="bg-[#FFF3C4] p-10 rounded-3xl shadow-2xl text-center w-[90%] max-w-md">
        <h1 className="text-4xl font-black text-[#1A1A1A] mb-6 leading-tight font-[ComicSansMS]">
          Gerador de <br /> Atividades Infantis
        </h1>

        <div className="flex justify-center gap-6 mb-8">
          <div className="flex flex-col items-center">
            <Image
              src="/personagens/personagem-amarelo.png"
              alt="Personagem amarelo"
              width={70}
              height={70}
            />
            <p className="text-xs mt-1">Amarelo</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/personagens/personagem-rosa.png"
              alt="Personagem rosa"
              width={70}
              height={70}
            />
            <p className="text-xs mt-1">Rosa</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/personagens/personagem-verde.png"
              alt="Personagem verde"
              width={70}
              height={70}
            />
            <p className="text-xs mt-1">Verde</p>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/personagens/personagem-roxo.png"
              alt="Personagem roxo"
              width={70}
              height={70}
            />
            <p className="text-xs mt-1">Roxo</p>
          </div>
        </div>

        <div className="space-y-5">
          <button
            onClick={() => router.push("/atividades-adaptadas")}
            className="w-full flex items-center justify-center gap-2 bg-[#5B51E8] text-white font-bold py-3 rounded-2xl shadow-md hover:scale-105 transition-transform"
          >
            <FaPuzzlePiece /> Gerar Atividade Adaptada
          </button>

          <button
            onClick={() => router.push("/atividades-comuns")}
            className="w-full flex items-center justify-center gap-2 bg-[#F87171] text-white font-bold py-3 rounded-2xl shadow-md hover:scale-105 transition-transform"
          >
            <FaPalette /> Gerar Atividade Comum
          </button>

          <button
            onClick={() => router.push("/perfil")}
            className="w-full flex items-center justify-center gap-2 bg-[#4DD0E1] text-white font-bold py-3 rounded-2xl shadow-md hover:scale-105 transition-transform"
          >
            <FaUser /> Meu Perfil
          </button>

          <button
            onClick={() => alert("Saindo...")}
            className="w-full flex items-center justify-center gap-2 bg-[#FBB03B] text-[#1A1A1A] font-bold py-3 rounded-2xl shadow-md hover:scale-105 transition-transform"
          >
            <FaSignOutAlt /> Sair
          </button>
        </div>
      </div>
    </div>
  );
}
