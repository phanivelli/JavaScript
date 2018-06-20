var quicksort=(function(){
    function compare(a,b){
        return a-b;
    }
    function swap(arr,i,j){
        var temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
        return arr;
    }
    function partition(arr,left,right,compare){
        var cmp=arr[right-1];
        var minEnd=left;
        for(var maxEnd=left;maxEnd<right-1;maxEnd++){
            if(compare(arr[maxEnd],cmp)<0){
                swap(arr,maxEnd,minEnd);
                minEnd +=1;
            }
        }
        swap(arr,minEnd,right-1);
        return minEnd;
    }
    function quickSort(array, left, right, cmp) {
        if (left < right) {
          var p = partition(array, left, right, cmp);
          quickSort(array, left, p, cmp);
          quickSort(array, p + 1, right, cmp);
        }
        return array;
    }
    return function (array, cmp) {
        cmp = cmp || compare;
        return quickSort(array, 0, array.length, cmp);
      };
      
}());
module.exports=quicksort;