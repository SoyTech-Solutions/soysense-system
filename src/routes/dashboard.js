const express = require('express');
const router = express.Router();

// Rota raiz dentro do grupo /dashboard
router.get('/', function(req, res) {
    if (req.session.authenticated) {
        const userId = req.query.userId; 
        res.render('dashboard', { userId: userId }); // Defina o valor de userId conforme necessário
    }else{
        // invador pilantra safado 
        res.render('login', {error : 'tentando acessar seu pilantra, faz o login fi'})
    }
});
module.exports = router;