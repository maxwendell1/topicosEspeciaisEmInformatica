//Importa componentes do express
import {Router,Request,Response} from 'express';

//Instancia roteador
const Roteador = Router();

//Define rota tipo get que, para funcionar, deve ser requisitada conforme exemplo.
//Exemplo da requisição: localhost:4000/teste/123?num=456
//Onde 123 e 456 podem ser substituídos por quaisquer valores
Roteador.get(
    //URL com parâmetro :id
    '/teste/:id',
    //Função anônima com os parâmetros de tipos Request (requisição) e Response (resposta)
    (req:Request,res:Response)=> {
        //obtém query param
        const x = req.query.num;
        //obtem route param
        const y = req.params.id;
        res.send(`Resultado: ${Number(x) + Number(y)}`);
    }
);
export default Roteador;