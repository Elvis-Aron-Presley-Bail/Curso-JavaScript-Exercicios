let cxnome   = document.querySelector('#nome')
let cxidade  = document.querySelector('#idade')
let cxaltura = document.querySelector('#altura')
let cxpeso   = document.querySelector('#peso')

let formu = document.querySelector('form')

let res = document.querySelector('.apareceRes')

let resultadoImc = document.querySelector('#resultadoImc')

let pessoa = document.querySelectorAll('#pessoa')

let btnEnviar = document.querySelector('#btnEnviar')
let btnLimpar = document.querySelector('#btnLimpar')

function calcularImc(num1, num2) {
    return (num1 / (num2 * num2))
}

btnEnviar.addEventListener('click', function(e) {

    let nome   = cxnome.value
    let idade  = cxidade.value
    let peso   = cxpeso.value
    let altura = cxaltura.value

    let num1 = cxaltura.value
    let num2 = cxpeso.value
    let imc  = calcularImc(num2,num1)

    let condicao = condImc(imc)

    console.log(imc)

    resultadoImc.value = imc

    let info = {
        
        pessoa : pessoa ,
        nome : nome ,
        idade : idade ,
        altura : altura , 
        peso : peso ,
        imc : imc ,
        condicao : condicao

    }

    pessoa[0].textContent = `Seu nome é ${info.nome}`
    pessoa[1].textContent = `Você tem ${info.idade} anos`
    pessoa[2].textContent = `Seu peso é ${info.peso} Kg`
    pessoa[3].textContent = `Sua altura é ${info.altura} metros`
    pessoa[4].textContent = `Seu imc é ${info.imc}. ${info.condicao}`

    e.preventDefault()
})

function condImc(imc){
    valor = ''

    if(imc > 20){
        valor = 'Você está GORDO'
        res.classList.add('obeso')

    } else if(imc < 10) {
        valor = 'Você está MAGRO'
        res.classList.add('magro')
    } else{
        valor = 'Você está saudável'
        res.classList.add('ideal')
    }

    return valor
}

btnLimpar.addEventListener('click', function() {

    pessoa[0].textContent = ''
    pessoa[1].textContent = ''
    pessoa[2].textContent = ''
    pessoa[3].textContent = ''
    pessoa[4].textContent = ''

    res.classList.remove('obeso')
    res.classList.remove('magro')
    res.classList.remove('ideal')

    resultadoImc.value = 0.0

    formu.reset()
})