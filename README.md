# Listagem de Usuários

Aplicação em React que consome a API pública JSONPlaceholder e exibe uma lista de usuários, com busca por nome em tempo real.

## Tecnologias

- React 18+
- Vite
- Axios
- CSS puro

## Funcionalidades

- Requisição GET ao carregar a página (axios dentro de useEffect)
- Indicador de carregamento enquanto os dados chegam
- Mensagem amigável em caso de erro
- Lista renderizada com .map() e key única
- Card de usuário como componente separado
- Filtro por nome em tempo real

## Como rodar

    git clone <url-do-repositorio>
    cd listagem-usuarios
    npm install
    npm run dev

Depois acesse http://localhost:5173

## Estrutura

    src/
      components/   componentes reutilizáveis (usercard)
      pages/        telas da aplicação (home)
      services/     configuração do axios (api.js)

## API utilizada

JSONPlaceholder: https://jsonplaceholder.typicode.com/users