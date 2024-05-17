const formLogin = document.querySelector('#form_login');

formLogin.addEventListener('submit',(event)=>{
    event.preventDefault();

    var emailVar = email_input.value;
    var senhaVar = senha_input.value;

    if (emailVar == "" || senhaVar == "") {
        alert('campos vazios')
        return false;
    }

    console.log("FORM USUÁRIO: ", emailVar);
    console.log("FORM SENHA: ", senhaVar);

    fetch("/", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            emailServer: emailVar,
            senhaServer: senhaVar
        })
    }).then(function (resposta) {
        console.log("ESTOU NO THEN DO entrar()!")

        if (resposta.ok) {
            console.log(resposta);

            resposta.json().then(json => {
                console.log(json);
                console.log(JSON.stringify(json));
                sessionStorage.ID_USUARIO = json.id;

                if(sessionStorage.ID_USUARIO > 0){
                    setTimeout(function () {
                        window.location = "/dashboard";
                    }, 1000); // apenas para exibir o loading
                }else{
                    alert('credenciais incorreta')
                }


            });

        } else {

            console.log("Houve um erro ao tentar realizar o login!");
        }

    }).catch(function (erro) {
        console.log(erro);
    })

    return false;
})