const express = require('express');
const cookieParser = require('cookie-parser');
var cors = require('cors');

const app = express();
const port = 8080; // Escolha a porta que desejar

app.use(cookieParser());
// Middleware para lidar com JSON
app.use(express.json());
var corsOptions = {
  origin: '*',
  credentials: true };

app.use(cors(corsOptions));

// Rota de exemplo
app.get('/', (req, res) => {
  res.send('Bem-vindo à minha API!');
});

// Exemplo de rota POST para receber dados
app.get('/api/cookie', (req, res) => {
  const data = req.body;
  // Faça algo com os dados recebidos
  console.log(data);
  res.cookie('TESTE', "HelloWorld!", { domain: "azurewebsites.net", sameSite: 'strict', secure: true })
  res.cookie('TESTE_2', "HelloWorld!")
  res.cookie('TESTE 3', "HelloWorld!", { domain: ".azurewebsites.net", sameSite: 'strict', secure: true })
  res.cookie('TESTE 4', "HelloWorld!", { domain: ".net" })
  res.cookie('TESTE 5', "HelloWorld!", { domain: "azurewebsites.net" })
  res.cookie('TESTE 6', "HelloWorld!", { domain: "bff-home.azurewebsites.net" })
  res.json({ message: 'Dados recebidos com sucesso!' });
});

// Inicie o servidor
app.listen(port, () => {
  console.log(`Servidor rodando na porta ${port}`);
});
