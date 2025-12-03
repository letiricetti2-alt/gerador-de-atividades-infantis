"use client";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-[#FFD733]">
      <div className="bg-[#FFF3D1] rounded-[40px] shadow-[10px_10px_0_#E6BE29] px-10 py-10 text-center w-[430px] relative">

        {/* Tina com balão de fala */}
        <div className="flex justify-center items-start relative mb-8">
          <div className="relative">
            <Image
              src="/personagens/tina.png"
              alt="Tina"
              width={150}
              height={150}
              className="drop-shadow-[5px_5px_0px_#2E266F]"
            />
            <div className="absolute top-8 left-[120px] bg-[#FFF3D1] text-[#1D1B40] text-base font-semibold px-5 py-3 rounded-2xl shadow-[2px_2px_6px_rgba(0,0,0,0.15)] w-[180px] leading-tight">
              Olá e<br />bem-vindo(a)!
            </div>
          </div>
        </div>

        {/* Título principal */}
        <h1 className="text-[#1D1B40] text-4xl font-extrabold leading-tight drop-shadow-[6px_6px_0px_#FFD733] mb-10 tracking-tight">
          Gerador de<br />Atividades Infantis
        </h1>

        {/* Personagens */}
        <div className="flex justify-center gap-4 mb-10 flex-wrap">
          <div className="flex flex-col items-center">
            <Image
              src="/personagens/luno.png"
              alt="Luno"
              width={90}
              height={90}
              className="drop-shadow-[3px_3px_0px_#FFD733]"
            />
            <span className="text-sm font-semibold text-[#1D1B40] mt-2">Luno</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/personagens/malu.png"
              alt="Malu"
              width={90}
              height={90}
              className="drop-shadow-[3px_3px_0px_#FFD733]"
            />
            <span className="text-sm font-semibold text-[#1D1B40] mt-2">Malu</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/personagens/theo.png"
              alt="Theo"
              width={90}
              height={90}
              className="drop-shadow-[3px_3px_0px_#FFD733]"
            />
            <span className="text-sm font-semibold text-[#1D1B40] mt-2">Theo</span>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/personagens/nilo.png"
              alt="Nilo"
              width={90}
              height={90}
              className="drop-shadow-[3px_3px_0px_#FFD733]"
            />
            <span className="text-sm font-semibold text-[#1D1B40] mt-2">Nilo</span>
          </div>
        </div>

        {/* Botões principais */}
        <div className="flex flex-col gap-5">
          <button className="w-full bg-[#2E266F] hover:bg-[#3B3191] text-white font-bold py-4 rounded-[45px] text-lg shadow-[0_8px_0_#1A163E] transition-all">
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
