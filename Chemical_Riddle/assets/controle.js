var Resposta_certa 
var Resposta_usuario 
var Pergunta 
var Controle_pergunta = 1
var Acertou = false
var Pontuacao = 0
var Erros = 1 //precisa deixar em 1, pois a pontuacao eh dividida usando esse valor
var Vidas = 10

function restart(){
    Resposta_certa = null
    Resposta_usuario = null
    Pergunta = null
    Controle_pergunta = 1
    Acertou = false
    Pontuacao = 0
    Erros = 1 //precisa deixar em 1, pois a pontuacao eh dividida usando esse valor
    Vidas = 10
}
function comparar(){
    while(Acertou == false){
        if(Resposta_usuario == Resposta_certa){
            Controle_pergunta =+ 1
            Acertou = true
            Erros = 1
            Pontuacao =+ 1/Erros
        }
        else if(Vida >= 1){
            Erros =+ 1
            Acertou = false
            Vida =- 1
        }else{
            game_over()
        }
    }

}
function game_over(){
    Controle_pergunta = 0
}

function perguntar(){
    let Exibir_pergunta = document.getElementById("pergunta")
    let botao = document.querySelector(footer div#botao)
    Pergunta = "teste"
    Resposta_certa = "teste"
    Exibir_pergunta.innerHTML = Pergunta
    botao.innerText = "teste"
}