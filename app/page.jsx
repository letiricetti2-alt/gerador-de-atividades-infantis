"use client";

import Image from "next/image";
import Link from "next/link";
import { FaPuzzlePiece, FaPalette, FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-[var(--yellow-bg)] px-4 py-8">
      {/* CARD CENTRAL */}
      <div className="bg-[var(--card-cream)] rounded-[40px] shadow-[0_18px_0_rgba(0,0,0,0.18)] max-w-[470px] w-full px-8 pt-8 pb-10 flex flex-col items-center relative overflow-visible">

        {/* TINA + BALÃO */}
        <div className="w-full flex items-start gap-4 mb-6">
          <div className="relative">
            <Image
              src="/tina.svg"
              alt="Tina"
              width={140}
              height={140}
              className="drop-shadow-md"
            />
          </div>

          <div className="flex-1">
            <div className="bg-[var(--card-cream)] rounded-[26px] px-5 py-3 shadow-md">
              <p className="font-title text-xl leading-snug text-[#222]">
                Olá e<br />bem-vindo(a)!
              </p>
            </div>
          </div>
        </div>

        {/* TÍTULO */}
        <div className="mt-2 mb-8 text-center">
          <h1 className="font-title text-4xl sm:text-5xl font-extrabold leading-tight text-[#1E144F] text-shadow-title">
            Gerador de
            <br />
            Atividades
            <br />
            Infantis
          </h1>
        </div>

        {/* PERSONAGENS */}
        <div className="flex justify-center gap-6 mb-10 flex-wrap">
          {[
            { name: "Luno", file: "luno.svg" },
            { name: "Malu", file: "malu.svg" },
            { name: "Theo", file: "theo.svg" },
            { name: "Nilo", file: "nilo.svg" },
          ].map((char) => (
            <div key={char.name} className="flex flex-col items-center">
              <Image
                src={`/${char.file}`}
                alt={char.name}
                width={88}
                height={88}
                className="drop-shadow-md"
              />
              <span className="mt-2 font-title text-base text-[#2b1b46]">
                {char.name}
              </span>
            </div>
          ))}
        </div>

        {/* BOTÕES */}
        <div className="w-full flex flex-col gap-5">
          <Link href="/atividades-adaptadas">
            <button
              className="btn-pill bg-[var(--btn-purple)]"
              type="button"
            >
              <FaPuzzlePiece />
              <span>Gerar Atividade Adaptada</span>
            </button>
          </Link>

          <Link href="/atividades-comuns">
            <button
              className="btn-pill bg-[var(--btn-pink)]"
              type="button"
            >
              <FaPalette />
              <span>Gerar Atividade Comum</span>
            </button>
          </Link>

          <Link href="/perfil">
            <button
              className="btn-pill bg-[var(--btn-blue)]"
              type="button"
            >
              <FaUser />
              <span>Meu Perfil</span>
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
