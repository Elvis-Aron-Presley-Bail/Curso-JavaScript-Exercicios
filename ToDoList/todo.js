let texto = document.querySelector('#texto')
let tarefas = document.querySelector('#tarefas')
let botao = document.querySelector('#botao')

let excluir = document.querySelector('.excluir')
let item = document.querySelector('.item')

let som = document.querySelector('#som')

function adicionar() {
    
    let novoItem = document.createElement('div')
    let excluir = document.createElement('button')
    novoItem.textContent = texto.value
    novoItem.classList.add('item')
    excluir.classList.add('excluir')
    excluir.textContent = 'V'

    tarefas.appendChild(novoItem)
    novoItem.appendChild(excluir)

    texto.value = ''

    excluir.addEventListener('click', () => {
        novoItem.remove()
        som.play()
    }) 

}
