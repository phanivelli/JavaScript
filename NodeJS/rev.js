function rev(num){
    var remainder;
    var rev=0;
    while(num>0){
        remainder=num%10;
        num=parseInt(num/10);
        rev=rev*10+remainder;
    }
    return rev;
}
console.log(rev(321))