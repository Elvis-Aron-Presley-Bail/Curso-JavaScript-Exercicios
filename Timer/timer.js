let seg = document.querySelector('#seg')

function diminuirTempo() {

    let tempo = 60

    for(i = tempo; i > 0; i--){
        let conta = tempo - 1
        seg.textContent = conta
    }       

    return 

}

diminuirTempo()