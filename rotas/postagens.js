const express = require('express');
const router = express.Router();

router.get('/postagens', (req, res) => {
    res.json([{
        "alunos": "joatan",
        "Professor": "Shinigamer1",
        "Diretor" : "DG01_"
    },
    {
        "alunos": "joatan",
        "Professor": "Shinigamer1",
        "Diretor" : "DG01_"
    },
    {
        "Mestre": "Smook",
        "Professor": "Paulo_Kiitsu",
        "Diretor" : "Hardbits",
        "Jedi" : "Fabricio",
        "Analista": "00200712"

    }]);
});




module.exports = router;