//**********Basic Types***************
let id: number = 5;
let company: string = "Sumit Media";
let isEnable: boolean = true;
let x: any = "Hello";

let ids: number[] = [1, 2, 3, 4, 5];
let arr: any[] = [1, 2, true, "Hello"];

//***********Tuple*************
let person: [number, string, boolean] = [1, "string", true];
// Tuple Array
let employee: [number, string][];

employee = [
	[1, "string"],
	[2, "string"],
];

//*********Unions*********
let pid: number | string = 2;
pid = "string";

//*********Enum***********
enum Direction1 {
	up = 1,
	Down,
	Left,
	Right,
}

enum Direction2 {
	up = "Up",
	Down = "Down",
	Left = "Left",
	Right = "Right",
}

//**********Object*********

type users = {
	id: number | string;
	name: string;
};

const user = {
	id: 1,
	name: "sumit",
};

// using only type
type Point = number | string;
let point: Point = 1;

//********Type Assertion ===explicitly telling the compiler that we want to treat an entity as diff types

let cid: any = 1;
// 1st way
// let customerId = <number>cid;
// 2nd way
let customerId = cid as number;
// customerId = 2;

//*********Functions*********
function addNum(x: number, y: number): number {
	return x + y;
}

// when no return value
function log(message: string | number): void {
	console.log("message here");
}

//********Interfaces******* --specific structure to object, function
interface UserInterface {
	readonly id: number; //read only property
	name: string;
	age?: number; // optional property
}

const user1: UserInterface = {
	id: 1,
	name: "john",
};

interface MathFunc {
	(x: number, y: number): number;
}

const add: MathFunc = (x: number, y: number): number => x + y;

const sub: MathFunc = (x: number, y: number): number => x + y;

//**********Classes*************
interface PersonInterface {
	id: number;
	name: string;
	register(): string;
}

class Person implements PersonInterface {
	id: number; // can also make private and protected
	name: string;
	constructor(id: number, name: string) {
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
	position: string;
	constructor(id: number, name: string, position: string) {
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

function getArray<Type>(items: Type[]): Type[] {
	return new Array().concat(items);
}

let numArray = getArray([1, 2, 3, 4, 5]);
let strArray = getArray(["Brad", "John", "Jill"]);
// numArray.push("hello"); now it will throw error because you are pushing string in array of only numbers

// React example with passing props title and colour
export interface Props {
	title: string;
	color?: string;
}

const Header = (props: Props) => {
	return "JSX";
};

export default Header;
