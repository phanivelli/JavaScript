function sortAscending(){
    var array=[5,7,2,6,3,1,4];
    var asc=[];
    var temp;
    for (var i = 0; i < array.length; i++) {
        for (var j = i+1; j < array.length; j++) {
            if(array[i]<array[j]){
                temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }   
        }
    }
    for (var i = array.length-1; i >= 0; i--){
    asc.push(array[i]);
    }
    console.log(asc);
}
sortAscending();