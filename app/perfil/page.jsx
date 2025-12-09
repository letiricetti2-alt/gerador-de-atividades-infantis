"use client";
import Image from "next/image";
import Link from "next/link";

export default function Perfil() {
  return (
    <main
      style={{
        backgroundColor: "#B18BE8", // fundo roxo definitivo
        width: "100vw",
        height: "100vh",
        margin: 0,
        padding: 0,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "relative",
          width: "480px",
          height: "950px",
          overflow: "hidden",
          borderRadius: "0px",
        }}
      >
        <Image
          src="/perfil.jpeg"
          alt="Tela do perfil"
          width={480}
          height={950}
          style={{
            display: "block",
            width: "100%",
            height: "100%",
            objectFit: "contain",
            backgroundColor: "#B18BE8",
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
    </main>
  );
}
