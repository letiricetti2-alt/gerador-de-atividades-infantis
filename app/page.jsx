"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-full h-screen flex items-center justify-center bg-[#FFD53A] overflow-hidden">
      {/* Imagem da tela inicial */}
      <Image
        src="/inicial.jpeg"
        alt="Tela inicial do Gerador de Atividades Infantis"
        fill
        className="object-contain"
        priority
      />

      {/* Botões invisíveis sobre a imagem */}
      <div className="absolute bottom-[12%] flex flex-col items-center space-y-4 w-full">
        <button
          className="bg-transparent w-[340px] h-[70px]"
          onClick={() => alert('Gerar Atividade Adaptada')}
        />
        <button
          className="bg-transparent w-[340px] h-[70px]"
          onClick={() => alert('Gerar Atividade Comum')}
        />
        <button
          className="bg-transparent w-[340px] h-[70px]"
          onClick={() => alert('Meu Perfil')}
        />
      </div>
    </main>
  );
}
