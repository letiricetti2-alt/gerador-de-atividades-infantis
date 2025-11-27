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
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      minHeight: "100vh",
      fontFamily: "sans-serif",
      backgroundColor: "#fafafa",
    }}>
      <h1>Gerador de Atividades Infantis</h1>
      <form onSubmit={gerarAtividade} style={{ display: "flex", flexDirection: "column", gap: "10px", width: "300px" }}>
        <label htmlFor="tema">Tema da Atividade:</label>
        <input type="text" id="tema" name="tema" placeholder="Ex: animais, cores, natureza..." required />
        <button type="submit">Gerar Atividade</button>
      </form>
    </div>
  );
}
