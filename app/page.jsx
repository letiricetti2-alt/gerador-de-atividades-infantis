"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFD83A] flex items-center justify-center p-6">
      <div className="bg-[#FFF4C2] rounded-[2rem] shadow-[8px_8px_0px_#E6BE32] p-8 w-[380px] text-center flex flex-col items-center">
        
        {/* Cabeçalho com personagem e balão */}
        <div className="flex items-start w-full mb-4 relative">
          <div className="w-[90px]">
            <Image
              src="/personagens/tina.png"
              alt="Tina personagem"
              width={90}
              height={90}
              className="object-contain"
            />
          </div>
          <div className="bg-[#FFF4C2] border-[2px] border-[#FFD83A] shadow-[2px_2px_0px_#E6BE32] rounded-[0.8rem] px-3 py-1 ml-[-10px] text-[#1E1464] font-semibold text-[14px] leading-tight">
            Olá e<br />bem-vindo(a)!
          </div>
        </div>

        {/* Título */}
        <h1 className="text-[#1E1464] font-black text-[36px] leading-tight drop-shadow-[3px_3px_0px_#FFD83A] mb-6">
          Gerador de<br />Atividades<br />Infantis
        </h1>

        {/* Personagens */}
        <div className="grid grid-cols-2 gap-6 mb-6">
          <div className="flex flex-col items-center">
            <Image src="/personagens/luno.png" alt="Luno" width={75} height={75} />
            <p className="text-[#1E1464] font-medium mt-1">Luno</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/personagens/malu.png" alt="Malu" width={75} height={75} />
            <p className="text-[#1E1464] font-medium mt-1">Malu</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/personagens/theo.png" alt="Theo" width={75} height={75} />
            <p className="text-[#1E1464] font-medium mt-1">Theo</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/personagens/nilo.png" alt="Nilo" width={75} height={75} />
            <p className="text-[#1E1464] font-medium mt-1">Nilo</p>
          </div>
        </div>

        {/* Botões */}
        <button className="w-full bg-[#1E1464] text-[#FFF4C2] font-bold py-3 rounded-[1.5rem] mb-4 shadow-[4px_4px_0px_#E6BE32] hover:translate-y-[2px] transition-all">
          ✳️ Gerar Atividade Adaptada
        </button>

        <button className="w-full bg-[#F77DA6] text-[#FFF4C2] font-bold py-3 rounded-[1.5rem] mb-4 shadow-[4px_4px_0px_#E6BE32] hover:translate-y-[2px] transition-all">
          🍭 Gerar Atividade Comum
        </button>

        <button className="w-full bg-[#4DA7FF] text-[#1E1464] font-bold py-3 rounded-[1.5rem] shadow-[4px_4px_0px_#E6BE32] hover:translate-y-[2px] transition-all">
          👤 Meu Perfil
        </button>

      </div>
    </main>
  );
}
