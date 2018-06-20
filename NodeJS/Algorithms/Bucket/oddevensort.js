function oddEvenSort(arr){
    function swap(arr,i,j){
        var temp=arr[i];
        arr[i]=arr[j];
        arr[j]=temp;
    }
    var sorted=false;
    while(!sorted){
        sorted=true;
        for(var i=1;i<arr.length-1;i++){
            if(arr[i]>arr[i+1]){
                swap(arr,i,i+1);
                sorted=false;
            }
        }
        for (i = 0; i < arr.length - 1; i ++) {
            if (arr[i] > arr[i + 1]) {
              swap(arr, i, i + 1);
              sorted = false;
            }
          }
        }
    return arr;
}
module.exports = oddEvenSort;