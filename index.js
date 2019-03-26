// let arr:string[] = ['string','wts']
// let a:number[] = [1,2,3];
// let b:Array<number> = [1,2,3,4]
// // console.log(b[1])
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
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
        console.log('display_name');
        return "this name is " + this.name;
    };
    Person.male = 'female';
    return Person;
}());
console.log(Person.male);
// let peop=new Person('ren');  // constructor 为protect. 不能实例化； 可被继承 ，子类
var Programmer = /** @class */ (function (_super) {
    __extends(Programmer, _super);
    function Programmer(name) {
        return _super.call(this, name) || this;
    }
    Programmer.prototype.sub_display_name = function () {
        console.log(11);
        return _super.prototype.display_name.call(this);
    };
    return Programmer;
}(Person));
console.log(Programmer.name);
console.log(Programmer.male);
// let pger = new Programmer('huizi')
// console.log(pger.sub_display_name());
// let stu = new Person('慧子')
// console.log(stu.display_name());
