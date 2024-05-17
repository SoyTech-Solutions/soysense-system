var userModel = require('../models/userModel');

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