// function addAtBeginning(item :any  , arr : any[]){
//     return [item, ...arr]
// }

// const anyVarOne = addAtBeginning("Apple", ["Banana", "Kiwi"])

// anyVarOne[0].

// console.log(addAtBeginning("Apple", ["Banana", "Kiwi"]));

// function addAtBeginning<T>(item : T , arr : T[]) : T[]{
//     return [item, ...arr]
// }

// console.log(addAtBeginning("Apple", ["Banana", "Kiwi"]));

// const numberArray = addAtBeginning<number>(201, [301, 401]);

// numberArray[0].

// const strArray = addAtBeginning<string>("Apple", ["Banana", "Kiwi"])

// strArray[0]

// interface JpaRepository<T,U> {
//     entity: T,
//     id : U
// }

// interface EmployeeRepo extends JpaRepository<Employee, number>{

// }

// class StudentResponse<T>{
//     private studId: T;

//     constructor(studId: T) {
//         this.studId = studId;
//     }

//     getdetails() {
//         return `Hello from ${this.studId}`;
//     }
// }

// let johnOne = new StudentResponse<string>("S001");

// let jennyOne = new StudentResponse<number>(201);

function getLength<T extends { length: any }>(item: T) {
  return item.length;
}

console.log("LENGTH : ", getLength<string>("Hello World"));

const strArrayOne = getLength<Array<string>>(["Hello", "World"]);

console.log("ARRAY LENGTH : ", strArrayOne);

interface IBOX {
  width: number;
  height: number;
}

function getVolume<T extends IBOX>(value: T) {
  return value.width * value.height;
}

let box: IBOX = {
  width: 10,
  height: 8,
};

console.log(getVolume(box));
