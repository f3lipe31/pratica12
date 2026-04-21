// listagem.js — renderização dinâmica, toggle lido e filtro
// issues #12, #13, #14 — Gabriel e Alanna
import { obterLivros, marcarLido, filtrarPorGenero } from './estado.js'
import './nav.js'
const listaEl = document.getElementById('listaLivros')
let filtroAtivo = 'Todos'
if (listaEl) {
 renderizarLista()
 // issue #14 — Alanna: filtro por gênero
 document.querySelectorAll('.filtro-btn').forEach(btn => {
 btn.addEventListener('click', () => {
 filtroAtivo = btn.getAttribute('data-genero')
 document.querySelectorAll('.filtro-btn').forEach(b => b.classList.remove('ativo'))
 btn.classList.add('ativo')
 renderizarLista()
 })
 })
}
// issue #12 — Gabriel: renderização dinâmica
function renderizarLista() {
 if (!listaEl) return
 const lista = filtrarPorGenero(filtroAtivo)
 listaEl.innerHTML = ''
 // issue #14 — Alanna: contador de resultados
 const contador = document.getElementById('contadorLivros')
 if (contador) {
 contador.textContent = lista.length === 1
 ? '1 livro'
 : `${lista.length} livros`
 }
 if (lista.length === 0) {
 listaEl.innerHTML = `
 <div class="lista-vazia">
 <strong>Nenhum livro encontrado.</strong>
 <p>Adicione livros pelo <a href="/src/pages/cadastro.html" style="color:var(--cor-sec </div>`
 return
 }
 const todosLivros = obterLivros()
 lista.forEach(livro => {
 // busca o índice real no array completo para o marcarLido funcionar corretamente
 const indexReal = todosLivros.findIndex(l =>
 l.titulo === livro.titulo &&
 l.autor === livro.autor &&
 l.ano === livro.ano
 )
 const card = document.createElement('div')
 card.className = `card-livro${livro.lido ? ' lido' : ''}`
 card.innerHTML = `
 <h3 class="card-titulo">${escaparHTML(livro.titulo)}</h3>
 <p class="card-autor">${escaparHTML(livro.autor)}</p>
 <div class="card-meta">
 <span class="badge-genero">${escaparHTML(livro.genero)}</span>
 <span class="badge-status ${livro.lido ? 'lido' : 'nao-lido'}">
 ${livro.lido ? 'Lido' : 'Não lido'}
 </span>
 <span class="card-ano">${livro.ano}</span>
 </div>
 <div class="card-actions">
 <button class="btn btn-outline" data-index="${indexReal}">
 ${livro.lido ? 'Marcar como não lido' : 'Marcar como lido'}
 </button>
 </div>`
 // issue #13 — Alanna: toggle lido/não lido
 card.querySelector('button').addEventListener('click', () => {
 marcarLido(indexReal)
 renderizarLista()
 })
 listaEl.appendChild(card)
 })
}
function escaparHTML(texto) {
 return String(texto)
 .replace(/&/g, '&amp;')
 .replace(/</g, '&lt;')
 .replace(/>/g, '&gt;')
 .replace(/"/g, '&quot;')
}