// estado.js — gerenciamento de estado com sessionStorage
// issue #11 — Gabriel

const CHAVE = 'estante_livros'

function carregarLivros() {
  const dados = sessionStorage.getItem(CHAVE)
  return dados ? JSON.parse(dados) : []
}

function salvarLivros(livros) {
  sessionStorage.setItem(CHAVE, JSON.stringify(livros))
}

/**
 * Adiciona um novo livro ao array.
 * @param {string} titulo
 * @param {string} autor
 * @param {string} genero
 * @param {number} ano
 */
export function adicionarLivro(titulo, autor, genero, ano) {
  const livros = carregarLivros()
  livros.push({
    titulo: titulo.trim(),
    autor:  autor.trim(),
    genero,
    ano:    Number(ano),
    lido:   false,
  })
  salvarLivros(livros)
}

/**
 * Retorna todos os livros cadastrados.
 * @returns {Array}
 */
export function obterLivros() {
  return carregarLivros()
}

/**
 * Alterna o status lido/não lido pelo índice e salva.
 * @param {number} index
 */
export function marcarLido(index) {
  const livros = carregarLivros()
  if (livros[index] !== undefined) {
    livros[index].lido = !livros[index].lido
    salvarLivros(livros)
  }
}

/**
 * Retorna livros filtrados por gênero.
 * "Todos" retorna o array completo.
 * @param {string} genero
 * @returns {Array}
 */
export function filtrarPorGenero(genero) {
  const livros = carregarLivros()
  if (genero === 'Todos') return livros
  return livros.filter(livro => livro.genero === genero)
}