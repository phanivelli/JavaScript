function callByReference(refObj) {
    console.log("inside the method of call by reference");
    refObj.b=10;
    console.log(refObj);
}
var refObj={b:258};
console.log("outside of the method");
console.log(refObj);

callByReference(refObj);

console.log("after calling the method");
console.log(refObj);