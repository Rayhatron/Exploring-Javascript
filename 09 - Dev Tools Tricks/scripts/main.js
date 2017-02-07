
const dogs = [{name: 'Snickers', age: 2}, {name: 'Hugo', age: 8}, {name: 'Ace', age: 5}];

const makeGreen(){
    const p = document.querySelector('p');
    p.style.color = '#BADA55';
    p.style.fontSize = '50px';

}

// Console methods useful in dev tools 

// regular
console.log('Hello!');

// interpolated
console.log('Hello i am a %s string!', ':smile:')

// styled
console.log('%c I am some cool text', 'font-size: 20px; background: blue');

// warning!
console.warn('DANGER');

// error
console.error('What did you do?');

// info 
console.info('The sun is hot');

// testing
console.assert( 1 === 2, 'That is wrong, revise your math.');

// clearing
console.clear();

// viewing dom elements

const p = document.querySelector('p');

console.log(p);
console.dir();

console.clear();

// grouping together
dogs.forEach(dog => {

    console.groupCollapsed(`${dog.name}`);

    console.log(`This is ${dog.name}`);
    console.log(`${dog.name} is ${dog.age} years old.`);
    console.log(`${dog.name} is ${dog.age * 7} dog years old.`);

    console.groupEnd(`${dog.name}`); 
}); 

// counting

console.count('Ray');
console.count('Ray');
console.count('Ray');
console.count('Ray');
console.count('Ray');

// timing

console.time('fetching data');

fetch()
    .then( data => data.json())
    .then( data => {
        console.timeEnd('fetching data');
        console.log(data);
    });