"use client";

import Image from "next/image";
import { useEffect } from "react";

export default function AtividadesAdaptadas() {
  useEffect(() => {
    document.body.style.backgroundColor = "#9EDFFF";
    document.documentElement.style.backgroundColor = "#9EDFFF";
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
        backgroundColor: "#9EDFFF",
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
          backgroundColor: "#9EDFFF",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <Image
          src="/adaptada.jpeg"
          alt="Atividades Adaptadas"
          fill
          priority
          style={{
            objectFit: "cover", // <<< remove as bordas
            objectPosition: "center",
          }}
        />
      </div>
    </main>
  );
}
