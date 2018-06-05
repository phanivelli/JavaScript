function commonElements(){
    var a=[1,2,3,4],b=[2,5,8,9],c=[2,1,4,7];
    for (var i = 0; i < a.length; i++) {
        for (var j = 0; j < b.length; j++) {
            for (var k = 0; k < c.length; k++) {
                if (a[i]===b[j] && b[j]===c[k]) {
                    console.log(a[i]+" ");
                }
                
            }
            
        }
        
    }
}
commonElements();