function setDifference() {
    var a=[1,2,3],b=[100,2,1,10];
    var temp=[];
    for(var i=0;i<a.length;i++){
        if (b.indexOf(a[i])===-1) {
            temp.push(a[i]);
        }
    }
    for(var i=0;i<b.length;i++){
        if (a.indexOf(b[i])===-1) {
            temp.push(b[i]);
        }
    }
    return temp.sort((a,b)=>a-b);
}
console.log(setDifference());
