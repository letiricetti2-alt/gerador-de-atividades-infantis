"use client";

import Image from "next/image";

export default function AtividadesComuns() {
  return (
    <main
      style={{
        backgroundColor: "#FFD1DC", // rosa
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "480px",
          height: "950px",
          overflow: "hidden", // 👈 corta qualquer sobra
        }}
      >
        <Image
          src="/comum.jpeg"
          alt="Atividades Comuns"
          fill
          priority
          style={{
            objectFit: "cover", // 👈 cobre tudo, sem sobrar
          }}
        />
      </div>
    </main>
  );
}
