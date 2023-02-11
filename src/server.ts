//importa o express
import express from 'express';

//importa rotas
import Roteador from './routes';

//instancia o express
const app = express();

//Configuração de uso das rotas
app.use(Roteador);

//configura porta e fubção executada na ativação
app.listen(4000, ()=>{console.log("Servidor Iniciado")} );
