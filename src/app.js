//Importa o express
const express = require('express');
//Declara o uso do express na variável app
const app = express();
//Permite que as requisições sejam interpretadas por JSON
app.use(express.json());
//Mostra a requisição e o caminho sendo utilizados
app.use((req, res, next) => {  
    console.log(`[${new Date().toISOString()}] ${req.method} ${req.path}`);  
    next();
});
//Se algo der errado retorna 500 e uma mensagem de erro
app.use((err, req, res, next) => {  
    res.status(500).json({ erro: err.message });
});
//Liga o servidor na porta 3000 e exibe confirmação no console
app.listen(3000, () => console.log('API rodando na porta 3000'));

