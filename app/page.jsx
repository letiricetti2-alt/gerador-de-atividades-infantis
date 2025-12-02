"use client";

import Link from "next/link";
import LogoutButton from "./components/LogoutButton";
import { motion } from "framer-motion"; // animações suaves

export default function Home() {
  return (
    <div
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#faf5ff",
        textAlign: "center",
        padding: "2rem",
      }}
    >
      {/* Animação no título */}
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          fontSize: "2.2rem",
          fontWeight: "bold",
          color: "#4b0082",
          marginBottom: "1rem",
        }}
      >
        🧠 Bem-vindo(a) ao Gerador de Atividades Infantis
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        style={{
          fontSize: "1.1rem",
          maxWidth: "500px",
          color: "#4b5563",
          marginBottom: "2.5rem",
        }}
      >
        Escolha uma das opções abaixo para começar:
      </motion.p>

      {/* Animação dos botões */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "1rem",
          width: "100%",
          maxWidth: "350px",
        }}
      >
        <Link
          href="/gerador"
          style={{
            backgroundColor: "#6b21a8",
            color: "white",
            padding: "14px 24px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
            transition: "transform 0.2s, background-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#7e22ce")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#6b21a8")}
        >
          🧩 Gerar Atividade Adaptada
        </Link>

        <Link
          href="#"
          style={{
            backgroundColor: "#8b5cf6",
            color: "white",
            padding: "14px 24px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
            transition: "transform 0.2s, background-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#7c3aed")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#8b5cf6")}
        >
          🎨 Gerar Atividade Comum
        </Link>

        <Link
          href="#"
          style={{
            backgroundColor: "#a78bfa",
            color: "white",
            padding: "14px 24px",
            borderRadius: "12px",
            textDecoration: "none",
            fontWeight: "bold",
            fontSize: "16px",
            transition: "transform 0.2s, background-color 0.2s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#9061f9")}
          onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#a78bfa")}
        >
          👤 Meu Perfil
        </Link>

        {/* Botão de logout com leve fade-in */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.8 }}
        >
          <LogoutButton />
        </motion.div>
      </motion.div>
    </div>
  );
}
