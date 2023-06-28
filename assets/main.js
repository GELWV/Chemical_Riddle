const requisicao = await fetch("assets/quiz.json")
const jsonQuizData = await requisicao.json()
let pergunta = document.querySelector("div.pergunta")
let seletor = -1 //seleciona a pergunta no JSON
let vida = 0
let pontuacao = 0
let respostaCerta = null
let respostaRecebida = null
let perguntasJaForam = [null]
let acerto = false //booleana de controle de acerto
let Erros = 1 //variavel que eh usada para calcular a pontuacao
let EmJogo = false

function perguntar(){
    pergunta.innerText = jsonQuizData[seletor].questao
    respostaCerta = jsonQuizData[seletor].resposta
    //respostaRecebida = 
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
}
function errou(){
    acerto = false
    Erros =+ 1
    vida--
}
function aleatorio(){
    let X = Math.floor(Math.random()*118)+1
    if(perguntasJaForam.includes(X)) {
        aleatorio()
    }
    return X
}
function reset(){
    acerto = false
    perguntasJaForam = [null]
    respostaCerta = null    
    respostaRecebida = null
    vida = 10
    Erros = 1
    pontuacao = 0
    seletor = aleatorio()
    EmJogo = true
}
function Default(){
    pergunta = document.querySelector("div.pergunta")
    seletor = -1 
    vida = 0
    pontuacao = 0
    respostaCerta = null
    respostaRecebida = null
    perguntasJaForam = [null]
    acerto = false 
    Erros = 1
    EmJogo = false
}

//popup de start
while(perguntasJaForam.length == 118 && vida > 0){
    perguntar()
}
if(perguntasJaForam.length == 118){
    //popup de vitoria
}
if(vida<=0){
    //popup de derrota
}
Default()
