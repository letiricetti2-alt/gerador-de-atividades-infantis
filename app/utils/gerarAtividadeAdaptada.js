import { createClient } from '@supabase/supabase-js'

const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL,
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY
)

export async function gerarAtividadeAdaptada(alunoId, atividadeId) {
  const { data, error } = await supabase
    .from('Atividades')
    .select(`
      tema,
      tipo,
      alunos (nome, nivel_suporte, neurodivergencia_id),
      neurodivergencias (nome, estrategias)
    `)
    .eq('id', atividadeId)
    .single()

  if (error) {
    console.error('Erro ao buscar dados:', error)
    return null
  }

  const { tema, tipo, alunos, neurodivergencias } = data
  const { nome: nomeAluno, nivel_suporte } = alunos
  const { nome: nomeNeuro, estrategias } = neurodivergencias

  let adaptacao = ''
  if (nivel_suporte === 3) {
    adaptacao = `Atividade detalhada com passo a passo, apoio visual e mediação contínua.`
  } else if (nivel_suporte === 2) {
    adaptacao = `Atividade com apoio visual e rotina estruturada, com reforço auditivo.`
  } else if (nivel_suporte === 1) {
    adaptacao = `Atividade com instruções curtas, reforço positivo e incentivo à autonomia guiada.`
  } else {
    adaptacao = `Versão avançada: desafios extras e enriquecimento curricular.`
  }

  return {
    tema,
    tipo,
    nomeAluno,
    nomeNeuro,
    nivel_suporte,
    adaptacao,
    estrategias
  }
}
