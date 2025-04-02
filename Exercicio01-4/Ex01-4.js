let cxNome = document.querySelector('#cxnome')
let cxIdade = document.querySelector('#cxidade')
let cxAltura = document.querySelector('#cxaltura')
let cxPeso = document.querySelector('#cxpeso')

let formulario = document.querySelector('form')

let cxRes = document.querySelector('#caixonaRes')

let res = document.querySelectorAll('.resultado')

let imcCaixa = document.querySelector('#imccaixa')

function calcularImc(num1, num2){
    return (num1 / (num2 * num2))
}

function situacao(imc){

    if(imc > 30){
        estadoImc = 'obeso'
        console.log('obeso')
    } else if(imc < 20){
        estadoImc = 'magro'
        console.log('magro')
    } else {
        estadoImc = 'bom'
        console.log('bom')
    }

    return estadoImc

}

function enviar(){

    let altura = parseFloat(cxAltura.value)
    let peso   = parseFloat(cxPeso.value)
    let imc = calcularImc(peso,altura)

    imcCaixa.value = imc.toFixed(2)

    formatacaoImc()

    res[0].textContent = `Seu nome é ${cxNome.value}`
    res[1].textContent = `Voce tem ${cxIdade.value}`
    res[2].textContent = `Voce tem ${peso} quilos`
    res[3].textContent = `Sua altura é ${altura} metros`
    res[4].textContent = `Seu imc é ${imc.toFixed(2)}`

    console.log(imc)

}

function formatacaoImc(estadoImc){

    let estado = ''

    switch (estadoImc) {

        case 'obeso': 
            estado = 'gordo'
            break
        
        case 'magro':
            estado = 'magro'
            break
        
        case 'bom':
            estado = 'bom'    

        default: 
        console.log('erro')
        
    }

    return estado

}

function limpar(){
    formulario.reset()
    res[0].textContent = ''
    res[1].textContent = ''
    res[2].textContent = ''
    res[3].textContent = ''
    res[4].textContent = ''
}