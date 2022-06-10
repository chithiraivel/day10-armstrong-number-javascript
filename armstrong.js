let n = 153;
let sum = 0;
 let num = n;
 for(;n > 0;)
{
    lastDigit = n % 10;
    a   = lastDigit **3;
    sum = sum + a;
    n = n- lastDigit;
    n = n /10
}
if(num==sum)
{
    console.log("amstrong number");
}
else{
    console.log("not amstrong");
}