// app/page.jsx

export default function Home() {
  return (
    <main className="min-h-screen bg-[#FFD33F] flex items-center justify-center">
      <div className="relative max-w-[960px] w-[92%] bg-[#FFEFB3] rounded-[56px] shadow-[20px_24px_0_0_#E0A72A] px-16 pt-40 pb-20 overflow-hidden">

        {/* Mascote + balão de fala */}
        <div className="absolute -top-36 left-10 flex items-start gap-4">
          <img
            src="/personagens/tina.png"
            alt="Personagem de boas-vindas"
            className="w-[190px] h-auto"
          />
          <div className="mt-6 bg-[#FFEEC5] rounded-[32px] px-8 py-4 shadow-[10px_10px_0_0_#E0A72A]">
            <p className="text-[24px] leading-tight font-semibold text-[#1E1464]">
              Olá e<br />bem-vindo(a)!
            </p>
          </div>
        </div>

        {/* Título grande em 3 linhas */}
        <header className="text-center mt-2">
          <h1 className="text-[64px] leading-[68px] font-extrabold text-[#1E1464] drop-shadow-[6px_6px_0_#FFD84D] tracking-tight">
            Gerador de
            <br />
            Atividades
            <br />
            Infantis
          </h1>
        </header>

        {/* Personagens – maiores e na mesma linha da arte */}
        <section className="mt-10 flex justify-between items-end px-4">
          <div className="flex flex-col items-center gap-3">
            <img
              src="/personagens/luno.png"
              alt="Luno"
              className="w-[150px] h-auto"
            />
            <span className="text-[20px] font-semibold text-[#1E1464]">
              Luno
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <img
              src="/personagens/malu.png"
              alt="Malu"
              className="w-[150px] h-auto"
            />
            <span className="text-[20px] font-semibold text-[#1E1464]">
              Malu
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <img
              src="/personagens/theo.png"
              alt="Theo"
              className="w-[170px] h-auto"
            />
            <span className="text-[20px] font-semibold text-[#1E1464]">
              Theo
            </span>
          </div>

          <div className="flex flex-col items-center gap-3">
            <img
              src="/personagens/nilo.png"
              alt="Nilo"
              className="w-[150px] h-auto"
            />
            <span className="text-[20px] font-semibold text-[#1E1464]">
              Nilo
            </span>
          </div>
        </section>

        {/* Botões – mesmas cores e proporção da arte */}
        <section className="mt-12 space-y-7">
          <button className="w-full bg-[#16195B] text-white font-semibold text-[20px] py-4 rounded-full shadow-[0_12px_0_0_#E0A72A]">
            Gerar Atividade Adaptada
          </button>

          <button className="w-full bg-[#FF7FB3] text-white font-semibold text-[20px] py-4 rounded-full shadow-[0_12px_0_0_#E0A72A]">
            Gerar Atividade Comum
          </button>

          <button className="w-full bg-[#2E93FF] text-white font-semibold text-[20px] py-4 rounded-full shadow-[0_12px_0_0_#E0A72A]">
            Meu Perfil
          </button>
        </section>
      </div>
    </main>
  );
}
