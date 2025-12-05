import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-start bg-[#FDBA3A] py-8">
      {/* Personagem e balão */}
      <div className="flex items-start justify-center w-full mb-4 relative">
        <div className="absolute top-0 left-[15%] sm:left-[25%]">
          <Image
            src="/personagens/tina.png"
            alt="Tina"
            width={160}
            height={160}
            priority
          />
        </div>
        <div className="ml-[190px] mt-[20px] bg-[#FFF3B0] text-[#1E1464] px-4 py-2 rounded-xl shadow-md font-semibold text-sm">
          Olá e bem-vindo(a)!
        </div>
      </div>

      {/* Card central */}
      <div className="bg-[#FFF3B0] rounded-[30px] shadow-[10px_10px_0_#D1A12C] px-8 py-10 w-[90%] max-w-[400px] text-center">
        <h1 className="text-[#1E1464] font-extrabold text-3xl leading-tight mb-8 drop-shadow-[3px_3px_0_#FFD84D]">
          Gerador de<br />Atividades<br />Infantis
        </h1>

        {/* Personagens */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 justify-items-center mb-8">
          <div>
            <Image src="/personagens/luno.png" alt="Luno" width={70} height={70} />
            <p className="text-[#1E1464] font-semibold mt-2">Luno</p>
          </div>
          <div>
            <Image src="/personagens/malu.png" alt="Malu" width={70} height={70} />
            <p className="text-[#1E1464] font-semibold mt-2">Malu</p>
          </div>
          <div>
            <Image src="/personagens/theo.png" alt="Theo" width={70} height={70} />
            <p className="text-[#1E1464] font-semibold mt-2">Theo</p>
          </div>
          <div>
            <Image src="/personagens/nilo.png" alt="Nilo" width={70} height={70} />
            <p className="text-[#1E1464] font-semibold mt-2">Nilo</p>
          </div>
        </div>

        {/* Botões */}
        <div className="space-y-5">
          <button className="w-full bg-[#1E1464] text-white font-semibold py-3 rounded-full shadow-[0_6px_0_#D1A12C]">
            🌱 Gerar Atividade Adaptada
          </button>
          <button className="w-full bg-[#F875AA] text-white font-semibold py-3 rounded-full shadow-[0_6px_0_#D1A12C]">
            🌸 Gerar Atividade Comum
          </button>
          <button className="w-full bg-[#38A3FF] text-white font-semibold py-3 rounded-full shadow-[0_6px_0_#D1A12C]">
            👤 Meu Perfil
          </button>
        </div>
      </div>
    </main>
  );
}
