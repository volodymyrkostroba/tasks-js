const calculateNumber = function(numbers){

    let arr = numbers.toString().split('');
    let sum = 0;
    arr.forEach(e =>{
        sum += Number(e)
    })
    
    return sum;
}

const arr = [];


for(let i = 1; i <= 2022; i +=1 ){
    if(calculateNumber(i) === 3){
        arr.push(i)
    }
}

console.log(arr);