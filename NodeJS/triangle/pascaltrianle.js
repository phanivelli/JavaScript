function pascalTriangle(){
    var rows=5;
    var pscl=[];
    for (var i = 0; i <= 5; i++) {
        pscl[i]=[];
        for (var j = 0; j < i+1; j++) {
            if(j==0||j==i){
              pscl[i][j]=1;  
            }
            else{
                pscl[i][j]=pscl[i-1][j-1]+pscl[i-1][j];
            }
            
        }
        
    }
    console.log(pscl);
}
pascalTriangle();