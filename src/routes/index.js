const express = require('express');
const router = express.Router();
var userController = require("../controllers/userController");

// Rota raiz
router.get('/', function(req, res) {
    res.render('login', { error: null });
});

router.post('/login', function(req,res){
    userController.login(req,res);
});

module.exports = router;