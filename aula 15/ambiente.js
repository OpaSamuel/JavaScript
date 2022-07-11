var num = [5,8,2,9,3]

num.sort()
num.push(10)
console.log(num)
console.log(`O vetor possue ${num.length} posições`)


let pos =num.indexOf(9)
if(pos==-1){
    console.log('o valor n foi encontrado')
}else{
    console.log(`o valor está na posição ${pos} e o valor é ${num[pos]}`)
}
