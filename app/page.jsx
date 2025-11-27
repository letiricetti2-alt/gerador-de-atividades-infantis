"use client";

export default function Home() {
  async function gerarAtividade(e) {
    e.preventDefault();
    const tema = e.target.tema.value;

    const resposta = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tema }),
    });

    const data = await resposta.json();
    alert(data.resultado || data.erro);
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Gerador de Atividades Infantis</h1>
      <form onSubmit={gerarAtividade}>
        <input name="tema" placeholder="Digite um tema" />
        <button type="submit">Gerar</button>
      </form>
    </div>
  );
}

