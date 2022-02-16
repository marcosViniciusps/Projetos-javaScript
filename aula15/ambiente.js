let vet = [5,8,2,9,3]

console.log(`O veltor tem ${vet.length} posições`)
vet.sort()  // Organiza o vetor em ordem crescente
console.log(vet)
vet.push(1) //adiciona '1' no final do vetor
console.log(vet)
/*
for(let i =0; i < vet.length; i++){
    console.log(vet[i])
}
*/
for(i in vet){
    console.log(vet[i])
}
let pos = vet.indexOf(8)
if(pos == -1){
    console.log('O valor não foi encontrado')
}else{
    console.log(`O numero 8 está na posição ${pos}`)
}