var num = [11, 12, 23, 34, 45]
num[5]= 6
console.log(`Esses são os nossos vetores ${num}`) 
console.log(`O vetor tem ${num.length} posições`)
console.log(`O vetor em ordem ordenada é assim: ${num.sort()}`)
for(var i = 0; i <= num.length; i++){
    console.log(`A posição ${i} é o vetor ${num[i]}`)
}