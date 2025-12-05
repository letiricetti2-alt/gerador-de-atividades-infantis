import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#FDD33A] py-10 px-4">
      <div className="relative bg-[#FFF4BF] rounded-[50px] shadow-[12px_12px_0_#D1A12C] w-full max-w-[440px] pt-36 pb-12 px-8 text-center">
        {/* Tina e balão */}
        <div className="absolute -top-32 left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="flex items-start">
            <Image
              src="/personagens/tina.png"
              alt="Tina"
              width={190}
              height={190}
              priority
            />
            <div className="ml-3 mt-4 bg-[#FFF4BF] text-[#1E1464] px-5 py-3 rounded-2xl shadow-[4px_4px_0_#E4C56D] font-bold text-[14px] leading-tight">
              Olá e<br />bem-vindo(a)!
            </div>
          </div>
        </div>

        {/* Título */}
        <h1 className="text-[#1E1464] font-extrabold text-[38px] leading-tight mb-10 drop-shadow-[4px_4px_0_#FFD84D]">
          Gerador de<br />Atividades<br />Infantis
        </h1>

        {/* Personagens */}
        <div className="grid grid-cols-4 gap-6 justify-items-center mb-12">
          <div>
            <Image src="/personagens/luno.png" alt="Luno" width={85} height={85} />
            <p className="text-[#1E1464] font-bold mt-3 text-[15px]">Luno</p>
          </div>
          <div>
            <Image src="/personagens/malu.png" alt="Malu" width={85} height={85} />
            <p className="text-[#1E1464] font-bold mt-3 text-[15px]">Malu</p>
          </div>
          <div>
            <Image src="/personagens/theo.png" alt="Theo" width={85} height={85} />
            <p className="text-[#1E1464] font-bold mt-3 text-[15px]">Theo</p>
          </div>
          <div>
            <Image src="/personagens/nilo.png" alt="Nilo" width={85} height={85} />
            <p className="text-[#1E1464] font-bold mt-3 text-[15px]">Nilo</p>
          </div>
        </div>

        {/* Botões */}
        <div className="flex flex-col items-center gap-6">
          <button className="w-full bg-[#1E1464] text-white font-extrabold text-[17px] py-4 rounded-full shadow-[0_7px_0_#C6972E]">
            Gerar Atividade Adaptada
          </button>
          <button className="w-full bg-[#F875AA] text-white font-extrabold text-[17px] py-4 rounded-full shadow-[0_7px_0_#C6972E]">
            Gerar Atividade Comum
          </button>
          <button className="w-full bg-[#38A3FF] text-white font-extrabold text-[17px] py-4 rounded-full shadow-[0_7px_0_#C6972E]">
            Meu Perfil
          </button>
        </div>
      </div>
    </main>
  );
}
