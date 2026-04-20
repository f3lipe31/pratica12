// cadastro.js — lógica e validação do formulário de cadastro
import { adicionarLivro } from './estado.js'
import './nav.js'
const form       = document.getElementById('formCadastro')
const btnLimpar  = document.getElementById('btnLimpar')
const msgSucesso = document.getElementById('msgSucesso')
if (form) {
  form.addEventListener('submit', (event) => {
    event.preventDefault()
    if (!validarFormulario()) return
    const titulo = document.getElementById('titulo').value
    const autor  = document.getElementById('autor').value
    const genero = document.getElementById('genero').value
    const ano    = document.getElementById('ano').value
    adicionarLivro(titulo, autor, genero, ano)
    form.reset()
    limparErros()
    msgSucesso.style.display = 'block'
    setTimeout(() => { msgSucesso.style.display = 'none' }, 3000)
  })
}
if (btnLimpar) {
  btnLimpar.addEventListener('click', () => {
    form.reset()
    limparErros()
    msgSucesso.style.display = 'none'
  })
}
function validarFormulario() {
  limparErros()
  let valido = true
  const titulo = document.getElementById('titulo')
  const autor  = document.getElementById('autor')
  const genero = document.getElementById('genero')
  const ano    = document.getElementById('ano')
  if (titulo.value.trim() === '') {
    exibirErro(titulo, 'erroTitulo', 'O título é obrigatório.')
    valido = false
  }
  if (autor.value.trim() === '') {
    exibirErro(autor, 'erroAutor', 'O autor é obrigatório.')
    valido = false
  }
  if (genero.value === '') {
    exibirErro(genero, 'erroGenero', 'Selecione um gênero.')
    valido = false
  }
  const anoNum   = Number(ano.value)
  const anoAtual = new Date().getFullYear()
  if (ano.value.trim() === '' || isNaN(anoNum) || anoNum < 1000 || anoNum > anoAtual) {
    exibirErro(ano, 'erroAno', `Informe um ano válido entre 1000 e ${anoAtual}.`)
    valido = false
  }
  return valido
}
function exibirErro(campo, idErro, mensagem) {
  campo.classList.add('campo-erro')
  const span = document.getElementById(idErro)
  if (span) span.textContent = mensagem
}
function limparErros() {
  ;['titulo', 'autor', 'genero', 'ano'].forEach(id => {
    document.getElementById(id)?.classList.remove('campo-erro')
  })
  ;['erroTitulo', 'erroAutor', 'erroGenero', 'erroAno'].forEach(id => {
    const el = document.getElementById(id)
    if (el) el.textContent = ''
  })
}