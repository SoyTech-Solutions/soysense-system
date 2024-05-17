const express = require('express');
const router = express.Router();
var userController = require("../controllers/userController");

// Rota raiz dentro do grupo /
router.get('/', function(req, res) {
    res.render('login', { error: null });
});

router.post('/login', function(req,res){
    if (req.method === 'POST') {
        // A solicitação é do tipo POST, então você pode continuar com o processamento
        userController.login(req,res);
    } else {
        // Se a solicitação não for do tipo POST, envie uma resposta de erro
        res.redirect('/');
    }

});

module.exports = router;