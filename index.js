var Student = /** @class */ (function () {
    function Student() {
    }
    Student.prototype.say = function () {
    };
    return Student;
}());
var do_pay = function (o) {
    o.post();
};
var Wepay = /** @class */ (function () {
    function Wepay() {
    }
    Wepay.prototype.post = function () { };
    ;
    return Wepay;
}());
var Alipay = /** @class */ (function () {
    function Alipay() {
    }
    Alipay.prototype.post = function () { };
    ;
    return Alipay;
}());
var new_wepay = new Wepay();
var new_alipay = new Alipay();
do_pay(new_wepay);
do_pay(new_alipay);
