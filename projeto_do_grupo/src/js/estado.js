const livros = []
/**
 * Adiciona um novo livro ao array.
 * @param {string} titulo
 * @param {string} autor
 * @param {string} genero
 * @param {number} ano
 */
export function adicionarLivro(titulo, autor, genero, ano) {
 livros.push({
 titulo: titulo.trim(),
 autor: autor.trim(),
 genero,
 ano: Number(ano),
 lido: false,
 })
}
/**
 * Retorna todos os livros cadastrados.
 * @returns {Array}
 */
export function obterLivros() {
 return livros
}
/**
 * Alterna o status lido/não lido pelo índice.
 * @param {number} index
 */
export function marcarLido(index) {
 if (livros[index] !== undefined) {
 livros[index].lido = !livros[index].lido
 }
}
/**
 * Retorna livros filtrados por gênero.
 * "Todos" retorna o array completo.
 * @param {string} genero
 * @returns {Array}
 */
export function filtrarPorGenero(genero) {
 if (genero === 'Todos') return livros
 return livros.filter(livro => livro.genero === genero)
}