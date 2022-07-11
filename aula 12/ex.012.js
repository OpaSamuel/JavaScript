var agora = new Date()
var hora = agora.getHours()
var mim = agora.getMinutes()
console.log(`São exatamente ${hora}horas e ${mim} minutos`)
if(hora <= 12){
    console.log('Bom dia!!')
}else if(hora > 12 && hora < 18 ){
    console.log('Boa Tarde!!')
}else{
    console.log('Boa Noite!!')
}