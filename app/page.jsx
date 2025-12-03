"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-[#FFD93B]">
      {/* Container central */}
      <div className="bg-[#FFF3C7] rounded-3xl shadow-[8px_8px_0px_#E5B93D] p-6 sm:p-10 w-[90%] max-w-md flex flex-col items-center text-center">

        {/* Personagem Tina com fala */}
        <div className="relative w-full flex items-start">
          <Image
            src="/personagens/tina.png"
            alt="Tina"
            width={130}
            height={130}
            className="absolute -top-10 left-0"
          />
          <div className="ml-24 mt-4 bg-[#FFF3C7] text-[#1C1C1C] font-semibold rounded-2xl px-5 py-2 shadow-md text-sm leading-tight">
            Olá e<br />bem-vindo(a)!
          </div>
        </div>

        {/* Título */}
        <h1 className="text-3xl sm:text-4xl font-extrabold text-[#1C1C1C] drop-shadow-[3px_3px_0px_#FFCA28] mt-20 leading-tight">
          Gerador de<br />Atividades Infantis
        </h1>

        {/* Personagens */}
        <div className="flex flex-wrap justify-center gap-8 mt-10">
          <div className="flex flex-col items-center">
            <Image
              src="/personagens/luno.png"
              alt="Luno"
              width={90}
              height={90}
            />
            <span className="mt-2 font-medium text-[#1C1C1C] text-sm">Luno</span>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/personagens/malu.png"
              alt="Malu"
              width={90}
              height={90}
            />
            <span className="mt-2 font-medium text-[#1C1C1C] text-sm">Malu</span>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/personagens/theo.png"
              alt="Theo"
              width={90}
              height={90}
            />
            <span className="mt-2 font-medium text-[#1C1C1C] text-sm">Theo</span>
          </div>

          <div className="flex flex-col items-center">
            <Image
              src="/personagens/nilo.png"
              alt="Nilo"
              width={90}
              height={90}
            />
            <span className="mt-2 font-medium text-[#1C1C1C] text-sm">Nilo</span>
          </div>
        </div>

        {/* Botões */}
        <div className="flex flex-col gap-5 mt-12 w-full">
          <button className="bg-[#2E236C] hover:bg-[#241b5a] text-white font-bold text-base py-3 rounded-full shadow-[0px_6px_0px_#1C1450] transition">
            🧩 Gerar Atividade Adaptada
          </button>

          <button className="bg-[#F57BA2] hover:bg-[#e96a90] text-white font-bold text-base py-3 rounded-full shadow-[0px_6px_0px_#c85c80] transition">
            🎨 Gerar Atividade Comum
          </button>

          <button className="bg-[#4AA8F7] hover:bg-[#3798e8] text-white font-bold text-base py-3 rounded-full shadow-[0px_6px_0px_#2e7ec2] transition">
            👤 Meu Perfil
          </button>
        </div>
      </div>
    </main>
  );
}
