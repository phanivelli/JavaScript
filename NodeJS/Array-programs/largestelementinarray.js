function largestNumberInArray(array) {
    var largestNum=0;
    for (var i = 0; i < array.length; i++) {
        if(array[i]>largestNum){
            largestNum=array[i];
        }
        
    }
    return largestNum;
}
largestNumberInArray([45,85,77,55,79,11,56,500]);