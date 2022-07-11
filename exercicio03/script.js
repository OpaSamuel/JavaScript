function clicar(){

    var initx=document.getElementById('initx')
    var fimtx=document.getElementById('fimtx')
    var intertx=document.getElementById('intertx')
    var contar=document.getElementById('contar')

    if(initx.value.length == 0 || fimtx.value.length==0 || intertx.value.length==0){
     alert('[Erro} Informe todos os dados')
    }
    else{
        var i=Number(initx.value)
        var f=Number(fimtx.value)
        var inter=Number(intertx.value)

        contar.innerHTML=`Contando:`
        if(i<f){
            for(var c = i; c < f; c += inter){
            contar.innerHTML+=` ${c}  \u{2192}`
        }
        
        }
        else{
            for(var c = i ; c>f;c-= inter)
            contar.innerHTML+=` ${c}  \u{2192}`
        }
        contar.innerHTML+=`\u{1F6A9}`
    }
}