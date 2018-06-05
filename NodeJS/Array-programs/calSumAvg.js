function calSumAvg(){
    var array=[1,2,3];
    var sum=0,avg=0;
    for (var i = 0; i < array.length; i++) {
        sum +=array[i];
    }
    for (var i = 0; i < array.length; i++) {
        avg +=array[i]/array.length;
    }
    console.log("sum=",sum);
    console.log("avg=",avg);
}
calSumAvg();