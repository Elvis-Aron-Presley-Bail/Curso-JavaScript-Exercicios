let numPerg = document.querySelector('#numPerg')
let perguntaTxt = document.querySelector('#perguntaTxt')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

let questaoAtual = document.querySelector('#questaoAtual')
let totalDeQuestoes = document.querySelector('#totalDeQuestoes')

let pontos = document.querySelector('#pontos')

let pontuacao = 0

let questaoAgora = 0

const URL = 'quiz4.json'

    fetch(URL)
    .then( resposta => resposta.json())
    .then( dados => {
        dados.perguntas.map(questao => {
            numPerg.textContent = questao.numeroQuestao
            perguntaTxt.textContent = questao.pergunta
        })
    })


