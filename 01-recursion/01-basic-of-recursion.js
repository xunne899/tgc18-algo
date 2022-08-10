for(let x=0; x<10;x++){
    console.log(x)
}

console.log('-----recursive solution------')
function printX(x, limit){
    if(x == limit){
        return
    }
    console.log(x)
    printX(x+1, limit);
}
printX(0,5)



function sum(n){
    let total = 0 ;
    for (let i = 0; i < n+1; i++){
        total += n 
    }
    return total
}

function summation(n){
    if(n==1){
        return 1 ;
    }
    return n+summation(n-1)
}