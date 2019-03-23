var arr = ['string', 'wts'];
var a = [1, 2, 3];
var b = [1, 2, 3, 4];
// console.log(b[1])
var str = 'ds';
var strt = str;
// console.log(strt)
var my_tuple = [1, 's'];
// 函数
// function add(a:number,b:number):number {
//     return a+b
// }
// console.log(add(1,3))
var arrow_add = function (a, b) {
    return a + b;
};
//console.log(arrow_add(1,4).toFixed(2))
var a_a_void = function (a, b) {
    if (b === void 0) { b = 10; }
    if (b) {
        console.log(a + b);
    }
    else {
        console.log(a);
    }
};
console.log(a_a_void(10, 20));
