import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const { prompt } = await req.json();

    // aqui vai sua lógica principal (exemplo)
    const resposta = `Você enviou o prompt: ${prompt}`;

    return NextResponse.json({ success: true, data: resposta });
  } catch (error) {
    console.error("Erro na rota /generate:", error);
    return NextResponse.json({ success: false, error: error.message }, { status: 500 });
  }
}

    console.error(error);
    return NextResponse.json({ error: "Erro ao gerar atividade." }, { status: 500 });
  }
}
