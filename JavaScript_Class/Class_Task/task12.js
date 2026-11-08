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



function memoize2(fr){
    const cache2 = {};
    return function(x , y){
        const key = `${x}`;
        if(key in cache2){
            console.log('Fetching from cache');
            return cache2[key];
        }
        const result = fr(x);
        cache2[key] = result;
        return result;
    }
}
const  fibo = memoize2(function(x){
    let a = 0;
    let b = 1;
    for(let i = 0 ; i < x ; i++){
        let temp = a + b;
        a = b;
        b = temp;
    }
    return a;
});


console.log(fibo(5));
console.log(fibo(6));
console.log(fibo(5));
console.log(fibo(6));