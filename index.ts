<<<<<<< HEAD
// 接口类型
interface name {
    // 接口属性
    name: string

    // 接口方法
    print(age:number):void
}

const dis = (obj:name) => {
   // console.log(obj.name)
   obj.print(14)
//    console.log()
}

class Person {
    age: number;
    name: string;
    print(age:number):void {
    console.log(age)
    }
}
let pe = new Person();
// pe.name = 'zhhhh';S
dis(pe)
// const o = {
//     age: 0,
//     // name: 'fa'
// }
// dis(o)
=======
interface IPerson {
    readonly name: string;
    fn?:IFn;
    say(cb:IFn):void;
}
interface IFn {
    (a:boolean):void
}

let fun_type:IFn = (a:boolean) => {
    console.log(a)
   }   
class Student implements IPerson {
    name:string;
    fn:IFn;
    constructor(fn:IFn) {
      this.fn = fn;
    }
    say(cb:IFn):void{
        cb(true)
    };
}

let ns:IPerson = new Student(fun_type)
// ns.name = 'zhh' // 只读属性 ，不可复制
console.log(ns.name)
ns.say(fun_type)

// interface IPay {
//     name?:string;
//     post?():void;   // ‘？’问号，可选属性
// }
// const do_pay = (o:IPay)=> {
//     o.post()
// }
// class Wepay implements IPay{
//   post():void{};
// }

// class Alipay implements IPay{
//   post():void{};
// }

// let new_wepay:IPay = new Wepay();

// let new_alipay:IPay = new Alipay();
// do_pay(new_wepay);
// do_pay(new_alipay);


// fun_type(true)
>>>>>>> 7cfdd9f0fbe0f76b6d7e4bc3e488873f8c0920ad
