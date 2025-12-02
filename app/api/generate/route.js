import { supabase } from "../../lib/supabaseClient";
// Garante que esse código só rode no servidor
export const dynamic = "force-dynamic";

import OpenAI from "openai";

const client = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req) {
  try {
    const { tema, idade, tipo, adaptacao } = await req.json();

    const prompt = `
Você é um professor especialista em educação infantil, BNCC e adaptações neurodivergentes.
Crie uma atividade sobre o tema "${tema}" para uma criança de ${idade} anos.
Tipo de atividade: ${tipo}.
Adaptação necessária: ${adaptacao}.
A atividade deve ser clara, divertida e acessível, com linguagem simples e acolhedora.
Inclua orientações para o educador, o objetivo pedagógico e como adaptar se necessário.
Sempre alinhe à BNCC de acordo com a faixa etária.
`;

    // Chamada à OpenAI
    const completion = await client.responses.create({
      model: "gpt-4o-mini",
      input: prompt,
    });

    const resultado = completion.output[0].content[0].text;

    // Retorna o resultado como JSON
    return new Response(JSON.stringify({ resultado }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erro ao gerar atividade:", error);
    return new Response(JSON.stringify({ erro: "Erro ao gerar atividade" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
