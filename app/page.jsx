export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FFD33F]">
      <div className="relative max-w-[880px] w-[92%] bg-[#FFF3B0] rounded-[56px] shadow-[20px_24px_0_#E0A72A] px-16 pt-[160px] pb-20 overflow-hidden">

        {/* --- TINA + BALÃO --- */}
        <div className="absolute -top-[210px] left-[50px] flex items-start gap-4">
          <img
            src="/personagens/tina.png"
            alt="Tina"
            className="w-[210px] h-auto"
          />
          <div className="mt-[65px] bg-[#FFF4C2] rounded-[36px] px-8 py-4 shadow-[8px_8px_0_#E0A72A]">
            <p className="text-[#1E1464] text-[26px] leading-tight font-extrabold">
              Olá e<br />bem-vindo(a)!
            </p>
          </div>
        </div>

        {/* --- TÍTULO --- */}
        <h1 className="text-center text-[#1E1464] text-[84px] leading-[86px] font-extrabold drop-shadow-[8px_8px_0_#FFD84D] tracking-tight mb-2">
          Gerador de<br />Atividades<br />Infantis
        </h1>

        {/* --- PERSONAGENS --- */}
        <div className="flex justify-between items-end mb-12 -mt-2">
          <div className="flex flex-col items-center gap-3 -mt-10">
            <img
              src="/personagens/luno.png"
              alt="Luno"
              className="w-[220px] h-auto"
            />
            <span className="text-[26px] font-bold text-[#1E1464]">Luno</span>
          </div>

          <div className="flex flex-col items-center gap-3 -mt-10">
            <img
              src="/personagens/malu.png"
              alt="Malu"
              className="w-[220px] h-auto"
            />
            <span className="text-[26px] font-bold text-[#1E1464]">Malu</span>
          </div>

          <div className="flex flex-col items-center gap-3 -mt-10">
            <img
              src="/personagens/theo.png"
              alt="Theo"
              className="w-[250px] h-auto"
            />
            <span className="text-[26px] font-bold text-[#1E1464]">Theo</span>
          </div>

          <div className="flex flex-col items-center gap-3 -mt-10">
            <img
              src="/personagens/nilo.png"
              alt="Nilo"
              className="w-[220px] h-auto"
            />
            <span className="text-[26px] font-bold text-[#1E1464]">Nilo</span>
          </div>
        </div>

        {/* --- BOTÕES --- */}
        <div className="flex flex-col gap-8">
          <button className="w-full bg-[#191A63] text-white font-extrabold text-[32px] py-5 rounded-full shadow-[0_12px_0_#E0A72A]">
            Gerar Atividade Adaptada
          </button>

          <button className="w-full bg-[#FF7FB3] text-white font-extrabold text-[32px] py-5 rounded-full shadow-[0_12px_0_#E0A72A]">
            Gerar Atividade Comum
          </button>

          <button className="w-full bg-[#2E93FF] text-white font-extrabold text-[32px] py-5 rounded-full shadow-[0_12px_0_#E0A72A]">
            Meu Perfil
          </button>
        </div>
      </div>
    </main>
  );
}
