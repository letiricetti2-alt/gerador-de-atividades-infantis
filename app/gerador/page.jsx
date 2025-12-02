"use client";
import { useState } from "react";
import Link from "next/link";
import { createClient } from "@supabase/supabase-js";

// 🔹 Inicializa o cliente Supabase
const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function GeradorDeAtividades() {
  const [loading, setLoading] = useState(false);
  const [resultado, setResultado] = useState("");
  const [erro, setErro] = useState("");
  const [nivelSuporte, setNivelSuporte] = useState("");
  const [tipoAtividade, setTipoAtividade] = useState("");
  const [corCard, setCorCard] = useState("#f3e8ff");
  const [nivelTitulo, setNivelTitulo] = useState(null);

  async function gerarAtividadeAdaptada() {
    try {
      setLoading(true);
      setErro("");
      setResultado("");
      setCorCard("#f3e8ff");
      setNivelTitulo(null);

      let query = supabase.from("atividades_completas").select("*");

      if (nivelSuporte) query = query.eq("nivel_suporte", Number(nivelSuporte));
      if (tipoAtividade) query = query.ilike("tipo", `%${tipoAtividade}%`);

      const { data, error } = await query;

      if (error) throw error;
      if (!data || data.length === 0) {
        setErro("Nenhuma atividade encontrada com esses filtros.");
        return;
      }

      const randomIndex = Math.floor(Math.random() * data.length);
      const atividade = data[randomIndex];

      // 🔹 Define a cor e o nível do card
      const coresPorNivel = {
        1: "#bfdbfe", // azul-claro
        2: "#ddd6fe", // lilás suave
        3: "#fbcfe8", // rosa-claro
      };
      setCorCard(coresPorNivel[atividade.nivel_suporte] || "#f3e8ff");
      setNivelTitulo(atividade.nivel_suporte);

      setResultado(
        `🧒 Aluno: ${atividade.aluno}
🧠 Neurodivergência: ${atividade.neurodivergencia}
🎯 Nível de Suporte: ${atividade.nivel_suporte}
📚 Tema: ${atividade.tema}
🧩 Tipo: ${atividade.tipo}

📋 Estratégias Gerais:
- ${atividade.adaptacao_geral}

💡 Estratégias por Nível:
- ${atividade.estrategias_nivel}

🎓 Estratégias por Neurodivergência:
- ${atividade.estrategias_neurodivergencia}`
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
        Gere atividades personalizadas filtrando por nível de suporte e tipo de
        atividade, ou deixe em branco para gerar aleatoriamente.
      </p>

      {/* 🔹 Filtros */}
      <div style={{ marginTop: "2rem" }}>
        <label style={{ fontWeight: "bold", marginRight: "0.5rem" }}>
          Nível de Suporte:
        </label>
        <select
          value={nivelSuporte}
          onChange={(e) => setNivelSuporte(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Todos</option>
          <option value="1">Nível 1</option>
          <option value="2">Nível 2</option>
          <option value="3">Nível 3</option>
        </select>
      </div>

      <div style={{ marginTop: "1rem" }}>
        <label style={{ fontWeight: "bold", marginRight: "0.5rem" }}>
          Tipo de Atividade:
        </label>
        <select
          value={tipoAtividade}
          onChange={(e) => setTipoAtividade(e.target.value)}
          style={{
            padding: "8px",
            borderRadius: "8px",
            border: "1px solid #ccc",
          }}
        >
          <option value="">Todas</option>
          <option value="sensorial">Sensorial</option>
          <option value="motora">Motora</option>
          <option value="cognitiva">Cognitiva</option>
          <option value="social">Social</option>
        </select>
      </div>

      {/* 🔹 Botão */}
      <button
        onClick={gerarAtividadeAdaptada}
        disabled={loading}
        style={{
          backgroundColor: "#6b21a8",
          color: "white",
          border: "none",
          p

