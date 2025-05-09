let vermelhoLuz = document.querySelector('#vermelho')
let amareloLuz = document.querySelector('#amarelo')
let verdeLuz = document.querySelector('#verde')

function vermelho() {
    vermelhoLuz.style.backgroundColor = 'red'

    amareloLuz.style.backgroundColor = 'rgb(122, 122, 0)'
    verdeLuz.style.backgroundColor = 'rgb(1, 94, 1)'
}

function amarelo() {
    amareloLuz.style.backgroundColor = 'yellow'

    vermelhoLuz.style.backgroundColor = 'rgb(77, 0, 0)'
    verdeLuz.style.backgroundColor = 'rgb(1, 94, 1)'
}

function verde() {
    verdeLuz.style.backgroundColor = 'green'

    vermelhoLuz.style.backgroundColor = 'rgb(77, 0, 0)'
    amareloLuz.style.backgroundColor = 'rgb(122, 122, 0)'
}

function automatico() {


}