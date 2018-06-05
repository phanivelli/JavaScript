function sortDescending(){
    var array=[5,7,2,6,3,1,4];
    var desce=[];
    var len=array.length;
    for(var i=0;i<len;i++){
        for(var j=i+1;j<len;j++){
            if(array[i]>array[j]){
                var temp=array[i];
                array[i]=array[j];
                array[j]=temp;
            }
        }
    }
    for(var i=len-1;i>=0;i--){
        desce.push(array[i]);
    }
    console.log(desce);
}
sortDescending();