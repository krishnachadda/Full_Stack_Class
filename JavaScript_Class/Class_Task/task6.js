var count = 0;

setInterval(() => {
    count +=1;
    console.log(count + "Seconds have paseed")
}, 10000);

var min = 2;
var sec = 60;
setInterval(()=>{
    if(min==-1){
        document.getElementById("min").innerHTML = "";
        document.getElementById("sec").innerHTML = "";
        document.getElementById("timeUp").innerHTML = "Time Up......!!!!!";
        return;
    }
    sec = sec-1;
    display(min , sec);
    console.log(min , sec);
    
    if(sec===0){
        sec = 60;
        min = min-1;
    }
},10)

function display(min , sec){
    document.getElementById("min").innerHTML = min+" Min";
    document.getElementById("sec").innerHTML = sec+" Sec";
}
// setTimeout(()=>{
// },1000)



// let arr = [1,2,3,4,5];

// let newArr = arr.map(n=>n*n);
// console.log(newArr);

// newArr = newArr.filter(n=> n > 3);
// console.log(newArr);

// let ele= newArr.find(n=> n >2);
// console.log(ele);

// const add = (a,b) => a+b;
// console.log(add(21,3));



// const arm = (a) => {const pow = (a) => {while(a>0){}}
