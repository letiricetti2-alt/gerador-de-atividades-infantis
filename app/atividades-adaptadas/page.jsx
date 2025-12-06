import Image from "next/image";
import Link from "next/link";

export default function AtividadesAdaptadas() {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-[#FFD74F]">
      {/* imagem principal - responsiva */}
      <div className="relative w-full max-w-[480px] px-4">
        <Image
          src="/adaptada.jpeg"
          alt="Tela de Atividades Adaptadas"
          width={800}
          height={1600}
          className="w-full h-auto rounded-3xl shadow-2xl"
          priority
        />
      </div>

      {/* Área clicável - Gerar Atividade Adaptada */}
      <Link
        href="#"
        className="absolute"
        style={{
          top: "68%", // posição do botão roxo
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
          top: "78%", // posição do botão verde
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
