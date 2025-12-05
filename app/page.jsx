import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#FDD33A] py-20 px-6 overflow-visible">
      <div className="relative bg-[#FFF4BF] rounded-[60px] shadow-[12px_12px_0_#D1A12C] w-full max-w-[540px] pt-48 pb-14 px-10 text-center overflow-visible">
        
        {/* Tina e balão */}
        <div className="absolute -top-52 left-1/2 -translate-x-1/2 flex items-start overflow-visible">
          <div className="relative">
            <Image
              src="/personagens/tina.png"
              alt="Tina"
              width={260}
              height={260}
              priority
              className="drop-shadow-[6px_6px_0_#E4C56D]"
            />
            <div className="absolute -right-20 top-8 bg-[#FFF4BF] text-[#1E1464] px-6 py-4 rounded-2xl shadow-[4px_4px_0_#E4C56D] font-extrabold text-[16px] leading-tight whitespace-nowrap">
              Olá e<br />bem-vindo(a)!
            </div>
          </div>
        </div>

        {/* Título */}
        <h1 className="text-[#1E1464] font-extrabold text-[48px] leading-tight mb-14 drop-shadow-[5px_5px_0_#FFD84D]">
          Gerador de<br />Atividades<br />Infantis
        </h1>

        {/* Personagens */}
        <div className="grid grid-cols-4 gap-8 justify-items-center mb-16">
          <div>
            <Image src="/personagens/luno.png" alt="Luno" width={105} height={105} />
            <p className="text-[#1E1464] font-bold mt-3 text-[16px]">Luno</p>
          </div>
          <div>
            <Image src="/personagens/malu.png" alt="Malu" width={105} height={105} />
            <p className="text-[#1E1464] font-bold mt-3 text-[16px]">Malu</p>
          </div>
          <div>
            <Image src="/personagens/theo.png" alt="Theo" width={105} height={105} />
            <p className="text-[#1E1464] font-bold mt-3 text-[16px]">Theo</p>
          </div>
          <div>
            <Image src="/personagens/nilo.png" alt="Nilo" width={105} height={105} />
            <p className="text-[#1E1464] font-bold mt-3 text-[16px]">Nilo</p>
          </div>
        </div>

        {/* Botões */}
        <div className="flex flex-col items-center gap-6">
          <button className="w-full bg-[#1E1464] text-white font-extrabold text-[20px] py-5 rounded-full shadow-[0_8px_0_#C6972E]">
            Gerar Atividade Adaptada
          </button>
          <button className="w-full bg-[#F875AA] text-white font-extrabold text-[20px] py-5 rounded-full shadow-[0_8px_0_#C6972E]">
            Gerar Atividade Comum
          </button>
          <button className="w-full bg-[#38A3FF] text-white font-extrabold text-[20px] py-5 rounded-full shadow-[0_8px_0_#C6972E]">
            Meu Perfil
          </button>
        </div>
      </div>
    </main>
  );
}
