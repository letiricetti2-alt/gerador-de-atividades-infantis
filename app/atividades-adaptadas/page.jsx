import Image from "next/image";
import Link from "next/link";

export default function AtividadesAdaptadas() {
  return (
    <main className="flex items-center justify-center h-screen w-screen bg-[#FFD74F] overflow-hidden">
      {/* Contêiner principal */}
      <div className="relative w-[520px] h-[960px] flex items-center justify-center">
        <Image
          src="/adaptada.jpeg"
          alt="Tela de Atividades Adaptadas"
          width={520}
          height={960}
          className="rounded-3xl shadow-2xl object-contain scale-[1.08] translate-y-[-10px]"
          priority
        />

        {/* Botão: Gerar Atividade Adaptada */}
        <Link
          href="#"
          className="absolute"
          style={{
            top: "73%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "340px",
            height: "70px",
          }}
        >
          <span className="sr-only">Gerar Atividade Adaptada</span>
        </Link>

        {/* Botão: Voltar para o início */}
        <Link
          href="/"
          className="absolute"
          style={{
            top: "82.5%",
            left: "50%",
            transform: "translateX(-50%)",
            width: "340px",
            height: "70px",
          }}
        >
          <span className="sr-only">Voltar para o início</span>
        </Link>
      </div>
    </main>
  );
}
