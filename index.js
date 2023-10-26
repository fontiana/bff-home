const express = require('express');
const cookieParser = require('cookie-parser');

const app = express();
const port = 8080; // Escolha a porta que desejar

app.use(cookieParser());

// Middleware para lidar com JSON
app.use(express.json());

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Bem-vindo à minha API!');
});

// Exemplo de rota POST para receber dados
app.get('/api/cookie', (req, res) => {
  const data = req.body;
  // Faça algo com os dados recebidos
  console.log(data);
  res.cookie('TESTE', "Hello World!", { httpOnly: true, domain: "azurewebsites.net", sameSite: 'strict', secure: true })
  res.json({ message: 'Dados recebidos com sucesso!' });
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
