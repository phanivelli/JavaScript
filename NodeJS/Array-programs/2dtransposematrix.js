function transposeMatrix() {
    var array=[[1,2,3],[2,5,8],[9,6,3]];
    var transpose=[];
    for (var i = 0; i < array.length; i++) {
        transpose[i]=[];
        for (var j = 0; j < array.length; j++) {
            transpose[i][j]=array[j][i];
        }
        
    }
    return transpose;
}
console.log(transposeMatrix());