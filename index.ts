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
class Person {
    protected name:string;
    age:number;
    static male:string = 'female';
    protected constructor(name:string){
     this.name = name;
    }
    protected display_name():string {
        console.log('display_name')
        return `this name is ${this.name}`
    }
}
console.log(Person.name)

// let peop=new Person('ren');  
// constructor 为protect. 不能实例化，可创建子类，子类不继承。不可直接在该类的外部通过该类直接使用 protect 的属性。区分与static，static 可通过该类直接使用
// static 可被子类继承，只能通过类的方式调用！！
class Programmer extends Person {
    constructor(name:string){
        super(name)
    }
    sub_display_name(){
        console.log(11)
        return super.display_name()
    }
    
}
console.log(Programmer.name)
console.log(Programmer.male)
// let pger = new Programmer('huizi')
// console.log(pger.sub_display_name());
// let stu = new Person('慧子')
// console.log(stu.display_name());