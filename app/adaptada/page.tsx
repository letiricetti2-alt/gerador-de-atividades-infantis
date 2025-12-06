"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function AtividadeAdaptada() {
  const router = useRouter();

  return (
    <div className="relative w-screen h-screen overflow-hidden bg-[#FFDAB6] flex items-center justify-center">
      {/* Imagem de fundo */}
      <Image
        src="/adaptada.jpeg"
        alt="Tela de atividades adaptadas"
        fill
        style={{ objectFit: "cover" }}
        priority
      />

      {/* Áreas clicáveis invisíveis */}
      <div className="absolute inset-0 flex flex-col items-center justify-end pb-[80px] gap-4">
        {/* Botão de gerar atividade adaptada */}
        <button
          onClick={() => alert("Gerar atividade adaptada")}
          className="absolute bottom-[180px] w-[310px] h-[70px] bg-transparent text-transparent border-none cursor-pointer"
          aria-label="Gerar atividade adaptada"
        ></button>

        {/* Botão de voltar para o início */}
        <button
          onClick={() => router.push("/")}
          className="absolute bottom-[80px] w-[310px] h-[70px] bg-transparent text-transparent border-none cursor-pointer"
          aria-label="Voltar para o início"
        ></button>
      </div>
    </div>
  );
}
