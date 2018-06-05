function findNumIndexPos(num){
var array=[1,2,5,8,7,22,77,55,77];
for (var i = 0; i < array.length; i++) {
    if (array==null) {
        return -1;
    }
    while (i<array.length) {
        if (array[i]==num) {
            return i;
        }
        i=i+1;
    }
    return -1;
}
}
console.log(findNumIndexPos(77));