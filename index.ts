// 接口继承类
class Person {
    name:string;
    age:number;
    say():void{};
}

interface Student extends Person{
     old:number;
}

class SuperStudent extends Person implements Student{ //implements 贯彻接口Student,Student接口是什么样，怎么操作的，执行贯彻的也得怎么操作
 old:number
}
