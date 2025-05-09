let nomeTxt = document.querySelector('#nome')
let alturaTxt = document.querySelector('#altura')
let pesoTxt = document.querySelector('#peso')

let res = document.querySelector('#res')

function calcular() {
    
    let nome = nomeTxt.value
    let altura = alturaTxt.value
    let peso = pesoTxt.value

    let imc = (peso / (altura * altura)).toFixed(2)
    let condicao = ''

    if(imc < 18.5 && imc > 15) {
        condicao = 'abaixo do peso'
    } else if(imc > 18.5 && imc < 24.9) {
        condicao = 'com o peso ideal'
    } else if(imc > 25 && imc < 29.9) {
        condicao = 'acima do peso'
    } else {
        condicao = 'brincando?'
    }

    res.textContent = `${nome}, seu IMC é ${imc} e você está ${condicao}.`

}