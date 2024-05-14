var database = require('../configs/database/connection');

function autenticarLogin(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", email, senha);

    console.log("User Model accessed > function autenticarLogin");

    var sqlCommand = `
        SELECT idUsuario FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Running SQL command: \n" + sqlCommand);

    return database.execute(sqlCommand);
}

module.exports = {
    autenticarLogin,
};