import Image from "next/image";

export default function Home() {
  return (
    <main className="flex justify-center items-center min-h-screen bg-[#FFD83A]">
      <div className="bg-[#FFF3C0] rounded-3xl shadow-[8px_8px_0px_#E0B500] w-[90%] max-w-md p-6 text-center relative">
        
        {/* Tina e balão */}
        <div className="absolute -top-20 left-6 flex items-start gap-2">
          <Image
            src="/personagens/tina.png"
            alt="Tina"
            width={110}
            height={110}
            className="drop-shadow-[4px_4px_0px_#E0B500]"
          />
          <div className="bg-[#FFF3C0] px-4 py-2 rounded-xl shadow-[3px_3px_0px_#E0B500] text-[#1E1464] font-bold leading-tight text-sm mt-2">
            Olá e<br />bem-vindo(a)!
          </div>
        </div>

        {/* Título */}
        <h1 className="mt-16 text-[#1E1464] font-bold text-[2rem] leading-[2.2rem] drop-shadow-[4px_4px_0px_#FFD83A]">
          Gerador de<br />
          Atividades<br />
          Infantis
        </h1>

        {/* Personagens */}
        <div className="grid grid-cols-2 gap-6 mt-6 mb-8">
          <div>
            <Image
              src="/personagens/luno.png"
              alt="Luno"
              width={90}
              height={90}
              className="mx-auto"
            />
            <p className="font-medium text-[#1E1464] mt-1">Luno</p>
          </div>
          <div>
            <Image
              src="/personagens/malu.png"
              alt="Malu"
              width={90}
              height={90}
              className="mx-auto"
            />
            <p className="font-medium text-[#1E1464] mt-1">Malu</p>
          </div>
          <div>
            <Image
              src="/personagens/theo.png"
              alt="Theo"
              width={90}
              height={90}
              className="mx-auto"
            />
            <p className="font-medium text-[#1E1464] mt-1">Theo</p>
          </div>
          <div>
            <Image
              src="/personagens/nilo.png"
              alt="Nilo"
              width={90}
              height={90}
              className="mx-auto"
            />
            <p className="font-medium text-[#1E1464] mt-1">Nilo</p>
          </div>
        </div>

        {/* Botões */}
        <div className="flex flex-col gap-4">
          <button className="bg-[#1E1464] text-[#FFF3C0] font-bold py-3 rounded-full text-base shadow-[4px_4px_0px_#FFD83A] hover:translate-y-[2px] transition">
            🌱 Gerar Atividade Adaptada
          </button>
          <button className="bg-[#F77DA5] text-[#FFF3C0] font-bold py-3 rounded-full text-base shadow-[4px_4px_0px_#FFD83A] hover:translate-y-[2px] transition">
            🎨 Gerar Atividade Comum
          </button>
          <button className="bg-[#4DB2FF] text-[#1E1464] font-bold py-3 rounded-full text-base shadow-[4px_4px_0px_#FFD83A] hover:translate-y-[2px] transition">
            👤 Meu Perfil
          </button>
        </div>
      </div>
    </main>
  );
}
