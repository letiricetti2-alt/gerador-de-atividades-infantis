"use client";
import { useState } from "react";
import Link from "next/link";

export default function GeradorDeAtividades() {
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState("");
  const [erro, setErro] = useState("");

  // 🔹 Função que vai buscar dados simulados da Supabase (por enquanto mock)
  async function gerarAtividadeAdaptada() {
    try {
      setLoading(true);
      setErro("");
      setResultado("");

      // Aqui futuramente entra o fetch real da Supabase 👇
      // const res = await fetch("/api/atividades");
      // const data = await res.json();

      // Simulando o retorno de exemplo:
      await new Promise((resolve) => setTimeout(resolve, 1500));
      const mock = {
        aluno: "João da Silva",
        neurodivergencia: "Transtorno do Espectro Autista (TEA)",
        nivel_suporte: 2,
        estrategia: [
          "Usar recursos visuais e estrutura de rotina",
          "Dar reforço positivo e pausas sensoriais",
          "Evitar sobrecarga auditiva e visual"
        ],
      };

      setResultado(
        `🧒 Aluno: ${mock.aluno}
🧠 Neurodivergência: ${mock.neurodivergencia}
🎯 Nível de Suporte: ${mock.nivel_suporte}
📋 Estratégias Recomendadas:
- ${mock.estrategia.join("\n- ")}`
      );
    } catch (error) {
      console.error(error);
      setErro("Ocorreu um erro ao gerar a atividade.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div style={{ textAlign: "center", marginTop: "3rem" }}>
      <h1>
        🧠 <strong>Gerador de Atividades Adaptadas</strong>
      </h1>
      <p>
        Aqui você poderá gerar atividades personalizadas de acordo com o nível
        de suporte e tipo de neurodivergência.
      </p>

      <button
        onClick={gerarAtividadeAdaptada}
        disabled={loading}
        style={{
          backgroundColor: "#6b21a8",
          color: "white",
          border: "none",
          padding: "12px 24px",
          borderRadius: "10px",
          marginTop: "2rem",
          cursor: loading ? "not-allowed" : "pointer",
          fontWeight: "bold",
          fontSize: "16px",
        }}
      >
        {loading ? "Gerando..." : "✨ Gerar Atividade Adaptada"}
      </button>

      {erro && (
        <p style={{ color: "red", marginTop: "1rem" }}>
          ⚠️ {erro}
        </p>
      )}

      {resultado && (
        <div
          style={{
            textAlign: "left",
            maxWidth: "600px",
            margin: "2rem auto",
            backgroundColor: "#f3e8ff",
            padding: "1.5rem",
            borderRadius: "10px",
            whiteSpace: "pre-wrap",
            boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
          }}
        >
          <h3>Atividade Gerada:</h3>
          <p>{resultado}</p>
        </div>
      )}

      <div style={{ marginTop: "3rem" }}>
        <Link
          href="/"
          style={{
            backgroundColor: "#6b21a8",
            color: "white",
            padding: "10px 20px",
            borderRadius: "10px",
            textDecoration: "none",
            fontWeight: "bold",
          }}
        >
          ← Voltar para o Início
        </Link>
      </div>
    </div>
  );
}


