"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#FFD733]">
      <div className="bg-[#FFF3D1] rounded-[35px] shadow-2xl px-10 py-10 text-center w-[420px] relative">
        {/* Tina (azul) com balão */}
        <div className="flex justify-center items-start relative mb-6">
          <div className="relative">
            <Image
              src="/personagens/tina.svg"
              alt="Tina"
              width={140}
              height={140}
              className="drop-shadow-[4px_4px_0px_#2E266F]"
            />
            <div className="absolute top-5 left-[110px] bg-[#FFF3D1] text-[#242238] text-base font-semibold px-5 py-3 rounded-2xl shadow-[2px_2px_4px_rgba(0,0,0,0.15)] w-[170px]">
              Olá e bem-vindo(a)!
            </div>
          </div>
        </div>

        {/* Título */}
        <h1 className="text-[#242238] text-4xl font-extrabold leading-tight drop-shadow-[5px_5px_0px_#FFD233] mb-8 tracking-tight">
          Gerador de<br />Atividades Infantis
        </h1>

        {/* Personagens */}
        <div className="flex justify-center gap-5 mb-10 flex-wrap">
          <div className="flex flex-col items-center">
            <Image
              src="/personagens/luno.svg"
              alt="Luno"
              width={90}
              height={90}
              className="drop-shadow-[3px_3px_0px_#FFD233]"
            />
            <span className="text-sm font-medium text-[#242238] mt-1">Luno</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/personagens/malu.svg"
              alt="Malu"
              width={90}
              height={90}
              className="drop-shadow-[3px_3px_0px_#FFD233]"
            />
            <span className="text-sm font-medium text-[#242238] mt-1">Malu</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/personagens/theo.svg"
              alt="Theo"
              width={90}
              height={90}
              className="drop-shadow-[3px_3px_0px_#FFD233]"
            />
            <span className="text-sm font-medium text-[#242238] mt-1">Theo</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/personagens/nilo.svg"
              alt="Nilo"
              width={90}
              height={90}
              className="drop-shadow-[3px_3px_0px_#FFD233]"
            />
            <span className="text-sm font-medium text-[#242238] mt-1">Nilo</span>
          </div>
        </div>

        {/* Botões */}
        <div className="flex flex-col gap-5">
          <button className="w-full bg-[#2E266F] hover:bg-[#3A3191] text-white font-bold py-4 rounded-[45px] text-lg shadow-[0_8px_0_#1C1844] transition-all">
            Gerar Atividade Adaptada
          </button>
          <button className="w-full bg-[#F66C8C] hover:bg-[#FF7C9B] text-white font-bold py-4 rounded-[45px] text-lg shadow-[0_8px_0_#C34C68] transition-all">
            Gerar Atividade Comum
          </button>
          <button className="w-full bg-[#49A3FF] hover:bg-[#5AB0FF] text-white font-bold py-4 rounded-[45px] text-lg shadow-[0_8px_0_#2E77CC] transition-all">
            Meu Perfil
          </button>
        </div>
      </div>
    </div>
  );
}
