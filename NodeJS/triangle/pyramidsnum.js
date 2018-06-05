function generatePyramid(rows){
    for(var i=0;i<rows;i++){
        var output="";
        for(var j=0;j<rows-i;j++){
            output+=" ";
        }
        for(var k=0;k<=i;k++){
            output +=k+" ";
        }
        console.log(output);
    }
}
generatePyramid(5)