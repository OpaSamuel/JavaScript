function atualizar(){
    var agora =new Date()
    var hora=agora.getHours()
    var mim=agora.getMinutes()
    var relogio=document.getElementById('relogio')
    var imagem=document.getElementById('imagem')
    var texto=document.getElementById('conteudo')

    relogio.innerHTML+=`${hora} horas ${mim} minutos`


    if(hora >  0 && hora <= 5 ){
        imagem.src='madrugada.png'
        document.body.style.background="#CEAA75"
        
    }
    else if(hora > 5 && hora <= 12){
        imagem.src='manha.png'
        document.body.style.background="#88CEEB"

    }
    else if(hora > 12 && hora <= 18){
        imagem.src = "tarde.png"
        document.body.style.background="#FEAF03"

    }
    else{
        imagem.src="noite.png"
        document.body.style.background="#032639"
    }

}