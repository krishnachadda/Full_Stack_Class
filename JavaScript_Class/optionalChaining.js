const cust1 = {
    name: "krishna",
    add:{
        add1:"mumbai",
        add2:"pune",
        add3:{
            add4:"delhi"
        }
    }
}

const cust2 = {
    name: "krishna",
    add:{
        add1:"mumbai",
        add2:"pune",
        add3:undefined,
    }
}


console.log(cust1.add?.add3?.add4);
console.log(cust1.add?.add3?.add5);
console.log(cust2.add?.add3?.add4);

console.log(cust2.add?.add3?.add5);

// console.log(cust2.add.add3.add5); // will give the error cannot excess the undifined........
console.log(cust1.add.add3.add5);
console.log(cust1.add);

console.table([cust1.add?.add3?.add4 , cust1.add?.add3?.add5 , cust1.add]);
