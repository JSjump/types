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
