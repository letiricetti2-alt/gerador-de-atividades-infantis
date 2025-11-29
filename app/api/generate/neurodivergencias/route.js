import { supabase } from "../../../lib/supabaseClient";

export const dynamic = "force-dynamic";

export async function GET() {
  try {
    const { data, error } = await supabase
      .from("neurodivergencias")
      .select("id, nome, descricao");

    if (error) throw error;

    return new Response(JSON.stringify(data), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    console.error("Erro ao buscar neurodivergências:", error);
    return new Response(
      JSON.stringify({ error: "Erro ao buscar dados" }),
      {
        status: 500,
        headers: { "Content-Type": "application/json" },
      }
    );
  }
}
