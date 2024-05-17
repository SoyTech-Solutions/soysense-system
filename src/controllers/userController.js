var userModel = require('../models/userModel');

// function login(req,res){
//     var email = req.body.email;
//     var senha = req.body.senha;
    
//     userModel.autenticarLogin(email,senha).then((resultadoQuery)=>{
//             console.log(resultadoQuery.success);
//             if(resultadoQuery.success){
//                 req.session.authenticated = true;
//                 req.session.userId = resultadoQuery.userId
//                 res.redirect('/dashboard', { userId: req.session.userId })
//             }else{
//                 res.render('login', {error : 'acessa certo mano'})
//             }

//         }
//     );
    
// }

function login(req,res){
    var email = req.body.email;
    var senha = req.body.senha;
    
    userModel.autenticarLogin(email,senha).then((resultadoQuery)=>{
            console.log(resultadoQuery.success);
            if(resultadoQuery.success){
                console.log('logado com sucesso')
            }else{
                res.render('login', {error : 'Usuário ou senha inválida. Tente novamente!'})
            }

        }
    );
    
}
module.exports = {
    login
}