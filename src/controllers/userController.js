var userModel = require('../models/userModel');

function login(req,res){
    var email = req.body.email;
    var senha = req.body.senha;
    
    userModel.autenticarLogin(email,senha).then((resultadoQuery)=>{
            console.log(resultadoQuery.success);
            if(resultadoQuery.success){
                req.session.authenticated = true;
                req.session.userId = resultadoQuery.userId
                res.redirect(`/dashboard?userId=${resultadoQuery.userId}`);
            }else{
                res.render('login', {error : 'acessa certo mano'})
            }

        }
    );
    
}

module.exports = {
    login
}