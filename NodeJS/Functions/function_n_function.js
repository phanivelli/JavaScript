var add=function(a,b){
    var c=a+b;
    return c;
}
var subtract=function(a,b){
    var c=a-b;
    return c;
}
var handleValues=function(fn){
    var a=10;
    var b=9;
    return fn(a,b);
}
console.log(handleValues(add));
console.log(handleValues(subtract));