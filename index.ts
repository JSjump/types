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