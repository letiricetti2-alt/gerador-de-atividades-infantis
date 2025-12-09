"use client";

import Image from "next/image";

export default function AtividadesComuns() {
  return (
    <main
      style={{
        backgroundColor: "#FFD1DC", // 💗 fundo rosa igual à home
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        overflow: "hidden",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "480px",
          height: "950px",
        }}
      >
        <Image
          src="/comum.jpeg"
          alt="Atividades Comuns"
          fill
          priority
          style={{
            objectFit: "contain",
          }}
        />
      </div>
    </main>
  );
}
