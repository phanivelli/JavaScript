function findMissNumInArray() {
    var array=[0,5,6,7,8,9,10,18];
    var missNum=[];
    for (var i = 1; i < array.length; i++) {
        if (array[i]-array[i-1]!=1) {
            var result=array[i]-array[i-1];
            var j=1;
            while (j<result) {
                missNum.push(array[i-1]+j);
                j++;
            }
        }
        
    }
    console.log(missNum);
}
findMissNumInArray();