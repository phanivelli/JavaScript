function addMatrix() {
    var m1=[[1,2,5],[6,5,4],[9,5,1]];
    var m2=[[9,6,3],[8,5,5],[7,8,3]];
    var result = [];   
       for(var i = 0; i < m1.length; i++) {
        result[i] = [];        
        for(var j = 0; j < m2.length; j++) {
           result[i][j]=m1[i][j]+m2[i][j];
        }
    }
    return result; 
}
console.log(addMatrix());