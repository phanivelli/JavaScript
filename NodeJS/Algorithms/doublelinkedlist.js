function LinkedList(){
    this.head=null;
    this.tail=null;
    this._length=0;
}

function Node(value){
    this.value=value;
    this.next=null;
    this.prev=null;
}

LinkedList.prototype.size=function(){
    return this._length;
}

LinkedList.prototype.isEmpty=function(){
    return this._length===0;
}
LinkedList.prototype.insert=function(value,index){
    var node =new Node(value);
    if(index){
        var afterNode;
        var beforeNode;
        if(index==0){
            beforeNode=this.head;
            this.head=node;
        }
        else{
            beforeNode=this.get(index);
            afterNode=beforeNode.prev;
            afterNode.next==node;
            node.prev=afterNode;
        }
        beforeNode.prev=node;
        node.next=beforeNode;
    }
    else{
        if(!this.head){
            this.head=node;
        }
        if(this.tail){
            this.tail.next=node;
            node.prev=this.tail;
        }
        this.tail=node;
    }
    this._length++;
}

LinkedList.prototype.remove=function(index){
    var current=this.get(index);
    this._length--;
}
LinkedList.prototype.get=function(index){
    if(index>this.length || index<0){
        throw new Error('index '+index+' is out of bound');
    }
    var node =this.head;
    var i=1;
    while(i<=index){
        console.log(node,i);
        node=node.next;
        i++;
    }
    return node;
}
LinkedList.prototype.find = function (iterator) {
};

LinkedList.prototype.eachLast = function (iterator) {

};

LinkedList.prototype.each = function (iterator) {

};
var artists = new LinkedList();
artists.insert('Klaxons');
artists.insert('Arctic Monkeys');

console.log(artists.size());