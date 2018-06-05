function removeDuplicateElements() {
    var array=[1,2,3,3,4,5,4];
    var result=[];
    for (var i = 0; i < array.length; i++) {
       if (!contains(result,array[i])) {
           result.push(array[i]);
       } 
        
    }
    return result;
}
function contains(arr,element) {
    if (arr.length===0){
        return false;
    }
    for (var i = 0; i < arr.length; i++) {
        if (arr[i]===element) {
            return true;
        }
    }
    return false;
}
console.log(removeDuplicateElements());