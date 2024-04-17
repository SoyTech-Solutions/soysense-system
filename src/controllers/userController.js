var userModel = require('../models/userModel');

function login(req,res){
    var usuario = req.body.usuario;
    var senha = req.body.senha;


    // exemplo se estiver errado
    if(usuario != 'admin'){
        res.render('login', {
             error: 'Credenciais incorretas. Por favor, tente novamente.' 
            });
        return;
    }

    // continua se tiver certo..
    res.render('dashboard', {
        usuario: `bem vindo ao dashboard ${usuario}` 
    });
}

module.exports = {
    login
}