function bucketSort(){
    var array=[2,0,1,7,4];
    function insertionSort(array){
        var current;
        var j;
        for(var i=1;i<array.length;i++){
            current=array[i];
            j=i-1;
            while(j>0 &&current<array[j]){
                array[j+1]=array[j];
                j-=1;

            }
            array[j+1]=current;
        }
        return array;
    }
    function createBucket(array){
        var buckets=[];
        var currentBucket;
        var current;
        for(var i=0;i<array.length;i+=1){
            current=array[i];
            currentBucket=Math.floor(current);
            buckets[currentBucket] = buckets[currentBucket] || [];
            buckets[currentBucket].push(current)
        }
        return buckets;
    }
    function sortBuckets(array){
        for(var i=0;i<buckets.length;i++){
            if(buckets[i]!=undefined){
                insertionSort(buckets[i]);
            }
        }
    }
    function unionBuckets(buckets) {
        var result = [];
        var currentBucket;
        for (var i = 0; i < buckets.length; i += 1) {
          currentBucket = buckets[i];
          if (currentBucket !== undefined) {
            result = result.concat(currentBucket);
          }
        }
        return result;
      } 
      return function (array) {
        var buckets = createBuckets(array);
        sortBuckets(buckets);
        return unionBuckets(buckets);
      }
}
console.log(bucketSort());