const express = require('express');
const router = express.Router();

router.get('/comentarios/:postid', (req, res) => {
    res.json([{
       "conteudo": "Algum conteudo desconhecido de agora a pouco",
       "Autor": "Desconhecido"
    },
    {
        "conteudo": "Algum conteudo desconhecido de agora a pouco",
        "Autor": "Desconhecido"
    },
    {
        "conteudo": "Algum conteudo desconhecido de agora a pouco",
        "Autor": "Desconhecido"

    }]);
});

module.exports = router;