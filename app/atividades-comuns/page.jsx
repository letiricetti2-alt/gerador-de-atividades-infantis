"use client";

import Image from "next/image";

export default function AtividadesComuns() {
  return (
    <main
      style={{
        backgroundColor: "#FBB8C2", // 👈 mesmo rosa da arte
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "480px",
          height: "950px",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#FBB8C2", // 👈 preenche o contorno da imagem
        }}
      >
        <Image
          src="/comum.jpeg"
          alt="Atividades Comuns"
          fill
          priority
          style={{
            objectFit: "contain",
            objectPosition: "center", // 👈 centraliza direitinho
          }}
        />
      </div>
    </main>
  );
}
