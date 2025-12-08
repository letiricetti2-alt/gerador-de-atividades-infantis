"use client";

import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen flex items-center justify-center overflow-hidden bg-[#FFD83A]">
      <Image
        src="/home.jpeg"
        alt="Página inicial"
        fill
        priority
        className="object-contain"
      />
    </main>
  );
}
