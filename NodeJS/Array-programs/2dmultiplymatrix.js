function addMatrix() {
    var m1=[[1,2,5],[6,5,4],[9,5,1]];
    var m2=[[9,6,3],[8,5,5],[7,8,3]];
    var result = [];   
       for(var j = 0; j < m1.length; j++) {
        result[j] = [];        
        for(var k = 0; k < m2.length; k++) {
            var sum = 0;
            for(var i = 0; i < m1.length; i++) {
                sum += m1[j][i] * m2[i][k];
            }            
            result[j].push(sum);
        }
    }
    return result; 
}
console.log(addMatrix());