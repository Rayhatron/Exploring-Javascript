// Javascript reference vs copy

// When developing in javascript, not understanding this concept can lead to bugs
// Not something that a client will see/be impressed with but it's a fundamental concept in dev

// Strings, numbers and booleans
/*let initialSpeed = 20; 
let finalSpeed = initialSpeed;

console.log('Before change: ');
console.log(`Initial Speed: ${initialSpeed}`);
console.log(`Final Speed: ${finalSpeed}`);

initialSpeed = 50;

console.log('After change: ');
console.log(`Initial Speed: ${initialSpeed}`);
console.log(`Final Speed: ${finalSpeed}`);

let name = 'Rufaro';
let name2 = name;

console.log('Before change: ');
console.log(`Name: ${name}`);
console.log(`Name2: ${name2}`);

name = 'Ray'; 

console.log('After change: ');
console.log(`Name: ${name}`);
console.log(`Name2: ${name2}`);*/

// For strings, numbers and booleans, the value gets copied
// so it's not a reference, that's why when 
// we change the original one, the copied will not be updated 
// unless if we reassign.

const squad = ['Ray', 'Malo', 'Quasar', 'Wotjek']; 
const squad2 = squad;

console.log('Before change: ');
console.log(`Squad: ${squad}`);
console.log(`Squad2: ${squad2}`);

squad2[1] = 'Mark';

console.log('After change: ');
console.log(`Squad: ${squad}`);
console.log(`Squad2: ${squad2}`);

// Woah, what just happened,
// We changed the value of the second member of squad2 
// and it also updated the original squad
// this is because, the squad2 arrray is a reference 
// of the original one so when we think we are changing it,
// we are actualling referencing back to the original array
// and updating that.

// inorder to make a copy of the original array, 
// we can use the spread operator of es6, 
// slice() which will return a copy of the original array if no arguements are passed
// concat into an empty array [].concat(squad)
// Array.from(squad)
// My fav is the es6 version as it is simpler

squad2 = [...squad];

// Object get affected by the same concept as arrays
// To copy objects, we can use
// Object.assign({}, person, { value: you want to overide});
// To get an identical copy
// Object copying in this way will only access properties that are 
// one level deep, to go deeper, you can use a function available online called
// clone deep, sometimes it's not necessary 
// Poor man's deep clone, JSON.parse(JSON.stringify(object)); 

