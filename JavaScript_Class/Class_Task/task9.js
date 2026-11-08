// function  manage(){
//     let count = 10;

//     function increament(){
//         count++;
//         console.log(count);
//     }

//     function decrement(){
//         count--;
//         console.log(count);
//     }
    
//     return{increament,decrement};

// }


// manage();

// let counter = manage();

// counter.increament();
// counter.decrement();
// counter.increament();




// function a (a){
//     return function b(b){
//         return function c(c){
//             return a+b+c;
//         }
//     }
// }
// console.log(a(2)(3)(4));


function memoize(fr){
    const cache = {};
    return function(x , y){
        const key = `${x}`;
        if(key in cache){
            console.log('Fetching from cache');
            return cache[key];
        }
        const result = fr(x);
        cache[key] = result;
        return result;
    }
}
const factorial = memoize(function(x){
    let ans = 1;
    for(let i = x ; i > 0 ; i--){
        ans = ans * i;
    }
    return ans;
});

console.log(factorial(5));
console.log(factorial(6));
console.log(factorial(5));
console.log(factorial(6));