function floydsTriangle(){
    var rows=4;
    var number=1;
    var ans="";
    for(var i=1;i<=rows;i++){
        for(var j=1;j<=i;++j){
            console.log(number);
            number++;
        }
    }
}
console.log(floydsTriangle());