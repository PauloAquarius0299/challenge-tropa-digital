# Desafio frontend Tropa Digital
Projeto de solução vaga de desenvolvedor frontend na Tropa Digital
### Introdução 
De acordo com a proposta do desafio, o objetivo foi desenvolver duas páginas: uma de Login, que simula um sistema de autenticação através de um formulário de cadastro de usuários, sem integração com API. Esse requisito foi atendido com sucesso, uma vez que não foi utilizado nenhum banco de dados para armazenar os dados dos usuários cadastrados.

Caso fosse necessário utilizar uma API de autenticação e banco de dados para a página principal do Dashboard, a organização das pastas seria diferente. Isso não apenas por conta do sistema de roteamento do Next.js, mas também para garantir uma melhor estruturação do projeto como um todo.

Após o usuário clicar no botão "Enviar", ele é redirecionado para a página de Dashboard de Eventos, que conta com uma sidebar fixa à esquerda e o conteúdo principal centralizado. A sidebar foi implementada como um componente separado, com estilização responsiva para diferentes tamanhos de tela. Os links da sidebar foram organizados em um arquivo .ts, visando facilitar a manutenção e escalabilidade desse componente.

O arquivo principal reúne os componentes de Login e Event, enquanto os componentes que compõem o conteúdo do Dashboard estão organizados separadamente para facilitar a reutilização e manutenção do projeto como um todo.

O projeto seguiu fielmente o design disponibilizado no Figma pela empresa. As tecnologias utilizadas foram o Next.js, pela sua praticidade no gerenciamento de rotas e organização das páginas, e o Tailwind CSS, para uma estilização rápida e eficiente por meio de classes utilitárias.
### Ferramentas 
* TypeScript
* React
* Nextjs
* Tailwidcss
* Lucide React
### Link
```
https://challenge-tropa-digital.vercel.app/
```
