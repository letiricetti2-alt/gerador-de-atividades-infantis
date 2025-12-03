"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaPuzzlePiece, FaPalette, FaUser } from "react-icons/fa";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#FDD835] px-4 text-center">
      
      {/* Bloco principal centralizado */}
      <div className="bg-[#FEEAA0] p-10 rounded-[40px] shadow-2xl max-w-[420px] w-full flex flex-col items-center">
        
        {/* Tina e balão */}
        <div className="relative mb-4">
          <Image
            src="/tina.svg"
            alt="Tina"
            width={140}
            height={140}
            className="drop-shadow-md"
          />
          <div className="absolute top-5 right-[-140px] bg-[#FFF4C3] px-5 py-3 rounded-[20px] text-[#1A1A1A] font-semibold text-lg w-[210px] shadow-md">
            Olá e bem-vindo(a)!
          </div>
        </div>

        {/* Título */}
        <h1 className="text-5xl font-extrabold text-[#1A1A1A] mb-8 leading-tight text-shadow">
          Gerador de
          <br />
          Atividades Infantis
        </h1>

        {/* Personagens */}
        <div className="flex justify-center gap-5 mb-10 flex-wrap">
          {[
            { name: "Luno", file: "luno.svg" },
            { name: "Malu", file: "malu.svg" },
            { name: "Theo", file: "theo.svg" },
            { name: "Nilo", file: "nilo.svg" },
          ].map((char, i) => (
            <div key={i} className="flex flex-col items-center">
              <Image
                src={`/${char.file}`}
                alt={char.name}
                width={80}
                height={80}
                className="drop-shadow-md"
              />
            </div>
          ))}
        </div>

        {/* Botões */}
        <div className="flex flex-col gap-4 w-full">
          <Link href="/atividades-adaptadas">
            <button className="w-full bg-[#2D2671] hover:bg-[#231e5b] text-white text-lg font-bold py-4 rounded-[40px] shadow-md flex items-center justify-center gap-3">
              <FaPuzzlePiece /> Gerar Atividade Adaptada
            </button>
          </Link>

          <Link href="/atividades-comuns">
            <button className="w-full bg-[#EF5DA8] hover:bg-[#d94f90] text-white text-lg font-bold py-4 rounded-[40px] shadow-md flex items-center justify-center gap-3">
              <FaPalette /> Gerar Atividade Comum
            </button>
          </Link>

          <Link href="/perfil">
            <button className="w-full bg-[#4FC3F7] hover:bg-[#39b2e9] text-white text-lg font-bold py-4 rounded-[40px] shadow-md flex items-center justify-center gap-3">
              <FaUser /> Meu Perfil
            </button>
          </Link>
        </div>
      </div>
    </main>
  );
}
