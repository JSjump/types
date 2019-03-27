// let a:any = 'sssss';
// let b = (<string>a).substring(0,3)
// console.log(a)

interface Person {
    name:string;
    age:number;
}
let peo=<Person>{};
peo.name = '123';
peo.age = 12;

let stu = {} as Person;
stu.name = 'dfs';

let ss:Person = {
    name : '231',
    age: 12
};
