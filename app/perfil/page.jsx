"use client";
import Image from "next/image";
import Link from "next/link";

export default function Perfil() {
  return (
    <div
      style={{
        backgroundColor: "#B18BE8", // fundo roxo
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "100vh",
        margin: 0,
        padding: 0,
      }}
    >
      <div
        style={{
          position: "relative",
          width: "480px",
          height: "950px",
          backgroundColor: "#B18BE8",
          overflow: "hidden",
        }}
      >
        <Image
          src="/perfil.jpeg"
          alt="Tela do perfil"
          width={480}
          height={950}
          style={{
            width: "480px",
            height: "950px",
            objectFit: "fill", // preenche exatamente sem cortar
            display: "block",
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
