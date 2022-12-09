const arr = [2, 5, 9, 15, 0, 4];


for(let i = 0; i<arr.length; i+=1){
    
    if(arr[i] > 3 && arr[i] < 10){
        console.log(arr[i]);
    }
    
}

// ///

const arr2 = [-2, 5, 9, -15, 0, 4 , 4, -4];
let total = 0;


for(let i = 0; i<arr2.length; i+=1){
    
   if(arr2[i] > 0){
    total += arr2[i];
   }
    
}

console.log(total);

// ///

const arr3 = [1, 2, 5, 9, 4, 3, 13, 4, 10];

console.log(arr3.includes(3));

for(let i = 0; i<arr3.length; i+=1){
    
    if(arr3[i] === 3){
        console.log('yes');
    }
    }

// ///


     
 