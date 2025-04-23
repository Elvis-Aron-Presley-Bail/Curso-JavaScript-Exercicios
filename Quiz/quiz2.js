let numPerg = document.querySelector('#numPerg')
let pergunta = document.querySelector('#pergunta')

let perENum = document.querySelector('#perENum')

let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

let pontosAtual = document.querySelector('#pontosAtual')
let alternativas = document.querySelector('#alternativas')
let progresso = document.querySelector('#progresso')

let numQuestao = document.querySelector('#numQuestao')
let totalDeQuestoes = document.querySelector('#totalDeQuestoes')

let pontos = 0
let placar = 0

const q0 = {
    numeroQuestao : 0,
    pergunta : 'pergunta',
    alternativaA : "alternativaA",
    alternativaB : "alternativaB",
    alternativaC : 'alternativaC',
    resposta : 'resposta'
}

const q1 = {
    numeroQuestao : 1,
    pergunta : 'Quanto é 1 + 1?',
    alternativaA : "1",
    alternativaB : "2",
    alternativaC : '45290',
    resposta : '2'
}

const q2 = {
    numeroQuestao : 2,
    pergunta : 'Qual é a capital do Brasil?',
    alternativaA : "Marte",
    alternativaB : "Lua",
    alternativaC : 'Brasília',
    resposta : 'Brasília'
}

const q3 = {
    numeroQuestao : 3,
    pergunta : 'Qual número é maior?',
    alternativaA : "4",
    alternativaB : "7",
    alternativaC : '9 trilhões',
    resposta : '9 trilhões'
}

const todasQuestoes = [q0, q1, q2, q3]

let totalDeQuestoesNum = totalDeQuestoes.textContent = (todasQuestoes.length)-1

numPerg.textContent = q1.numeroQuestao
pergunta.textContent = q1.pergunta
a.textContent = q1.alternativaA
b.textContent = q1.alternativaB
c.textContent = q1.alternativaC
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

function proximaQuestao(nQuestao) {
    numPerg.textContent = todasQuestoes[nQuestao].numeroQuestao
    pergunta.textContent = todasQuestoes[nQuestao].pergunta
    a.textContent = todasQuestoes[nQuestao].alternativaA
    b.textContent = todasQuestoes[nQuestao].alternativaB
    c.textContent = todasQuestoes[nQuestao].alternativaC
    a.setAttribute('value', nQuestao + 'A')
    b.setAttribute('value', nQuestao + 'B')
    c.setAttribute('value', nQuestao + 'C')
}

function verificarSeAcertou(nQuestao, resposta) {
    let numDaQuestao = nQuestao.value
    let respostaEscolhida = resposta.textContent
    let certa = todasQuestoes[numDaQuestao].resposta

    if(respostaEscolhida == certa) {
        console.log('voce acertou')
        pontos += 10
    } else {
        console.log('voce errou')
    }

    placar = pontos

    pontosAtual.textContent = placar
    numQuestao.textContent = numDaQuestao+1

    setTimeout(() => {
        
        proxima = numDaQuestao + 1

        if(proxima > totalDeQuestoesNum){
            console.log('fim de jogo')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }

    }, 0);
}

function fimDoJogo(){
    perENum.textContent = ''
    alternativas.textContent = ''
    progresso.textContent = ''

    setTimeout(() => {
        location.reload()
    }, 5000);
}