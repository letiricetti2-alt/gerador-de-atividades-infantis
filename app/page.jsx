export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FFD33F]">
      <div className="relative max-w-[820px] w-[92%] bg-[#FFF3B0] rounded-[56px] shadow-[20px_24px_0_#E0A72A] px-10 pt-[120px] pb-12 overflow-hidden">

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
        <h1 className="text-center text-[#1E1464] text-[88px] leading-[86px] font-extrabold drop-shadow-[10px_10px_0_#FFD84D] tracking-tight mb-[10px] -mt-4">
          Gerador de<br />Atividades<br />Infantis
        </h1>

        {/* --- PERSONAGENS --- */}
        <div className="flex justify-center items-end gap-[38px] mb-12 mt-[-8px]">
          {/* Luno */}
          <div className="flex flex-col items-center gap-2 translate-y-[10px]">
            <img
              src="/personagens/luno.png"
              alt="Luno"
              className="w-[190px] h-auto"
            />
            <span className="text-[26px] font-bold text-[#1E1464]">Luno</span>
          </div>

          {/* Malu */}
          <div className="flex flex-col items-center gap-2 translate-y-[6px]">
            <img
              src="/personagens/malu.png"
              alt="Malu"
              className="w-[190px] h-auto"
            />
            <span className="text-[26px] font-bold text-[#1E1464]">Malu</span>
          </div>

          {/* Theo */}
          <div className="flex flex-col items-center gap-2 scale-[1.25] -translate-y-[6px]">
            <img
              src="/personagens/theo.png"
              alt="Theo"
              className="w-[200px] h-auto"
            />
            <span className="text-[26px] font-bold text-[#1E1464]">Theo</span>
          </div>

          {/* Nilo */}
          <div className="flex flex-col items-center gap-2 translate-y-[8px]">
            <img
              src="/personagens/nilo.png"
              alt="Nilo"
              className="w-[190px] h-auto"
            />
            <span className="text-[26px] font-bold text-[#1E1464]">Nilo</span>
          </div>
        </div>

        {/* --- BOTÕES --- */}
        <div className="flex flex-col gap-6">
          <button className="w-full bg-[#191A63] text-white font-extrabold text-[34px] py-5 rounded-full shadow-[0_12px_0_#E0A72A]">
            Gerar Atividade Adaptada
          </button>

          <button className="w-full bg-[#FF7FB3] text-white font-extrabold text-[34px] py-5 rounded-full shadow-[0_12px_0_#E0A72A]">
            Gerar Atividade Comum
          </button>

          <button className="w-full bg-[#2E93FF] text-white font-extrabold text-[34px] py-5 rounded-full shadow-[0_12px_0_#E0A72A]">
            Meu Perfil
          </button>
        </div>
      </div>
    </main>
  );
}
