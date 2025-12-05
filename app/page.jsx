"use client";
import Image from "next/image";

export default function HomePage() {
  const personagens = [
    { name: "Luno", src: "/personagens/luno.png" },
    { name: "Malu", src: "/personagens/malu.png" },
    { name: "Theo", src: "/personagens/theo.png" },
    { name: "Nilo", src: "/personagens/nilo.png" },
  ];

  return (
    <main className="w-full flex justify-center items-start py-10 bg-[#FFD83A] overflow-visible">
      <div className="relative w-full max-w-[640px] flex flex-col items-center">
        {/* TINA E BALÃO */}
        <div className="absolute -top-[160px] left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="relative">
            <Image
              src="/personagens/tina.png"
              alt="Tina"
              width={260}
              height={260}
              className="relative z-10"
            />
            <div className="absolute -right-[150px] top-[30px] bg-[#FFF4BF] px-6 py-3 rounded-2xl shadow-[4px_4px_0_#E3B333]">
              <p className="text-[#1E1464] text-[18px] font-extrabold leading-tight text-center">
                Olá e<br />bem-vindo(a)!
              </p>
            </div>
          </div>
        </div>

        {/* CARD PRINCIPAL */}
        <div className="bg-[#FFF4BF] rounded-[50px] shadow-[15px_15px_0_#E3B333] w-full text-center pt-[180px] pb-16 px-10">
          {/* TÍTULO */}
          <h1 className="text-[#1E1464] text-[60px] leading-[62px] font-extrabold mb-10 drop-shadow-[6px_6px_0_#FFD84D]">
            Gerador de<br />Atividades<br />Infantis
          </h1>

          {/* PERSONAGENS */}
          <div className="flex justify-between items-end mb-16 px-6">
            {personagens.map((p) => (
              <div key={p.name} className="flex flex-col items-center">
                <Image
                  src={p.src}
                  alt={p.name}
                  width={140}
                  height={140}
                  className="mb-3"
                />
                <p className="text-[#1E1464] font-bold text-[20px]">{p.name}</p>
              </div>
            ))}
          </div>

          {/* BOTÕES */}
          <div className="flex flex-col gap-8">
            <button className="w-full bg-[#191A63] text-white text-[22px] font-extrabold py-5 rounded-full shadow-[0_10px_0_#E3B333]">
              Gerar Atividade Adaptada
            </button>
            <button className="w-full bg-[#F875AA] text-white text-[22px] font-extrabold py-5 rounded-full shadow-[0_10px_0_#E3B333]">
              Gerar Atividade Comum
            </button>
            <button className="w-full bg-[#1F88FF] text-white text-[22px] font-extrabold py-5 rounded-full shadow-[0_10px_0_#E3B333]">
              Meu Perfil
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
