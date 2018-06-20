function HashTable(){
    this.table=Object.create(null);
    this.size=137;
}
HashTable.prototype.put=function(data){
    var pos=this.honerHash(data);
    this.table[pos]=data;
}

HashTable.prototype.simpleHash=function(data){
    var total=0;
    for(var i=0;i<data.length;i++){
        total +=data.charCodeAt(i);
    }
    total=parseInt(total % this.size,10);
    console.log('Hash: %s -> %s',data,total);
    return total;
}

HashTable.prototype.honerHash=function(data){
    var H=37;
    var total=0;
    for(var i=0;i<data.length;i++){
        total +=H*total+data.charCodeAt(i);
    }
    total = parseInt(total % this.size, 10);
    console.log('Hash: %s -> %s', data, total);
    return total;
}
HashTable.prototype.logAll = function () {
    for (var i = 0; i < this.size; i++) {
        var prop = this.table[i];
        if (prop) {
            console.log('%s: %s', i, prop);
        }
    }
};
var names=['Phani','Mohan','kishore','Dravid','Sudheer','Purna Sindhu'];
var hashTable=new HashTable();
names.forEach(function(name){
    hashTable.put(name);
});
hashTable.logAll();