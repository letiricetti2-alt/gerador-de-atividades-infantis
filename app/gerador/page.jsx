"use client";

import Link from "next/link";

export default function GeradorPage() {
  return (
    <div
      style={{
        textAlign: "center",
        marginTop: "5rem",
        fontFamily: "Arial, sans-serif",
      }}
    >
      <h1>🧠 Gerador de Atividades Adaptadas</h1>
      <p style={{ marginTop: "1rem" }}>
        Aqui você poderá gerar atividades personalizadas de acordo com o nível
        de suporte e tipo de neurodivergência.
      </p>

      <div style={{ marginTop: "3rem" }}>
        <Link
          href="/"
          style={{
            backgroundColor: "#6b21a8",
            color: "white",
            padding: "12px 20px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
            transition: "0.3s",
          }}
        >
          ← Voltar para o Início
        </Link>
      </div>
    </div>
  );
}

