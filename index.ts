let arr:string[] = ['string','wts']
let a:number[] = [1,2,3];
let b:Array<number> = [1,2,3,4]
// console.log(b[1])

let str:string = 'ds';
let strt = str;
// console.log(strt)

let my_tuple:[number,string] = [1,'s'];

// 函数
// function add(a:number,b:number):number {
//     return a+b
// }
// console.log(add(1,3))

let arrow_add = (a:number,b:number):number => {
    return a+b
}
//console.log(arrow_add(1,4).toFixed(2))


let a_a_void = (a:number,b = 10):void => {

    if(b){
        console.log(a+b)
    }else {
        console.log(a)
    }
};
console.log(a_a_void(10,20))