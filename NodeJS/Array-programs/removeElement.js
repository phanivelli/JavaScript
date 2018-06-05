function removeElement() {
    var array=[1,2,5,8,7,22,77,55,87];
    console.log("oroginal array:", array);
    var rmvIdx=1;
    for (var i = rmvIdx; i < array.length-1; i++) {
         array[i]=array[i+1];
         
    }
    console.log("after removal:",array);
}
removeElement();