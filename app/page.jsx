import Image from "next/image";

const characters = [
  { name: "Luno", src: "/personagens/luno.png" },
  { name: "Malu", src: "/personagens/malu.png" },
  { name: "Theo", src: "/personagens/theo.png" },
  { name: "Nilo", src: "/personagens/nilo.png" },
];

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[#FFD53A] font-baloo">
      <section className="bg-[#FFF1B8] rounded-[40px] shadow-[18px_18px_0_0_#E0A52B] px-10 pt-24 pb-16 max-w-[540px] w-full text-center relative">

        {/* PERSONAGEM AZUL */}
        <div className="-mt-28 mb-6 flex justify-center">
          <Image
            src="/personagens/boasvindas.png"
            alt="Personagem de boas-vindas"
            width={220}
            height={220}
          />
        </div>

        {/* TÍTULO */}
        <header className="text-center text-[#1E1464] drop-shadow-[0_6px_0_#F8B62D]">
          <h1>
            <span className="block">Gerador de</span>
            <span className="block">Atividades</span>
            <span className="block">Infantis</span>
          </h1>
        </header>

        {/* PERSONAGENS */}
        <section className="personagens-linha">
          {characters.map((char) => (
            <div key={char.name} className="personagem-bloco">
              <Image
                src={char.src}
                alt={char.name}
                width={140}
                height={140}
                className="personagem-img"
              />
              <p className="personagem-nome">{char.name}</p>
            </div>
          ))}
        </section>

        {/* BOTÕES */}
        <section className="mt-10 space-y-5">
          <button className="botao-principal bg-[#151B63]">
            Gerar Atividade Adaptada
          </button>

          <button className="botao-principal bg-[#F808B5]">
            Gerar Atividade Comum
          </button>

          <button className="botao-principal bg-[#2F9BFF]">
            Meu Perfil
          </button>
        </section>
      </section>
    </main>
  );
}
