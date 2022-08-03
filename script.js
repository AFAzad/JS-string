let n = "Raaz";
console.log(n);
let friend = "Prasad";
console.log(friend);

//Template literals

let boy1 = "Rajiv";
let boy2 = "Sam";

let friends = `${boy1} is friend of ${boy2}`;
console.log(friends);

//Escape sequence Characters
//we can use single quote to escape sequence to solve the problem
// let name = 'Adam D \'Eve'; 
let Fruit = 'App\'le';
console.log(Fruit);

let Fruit2 = "Pap\"aya";
console.log(Fruit2);

//STRING METHOD
let sub = "Physics"
console.log(sub.toLocaleUpperCase())
console.log(sub.toLocaleLowerCase())
console.log(sub.length)
console.log(sub.slice(3,6));


let rep = "Harry bro";
console.log(rep.replace("bro", "bhai"))

let repo = "      Harry bro";
console.log(repo)

//to remove white space

console.log(repo.trim())

//concat "+"

let a = "Ravi"
let b = "kisan"

console.log(a.concat(" is a friend of ", b ))