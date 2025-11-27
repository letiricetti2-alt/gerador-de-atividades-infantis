export async function POST(req) {
  try {
    const { tema } = await req.json();

    // Aqui vai um gerador de texto fictício de teste.
    // Depois trocamos para o modelo real da OpenAI.
    const resultado = `Atividade sobre "${tema}": 
1. Desenhe algo relacionado a ${tema}.
2. Escreva uma frase sobre o que você desenhou.
3. Pinte com suas cores favoritas!`;

    return new Response(JSON.stringify({ resultado }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (erro) {
    return new Response(JSON.stringify({ erro: "Erro ao gerar atividade." }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

