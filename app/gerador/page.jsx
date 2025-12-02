'use client'
import { useState } from 'react'
import { gerarAtividadeAdaptada } from '../utils/gerarAtividadeAdaptada'

export default function GeradorPage() {
  const [resultado, setResultado] = useState(null)
  const [carregando, setCarregando] = useState(false)

  async function handleGerar() {
    setCarregando(true)

    // ⚠️ Substituir pelos IDs reais da Supabase:
    const alunoId = 'coloca_aqui_o_uuid_do_aluno'
    const atividadeId = 'coloca_aqui_o_uuid_da_atividade'

    const data = await gerarAtividadeAdaptada(alunoId, atividadeId)
    setResultado(data)
    setCarregando(false)
  }

  return (
    <div style={{ padding: '2rem', maxWidth: '700px', margin: '0 auto' }}>
      <h1 style={{ fontSize: '1.8rem', color: '#6b21a8' }}>🧠 Gerar Adaptação Automática</h1>
      <button
        onClick={handleGerar}
        disabled={carregando}
        style={{
          backgroundColor: '#6b21a8',
          color: 'white',
          border: 'none',
          borderRadius: '8px',
          padding: '10px 20px',
          marginTop: '20px',
          cursor: 'pointer',
        }}
      >
        {carregando ? 'Gerando...' : 'Gerar Adaptação'}
      </button>

      {resultado && (
        <div style={{ marginTop: '2rem', background: '#f3f4f6', padding: '1rem', borderRadius: '10px' }}>
          <h2>{resultado.tema}</h2>
          <p><b>Tipo:</b> {resultado.tipo}</p>
          <p><b>Aluno:</b> {resultado.nomeAluno}</p>
          <p><b>Neurodivergência:</b> {resultado.nomeNeuro}</p>
          <p><b>Nível de Suporte:</b> {resultado.nivel_suporte}</p>
          <p><b>Adaptação:</b> {resultado.adaptacao}</p>
          <p><b>Estratégias:</b> {Array.isArray(resultado.estrategias) ? resultado.estrategias.join(', ') : resultado.estrategias}</p>
        </div>
      )}
    </div>
  )
}
