const express = require('express');
const router = express.Router();

// Rota raiz dentro do grupo /dashboard
router.get('/', function(req, res) {
    if (req.session.authenticated) {
        const userId = req.query.userId; 
        res.render('dashboard', { userId: userId }); // Defina o valor de userId conforme necessário
    }else{
        res.redirect('/');
    }
});
module.exports = router;