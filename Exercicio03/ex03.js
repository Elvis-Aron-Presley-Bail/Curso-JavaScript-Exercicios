let numeroSorteado = 0
let numero = document.querySelector('#numero')
let btnSortear = document.querySelector('#btnSortear')
let audioDado = document.querySelector('#audioDado')

btnSortear.addEventListener('click', function() {

    audioDado.play()

    btnSortear.style.display = 'none'

    numero.classList.add('animar')

    numero.textContent = '?'

    setTimeout(() => {
        
        numeroSorteado = getRandomInt(1,100)

        numero.textContent = numeroSorteado

        btnSortear.style.display = 'inline-block'
        
        numero.classList.remove('animar')

    }, 2000);

})

function getRandomInt(min, max) {
    min = Math.ceil(min)  // arredonda para cima  ceil  = teto
    max = Math.floor(max) // arredonda para baixo floor = piso
    return Math.floor(Math.random() * (max - min + 1)) + min
}