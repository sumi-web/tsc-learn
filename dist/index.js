"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//**********Basic Types***************
let id = 5;
let company = "Sumit Media";
let isEnable = true;
let x = "Hello";
let ids = [1, 2, 3, 4, 5];
let arr = [1, 2, true, "Hello"];
//***********Tuple*************
let person = [1, "string", true];
// Tuple Array
let employee;
employee = [
    [1, "string"],
    [2, "string"],
];
//*********Unions*********
let pid = 2;
pid = "string";
//*********Enum***********
var Direction1;
(function (Direction1) {
    Direction1[Direction1["up"] = 1] = "up";
    Direction1[Direction1["Down"] = 2] = "Down";
    Direction1[Direction1["Left"] = 3] = "Left";
    Direction1[Direction1["Right"] = 4] = "Right";
})(Direction1 || (Direction1 = {}));
var Direction2;
(function (Direction2) {
    Direction2["up"] = "Up";
    Direction2["Down"] = "Down";
    Direction2["Left"] = "Left";
    Direction2["Right"] = "Right";
})(Direction2 || (Direction2 = {}));
const user = {
    id: 1,
    name: "sumit",
};
let point = 1;
//********Type Assertion ===explicitly telling the compiler that we want to treat an entity as diff types
let cid = 1;
// 1st way
// let customerId = <number>cid;
// 2nd way
let customerId = cid;
// customerId = 2;
//*********Functions*********
function addNum(x, y) {
    return x + y;
}
// when no return value
function log(message) {
    console.log("message here");
}
const user1 = {
    id: 1,
    name: "john",
};
const add = (x, y) => x + y;
const sub = (x, y) => x + y;
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    register() {
        return `${this.name} is now registered`;
    }
}
// protected means you can access inside of a own class or extending class
const per = new Person(2, "sumit");
console.log("check per", per.register());
// subclasses extending a class
class Employee extends Person {
    constructor(id, name, position) {
        super(id, name);
        this.position = position;
    }
}
const emp = new Employee(3, "shan", "dev");
console.log("check empl", emp);
//********Generics***** ==reusable components
// function getArray(items: any[]): any[] {
// 	return new Array().concat(items);
// }
// two diff array containing number and strings and I want to that upper function to create them
// let numArray = getArray([1, 2, 3, 4, 5]);
// let strArray = getArray(["Brad", "John", "Jill"]);
// numArray.push("hello"); see I am pushing string in numArray but it got created by getArray which takes any types and return anu type so its not complaining about types which is not good
// solution making the getArray as generic which also their respective types
function getArray(items) {
    return new Array().concat(items);
}
let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(["Brad", "John", "Jill"]);
const Header = (props) => {
    return "JSX";
};
exports.default = Header;
