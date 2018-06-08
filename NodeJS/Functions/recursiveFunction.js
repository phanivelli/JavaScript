function factorial(n){
    if ((n==0)||(n==1)){
        return 1;
}
    else{
        var cal= n*factorial(n-1);
        return cal;
    }
}
function factorialcal() {
    var result=factorial(n);
    alert("Factorial is"+n+"=",+result);
}
console.log(factorial(5));