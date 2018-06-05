function insertElement(element,index) {
    var array=[5,6,8,9,10];
    for (var i = 0; i < array.length; i++) {
        if(index===i){
            for (var j = array.length ; j >=i ; j--) {
                array[j] = array[j-1];    
            }
            array[j]=element;
            console.log(array);
        }
        
    }
}
insertElement(7,3);