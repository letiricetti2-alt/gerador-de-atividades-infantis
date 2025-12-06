import Image from "next/image";

export default function AtividadesAdaptadas() {
  return (
    <main className="flex items-center justify-center min-h-screen bg-[#FCD8A8]">
      <Image
        src="/adaptada.jpeg"
        alt="Tela de Atividades Adaptadas"
        width={600}
        height={900}
        className="rounded-2xl shadow-2xl"
      />
    </main>
  );
}
