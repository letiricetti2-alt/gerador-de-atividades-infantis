"use client";

import { useState, useEffect } from "react";

export default function Home() {
  const [tema, setTema] = useState("");
  const [idade, setIdade] = useState("");
  const [tipo, setTipo] = useState("");
  const [adaptacao, setAdaptacao] = useState("");
  const [isNeurodivergente, setIsNeurodivergente] = useState(false);
  const [neurodivergencias, setNeurodivergencias] = useState([]);
  const [neurodivergenciaSelecionada, setNeurodivergenciaSelecionada] = useState("");
  const [resultado, setResultado] = useState("");
  const [loading, setLoading] = useState(false);

  // Busca as neurodivergências da Supabase (via API pública)
  useEffect(() => {
    async function fetchNeurodivergencias() {
      try {
        const res = await fetch("/api/neurodivergencias");
        const data = await res.json();
        setNeurodivergencias(data);
      } catch (error) {
        console.error("Erro ao carregar neurodivergências:", error);
      }
    }
    fetchNeurodivergencias();
  }, []);

  const gerarAtividade = async () => {
    setLoading(true);
    setResultado("");

    const body = {
      tema,
      idade,
      tipo,
      adaptacao,
      neurodivergencia: isNeurodivergente ? neurodivergenciaSelecionada : null,
    };

    try {
      const response = await fetch("/api/generate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await response.json();
      setResultado(data.resultado);
    } catch (error) {
      console.error(error);
      setResultado("Erro ao gerar atividade. Tente novamente.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div style={{ maxWidth: "600px", margin: "2rem auto", textAlign: "center" }}>
      <h1>Gerador de Atividades Infantis</h1>

      <input
        type="text"
        placeholder="Tema da atividade"
        value={tema}
        onChange={(e) => setTema(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Idade da criança"
        value={idade}
        onChange={(e) => setIdade(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Tipo de atividade"
        value={tipo}
        onChange={(e) => setTipo(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Adaptação (se necessário)"
        value={adaptacao}
        onChange={(e) => setAdaptacao(e.target.value)}
      />
      <br />

      <div style={{ marginTop: "1rem" }}>
        <label>
          <input
            type="checkbox"
            checked={isNeurodivergente}
            onChange={() => setIsNeurodivergente(!isNeurodivergente)}
          />
          {" "}Atividade adaptada para neurodivergência
        </label>
      </div>

      {isNeurodivergente && (
        <div style={{ marginTop: "1rem" }}>
          <select
            value={neurodivergenciaSelecionada}
            onChange={(e) => setNeurodivergenciaSelecionada(e.target.value)}
          >
            <option value="">Selecione uma neurodivergência</option>
            {neurodivergencias.map((n) => (
              <option key={n.id} value={n.nome}>
                {n.nome}
              </option>
            ))}
          </select>
        </div>
      )}

      <br />
      <button onClick={gerarAtividade} disabled={loading}>
        {loading ? "Gerando..." : "Gerar atividade"}
      </button>

      {resultado && (
        <div style={{ marginTop: "2rem", textAlign: "left" }}>
          <h3>Atividade Gerada:</h3>
          <p>{resultado}</p>
        </div>
      )}
    </div>
  );
}
