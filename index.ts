interface Person {
    name:string
}
interface Student{
    age:number
}

interface PerStu extends Person,Student {
  old:number
}
// let st:PerStu = {name:'ds'};

class CperStu implements Person,PerStu{
    name:string;
    old:number;
    age:number;
}

