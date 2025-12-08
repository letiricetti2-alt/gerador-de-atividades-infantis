"use client";

import Image from "next/image";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#FFD83A]">
      <Image
        src="/home.jpeg"
        alt="Página inicial"
        width={1080}
        height={1920}
        className="max-w-full h-auto"
        priority
      />
    </main>
  );
}
