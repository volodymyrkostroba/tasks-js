
const str = 'я учу javascript!';

const arr = str.split(' ');

console.log(arr);
let newArr = [];

for(item of arr){
    
    newArr.push(item[0].toUpperCase()+item.slice(1));
    
}

const newStr = newArr.join(' ');
console.log(newStr);