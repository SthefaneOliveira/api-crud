API de Alunos
Esta é uma API simples para gerenciar informações de alunos.

Como executar a API localmente
Certifique-se de ter o Node.js instalado em seu sistema. Você pode baixá-lo em https://nodejs.org/.

Clone este repositório para o seu computador:


Configure seu banco de dados:

Certifique-se de ter um banco de dados PostgreSQL configurado.
Edite o arquivo config/config.json com suas informações de banco de dados.
Crie o banco de dados e execute as migrações:

bash
Copy code
npx sequelize db:create
npx sequelize db:migrate
Inicie o servidor:
bash
Copy code
npm start
A API estará em execução em http://localhost:3000.

Como testar as operações CRUD
Você pode testar as operações CRUD usando uma ferramenta como o Postman ou até mesmo o cURL.

Aqui estão os endpoints para testar:

Listar todos os alunos:

Método: GET
URL: http://localhost:3000/alunos
Adicionar um novo aluno:

Método: POST
URL: http://localhost:3000/alunos
Corpo da solicitação: JSON com os dados do aluno (nome e idade).
Obter informações de um aluno por ID:

Método: GET
URL: http://localhost:3000/alunos/{id}
Atualizar informações de um aluno por ID:

Método: PUT
URL: http://localhost:3000/alunos/{id}
Corpo da solicitação: JSON com os dados atualizados do aluno (nome e idade).
Excluir um aluno por ID:

Método: DELETE
URL: http://localhost:3000/alunos/{id}
Certifique-se de substituir {id} pelo ID real do aluno que deseja manipular