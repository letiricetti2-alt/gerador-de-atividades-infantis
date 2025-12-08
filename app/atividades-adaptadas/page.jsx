"use client";

import Image from "next/image";
import Link from "next/link";

export default function AtividadesAdaptadas() {
  return (
    <main className="page-wrapper bg-[#A9E4FF]">
      <div className="relative w-[480px] max-w-full h-[950px] flex flex-col items-center justify-center">
        <Image
          src="/adaptada.jpeg"
          alt="Atividades Adaptadas"
          fill
          priority
          className="object-contain"
        />

        <div className="absolute bottom-20 w-full flex justify-center px-6">
          <Link
            href="/"
            className="w-full bg-[#2ECC71] text-white font-semibold py-3 rounded-2xl shadow-md text-center text-lg"
          >
            Voltar para o início
          </Link>
        </div>
      </div>
    </main>
  );
}
