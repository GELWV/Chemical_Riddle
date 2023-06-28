const requisicao = await fetch("assets/quiz.json")
const jsonQuizData = await requisicao.json()
let pergunta = document.querySelector("div.pergunta")
let seletor = -1 //seleciona a pergunta no JSON
let vida = 0
let pontuacao = 0
let respostaCerta = null
let respostaRecebida = null
let perguntasJaForam = [1]
let acerto = false //booleana de controle de acerto
let Erros = 1 //variavel que eh usada para calcular a pontuacao

function perguntar(){
    pergunta.innerText = jsonQuizData[seletor].questao
    respostaCerta = jsonQuizData[seletor].resposta
    if(respostaCerta==respostaRecebida){
        acertou()
    }
    else{
        errou()
    }
    return
}
function acertou(){
    acerto = true
    Erros = 1
    pontuacao =+ 1/Erros
    perguntasJaForam.push(seletor)
    seletor = aleatorio()
    return
}
function errou(){
    acerto = false
    Erros =+ 1
    vida--
    return
}
function aleatorio(){
    let X = Math.floor(Math.random()*118)+1
    if(perguntasJaForam.includes(X)) {
        aleatorio()
    }
    return X
}