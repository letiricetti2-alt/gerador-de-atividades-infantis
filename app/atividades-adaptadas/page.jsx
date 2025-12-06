import Image from "next/image";
import Link from "next/link";

export default function AtividadesAdaptadas() {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-[#FFD74F] overflow-hidden">
      {/* Imagem em tamanho igual à da tela inicial */}
      <Image
        src="/adaptada.jpeg"
        alt="Tela de Atividades Adaptadas"
        fill
        style={{ objectFit: "contain" }}
        className="max-w-[480px] mx-auto rounded-3xl shadow-2xl"
        priority
      />

      {/* Área clicável - Gerar Atividade Adaptada */}
      <Link
        href="#"
        className="absolute"
        style={{
          top: "73%", // botão roxo
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
          top: "82%", // botão verde
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
