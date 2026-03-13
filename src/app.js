//Importa o express
const express = require('express');
const produtosRouter = require('./routes/produtos');

//Declara o uso do express na variável app
const app = express();

//Permite que as requisições sejam interpretadas por JSON
app.use(express.json());

//Mostra a requisição e o caminho sendo utilizados
app.use((req, res, next) => {  
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);  
    next();
});

//Conecta o Router ao servidor dizendo: "tudo que chegar com URL começando em /api/v1/produtos, encaminha pra esse Router resolver".
app.use('/api/v1/produtos', produtosRouter);

//Se algo der errado retorna 500 e uma mensagem de erro
app.use((err, req, res, next) => {  
    res.status(500).json({ erro: err.message });
});

//Liga o servidor na porta 3000 e exibe confirmação no console
app.listen(3000, () => console.log('API rodando na porta 3000'));

