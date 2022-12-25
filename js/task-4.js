const calculateNumber = function(numbers){

    let arr = numbers.toString().split('');
    let sum = 0;
    arr.forEach(e =>{
        sum += Number(e)
    })
    
    return sum;
}

console.log(calculateNumber(48554));