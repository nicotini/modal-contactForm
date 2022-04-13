function hello() {
    console.log('Hello', this);
}
const person = {
    name: 'Helen',
    age: 25,
    sayHello: hello,
    sayHelloWindow: hello.bind(this),
    logInfo: function(job, phone) {
        console.group(`${this.name} info:`)
        console.log(`Name is ${this.name}`);
        console.log(`Age is ${this.age}`);
        console.log(`Job is ${job}`);
        console.log(`Phone is ${phone}`);
        console.groupEnd()
      
    }
}

const andrey = {
    name: 'Andrey',
    age: 35,
}
//const andreyInfoLog = person.logInfo.bind(andrey,'web-programmer', '22-11-562')();
const andreyInfoLog = person.logInfo.apply(andrey, ['web-programmer', '22-11-562']);

array = [2, 4, 6, 8, 10];
/* function miltBy(arr, n) {
    return array.map(function(i) {
        return i * n;
    })

}
console. log(miltBy(array, 3)); */
Array.prototype.multBy = function(n) {
    return this.map(function(i) {
        return i * n;
    })
}
console.log(array.multBy(7));
function isEmpty(userTest) {
    for(let key in userTest) {
        return false;
    }
    
 return true;
}
/* const newTest = {};
newTest.name = "John";
console.log(isEmpty(newTest)); */
function sumSalary(listObject) {
    let sum = 0;
    for(let key in listObject) {
       sum += listObject[key];
    }
    return sum;
}
function multipleNumber(obj) {
    for(let key in obj) {
        if(typeof obj[key] === "number") {
            obj[key] = obj[key] * 2;
        }
        
    }
    return obj; 
}
let menu = {
    width: 200,
    height: 300,
    title: "My menu",
  };
 
  /* console.log(multipleNumber(menu)); */
  function logPerson() {
      console.log(`Person: ${this.name}, age - ${this,age}, job - ${this.job}`);
  }

  function bind() {
      
  }

  const person1 = {name: "Helen", age: 35, job: "cook",};
  const person2 = {name: "Lukas", age: 40, job: "engineer",};


