import Image from "next/image";
import Link from "next/link";

export default function AtividadesAdaptadas() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#FFD74F] overflow-hidden">
      {/* Contêiner da imagem com tamanho fixo */}
      <div className="relative w-[430px] h-[850px] flex items-center justify-center">
        <Image
          src="/adaptada.jpeg"
          alt="Tela de Atividades Adaptadas"
          width={430}
          height={850}
          className="rounded-3xl shadow-2xl object-contain"
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
          top: "81%",
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
