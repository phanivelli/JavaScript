function numTrianle(rows) {
    var arr="";
    for(var i=1; i<=rows; i++)
    {
        for(var j=1; j<=i; j++)
        {
            arr +="* ";
        }
        console.log(arr);
        arr="";
    }
}
console.log(numTrianle(5));