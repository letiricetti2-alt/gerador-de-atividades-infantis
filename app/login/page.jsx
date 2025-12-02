"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;
const supabase = createClient(supabaseUrl, supabaseKey);

export default function LoginPage() {
  const router = useRouter();

  const [modo, setModo] = useState("login"); // "login" ou "cadastro"
  const [nome, setNome] = useState("");
  const [tipoUsuario, setTipoUsuario] = useState("professor"); // padrão
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [loading, setLoading] = useState(false);
  const [erro, setErro] = useState("");
  const [mensagem, setMensagem] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    setErro("");
    setMensagem("");
    setLoading(true);

    try {
      if (modo === "cadastro") {
        // 1️⃣ Cria o usuário no Auth
        const { data, error } = await supabase.auth.signUp({
          email,
          password: senha,
        });

        if (error) throw error;

        const user = data.user;
        if (!user) {
          throw new Error("Não foi possível obter o usuário após o cadastro.");
        }

        // 2️⃣ Cria o perfil na tabela 'usuarios'
        const { error: erroPerfil } = await supabase.from("usuarios").insert({
          id: user.id,
          nome,
          tipo: tipoUsuario,
        });

        if (erroPerfil) throw erroPerfil;

        setMensagem("Conta criada com sucesso! Redirecionando...");
        // 3️⃣ Redireciona para o gerador
        setTimeout(() => router.push("/gerador"), 1200);
      } else {
        // Modo LOGIN
        const { data, error } = await supabase.auth.signInWithPassword({
          email,
          password: senha,
        });

        if (error) throw error;

        setMensagem("Login realizado com sucesso! Redirecionando...");
        setTimeout(() => router.push("/gerador"), 1200);
      }
    } catch (err) {
      console.error(err);
      setErro(err.message || "Ocorreu um erro. Tente novamente.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#faf5ff",
        padding: "1rem",
      }}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "420px",
          backgroundColor: "white",
          borderRadius: "16px",
          padding: "2rem",
          boxShadow: "0 10px 30px rgba(0,0,0,0.08)",
        }}
      >
        <h1 style={{ textAlign: "center", marginBottom: "1rem" }}>
          🧠 <strong>{modo === "login" ? "Entrar" : "Criar conta"}</strong>
        </h1>

        <p style={{ textAlign: "center", marginBottom: "1.5rem" }}>
          {modo === "login"
            ? "Acesse para gerar atividades adaptadas."
            : "Crie sua conta para gerar atividades personalizadas para crianças neurodivergentes."}
        </p>

        {/* Toggle de modo */}
        <div
          style={{
            display: "flex",
            marginBottom: "1.5rem",
            borderRadius: "999px",
            backgroundColor: "#f3e8ff",
            padding: "4px",
          }}
        >
          <button
            type="button"
            onClick={() => setModo("login")}
            style={{
              flex: 1,
              border: "none",
              borderRadius: "999px",
              padding: "0.5rem",
              cursor: "pointer",
              fontWeight: "bold",
              backgroundColor: modo === "login" ? "#6b21a8" : "transparent",
              color: modo === "login" ? "white" : "#4b5563",
            }}
          >
            Entrar
          </button>
          <button
            type="button"
            onClick={() => setModo("cadastro")}
            style={{
              flex: 1,
              border: "none",
              borderRadius: "999px",
              padding: "0.5rem",
              cursor: "pointer",
              fontWeight: "bold",
              backgroundColor: modo === "cadastro" ? "#6b21a8" : "transparent",
              color: modo === "cadastro" ? "white" : "#4b5563",
            }}
          >
            Criar conta
          </button>
        </div>

        <form onSubmit={handleSubmit}>
          {modo === "cadastro" && (
            <>
              {/* Nome */}
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: "0.25rem" }}>
                  Nome completo:
                </label>
                <input
                  type="text"
                  value={nome}
                  onChange={(e) => setNome(e.target.value)}
                  required
                  style={{
                    width: "100%",
                    padding: "0.6rem",
                    borderRadius: "8px",
                    border: "1px solid #d1d5db",
                  }}
                />
              </div>

              {/* Tipo de usuário */}
              <div style={{ marginBottom: "1rem" }}>
                <label style={{ display: "block", marginBottom: "0.25rem" }}>
                  Você é:
                </label>
                <select
                  value={tipoUsuario}
                  onChange={(e) => setTipoUsuario(e.target.value)}
                  style={{
                    width: "100%",
                    padding: "0.6rem",
                    borderRadius: "8px",
                    border: "1px solid #d1d5db",
                  }}
                >
                  <option value="professor">Professor(a)</option>
                  <option value="responsavel">Responsável / Pai / Mãe</option>
                </select>
              </div>
            </>
          )}

          {/* Email */}
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", marginBottom: "0.25rem" }}>
              E-mail:
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "0.6rem",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
              }}
            />
          </div>

          {/* Senha */}
          <div style={{ marginBottom: "1rem" }}>
            <label style={{ display: "block", marginBottom: "0.25rem" }}>
              Senha:
            </label>
            <input
              type="password"
              value={senha}
              onChange={(e) => setSenha(e.target.value)}
              required
              style={{
                width: "100%",
                padding: "0.6rem",
                borderRadius: "8px",
                border: "1px solid #d1d5db",
              }}
            />
          </div>

          {/* Mensagens */}
          {erro && (
            <p style={{ color: "red", marginBottom: "0.75rem" }}>⚠️ {erro}</p>
          )}
          {mensagem && (
            <p style={{ color: "green", marginBottom: "0.75rem" }}>
              ✅ {mensagem}
            </p>
          )}

          {/* Botão */}
          <button
            type="submit"
            disabled={loading}
            style={{
              width: "100%",
              backgroundColor: "#6b21a8",
              color: "white",
              border: "none",
              padding: "0.8rem",
              borderRadius: "10px",
              cursor: loading ? "not-allowed" : "pointer",
              fontWeight: "bold",
              fontSize: "16px",
              marginTop: "0.5rem",
            }}
          >
            {loading
              ? "Processando..."
              : modo === "login"
              ? "Entrar"
              : "Criar conta"}
          </button>
        </form>

        {/* Link pra voltar */}
        <button
          type="button"
          onClick={() => router.push("/")}
          style={{
            marginTop: "1rem",
            width: "100%",
            backgroundColor: "transparent",
            border: "none",
            color: "#6b21a8",
            textDecoration: "underline",
            cursor: "pointer",
          }}
        >
          ← Voltar para o início
        </button>
      </div>
    </div>
  );
}
