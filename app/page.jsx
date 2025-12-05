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
        <div className="absolute -top-[180px] left-1/2 -translate-x-1/2 flex flex-col items-center">
          <div className="relative">
            <Image
              src="/personagens/tina.png"
              alt="Tina"
              width={280}
              height={280}
              className="relative z-10"
            />
            <div className="absolute -right-[150px] top-[40px] bg-[#FFF4BF] px-6 py-4 rounded-2xl shadow-[5px_5px_0_#E3B333]">
              <p className="text-[#1E1464] text-lg font-bold leading-tight text-center">
                Olá e<br />bem-vindo(a)!
              </p>
            </div>
          </div>
        </div>

        {/* CARD PRINCIPAL */}
        <div className="bg-[#FFF4BF] rounded-[50px] shadow-[15px_15px_0_#E3B333] w-full text-center pt-[200px] pb-14 px-10">
          {/* TÍTULO */}
          <h1 className="text-[#1E1464] text-[56px] leading-[60px] font-extrabold mb-14 drop-shadow-[6px_6px_0_#FFD84D]">
            Gerador de<br />Atividades<br />Infantis
          </h1>

          {/* PERSONAGENS */}
          <div className="grid grid-cols-4 gap-6 justify-items-center mb-14">
            {personagens.map((p) => (
              <div key={p.name} className="flex flex-col items-center">
                <Image
                  src={p.src}
                  alt={p.name}
                  width={115}
                  height={115}
                  className="mb-3"
                />
                <p className="text-[#1E1464] font-bold text-lg">{p.name}</p>
              </div>
            ))}
          </div>

          {/* BOTÕES */}
          <div className="flex flex-col gap-8">
            <button className="w-full bg-[#191A63] text-white text-[22px] font-bold py-5 rounded-full shadow-[0_10px_0_#E3B333]">
              Gerar Atividade Adaptada
            </button>
            <button className="w-full bg-[#F875AA] text-white text-[22px] font-bold py-5 rounded-full shadow-[0_10px_0_#E3B333]">
              Gerar Atividade Comum
            </button>
            <button className="w-full bg-[#1F88FF] text-white text-[22px] font-bold py-5 rounded-full shadow-[0_10px_0_#E3B333]">
              Meu Perfil
            </button>
          </div>
        </div>
      </div>
    </main>
  );
}
