function callByValue(value1,value2) {
    console.log("inside the call by value method");
    var value1=500;   //local variable
    var value2=879;     //local variable
    console.log("fst value :"+value1+ "second value:"+value2);
}
var value1=200;
var value2=615;

console.log("before call by value method");
console.log("fst value :"+value1+ "second value:"+value2);

callByValue(value1,value2);

console.log("after calling the call by value method");
console.log("fst value :"+value1+ "second value:"+value2);
