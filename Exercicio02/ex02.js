let cxNum1 = document.querySelector('#cxNum1')
let cxNum2 = document.querySelector('#cxNum2')
let formulario = document.querySelector('form')

let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar = document.querySelector('#btnLimpar')

let alerta = document.querySelector('#alerta')
let resultado = document.querySelector('#resultado')
let aviso = document.querySelector('#aviso')

function calcularMedia(n1 , n2){
    return (n1 + n2) / 2
}

function situacaoFinal(mediaFinal) {
    let situacaoFinal = ''

    if(mediaFinal >= 7){
        situacaoFinal = 'Aprovado'
    } else if(mediaFinal <= 3){
        situacaoFinal = 'Reprovado'
    } else {
        situacaoFinal = 'Recuperação'
    }
    return situacaoFinal
}

function validarNumero(){
    let num1 = cxNum1.value
    let num2 = cxNum2.value
    if(num1 < 0 || num1 > 10 || num2 < 0 || num2 > 10) {
        formulario.reset()
        aviso.textContent = 'Digite uma nota entre 0.0 e 10.0'
        aviso.classList.add('aviso')
        setTimeout(function() {
            aviso.textContent = ''
            aviso.classList.remove('aviso')
        }, 5000)
    }

}

function estilo(situacaoFinal){
    switch(situacaoFinal) {

        case 'Aprovado':
            alerta.classList.remove('reprovado')
            alerta.classList.remove('recuperacao')
            alerta.classList.add('aprovado')
            break

        case 'Reprovado':
            alerta.classList.remove('aprovado')
            alerta.classList.remove('recuperacao')
            alerta.classList.add('reprovado')
            break

        case 'Recuperação':
            alerta.classList.remove('reprovado')
            alerta.classList.remove('aprovado')
            alerta.classList.add('recuperacao')
            break

        default:
            console.log('Situacao indefinida')
    }
}

btnCalcular.addEventListener('click', function(e) {

    let num1 = parseFloat(cxNum1.value)
    let num2 = parseFloat(cxNum2.value)
    let total = calcularMedia(num1, num2)

    resultado.value = parseFloat(total)
    alerta.value = situacaoFinal(total)
    estilo(situacaoFinal(total))

    e.preventDefault()
})

btnLimpar.addEventListener('click', () =>{
    alerta.classList.remove('aprovado')
    alerta.classList.remove('reprovado')
    alerta.classList.remove('recuperacao')
    formulario.reset()
})