const arr = [2,4,5,7,8,3,99,60];

const arr2 = [55,66,77,88,99,110];

// ///

const isEven = function(num){
    return num % 2 === 0;
}

const isNotEven = function(num){
    return num % 2 !== 0;
}


// ///


const evenNumbers = function(arr){
    const newArr = [];
    arr.forEach(e => {
        if(isEven(e)){
            newArr.push(e)
        }
    });

    return newArr;
}

const notEvenNumbers = function(arr){
    const newArr = [];
    arr.forEach(e => {
        if(isNotEven(e)){
            newArr.push(e)
        }
    });

    return newArr;
}

// ////

console.log(notEvenNumbers(arr));
console.log(evenNumbers(arr));

console.log(notEvenNumbers(arr2));
console.log(evenNumbers(arr2));




// const evenNumbers = arr => arr.filter(e => {return e % 2 === 0});

// console.log(evenNumbers(arr));