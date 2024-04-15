
// ======= MODULOES GERENCIADORES =======
const path = require('path'); // 
const cors = require('cors');
require('dotenv').config()  // requisitando o acesso á variáveis de ambiente

// ========= EXPRESS SETUP ==============
const express = require('express'); // requisitando o acesso ao framework express
const app = express(); // utilizando o express
// =====================================

// ============ MIDDLEWARES =============
app.use(express.json()); // permite capturar arquivos JSON usaveis no "reqs", pra manipular nas rotas
app.use(express.urlencoded({ // permite as análise de dados vindo de formulários que vem codificado na URL por meio do HTTP (POST,PUT)
    extended: false // não permitindo requisições complexas ou extensas, para evitar DoS
})); 
app.use(express.static( // permite arquivos estáticos como CSS, JS, Imagens, dentro do diretório public
    path.join(__dirname, 'public') // faz a concatenação do caminho raiz do projeto + public
)); 
app.set('view engine', 'ejs');// Configura o Express para usar o mecanismo de template ejs
app.set('views', path.join(__dirname, 'src', 'views'));// Define o diretório onde estão os arquivos de visualização (views) usando template EJS 
app.use(cors()); // permitindo requisições HTTP -> CROSS ORIGIN RESOURCES SHARING
// =====================================

// ======= DEFINIÇÃO DE ROTAS ==========
var indexRouter = require("./src/routes");

app.use("/", indexRouter);
// =====================================

// ========= ABRINDO SERVIDOR ==========
const HOST = process.env.SV_HOST;
const PORT = process.env.SV_PORT; 
const ENVIROMENT = process.env.NODE_ENV; 

try{
    app.listen('3333', ()=>{  
        console.log(`Preparing the \x1b[33m${ENVIROMENT}\x1b[0m environment...`)
        console.log(`\x1b[32mRunning server at http://${HOST}:${PORT} \x1b[0m`)
    })
}catch(e){
    console.log(`\x1b[31mError initializing the server\x1b[0m\n${e}`) 
}
// ====================================