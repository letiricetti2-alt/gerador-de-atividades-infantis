import Image from "next/image";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen">
      {/* Balão de boas-vindas */}
      <div className="relative mb-2 -mt-8 flex items-start space-x-2">
        <Image
          src="/personagens/tina.png"
          alt="Tina"
          width={140}
          height={140}
          className="relative z-10 -mb-6"
        />
        <div className="speech-bubble -ml-4 mt-4 text-[#1E1464]">
          <p className="text-sm leading-tight">
            Olá e<br />bem-vindo(a)!
          </p>
        </div>
      </div>

      {/* Cartão principal */}
      <div className="main-card">
        <h1 className="main-title">
          Gerador de<br />Atividades<br />Infantis
        </h1>

        {/* Personagens */}
        <div className="characters">
          <div className="character">
            <Image src="/personagens/luno.png" alt="Luno" width={85} height={85} />
            <p className="mt-1 text-sm font-semibold">Luno</p>
          </div>
          <div className="character">
            <Image src="/personagens/malu.png" alt="Malu" width={85} height={85} />
            <p className="mt-1 text-sm font-semibold">Malu</p>
          </div>
          <div className="character">
            <Image src="/personagens/theo.png" alt="Theo" width={85} height={85} />
            <p className="mt-1 text-sm font-semibold">Theo</p>
          </div>
          <div className="character">
            <Image src="/personagens/nilo.png" alt="Nilo" width={85} height={85} />
            <p className="mt-1 text-sm font-semibold">Nilo</p>
          </div>
        </div>

        {/* Botões */}
        <button className="btn-adaptada">Gerar Atividade Adaptada</button>
        <button className="btn-comum">Gerar Atividade Comum</button>
        <button className="btn-perfil">Meu Perfil</button>
      </div>
    </main>
  );
}
