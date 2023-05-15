// Explicit
// let x: string;

// // Implicit Type / Type Inference
// let y = 201;

// y = "";

let anyVar: any = "Hello";

anyVar = 201;

anyVar = true;

let unknownVar: unknown;

let str: string;

let num: number;

if (typeof unknownVar === "string") {
  str = unknownVar;
}

if (typeof unknownVar === "number") {
  num = unknownVar;
}

let objectOne: object;

objectOne = {
  firstName: "John Doe",
};

objectOne = () => {
  console.log("Hello Lambda");
};

objectOne = ["Monica", "Joe"];

// let friends: Array<string>;
let friends: string[];

friends = ["Joe", "Monica", "Ross", "Rachel"];

let age: string | number;

age = "Thirty-two";

console.log(typeof age);

age = 32;

console.log(typeof age);

let userOne: [string, number];

userOne = ["John Doe", 24];

let anyNum: any = 201;

let strOne: string = anyNum;

console.log(typeof strOne);

class A {}

let a: A;

// Block Scoping - let & const

// function mystry(arr: number[]) {
//   if (arr.length > 2) {
//     let FLASH = "FLADHING";
//     console.log(LOAD);
//   } else {
//     let LOAD = "LOADING";
//   }
// }

// mystry([2, 3, 4, 5, 6]);

// const user = {
//   name: "John",
// };

// user.name = "Jenny";

// console.log(user); // ?

// // user = {}

// const fruits = ["apple", "banana"];

// fruits.push("Guava");

// console.log(fruits);

// fruist = [];

// Tempate literals `` (back tick);

let username = "John Doe";
let userAge = 32;

let strTwo = `Hell from ${username}
I'm ${userAge} years old!!!

`;

console.log(strTwo);

// Promise

const demoPromise = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Here the data comes");
      //   reject(new Error("Somethign went wrong!"));
    }, 2000);
  });
};

const consumePRomise = () => {
  demoPromise()
    .then((response) => console.log("REPSONSE : ", response))
    .catch((err) => console.error(err));
};

consumePRomise();

// Arrow Function :
// - Clean Syntax
//- short Syntax

let numbers = [2, 3, 4, 5];

// let newArray = numbers.map(function (value) {
//   return value * 2;
// });

let newArray = numbers.map((value) => value * 2);

console.log(newArray);

// Destructuring - Arrays / Objects

let fruits = ["Apple", "Banana", "Kiwi"];

let [, , var3] = fruits;

console.log(var3); //?

var3 = "Oranges";

console.log(fruits);

let user = {
  firstName: "John",
  lastName: "Doe",
  userAgeOne: 32,
  userfriends: ["Joe", "Monica"],
};

let {
  firstName,
  userfriends: [f1, f2],
} = user;

console.log(firstName, f2, f1);

let manyUsers = [
  { email: "john@test", age2: 32 },
  { email: "jenny@test", age2: 34 },
  { email: "jack@test", age2: 36 },
];

let [{ email: e1, age2: a1 }, { email: e2, age2: a2 }] = manyUsers;

console.log(e1, a1, e2, a2);

console.log(manyUsers[2].age2);

// REST & SPREAD (...)

const sum = (value: number, ...numbers: Array<number>) => {
  let total = 0;
  for (let item of numbers) {
    total += item;
  }
  return total;
};

// console.log("SUM : ", sum(2, 3));

console.log("SUM : ", sum(2, 3, 4, 6));

let numArray = [3, 4, 5];

let newNumArray = [1, 2, ...numArray];

console.log(newNumArray);

let userA = {
  name: "A",
  age: 34,
};

let userB = {
  ...userA,
  email: "b@test.com",
  age: 40,
};

console.log(userB); //?

class Employee {
  private _empId: string = "";
  private _empName: string = "";

  constructor();
  constructor(empId?: string, empName?: string);
  constructor(empId?: string, empName?: string) {
    if (typeof empId === "string") {
      this._empId = empId;
    }
    if (typeof empName === "string") {
      this._empName = empName;
    }
  }

  get empId() {
    return this._empId;
  }

  set empId(value: string) {
    this._empId = value;
  }

  get empName() {
    return this._empName;
  }
  set empName(empName: string) {
    this._empName = empName;
  }

  getDetails(): string {
    return `Hello from ${this.empName} - ID : ${this.empId}`;
  }
}

let john = new Employee("E001", "John Doe");

console.log(john.getDetails());

let jenny = new Employee();
jenny.empId = "E002";
jenny.empName = "Jenny Doe";

console.log(jenny.getDetails());

class Student {
  constructor(private firstName: string) {}

  getDetails() {
    return `Hell from ${this.firstName}`;
  }
}

let alice = new Student("Alice Public");

console.log(alice.getDetails());
