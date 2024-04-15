var userModel = require('../models/userModel');

function login(req,res){
    var usuario = req.body.usuario;
    var tipoUsuario = req.body.tipoUsuario;
    var senha = req.body.senha;


    // exemplo se estiver errado
    if(usuario != 'jean'){
        res.render('login', {
             error: 'Credenciais incorretas. Por favor, tente novamente.' 
            });
        return;
    }

    // continua se tiver certo..
    res.render('dashboard', {
        usuario: 'bem vindo ao dashboard.' 
    });
}

module.exports = {
    login
}