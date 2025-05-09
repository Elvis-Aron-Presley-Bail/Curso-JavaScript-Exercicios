let hora = document.querySelector('#hora')
let min  = document.querySelector('#min')
let seg  = document.querySelector('#seg')

function atualizar() {

    let pegarHora = new Date()
    let horaNum   = pegarHora.getHours()

    let pegarMin = new Date()
    let minNum   = pegarMin.getMinutes()

    let pegarSeg = new Date()
    let segNum   = pegarSeg.getSeconds()

    hora.textContent = horaNum
    min.textContent = minNum
    seg.textContent = segNum

    if(hora.textContent.length == 1) {
        hora.textContent = '0' + horaNum
    }

    if(min.textContent.length == 1) {
        min.textContent = '0' + minNum
    }

    if(seg.textContent.length == 1) {
        seg.textContent = '0' + segNum
    }

}

atualizar()
setInterval(atualizar, 1000)
