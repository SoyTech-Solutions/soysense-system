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
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    
    userModel.autenticarLogin(email,senha).then((resultadoQuery)=>{
            console.log(resultadoQuery.success);
            if(resultadoQuery.success){
                req.session.authenticated = true
                res.json({
                    id: resultadoQuery.userId
                });
            }else{
                res.json({
                    id: 0
                });
            }

        }
    );
    
}
module.exports = {
    login
}