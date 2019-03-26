var dis = function (obj) {
    // console.log(obj.name)
    obj.print(14);
    //    console.log()
};
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.prototype.print = function (age) {
        console.log(age);
    };
    return Person;
}());
var pe = new Person();
// pe.name = 'zhhhh';S
dis(pe);
// const o = {
//     age: 0,
//     // name: 'fa'
// }
// dis(o)
