import Image from "next/image";
import Link from "next/link";

export default function AtividadesAdaptadas() {
  return (
    <main className="relative flex items-center justify-center min-h-screen bg-[#FFD74F]">
      {/* imagem principal */}
      <Image
        src="/adaptada.jpeg"
        alt="Tela de Atividades Adaptadas"
        width={430}
        height={900}
        className="rounded-3xl shadow-2xl"
        priority
      />

      {/* Área clicável - Gerar Atividade Adaptada */}
      <Link
        href="#"
        className="absolute"
        style={{
          top: "68%", // ajuste conforme necessário
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
          top: "78%", // ajuste conforme necessário
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
