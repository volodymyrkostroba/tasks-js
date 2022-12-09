const day = 20;

if(day >= 0 && day < 11){
    console.log(1);
}else if(day >=11 && day < 21 ){
    console.log(2);
}else if(day >=21 && day <= 31){
    console.log(3);
}

// ////

const month = 6;

if(month === 12 || month <= 2){
    console.log('winter');
} else if( month >= 3 && month <=5){
    console.log('spring');
} else if(month >= 6 && month <=8){
    console.log('sommer');
} else if(month >= 9 && month <=11 ){
    console.log('autumn');
}

// ////

const word = 'abcde';

word[0] === 'a'? console.log('yes'):console.log('no');

// 

const numbers = '422345';

numbers[0] >=1 && numbers[0] <=3? console.log('yes'):console.log('no');

// ///

const str = "123";

const total = Number(str[0])+Number(str[1])+Number(str[2]);
console.log(total);

// ///


const string = "123456";
const sum1 = Number(string[0])+Number(string[1])+Number(string[2]);

const sum2 = Number(string[3])+Number(string[4])+Number(string[5]);

console.log(sum1 === sum2? true:false);


