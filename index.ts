// 接口继承类
class Person {
    name:string;
    age:number;
    say():void{};
}

interface Student extends Person{
     old:number;
}

class SuperStudent extends Person implements Student{
 old:number
}
