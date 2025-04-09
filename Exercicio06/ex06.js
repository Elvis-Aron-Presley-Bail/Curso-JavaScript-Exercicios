let titulo = document.querySelector('h1') // QUIZ
let instrucoes = document.querySelector('#instrucoes') // Leia a questao...
let aviso = document.querySelector('#aviso') // Questao '' do total de '' questoes

let pontos = 0 // pontos para o placar
let placar = 0 // placar

// PERGUNTA
let numQuestao = document.querySelector('#numQuestao') // Numero da questao ao lado da pergunta
let pergunta = document.querySelector('#pergunta') // Pergunta em si

// ALTERNATIVAS
let a = document.querySelector('#a')
let b = document.querySelector('#b')
let c = document.querySelector('#c')

// ARTICLE COM A CLASS QUESTOES
let articleQuestoes = document.querySelector('.questoes') // Engloba a pergunta e as alternativas

// OL LI COM AS ALTERNATIVAS
let alternativas = document.querySelector('#alternativas') // Engloba as 3 alternativas

// CRIANDO AS PERGUNTAS

const q0 = {
    numQuestao   : 0,
    pergunta     : "Pergunta",
    alternativaA : "Alternativa A",
    alternativaB : "Alternativa B",
    alternativaC : "Alternativa C",
    correta      : "0",
}

const q1 = {
    numQuestao   : 1,
    pergunta     : 'A capital do Brasil é...',
    alternativaA : 'Rio de Janeiro',
    alternativaB : 'Brasilia',
    alternativaC : 'São Paulo',
    correta      : 'Brasilia',
}

const q2 = {
    numQuestao   : 2,
    pergunta     : "O Brasil se localiza em qual continente?",
    alternativaA : "África",
    alternativaB : "Europa",
    alternativaC : "América",
    correta      : "América",
}

const q3 = {
    numQuestao   : 3,
    pergunta     : "Nascente é o mesmo que...",
    alternativaA : "Sul",
    alternativaB : "Leste",
    alternativaC : "Oeste",
    correta      : "Leste",
}

// CONSTANTE COM UM ARRAY DE OBJETOS COM TODAS AS QUESTOES
const questoes = [q0,q1,q2,q3]

let numero = document.querySelector('#numero') // Questao numero '#numero' de '#total'
let total  = document.querySelector('#total') // Questao numero '#numero' de '#total'

numero.textContent = q1.numQuestao // Mostrar que o número da questao é 1

let totalDeQuestoes = (questoes.length)-1 // Faz o calculo de quantas questoes sao ao todo

total.textContent = totalDeQuestoes

// MONTAR A 1a QUESTAO COMPLETA, PARA INICIAR O QUIZ

numQuestao.textContent = q1.numQuestao // Aparecer Numero da questao ao lado da pergunta
pergunta.textContent = q1.pergunta // Aparecer a primeira pergunta
a.textContent = q1.alternativaA // Escreve a alternativa A na tela
b.textContent = q1.alternativaB // Escreve a alternativa B na tela
c.textContent = q1.alternativaC // Escreve a alternativa C na tela

// CONFIGURAR O VALUE INICIAL DA 1a QUESTAO COMPLETA
a.setAttribute('value', '1A')
b.setAttribute('value', '1B')
c.setAttribute('value', '1C')

// PARA MONTAR AS PROXIMAS QUESTOES AUTOMATICAMENTE
function proximaQuestao(nQuestao) {
    numero.textContent = nQuestao // Ver em qual questao estou
    numQuestao.textContent = questoes[nQuestao].numQuestao // Aparecer Numero da questao ao lado da pergunta
    pergunta.textContent   = questoes[nQuestao].pergunta // Aparecer a pergunta
    a.textContent = questoes[nQuestao].alternativaA // Escreve a alternativa A na tela
    b.textContent = questoes[nQuestao].alternativaB // Escreve a alternativa B na tela
    c.textContent = questoes[nQuestao].alternativaC // Escreve a alternativa C na tela
    a.setAttribute('value', nQuestao+'A')
    b.setAttribute('value', nQuestao+'B')
    c.setAttribute('value', nQuestao+'C')
}

function bloquearAlternativas() {
    a.classList.add('bloqueado')
    b.classList.add('bloqueado')
    c.classList.add('bloqueado')
}

function desbloquearAlternativas() {
    a.classList.remove('bloqueado')
    b.classList.remove('bloqueado')
    c.classList.remove('bloqueado')
}

function verificarSeAcertou(nQuestao, resposta) {

    let numeroDaQuestao = nQuestao.value // Verifica em que questao está
    console.log('Questao' + numQuestao)

    let respostaEscolhida = resposta.textContent // Ve qual alternativa eu cliquei

    let certa = questoes[numeroDaQuestao].correta // Verifica qual é a resposta correta

    if(respostaEscolhida == certa) {
        console.log('Acertou')
        pontos += 10
    } else {
        console.log('Errou')
    }

    // Atualizar placar
    placar = pontos // Calcula quantos pontos voce tem
    instrucoes.textContent = 'Pontos' + placar // Mostra no placar quantos pontos voce tem

    // Bloquear a escolha de opçoes apos responder uma vez
    bloquearAlternativas()

    setTimeout(() => {
        proxima = numeroDaQuestao+1 // Faz ir para a proxima questao

        if(proxima > totalDeQuestoes) {
            console.log('Fim de jogo')
            fimDoJogo()
        } else {
            proximaQuestao(proxima)
        }

    }, 250);

}

function fimDoJogo() {

    instrucoes.textContent = 'Fim de Jogo' // Mostra escrito na tela
    numQuestao.textContent = '' // Para de exibir o numero da questao

    let pont = ''

    if(pontos < 10) {
        pont = ''
    } else if(pontos > 10) {
        pont = 's'
    } else {
        console.log('Tudo certo')
    }

    aviso.textContent = 'Voce conseguiu ' + pontos + ' ponto' + pont + '.'

    a.textContent = ''
    b.textContent = ''
    c.textContent = ''

    a.setAttribute('value', '0')
    b.setAttribute('value', '0')
    c.setAttribute('value', '0')

    // OCULTAR O ARTICLE DA QUESTAO
    articleQuestoes.style.display = 'none'

    setTimeout(() => {
        pontos = 0 // Zerar placar
        location.reload(); // Recarrega a pagina
    }, 5000); // Exibe isso por 5 segundos

}