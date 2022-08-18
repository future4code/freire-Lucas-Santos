const word:string = 'Hello World';
const array:number[] = [1,2,3,4,5];
const object1:object = {name:'John Doe', age:30};
const arrayX = [1,"Paulo",true,false,null,undefined,{name:'John Doe', age:30}]

function add(a:number, b:number):number {
  return a + b;
}

function sayHello(name?:string):void {
  console.log("Hello", name || 'World');
}

const object2:{name:string; age:number; method:()=>void} = {
  name: 'John Doe',
  age: 30,
  method: function() {
    console.log('Hello World');
  }
}

object2.method();