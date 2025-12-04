"use client";
import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFD83A] flex items-center justify-center p-6">
      <div className="bg-[#FFF4C2] rounded-[30px] shadow-[10px_10px_0px_#E6BE32] px-8 pt-6 pb-10 w-[400px] flex flex-col items-center">

        {/* Cabeçalho */}
        <div className="flex w-full items-start justify-start gap-2 mb-4 relative">
          <Image
            src="/personagens/tina.png"
            alt="Tina"
            width={85}
            height={85}
            className="object-contain"
          />
          <div className="bg-[#FFF4C2] border-[2px] border-[#FFD83A] rounded-xl px-3 py-2 shadow-[2px_2px_0px_#E6BE32] text-[#1E1464] text-[14px] font-[Fredoka One] leading-[16px] mt-2">
            Olá e<br />bem-vindo(a)!
          </div>
        </div>

        {/* Título */}
        <h1 className="text-[#1E1464] text-[38px] font-black text-center leading-[40px] tracking-tight drop-shadow-[3px_3px_0px_#FFD83A] mb-8">
          Gerador de<br />Atividades<br />Infantis
        </h1>

        {/* Personagens */}
        <div className="grid grid-cols-2 gap-x-10 gap-y-6 mb-8">
          <div className="flex flex-col items-center">
            <Image src="/personagens/luno.png" alt="Luno" width={80} height={80} />
            <p className="text-[#1E1464] mt-1 text-[14px] font-[Fredoka One]">Luno</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/personagens/malu.png" alt="Malu" width={80} height={80} />
            <p className="text-[#1E1464] mt-1 text-[14px] font-[Fredoka One]">Malu</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/personagens/theo.png" alt="Theo" width={80} height={80} />
            <p className="text-[#1E1464] mt-1 text-[14px] font-[Fredoka One]">Theo</p>
          </div>
          <div className="flex flex-col items-center">
            <Image src="/personagens/nilo.png" alt="Nilo" width={80} height={80} />
            <p className="text-[#1E1464] mt-1 text-[14px] font-[Fredoka One]">Nilo</p>
          </div>
        </div>

        {/* Botões */}
        <button className="w-full bg-[#1E1464] text-[#FFF4C2] font-[Fredoka One] text-[16px] py-3 rounded-[20px] mb-4 shadow-[5px_5px_0px_#E6BE32] hover:translate-y-[2px] transition-all">
          🌟 Gerar Atividade Adaptada
        </button>

        <button className="w-full bg-[#F77DA6] text-[#FFF4C2] font-[Fredoka One] text-[16px] py-3 rounded-[20px] mb-4 shadow-[5px_5px_0px_#E6BE32] hover:translate-y-[2px] transition-all">
          🍭 Gerar Atividade Comum
        </button>

        <button className="w-full bg-[#4DA7FF] text-[#1E1464] font-[Fredoka One] text-[16px] py-3 rounded-[20px] shadow-[5px_5px_0px_#E6BE32] hover:translate-y-[2px] transition-all">
          👤 Meu Perfil
        </button>

      </div>
    </main>
  );
}
