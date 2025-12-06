import Image from "next/image";
import Link from "next/link";

export default function AtividadesAdaptadas() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#FFD74F]">
      <div className="relative w-[430px] h-[850px]">
        <Image
          src="/adaptada.jpeg"
          alt="Atividades Adaptadas"
          fill
          className="object-contain rounded-3xl shadow-2xl"
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
          width: "300px",
          height: "60px",
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
          width: "300px",
          height: "60px",
        }}
      >
        <span className="sr-only">Voltar para o início</span>
      </Link>
    </main>
  );
}
