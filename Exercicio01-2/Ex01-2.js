let cxNome = document.querySelector('#nome')
let cxIdade = document.querySelector('#idade')
let cxAltura = document.querySelector('#altura')
let cxPeso = document.querySelector('#peso')

let pessoa = document.querySelectorAll('.pessoa')

let btnEnviar = document.querySelector('#btnEnviar')

btnEnviar.addEventListener('click', function(e) {

    let nome = cxNome.value
    let idade = cxIdade.value
    let altura = cxAltura.value
    let peso = cxPeso.value

    let imc = (peso / (altura * altura)).toFixed(1)

    let estado = seuEstado(imc)

    pessoa[0].textContent = `Seu nome é ${nome}`
    pessoa[1].textContent = `Sua idade é ${idade}`
    pessoa[2].textContent = `Sua altura é ${altura} metros`
    pessoa[3].textContent = `Seu peso é ${peso} quilos`
    pessoa[4].textContent = `Seu imc é ${imc}. Você está ${estado}`

    e.preventDefault()
})

function seuEstado(imc) {
    let resultado = ''
    if (imc < 20){
        resultado = 'abaixo do peso'
   } else {
        resultado = 'acima do peso'
    }
    return resultado
}