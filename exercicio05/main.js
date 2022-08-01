
let dados = document.getElementById('dados')
let res = document.getElementById('res')
let lista = []


function adicionar(){
    let numtx = document.getElementById('numtx')
    let num = Number(numtx)
    if(num < 1 && num >100){
        alert('informe um valo válido')
    }
}