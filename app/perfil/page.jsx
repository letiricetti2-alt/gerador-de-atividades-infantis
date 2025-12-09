"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function Perfil() {
  useEffect(() => {
    document.body.style.backgroundColor = "#C5A3FF"; // 💜 lilás do fundo
    document.documentElement.style.backgroundColor = "#C5A3FF";
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
        backgroundColor: "#C5A3FF",
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
          backgroundColor: "#C5A3FF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/perfil.jpeg"
          alt="Meu Perfil"
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
