import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#FDBA3A] py-10 px-4">
      {/* Personagem e balão de fala */}
      <div className="relative w-full max-w-[420px] flex justify-start">
        {/* Personagem sobrepondo o card */}
        <div className="absolute -top-6 left-6 z-10">
          <Image
            src="/personagens/tina.png"
            alt="Tina"
            width={140}
            height={140}
            priority
          />
        </div>

        {/* Balão */}
        <div className="absolute top-[10px] left-[150px] bg-[#FFF3B0] text-[#1E1464] px-4 py-2 rounded-xl shadow-md font-semibold text-sm">
          Olá e bem-vindo(a)!
        </div>
      </div>

      {/* Cartão principal */}
      <div className="bg-[#FFF3B0] rounded-[40px] shadow-[10px_10px_0_#D1A12C] w-full max-w-[420px] pt-16 pb-10 px-8 text-center mt-[70px]">
        {/* Título */}
        <h1 className="text-[#1E1464] font-extrabold text-4xl leading-tight mb-8 drop-shadow-[3px_3px_0_#FFD84D]">
          Gerador de<br />Atividades<br />Infantis
        </h1>

        {/* Personagens */}
        <div className="grid grid-cols-4 gap-6 justify-items-center mb-10">
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
        <div className="flex flex-col items-center gap-5">
          <button className="w-full bg-[#1E1464] text-white font-semibold py-3 rounded-full shadow-[0_6px_0_#D1A12C] text-[15px]">
            Gerar Atividade Adaptada
          </button>
          <button className="w-full bg-[#F875AA] text-white font-semibold py-3 rounded-full shadow-[0_6px_0_#D1A12C] text-[15px]">
            Gerar Atividade Comum
          </button>
          <button className="w-full bg-[#38A3FF] text-white font-semibold py-3 rounded-full shadow-[0_6px_0_#D1A12C] text-[15px]">
            Meu Perfil
          </button>
        </div>
      </div>
    </main>
  );
}
