"use client";

import { createClient } from "@supabase/supabase-js";
import { useRouter } from "next/navigation";

// Cria a conexão com a Supabase
const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
);

export default function LogoutButton() {
  const router = useRouter();

  async function handleLogout() {
    // Encerra a sessão atual
    await supabase.auth.signOut();

    // Redireciona para a página de login
    router.push("/login");
  }

  return (
    <button
      onClick={handleLogout}
      style={{
        backgroundColor: "#6b21a8",
        color: "white",
        border: "none",
        padding: "10px 18px",
        borderRadius: "10px",
        fontWeight: "bold",
        cursor: "pointer",
        marginTop: "20px",
      }}
    >
      ↩️ Sair
    </button>
  );
}
