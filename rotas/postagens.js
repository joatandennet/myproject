const express = require('express');
const router = express.Router();
const ibmdb = require('ibm_db');

router.get('/postagens', (req, res) => {

    ibmdb.open("DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-03.services.dal.bluemix.net;UID=kkc68088;PWD=h+d64nk4pb5gnzmm;PORT=50000;PROTOCOL=TCPIP", (err, conn) => {
        if(err){
            console.log(err);
        }

        conn.query('select * from KKC68088.POSTAGENS',(err,data) => {
            if(err){
                console.log(err);
            }else{
                console.log(data);
                res.send(data);
            }
        });

        conn.close(() => {
            console.log('conexão encerrada');
        });
    });
        
});

router.get('/postagens/nova', (req, res) => {

    ibmdb.open("DATABASE=BLUDB;HOSTNAME=dashdb-txn-sbox-yp-dal09-03.services.dal.bluemix.net;UID=kkc68088;PWD=h+d64nk4pb5gnzmm;PORT=50000;PROTOCOL=TCPIP", (err, conn) => {
        if(err){
            console.log({error:err, mensagem: "conexão falhou!"});
        }

        conn.query(`INSERT INTO KKC68088.POSTAGENS (TITULO, CONTEUDO, AUTOR) VALUES ('${req.query.titulo}','${req.query.conteudo}','${req.query.autor}')`, (err,data) => {

            if(err){
                console.log({error:err, mensagem:"error de inserção"});
                
            }else{
                console.log({data:data, mensagem:"dados inseridos com sucesso"}); 
                res.send(data);
            }

            conn.close(() => {
                console.log('conexão encerrada');
            });

        });
    
    });

});


module.exports = router;