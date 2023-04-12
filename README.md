# Projeto
Front em React.js e MUI.

API backend em Node.js.

Banco de dados PostgreSQL com Prisma ORM.

# Funcionamento
Site marketplace que exibe produtos, seu valor e estoque. Permite adicionar e remover do carrinho e finalizar pedido informando nome do cliente e data de entrega.

API recebe a requisição, registra o pedido e após desconta os produtos do estoque.

API também retorna a lista dos produtos, que serve para exibição no front.

# Instalação

## Requisitos

Possuir [Node](https://nodejs.org/pt-br) instalado e configurado em sua máquina.

Possuir [Node Project Manager (NPM)](https://docs.npmjs.com/cli/v9/configuring-npm/install#checking-your-version-of-npm-and-nodejs) instalado e configurado em sua máquina.

Possuir [PostgreSQL](https://www.postgresql.org/) e instalado e configurado em sua máquina.
#
## Front end

Será necessário rodar o arquivo 'index.html' em um servidor ao vivo, como [Live Edit](https://www.jetbrains.com/help/idea/live-editing.html) (Intellij) e [Live Server](https://marketplace.visualstudio.com/items?itemName=ritwickdey.LiveServer) ou [Live Preview](https://marketplace.visualstudio.com/items?itemName=ms-vscode.live-server) (VSCode).

#
## Variáveis de ambiente

Antes de conseguir executar, você deve configurar as variáveis de ambiente.

Crie um arquivo .env dentro da pasta 'frontend' e utilize a sugestão do arquivo .env.example. Caso altere a porta sugerida na seção backend (5000), altere também neste arquivo criado.

Crie um arquivo .env dentro da pasta 'backend'.

Neste arquivo, utilize a construção do arquivo .env.example (copie e cole).

Para rodar localmente, peencha com as seguintes sugestões:

BACKEND_PORT=5000\
HOST=localhost\
DATABASE_PORT=5432 (Porta padrão do PostgreSQL)\
DB_USER= 'USUARIO' (Seu usuário de acesso ao banco PostgreSQL)\
PASSWORD= 'SENHA' (Sua senha de acesso ao banco PostgreSQL)\
DATABASE=BANCO_DE_DADOS (Nome que deseja criar para o banco de dados)
#
## Banco de dados
Acessar a pasta 'backend' pelo terminal do computador.

Executar o comando 'npm i' para instalar as dependências do projeto.

Executar o comando 'npx prisma generate dev' para criar o banco de dados.

Caso prefira criar manualmente: nomeie e crie seu banco de dados pelo terminal. Após, acesse a database e utilize o comando SQL do arquivo 'shopper-dump.sql' para gerar a tabela e colunas.
#
## Back end
Ainda na pasta 'backend', execute o comando 'npm run dev'.

Deve imprimir "Ouvindo na porta BACKEND_PORT!"

Após essas configurações, sua estará funcionando!
#
Não realizei deploy do projeto devido ao bloqueio de fazer com repositórios privados (e não criei publicamente para não expôr o código/desafio da vaga no github)
