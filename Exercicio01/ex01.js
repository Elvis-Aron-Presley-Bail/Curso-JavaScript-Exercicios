let formulario = document.querySelector('form')

let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxPeso = document.querySelector('#peso')
let cxAltura = document.querySelector('#altura')
let cxImc = document.querySelector('#resultadoImc')
let aviso = document.querySelector('#aviso')
let dados = document.querySelectorAll('.pessoa')

let btnEnviar = document.querySelector('#btnEnviar')

btnEnviar.addEventListener('click', function(e) {

    let nome = cxNome.value
    let idade = cxIdade.value
    let peso = cxPeso.value
    let altura = cxAltura.value
    let imc = (peso / (altura * altura)).toFixed(1)

    let condicao = condiImc(imc)

    let pessoa = {
        nome : nome ,
        idade : idade ,
        peso : peso ,
        altura : altura ,
        imc : imc ,
        condicao : condicao
    }

    dados[1].textContent = `Seu nome é ${pessoa.nome}`
    dados[2].textContent = `Você tem ${pessoa.idade} anos`
    dados[3].textContent = `Seu peso é: ${pessoa.peso} quilos`
    dados[4].textContent = `Sua altura é ${pessoa.altura} metros`
    dados[5].textContent = `Seu imc é ${pessoa.imc}. Você está ${pessoa.condicao}`

    e.preventDefault()
})

function condiImc(imc) {
    let situacao = ''
    if (imc > 20){
        situacao = 'acima do peso'
    } else {
        situacao = 'abaixo do peso'
    }
    return situacao
}