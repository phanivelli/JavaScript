function Person(){

}
Person.prototype.name='Phani';
Person.prototype.age=26;
Person.prototype.sayName=function(){
    console.log(this.name);
}
var person1=new Person();
console.log(person1.name);
