let pergunta = document.querySelector("div.pergunta")
let seletor = -1
let vida = 0
let pontuacao = 0
let respostaCerta = null
let respostaRecebida = null


function perguntar(){
    let requisicao = await fetch("assets/quiz.json")
    let jsonQuizData = await requisicao.json()
    pergunta.innerText = jsonQuizData[seletor].questao
    respostaCerta = jsonQuizData[seletor].resposta
    if(respostaCerta==respostaRecebida){
        acertou()
    }
    else{
        errou()
    }
    seletor++
    return
}
function acerto(){

}