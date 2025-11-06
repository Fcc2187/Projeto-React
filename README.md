# Frontend: Gerenciador de Tarefas 📝

Uma interface de usuário (UI) simples e reativa para gerenciamento de tarefas (CRUD), construída com React, React Router e Tailwind CSS.

## 🚀 Sobre o Projeto

Este projeto é o *frontend* focado na experiência do usuário para um sistema de "To-Do List". Ele utiliza **React Hooks** (`useState`, `useEffect`) para gerenciamento de estado reativo e **React Router** para criar uma navegação fluida entre a lista principal e os detalhes de cada tarefa.

Para persistência de dados, o projeto utiliza a API de **LocalStorage** do navegador, garantindo que as tarefas do usuário não sejam perdidas ao recarregar a página. A estilização é feita com **Tailwind CSS** para um desenvolvimento de UI rápido e moderno.

---

## 💻 Tecnologias Utilizadas

* **Biblioteca Principal:** React
* **Roteamento:** React Router
* **Estilização:** Tailwind CSS
* **Ícones:** Lucide React
* **Persistência de Dados:** LocalStorage (Browser API)
* **Ambiente de Desenvolvimento:** Vite

---

## ✨ Principais Funcionalidades (CRUD)

A aplicação implementa todas as operações CRUD no lado do cliente:

#### `[CREATE]` Adicionar Tarefa
* **Componente:** `AddTask.jsx`
* **Função:** `onAddTaskSubmit` (em `App.jsx`)
* **Descrição:** Um formulário que captura `title` e `description` e os adiciona ao estado global de `tasks`.

#### `[READ]` Listar Todas as Tarefas
* **Componente:** `Tasks.jsx`
* **Descrição:** Renderiza a lista de tarefas a partir do estado `tasks`, aplicando um estilo `line-through` (tachado) se `isCompleted` for `true`.

#### `[READ]` Ver Detalhes da Tarefa
* **Rota:** `/tasks/:id`
* **Componente:** `TaskPage.jsx`
* **Descrição:** Utiliza o `useNavigate` para enviar `title` e `description` via *query params* para uma página de detalhes. A página de detalhes usa `useSearchParams` para ler e exibir esses dados.

#### `[UPDATE]` Concluir Tarefa
* **Função:** `onTaskClick` (em `App.jsx`)
* **Descrição:** Ao clicar em uma tarefa, seu status `isCompleted` é invertido (`!task.isCompleted`), atualizando o estado e disparando uma re-renderização.

#### `[DELETE]` Deletar Tarefa
* **Função:** `onDeleteTaskClick` (em `App.jsx`)
* **Descrição:** Remove uma tarefa do array de `tasks` com base no seu `taskId`, utilizando a função `filter`.

---

## 💿 Persistência de Dados

* **Hook:** `useEffect` (em `App.jsx`)
* **Método:** `localStorage.setItem('tasks', JSON.stringify(tasks))`
* **Descrição:** Qualquer alteração no estado de `tasks` (adicionar, remover, atualizar) dispara o `useEffect`, que serializa o estado atual e o salva no LocalStorage. Ao iniciar, o `useState` lê o LocalStorage para carregar as tarefas salvas.
