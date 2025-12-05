export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FFD33F]">
      <div className="relative max-w-[780px] w-[92%] bg-[#FFF3B0] rounded-[56px] shadow-[20px_24px_0_#E0A72A] px-10 pt-[120px] pb-10 overflow-hidden">

        {/* --- TINA E BALÃO --- */}
        <div className="absolute -top-[200px] left-[40px] flex items-start gap-4">
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
        <h1 className="text-center text-[#1E1464] text-[90px] leading-[85px] font-extrabold drop-shadow-[10px_10px_0_#FFD84D] tracking-tight -mt-4 mb-[0px]">
          Gerador de<br />Atividades<br />Infantis
        </h1>

        {/* --- PERSONAGENS --- */}
        <div className="flex justify-center items-end gap-[20px] mb-10 mt-[-10px]">
          {/* Luno */}
          <div className="flex flex-col items-center gap-1">
            <img
              src="/personagens/luno.png"
              alt="Luno"
              className="w-[210px] h-auto -translate-y-[10px]"
            />
            <span className="text-[26px] font-bold text-[#1E1464]">Luno</span>
          </div>

          {/* Malu */}
          <div className="flex flex-col items-center gap-1">
            <img
              src="/personagens/malu.png"
              alt="Malu"
              className="w-[210px] h-auto -translate-y-[10px]"
            />
            <span className="text-[26px] font-bold text-[#1E1464]">Malu</span>
          </div>

          {/* Theo (maior e levemente mais alto) */}
          <div className="flex flex-col items-center gap-1">
            <img
              src="/personagens/theo.png"
              alt="Theo"
              className="w-[250px] h-auto -translate-y-[30px] scale-[1.1]"
            />
            <span className="text-[26px] font-bold text-[#1E1464]">Theo</span>
          </div>

          {/* Nilo */}
          <div className="flex flex-col items-center gap-1">
            <img
              src="/personagens/nilo.png"
              alt="Nilo"
              className="w-[210px] h-auto -translate-y-[10px]"
            />
            <span className="text-[26px] font-bold text-[#1E1464]">Nilo</span>
          </div>
        </div>

        {/* --- BOTÕES --- */}
        <div className="flex flex-col gap-5 mt-[5px]">
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
