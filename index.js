// let arr:string[] = ['string','wts']
// let a:number[] = [1,2,3];
// let b:Array<number> = [1,2,3,4]
// // console.log(b[1])
// let str:string = 'ds';
// let strt = str;
// // console.log(strt)
// let my_tuple:[number,string] = [1,'s'];
// 函数
// function add(a:number,b:number):number {
//     return a+b
// }
// console.log(add(1,3))
// let arrow_add = (a:number,b:number):number => {
//     return a+b
// }
// //console.log(arrow_add(1,4).toFixed(2))
// let a_a_void = (a:number,b = 10):void => {
//     if(b){
//         console.log(a+b)
//     }else {
//         console.log(a)
//     }
// };
// console.log(a_a_void(10,20))
/**
 * Title 联合类型
 *
 */
// union type 联合类型  一个‘|’ 表示
// const log = (value:number | string | boolean) => {
//     // console.log(value)
//     return `this.is ${value}`
// }
// console.log(log(undefined))
/**
 * Title class
 */
// class Person { // 定义类
//     name:string;
//     old:number;  
// }
// let stu = new Person();// 生成对象
// stu.name = '小慧子'; // 设置属性值
// console.log(stu.name)//读取属性值
/**
 * class constructor (构造函数)  methods(方法)
 */
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    Person.prototype.display_name = function () {
        return "this name is " + this.name;
    };
    return Person;
}());
var stu = new Person('慧子');
console.log(stu.display_name());
