// nav.js — menu hamburguer responsivo (issue #08)

const navToggle = document.getElementById('navToggle')
const navLinks  = document.querySelector('.nav-links')

if (navToggle && navLinks) {
  navToggle.addEventListener('click', () => {
    const aberto = navLinks.classList.toggle('aberto')
    navToggle.setAttribute('aria-expanded', aberto)
    navToggle.textContent = aberto ? '×' : '☰'
  })

  navLinks.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', () => {
      navLinks.classList.remove('aberto')
      navToggle.setAttribute('aria-expanded', 'false')
      navToggle.textContent = '☰'
    })
  })
}