import Image from "next/image";

export default function Home() {
  return (
    <main>
      {/* Tina e balão */}
      <div className="header-container">
        <Image
          src="/personagens/tina.png"
          alt="Tina"
          width={130}
          height={130}
          className="tina"
        />
        <div className="speech-bubble">
          <p>Olá e<br />bem-vindo(a)!</p>
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
            <Image src="/personagens/luno.png" alt="Luno" width={75} height={75} />
            <p className="mt-1 font-semibold text-sm">Luno</p>
          </div>
          <div className="character">
            <Image src="/personagens/malu.png" alt="Malu" width={75} height={75} />
            <p className="mt-1 font-semibold text-sm">Malu</p>
          </div>
          <div className="character">
            <Image src="/personagens/theo.png" alt="Theo" width={75} height={75} />
            <p className="mt-1 font-semibold text-sm">Theo</p>
          </div>
          <div className="character">
            <Image src="/personagens/nilo.png" alt="Nilo" width={75} height={75} />
            <p className="mt-1 font-semibold text-sm">Nilo</p>
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
