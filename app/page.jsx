"use client";

export default function Home() {
  async function gerarAtividade(e) {
    e.preventDefault();

    const tema = e.target.tema.value;
    const idade = e.target.idade.value;
    const tipo = e.target.tipo.value;
    const adaptacao = e.target.adaptacao.value;

    const resposta = await fetch("/api/generate", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ tema, idade, tipo, adaptacao }),
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
        minHeight: "100vh",
        fontFamily: "sans-serif",
        backgroundColor: "#fdfdfd",
      }}
    >
      <h1>Gerador de Atividades Infantis</h1>
      <form
        onSubmit={gerarAtividade}
        style={{
          display: "flex",
          flexDirection: "column",
          gap: "10px",
          width: "300px",
          textAlign: "center",
        }}
      >
        <input name="tema" placeholder="Tema da atividade" required />
        <input name="idade" placeholder="Idade da criança" required />
        <input name="tipo" placeholder="Tipo (desenho, escrita...)" required />
        <input name="adaptacao" placeholder="Adaptação (TDAH, TEA...)" required />
        <button type="submit">Gerar atividade</button>
      </form>
    </div>
  );
}


