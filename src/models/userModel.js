var database = require('../configs/database/connection');

function autenticarLogin(email, senha) {
    console.log("User Model accessed > function autenticarLogin");

    var sqlCommand = `
        SELECT idUsuario FROM usuario WHERE email = "${email}" AND senha = "${senha}";
    `;
    console.log("Running SQL command: \n" + sqlCommand);

    return database.execute(sqlCommand).then(resultadoQuery => {
    
        if (resultadoQuery && resultadoQuery.length > 0) {
            // Se houver pelo menos um resultado, significa que o login foi bem-sucedido
            // Após o login bem-sucedido
            return {
                 success: true, 
                 userId: resultadoQuery[0].idUsuario 
            };
        } else {
            // Se o resultado estiver vazio, significa que o login falhou
            return { 
                success: false,
                 message: 'Credenciais de login inválidas.' 
            };
        }
    })
    .catch(error => {
        // Se ocorrer um erro durante a execução da consulta SQL, capture e manipule-o aqui
        console.error('Erro ao autenticar login:', error);
        return { success: false, message: 'Ocorreu um erro durante a autenticação do login.' };
    });;
}

module.exports = {
    autenticarLogin,
};