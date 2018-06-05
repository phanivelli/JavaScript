function arrayAscending(array){
    var len=array.length;
    for(var i=len-1; i>=0; i--){
        for (var j = 1; j <= i; j++) {

            if(array[j-1]>array[j]) {
                
                var temp=array[j-1];
                array[j-1]=array[j];
                array[j]=temp;
            }
            
        }
    }
    return array;
}
console.log(arrayAscending([5,7,2,6,3,1,4]));