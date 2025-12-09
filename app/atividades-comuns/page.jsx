"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function AtividadesComuns() {
  // força o fundo global pra essa página
  useEffect(() => {
    document.body.style.backgroundColor = "#FBB8C2";
    document.documentElement.style.backgroundColor = "#FBB8C2";
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.backgroundColor = "";
      document.documentElement.style.backgroundColor = "";
      document.body.style.overflow = "";
    };
  }, []);

  return (
    <main
      style={{
        backgroundColor: "#FBB8C2", // cor do fundo da arte
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        height: "100vh",
        overflow: "hidden", // corta sobras
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "480px",
          height: "950px",
          backgroundColor: "#FBB8C2",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Image
          src="/comum.jpeg"
          alt="Atividades Comuns"
          fill
          priority
          style={{
            objectFit: "contain",
            objectPosition: "center",
          }}
        />
      </div>
    </main>
  );
}
