# Estante Digital

Aplicação web para gerenciamento de uma biblioteca pessoal de livros, desenvolvida com HTML, CSS e JavaScript puro usando **Vite** como bundler.

## Funcionalidades

- Cadastro de livros com título, autor, gênero e ano de publicação
- Validação de formulário com mensagens de erro inline
- Listagem dinâmica de livros com cards interativos
- Filtro de livros por gênero
- Marcação de livros como lido / não lido
- Layout responsivo para mobile e desktop

## Tecnologias

- HTML5
- CSS3 (variáveis, grid, flexbox, media queries)
- JavaScript ES6+ (módulos, import/export)
- [Vite](https://vitejs.dev/) como servidor de desenvolvimento

## Como executar

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/estante-digital.git
   cd estante-digital
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie o servidor de desenvolvimento:
   ```bash
   npm run dev
   ```

4. Acesse no navegador: `http://localhost:5173`

## Estrutura de pastas

```
estante-digital/
├── index.html              # Página inicial
├── vite.config.js          # Configuração multi-page do Vite
├── package.json
├── src/
│   ├── style.css           # Estilos globais
│   ├── main.js             # Entry point da página inicial
│   ├── pages/
│   │   ├── cadastro.html   # Página de cadastro
│   │   └── listagem.html   # Página de listagem
│   └── js/
│       ├── estado.js       # Gerenciamento de estado (array em memória)
│       ├── cadastro.js     # Lógica do formulário
│       ├── listagem.js     # Lógica da listagem e filtros
│       └── nav.js          # Menu de navegação responsivo
└── README.md
```

## Integrantes

| Nome    | Branch    | Issues             |
|---------|-----------|--------------------|
| Felipe  | `felipe`  | #01, #02, #03, #04 |
| Yuri    | `yuri`    | #05, #06, #07, #08 |
| Gabriel | `gabriel` | #09, #10, #11, #12 |
| Alanna  | `alanna`  | #13, #14, #15, #16 |

## Kanban

Acompanhe o progresso pelo [GitHub Projects](https://github.com/users/f3lipe31/projects/2).
