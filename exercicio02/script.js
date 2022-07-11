function verificar(){
    var txtano=document.getElementById('txtano')
    var agora=new Date()
    var atual=agora.getFullYear()
    var res=document.getElementById('res')
    var sexo=document.getElementsByName('sexo')

    var ano=Number(txtano.value)
    var idade= atual-ano

    if(txtano.value.length == 0){
        alert('[Erro] Preencha os dados corretamente e tente Novamente')
    }
    else if(ano > atual){
        alert('[Erro] Informe uma data válida')
    }

    else{
        var imagem=document.createElement('img')
        imagem.getAttribute('id','foto')
        if(idade <= 3 && sexo[0].checked){
         imagem.src='imagens/bebezinho.png'
         res.innerHTML=`Detectamos um Bebê de ${idade} anos
         de sexo <strong>Masculino</strong>`
        }
        else if(idade <= 10 && sexo[0].checked){
            imagem.src='imagens/garoto.png'
            res.innerHTML=`Detectamos um Menino de ${idade} anos
            do sexo <strong>Masculino</strong>`

        }
        else if(idade <= 15 && sexo[0].checked){
            imagem.src='imagens/adolemas.png'
            res.innerHTML=`Detectamos um Adolecente de ${idade} anos
            do sexo <strong>Masculino</strong>`
            
        }
        else if(idade <= 18 && sexo[0].checked){
            imagem.src='imagens/jovemas.png'
            res.innerHTML=`Detectamos um Jovem de ${idade} anos
            do sexo <strong>Masculino</strong>`
        }
        else if
        (idade <= 49 && sexo[0].checked){
            imagem.src='imagens/adulto.png'
            res.innerHTML=`Detectamos um Adulto de ${idade} anos
            do sexo <strong>Masculino</strong>`
        }
        else if(idade <= 59 && sexo[0].checked){
            imagem.src='imagens/senhor.png'
            res.innerHTML=`Detectamos um Senhor de ${idade} anos
            do sexo <strong>Masculino</strong>`
        }
        else if(idade >= 60 && sexo[0].checked){
            imagem.src='imagens/idoso.png'
            res.innerHTML=`Detectamos um Idoso de ${idade} anos
            do sexo <strong>Masculino</strong>`
        }
        else if(idade <= 3 && sexo[1].checked){
            imagem.src='imagens/bebezinha.png'
            res.innerHTML=`Detectamos uma Bebê de ${idade} anos
            do sexo <strong>Feminino</strong>`
        }
        else if(idade <= 10 && sexo[1].checked){
            imagem.src='imagens/garota.png'
            res.innerHTML=`Detectamos uma Menina de ${idade} anos
            do sexo <strong>Feminino</strong>`
        }
        else if(idade <= 15 && sexo[1].checked){
            imagem.src='imagens/adolefem.png'
            res.innerHTML=`Detectamos uma Adolecente de ${idade} anos
            do sexo <strong>Feminino</strong>`
        }
        else if(idade <= 18 && sexo[1].checked){
            imagem.src='imagens/jovemfem.png'
            res.innerHTML=`Detectamos uma Jovem de ${idade} anos
            do sexo <strong>Feminino</strong>`
        }
        else if
        (idade <= 49 && sexo[1].checked){
            imagem.src='imagens/adulta.png'
            res.innerHTML=`Detectamos uma Adulta de ${idade} anos
            do sexo <strong>Feminino</strong>`
        }
        else if(idade <= 59 && sexo[1].checked){
            imagem.src='imagens/senhora.png'
            res.innerHTML=`Detectamos uma Senhora de ${idade} anos
            do sexo <strong>Feminino</strong>`
        }
        else if(idade >=60 && sexo[1].checked){
           imagem.src='imagens/ancia.png'
           res.innerHTML=`Detectamos uma Idosa de ${idade} anos
            do sexo <strong>Feminino</strong>`
        }
        res.appendChild(imagem)
        res.style.textAlign="center"
    }

}