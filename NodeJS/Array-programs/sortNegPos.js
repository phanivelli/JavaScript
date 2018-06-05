function sortNegPos() {
    //var array=[-3,8,7,6,5,-4,3,2,1];
    var array=[-2,3,6,4,7,-1,2,-3,0];
    var minIndex;
    for (var i = 0; i < array.length; i++) {
        for (var j = i+1; j < array.length; j++) {
           if (array[j]<array[i]) {
            var temp=array[i];
            array[i]=array[j];
            array[j]=temp;
           }
        }     
    }
    return array
}
console.log(sortNegPos());