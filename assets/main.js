const pergunta = document.querySelector("div.pergunta")
const requisicao = await fetch("assets/quiz.json")
const jsonQuizData = await requisicao.json()
pergunta.innerText = jsonQuizData[0].questao