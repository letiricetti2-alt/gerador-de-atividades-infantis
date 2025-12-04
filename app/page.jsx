import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-[#FFD83A] px-4">
      <div className="relative bg-[#FFF3C0] rounded-[28px] shadow-[10px_10px_0px_#E0B500] w-full max-w-[420px] py-10 px-6 flex flex-col items-center">

        {/* Tina + Balão */}
        <div className="absolute -top-28 left-0 flex items-start gap-3">
          <Image
            src="/personagens/tina.png"
            alt="Tina"
            width={120}
            height={120}
            className="ml-4"
          />
          <div className="bg-[#FFF3C0] px-5 py-3 rounded-[12px] shadow-[4px_4px_0px_#E0B500] text-[#1E1464] font-extrabold text-base leading-tight mt-3">
            Olá e<br />bem-vindo(a)!
          </div>
        </div>

        {/* Título */}
        <h1 className="text-[#1E1464] font-extrabold text-[36px] leading-[38px] text-center mt-14 drop-shadow-[4px_4px_0px_#FFD83A]">
          Gerador de<br />
          Atividades<br />
          Infantis
        </h1>

        {/* Personagens */}
        <div className="grid grid-cols-2 gap-8 mt-8 mb-10">
          <div>
            <Image src="/personagens/luno.png" alt="Luno" width={90} height={90} className="mx-auto" />
            <p className="text-[#1E1464] text-[16px] font-semibold mt-2">Luno</p>
          </div>
          <div>
            <Image src="/personagens/malu.png" alt="Malu" width={90} height={90} className="mx-auto" />
            <p className="text-[#1E1464] text-[16px] font-semibold mt-2">Malu</p>
          </div>
          <div>
            <Image src="/personagens/theo.png" alt="Theo" width={90} height={90} className="mx-auto" />
            <p className="text-[#1E1464] text-[16px] font-semibold mt-2">Theo</p>
          </div>
          <div>
            <Image src="/personagens/nilo.png" alt="Nilo" width={90} height={90} className="mx-auto" />
            <p className="text-[#1E1464] text-[16px] font-semibold mt-2">Nilo</p>
          </div>
        </div>

        {/* Botões */}
        <div className="flex flex-col gap-5 w-full">
          <button className="bg-[#1E1464] text-[#FFF3C0] font-extrabold text-lg py-3.5 rounded-full shadow-[5px_5px_0px_#FFD83A]">
            Gerar Atividade Adaptada
          </button>
          <button className="bg-[#F77DA5] text-[#FFF3C0] font-extrabold text-lg py-3.5 rounded-full shadow-[5px_5px_0px_#FFD83A]">
            Gerar Atividade Comum
          </button>
          <button className="bg-[#4DB2FF] text-[#1E1464] font-extrabold text-lg py-3.5 rounded-full shadow-[5px_5px_0px_#FFD83A]">
            Meu Perfil
          </button>
        </div>
      </div>
    </main>
  );
}
