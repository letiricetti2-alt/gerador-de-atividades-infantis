import Image from "next/image";
import Link from "next/link";

export default function AtividadesAdaptadas() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#FFD74F] overflow-hidden">
      {/* Aumenta ligeiramente o tamanho da arte para igualar à tela inicial */}
      <div className="relative w-[500px] h-[970px] flex items-center justify-center">
        <Image
          src="/adaptada.jpeg"
          alt="Tela de Atividades Adaptadas"
          width={500}
          height={970}
          className="rounded-3xl shadow-2xl object-contain"
          priority
        />
      </div>

      {/* Área clicável - Gerar Atividade Adaptada */}
      <Link
        href="#"
        className="absolute"
        style={{
          top: "73%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "330px",
          height: "65px",
        }}
      >
        <span className="sr-only">Gerar Atividade Adaptada</span>
      </Link>

      {/* Área clicável - Voltar para o início */}
      <Link
        href="/"
        className="absolute"
        style={{
          top: "82%",
          left: "50%",
          transform: "translateX(-50%)",
          width: "330px",
          height: "65px",
        }}
      >
        <span className="sr-only">Voltar para o início</span>
      </Link>
    </main>
  );
}
