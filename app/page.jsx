"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import LogoutButton from "./components/LogoutButton";

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        background: "linear-gradient(180deg, #f9f7ff 0%, #f0eaff 100%)",
        fontFamily: "Arial, sans-serif",
        textAlign: "center",
      }}
    >
      <motion.h1
        initial={{ opacity: 0, y: -30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        style={{
          fontSize: "2rem",
          fontWeight: "bold",
          color: "#4a148c",
          marginBottom: "2rem",
        }}
      >
        🧠 Bem-vindo(a) ao Gerador de Atividades Infantis
      </motion.h1>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.6 }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          alignItems: "center",
        }}
      >
        <Link href="/gerador">
          <button
            style={{
              backgroundColor: "#6b21a8",
              color: "white",
              padding: "12px 22px",
              border: "none",
              borderRadius: "10px",
              fontSize: "1rem",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "0.3s",
              width: "220px",
            }}
          >
            ✨ Gerar Atividade Adaptada
          </button>
        </Link>

        <Link href="/atividades-comuns">
          <button
            style={{
              backgroundColor: "#9333ea",
              color: "white",
              padding: "12px 22px",
              border: "none",
              borderRadius: "10px",
              fontSize: "1rem",
              cursor: "pointer",
              fontWeight: "bold",
              transition: "0.3s",
              width: "220px",
            }}
          >
            🎨 Gerar Atividade Comum
          </button>
        </Link>

        <Link href="/perfil">
          <button
            style={{
              backgroundColor: "#7e22ce",
              color: "white",
              padding: "12px 22px",
              border: "none",
              borderRadius: "10px",
              fontSize: "1rem",
              cursor: "pointer",
              fontWeight: "bold",
              width: "220px",
            }}
          >
            👤 Meu Perfil
          </button>
        </Link>

        <div style={{ marginTop: "1.5rem" }}>
          <LogoutButton />
        </div>
      </motion.div>
    </div>
  );
}
