const getDivisors = function(num){
    const arr = [];

    for(let i = 0;i <= 2000; i +=1){
        if(num % i === 0){
            arr.push(i)
        }
    }

    return arr;
}

console.log(getDivisors(758590));