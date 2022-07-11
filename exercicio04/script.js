function clicar(){

    var numtx=document.getElementById('numtx')
    var tabuada=document.getElementById('tabuada')
    if(numtx.value.length ==0){
        alert('[Erro} Digite um número')
    }
    else{  
        var num =Number(numtx.value)
        tabuada.innerHTML=``
        for(var c = 1;c <= 10;c++){
            var item=document.createElement('option')
            item.innerHTML=` ${num} x ${c} = ${num*c}`
            tabuada.appendChild(item)
        }
    }
       
}   
