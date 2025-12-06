import Image from "next/image";
import Link from "next/link";

export default function AtividadesAdaptadas() {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-[#FFD74F]">
      {/* Contêiner com posição e tamanho fixos */}
      <div className="relative w-[430px] h-[850px]">
        <Image
          src="/adaptada.jpeg"
          alt="Tela de Atividades Adaptadas"
          fill
          style={{ objectFit: "contain" }}
          className="rounded-3xl shadow-2xl"
          priority
        />
      </div>

      {/* Área clicável - Gerar Atividade Adaptada */}
      <Link
        href="#"
        className="absolute"
        style={{
          top: "72%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "280px",
          height: "55px",
        }}
      >
        <span className="sr-only">Gerar Atividade Adaptada</span>
      </Link>

      {/* Área clicável - Voltar para o início */}
      <Link
        href="/"
        className="absolute"
        style={{
          top: "81%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "280px",
          height: "55px",
        }}
      >
        <span className="sr-only">Voltar para o início</span>
      </Link>
    </main>
  );
}
