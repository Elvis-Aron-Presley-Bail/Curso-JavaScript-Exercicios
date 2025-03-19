let cxNota1 = document.querySelector('#nota1')
let cxNota2 = document.querySelector('#nota2')

let formu = document.querySelector('form')

let btnCalcular = document.querySelector('#btnCalcular')
let btnLimpar   = document.querySelector('#btnLimpar')

let mediaFinal = document.querySelector('#mediaFinal')

let situacao = document.querySelector('#situacao')

function calcularMedia(nota1,nota2){
    return ((nota1 + nota2) / 2)
}

btnCalcular.addEventListener('click', function(e) {

    let nota1 = Number(cxNota1.value)
    let nota2 = Number(cxNota2.value)
    let media = calcularMedia(nota1,nota2)

    mediaFinal.value = media
    situacao.textContent = mensagem(media)

    console.log(media)

    e.preventDefault()

})

btnLimpar.addEventListener('click', function() {

    formu.reset()

    mediaFinal.value = ''

    situacao.textContent = ''

    situacao.classList.remove('aprovado')
    situacao.classList.remove('reprovado')
    situacao.classList.remove('recuperacao')

})

function validarNumero(){

    let nota1 = cxNota1.value
    let nota2 = cxNota2.value

    if (nota1 > 10 || nota1 < 0 || nota2 > 10 || nota2 < 0){
        formu.reset()
        situacao.textContent = 'Insira um valor entre 0.0 e 10.0'
        situacao.classList.add('alerta')
        setTimeout(() => {
            situacao.textContent = ''
            situacao.classList.remove('alerta')
        }, 2000);
        
    } else {
        console.log('tudo bem')
    }

    return
}

function mensagem(media){

    let recado = ''
    
    if(media >= 7){
        recado = 'Aprovado!'
        situacao.classList.add('aprovado')
    } else if(media <= 3){
        recado = 'Reprovado!'
        situacao.classList.add('reprovado')
    } else if(media < 7 && media > 3){
        recado = 'Recuperação!'
        situacao.classList.add('recuperacao')
    } else {
        recado = 'ERRO'
    }

    return recado

}