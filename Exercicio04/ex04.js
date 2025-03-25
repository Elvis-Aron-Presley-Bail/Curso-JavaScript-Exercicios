let cxNumero = document.querySelector('#num')

let btnChutar = document.querySelector('#btnChutar')
let btnMusica = document.querySelector('#btnMusica')

let numeroSecreto = 0

let situacao = ''

let min = 0
let max = 10

let mensagem = document.querySelector('#mensagem')

let musica = document.querySelector('#musica')

function gerar(){

    numeroSecreto = Math.floor(Math.random() * (max - min + 1)) + min

    console.log(numeroSecreto)

}

btnChutar.addEventListener('click' , function(){

    let numeroChute = cxNumero.value

    if(numeroChute == numeroSecreto ) {
        mensagem.classList.add('acertou')
        mensagem.textContent = 'Acertou'
        btnChutar.setAttribute('disabled', 'disabled')
        gerar()
        console.log('Voce acertou')
    } else if(numeroChute < 0 || numeroChute > 10){
        btnChutar.setAttribute('disabled', 'disabled')
        mensagem.classList.add('alerta')
        mensagem.textContent = 'Digite um numero entre 0 e 10'
    } else if(numeroChute != numeroSecreto){
        btnChutar.setAttribute('disabled', 'disabled')
        mensagem.classList.add('errou')
        mensagem.textContent = 'Errou'
        console.log('tente denovo')
    } else {
        console.log('erro')
    }

    setTimeout(() => {
        btnChutar.removeAttribute('disabled')
        mensagem.textContent = ''
        mensagem.classList.remove('errou')
        mensagem.classList.remove('acertou')
        mensagem.classList.remove('alerta')
        cxNumero.value = ''
    }, 3000);

})

btnMusica.addEventListener('click' , function(){
    musica.play()
})