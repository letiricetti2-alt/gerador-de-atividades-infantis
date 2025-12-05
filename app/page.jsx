import Image from "next/image";

const characters = [
  { name: "Luno", src: "/personagens/luno.png" },
  { name: "Malu", src: "/personagens/malu.png" },
  { name: "Theo", src: "/personagens/theo.png" },
  { name: "Nilo", src: "/personagens/nilo.png" },
];

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen bg-[#FFD53A]">
      <section className="relative bg-[#FFF1B8] rounded-[40px] shadow-[18px_18px_0_0_#E0A52B] px-10 pt-28 pb-16 max-w-[520px] w-full text-center">
        
        {/* Personagem azul de boas-vindas */}
        <Image
          src="/personagens/boasvindas.png"
          alt="Personagem de boas-vindas"
          width={230}
          height={230}
          className="absolute -top-24 left-1/2 transform -translate-x-1/2"
        />

        {/* Título centralizado e mais proeminente */}
        <header className="text-center text-[#1E1464] drop-shadow-[0_6px_0_#F8B62D] mb-6">
          <h1 className="font-baloo text-[46px] leading-tight tracking-tight">
            <span className="block">Gerador de</span>
            <span className="block">Atividades</span>
            <span className="block">Infantis</span>
          </h1>
        </header>

        {/* Personagens maiores e mais próximos do título */}
        <section className="personagens-linha mt-6 mb-10">
          {characters.map((char) => (
            <div key={char.name} className="personagem-bloco">
              <Image
                src={char.src}
                alt={char.name}
                width={115}
                height={115}
                className="personagem-img"
              />
              <p className="personagem-nome">{char.name}</p>
            </div>
          ))}
        </section>

        {/* Botões idênticos ao layout original */}
        <section className="space-y-5">
          <button className="botao-principal bg-[#151B63]">
            Gerar Atividade Adaptada
          </button>

          <button className="botao-principal bg-[#F808B5]">
            Gerar Atividade Comum
          </button>

          <button className="botao-principal bg-[#2F9BFF]">Meu Perfil</button>
        </section>
      </section>
    </main>
  );
}
