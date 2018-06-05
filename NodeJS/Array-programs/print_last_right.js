function printLeftToRight() {
    var array=[1,4,2,4,6,5,6,7,8,4,3,5];
    if(array.length%2!=0){
        var mid=(array.length-1)/2;
        console.log("The mid element is ",array[mid]);
        for (var index = 0; index < array[mid]-1; index++) {
            console.log(array[index]);    
        }
        console.log("the elements after the mid element towards right side");
        for(var index2 = array[mid]; index2 < array.length; index2++){
            console.log(array[index2]);
        }
    }
    else{
        var mid=(array.length)/2;
        console.log("The mid element is ",array[mid]);
        console.log("The left side elements before the mid element");
        for(var index = 0; index < array[mid]-1; index++){
            console.log(array[index]);
        }
        console.log("the elements after the mid element towards right side");
        for(var index2 = array[mid]; index2 < array.length; index2++){
            console.log(array[index2]);
        }
    }
    
}
console.log(printLeftToRight());