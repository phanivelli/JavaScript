function arrayElementsRandom(){
    var array=[4,6,7,8,9,10,11,12,13];
    for (let i = 0; i < array.length/2; i++) {
        console.log(array[array.length-i-1]);
        console.log(array[i]);
    }
}
arrayElementsRandom();