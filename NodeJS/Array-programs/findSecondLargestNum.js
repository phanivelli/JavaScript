function findSecondLargestNum() {
    var array=[5,4,9,4,8,2,7,3,0,1];
    var fstlargeNum=0;
    var scdlargeNum=0;
    for (var i = 0; i < array.length; i++) {
        if (fstlargeNum<array[i]){
        scdlargeNum =fstlargeNum;
        fstlargeNum = array[i];
        }
        else if (scdlargeNum<array[i] && array[i]!=scdlargeNum){
            scdlargeNum=array[i];
        }
        
    }
    return scdlargeNum;
    
}
console.log(findSecondLargestNum());