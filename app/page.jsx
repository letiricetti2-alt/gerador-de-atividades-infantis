export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FFD33F]">
      <div className="relative max-w-[860px] w-[92%] bg-[#FFF3B0] rounded-[56px] shadow-[20px_24px_0_#E0A72A] px-12 pt-[120px] pb-14 overflow-hidden">

        {/* --- TINA E BALÃO --- */}
        <div className="absolute -top-[200px] left-[50px] flex items-start gap-4">
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
        <h1 className="text-center text-[#1E1464] text-[90px] leading-[88px] font-extrabold drop-shadow-[10px_10px_0_#FFD84D] tracking-tight mb-0 -mt-6">
          Gerador de<br />Atividades<br />Infantis
        </h1>

        {/* --- PERSONAGENS --- */}
        <div className="flex justify-between items-end mb-12 -mt-4 scale-[1.35]">
          <div className="flex flex-col items-center gap-3 translate-y-[20px]">
            <img
              src="/personagens/luno.png"
              alt="Luno"
              className="w-[270px] h-auto"
            />
            <span className="text-[28px] font-bold text-[#1E1464]">Luno</span>
          </div>

          <div className="flex flex-col items-center gap-3 translate-y-[20px]">
            <img
              src="/personagens/malu.png"
              alt="Malu"
              className="w-[270px] h-auto"
            />
            <span className="text-[28px] font-bold text-[#1E1464]">Malu</span>
          </div>

          <div className="flex flex-col items-center gap-3 translate-y-[15px]">
            <img
              src="/personagens/theo.png"
              alt="Theo"
              className="w-[300px] h-auto scale-[1.05]"
            />
            <span className="text-[28px] font-bold text-[#1E1464]">Theo</span>
          </div>

          <div className="flex flex-col items-center gap-3 translate-y-[20px]">
            <img
              src="/personagens/nilo.png"
              alt="Nilo"
              className="w-[270px] h-auto"
            />
            <span className="text-[28px] font-bold text-[#1E1464]">Nilo</span>
          </div>
        </div>

        {/* --- BOTÕES --- */}
        <div className="flex flex-col gap-6">
          <button className="w-full bg-[#191A63] text-white font-extrabold text-[36px] py-6 rounded-full shadow-[0_12px_0_#E0A72A]">
            Gerar Atividade Adaptada
          </button>

          <button className="w-full bg-[#FF7FB3] text-white font-extrabold text-[36px] py-6 rounded-full shadow-[0_12px_0_#E0A72A]">
            Gerar Atividade Comum
          </button>

          <button className="w-full bg-[#2E93FF] text-white font-extrabold text-[36px] py-6 rounded-full shadow-[0_12px_0_#E0A72A]">
            Meu Perfil
          </button>
        </div>
      </div>
    </main>
  );
}
