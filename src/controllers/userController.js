var userModel = require('../models/userModel');

function login(req,res){
    var email = req.body.email;
    var senha = req.body.senha;

    console.log(userModel.autenticarLogin(email,senha));


    // // exemplo se estiver errado
    // if(usuario != 'admin'){
    //     res.render('login', {
    //          error: 'Credenciais incorretas. Por favor, tente novamente.' 
    //         });
    //     return;
    // }
    // continua se tiver certo..
    // res.render('dashboard', {
    //     usuario: `bem vindo ao dashboard ${usuario}` 
    // });
    
}

module.exports = {
    login
}