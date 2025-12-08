"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="page-wrapper bg-[#FFD83A]">
      <div className="relative w-[480px] max-w-full h-[950px] flex flex-col items-center justify-center">
        <Image
          src="/home.jpeg"
          alt="Gerador de Atividades Infantis"
          fill
          priority
          className="object-contain"
        />

        <div className="absolute bottom-24 flex flex-col gap-3 w-full items-center px-6">
          <Link
            href="/atividades-adaptadas"
            className="w-full bg-[#2E1E8F] text-white font-semibold py-3 rounded-2xl shadow-md text-center text-lg"
          >
            Gerar Atividade Adaptada
          </Link>
          <Link
            href="/atividades-comuns"
            className="w-full bg-[#FF7FA2] text-white font-semibold py-3 rounded-2xl shadow-md text-center text-lg"
          >
            Gerar Atividade Comum
          </Link>
          <Link
            href="/perfil"
            className="w-full bg-[#3DA9FC] text-white font-semibold py-3 rounded-2xl shadow-md text-center text-lg"
          >
            Meu Perfil
          </Link>
        </div>
      </div>
    </main>
  );
}
