function cyclicallyPermute() {
    var array=[1,2,3,4,5];
    var x=array[array.length-1],i;
    for (var i = array.length-1; i > 0; i--) {
        array[i]=array[i-1];
        array[0]=x;
    }
    console.log( array);
}
console.log(cyclicallyPermute());