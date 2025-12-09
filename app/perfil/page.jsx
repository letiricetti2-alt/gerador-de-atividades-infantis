"use client";
import Image from "next/image";
import Link from "next/link";

export default function Perfil() {
  return (
    <div
      style={{
        backgroundColor: "#B18BE8",
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
          backgroundColor: "#B18BE8", // mantém roxo no entorno
          overflow: "hidden",
          boxShadow: "0 0 10px rgba(0,0,0,0.1)",
        }}
      >
        <Image
          src="/perfil.jpeg"
          alt="Tela do perfil"
          fill
          style={{
            objectFit: "cover", // cobre toda a área sem deixar margens
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
