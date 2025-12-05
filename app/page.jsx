import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen flex flex-col items-center justify-center bg-[#FDD33A] py-12 px-6 overflow-visible">
      <div className="relative bg-[#FFF4BF] rounded-[60px] shadow-[12px_12px_0_#D1A12C] w-full max-w-[520px] pt-44 pb-14 px-10 text-center overflow-visible">
        {/* Tina e balão */}
        <div className="absolute -top-48 left-1/2 -translate-x-1/2 flex items-start overflow-visible">
          <Image
            src="/personagens/tina.png"
            alt="Tina"
            width={230}
            height={230}
            priority
          />
          <div className="ml-4 mt-8 bg-[#FFF4BF] text-[#1E1464] px-6 py-4 rounded-2xl shadow-[4px_4px_0_#E4C56D] font-extrabold text-[16px] leading-tight">
            Olá e<br />bem-vindo(a)!
          </div>
        </div>

        {/* Título */}
        <h1 className="text-[#1E1464] font-extrabold text-[44px] leading-tight mb-12 drop-shadow-[5px_5px_0_#FFD84D]">
          Gerador
