import Image from "next/image";

const characters = [
  { name: "Luno", src: "/personagens/luno.png" },
  { name: "Malu", src: "/personagens/malu.png" },
  { name: "Theo", src: "/personagens/theo.png" },
  { name: "Nilo", src: "/personagens/nilo.png" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FFD53A]">
      <section className="relative bg-[#FFF1B8] rounded-[40px] shadow-[18px_18px_0_0_#E0A52B] px-10 pt-20 pb-16 max-w-[520px] w-full">
        <div className="absolute -top-16 left-1/2 transform -translate-x-1/2">
          <Image
            src="/personagens/boasvindas.png"
            alt="Personagem de boas-vindas"
            width={180}
            height={180}
          />
        </div>

        <header className="text-center text-[#1E1464] drop-shadow-[0_6px_0_#F8B62D]">
          <h1 className="font-baloo text-[40px] leading-none tracking-tight">
            <span className="block">Gerador de</span>
            <span className="block mt-1">Atividades</span>
            <span className="block mt-1">Infantis</span>
          </h1>
        </header>

        <section className="personagens-linha mt-10">
          {characters.map((char) => (
            <div key={char.name} className="personagem-bloco">
              <Image
                src={char.src}
                alt={char.name}
                width={110}
                height={110}
                className="personagem-img"
                priority
              />
              <p className="personagem-nome">{char.name}</p>
            </div>
          ))}
        </section>

        <section className="mt-10 space-y-5">
          <button className="botao-principal bg-[#151B63]">
            Gerar Atividade Adaptada
          </button>

          <button className="botao-principal bg-[#FF80B5]">
            Gerar Atividade Comum
          </button>

          <button className="botao-principal bg-[#2F9BFF]">Meu Perfil</button>
        </section>
      </section>
    </main>
  );
}
