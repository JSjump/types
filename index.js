var fun_type = function (a) {
    console.log(a);
};
var Student = /** @class */ (function () {
    function Student(fn) {
        this.fn = fn;
    }
    Student.prototype.say = function (cb) {
        cb(true);
    };
    ;
    return Student;
}());
var ns = new Student(fun_type);
// ns.name = 'zhh' // 只读属性 ，不可复制
console.log(ns.name);
ns.say(fun_type);
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
