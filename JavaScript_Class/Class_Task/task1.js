function checkArmstrong(val){
    let n = val;
    let org_num =n;
    let power = 0;

    while(n>0){
        n = Math.floor(n/10);
        power += 1;
    }

    let sum = 0;
    n = org_num;

    while (n > 0) {

        let d = n % 10;
        sum = sum + d**power;
        n = Math.floor(n / 10);
    }
    if(sum==org_num){
        return true;
    }else{
        return false;
    }
}

function checkNum(){
    let val = document.getElementById("value").value;
    let para = document.createElement("p");


    if(checkArmstrong(val)){
        para.textContent = "Ha Bhai ye Armstrong haiiii...........";
    }else{
        para.textContent = "Nhi Bhai ye ArmStrong  haiii.......";
    }
    document.body.append(para);
}