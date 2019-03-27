interface IPerson {
    name: string;
    say():void;
}
class Student implements IPerson {
    name:string;
    say():void{

    }
}


interface IPay {
    name?:string;
    post?():void;   // ‘？’问号，可选属性
}
const do_pay = (o:IPay)=> {
    o.post()
}
class Wepay implements IPay{
  post():void{};
}

class Alipay implements IPay{
  post():void{};
}

let new_wepay:IPay = new Wepay();

let new_alipay:IPay = new Alipay();
do_pay(new_wepay);
do_pay(new_alipay);