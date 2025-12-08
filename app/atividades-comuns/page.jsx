"use client";
import Image from "next/image";

export default function AtividadesComuns() {
  return (
    <div
      style={{
        backgroundColor: "#F9B7C9", // rosa suave
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
        width: "100vw",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "100%",
          maxWidth: "1080px",
          aspectRatio: "1080 / 2340",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Image
          src="/comum.jpeg" // imagem que você vai salvar em /public
          alt="Atividades Comuns"
          fill
          style={{
            objectFit: "contain",
          }}
          priority
        />
      </div>
    </div>
  );
}
