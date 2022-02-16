function fatorial(n){
    if(n>1){
        n *= fatorial(n-1)
    }
    return n
}
console.log(fatorial(5))