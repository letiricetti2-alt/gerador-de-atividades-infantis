"use client";
import Image from "next/image";
import Link from "next/link";

export default function Perfil() {
  return (
    <div
      style={{
        backgroundColor: "#B18BE8", // fundo roxo (forçado)
        minHeight: "100vh",
        width: "100vw",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "480px",
          height: "950px",
          overflow: "hidden",
        }}
      >
        <Image
          src="/perfil.jpeg"
          alt="Tela do perfil"
          fill
          style={{
            objectFit: "contain",
            backgroundColor: "#B18BE8", // garante que não apareça o amarelo
            borderRadius: "0",
          }}
          priority
        />

        {/* Exemplo: botão "Voltar ao Início" */}
        <Link href="/">
          <div
            style={{
              position: "absolute",
              bottom: "40px",
              left: "50%",
              transform: "translateX(-50%)",
              width: "60%",
              height: "50px",
              borderRadius: "20px",
              cursor: "pointer",
            }}
          />
        </Link>
      </div>
    </div>
  );
}
