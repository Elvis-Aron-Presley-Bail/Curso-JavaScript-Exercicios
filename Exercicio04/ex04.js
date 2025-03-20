let cxNumero = document.querySelector('#num')

let numeroMisterioso = 0

let btnChutar = document.querySelector('#btnChutar')
let btnMusica = document.querySelector('#btnMusica')

let mensagem = document.querySelector('#mensagem')

let musica = document.querySelector('#musica')

btnChutar.addEventListener('click', function(e) {

    let num = cxNumero.value

    if(num == gerar()){
        mensagem.textContent = 'acertou'
    } else {
        mensagem.textContent = 'tente novamente'
    }

    e.preventDefault()
})

function gerar(){
    let numMisterio = gerarNumero(1,10)

    let numeroMisterioso = numMisterio

    console.log(numeroMisterioso)
    return numeroMisterioso
}

function gerarNumero(min, max){
    min = Math.ceil(min)  // arredonda para cima  ceil  = teto
    max = Math.floor(max) // arredonda para baixo floor = piso
    return Math.floor(Math.random() * (max - min + 1)) + min
}