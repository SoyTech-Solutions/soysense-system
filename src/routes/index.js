const express = require('express');
const router = express.Router();
var userController = require("../controllers/userController");

// Rota raiz dentro do grupo /
router.get('/', function(req, res) {
    res.render('login');
});

router.post('/', function(req,res){
    // A solicitação é do tipo POST, então você pode continuar com o processamento
    userController.login(req,res);

});

module.exports = router;