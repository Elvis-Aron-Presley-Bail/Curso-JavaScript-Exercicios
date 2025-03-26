let cxNumero = document.querySelector('#numero')

let btnConverter = document.querySelector('#btnConverter')
let btnLimpar = document.querySelector('#btnLimpar')

let radios = document.getElementsByName('selecionar')

function bloquearBotao(){
    if(cxNumero.value == 0 || cxNumero == null || cxNumero == '') {
        btnConverter.setAttribute('disabled' , 'disabled')
    }
}

function liberarBotao(){
    if(cxNumero.value > 0){
        btnConverter.removeAttribute('disabled')
        btnConverter.style.backgroundColor = yellow
    } else{
        console.log('botao bloqueado')
    }
}

