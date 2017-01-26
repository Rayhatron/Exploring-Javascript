const people = [
    {name: 'Ray', year: 1997 },
    {name: 'Kait', year: 1986 },
    {name: 'Irv', year: 1970 },
    {name: 'Lux', year: 2015 }
    
];

const comments = [
    {text: 'Love this!', id: 523423 },
    {text: 'Super good', id: 823423 },
    {text: 'You are the best', id:  2039842},
    {text: 'Lasagne is my fav food ever', id: 123523 },
    {text: 'Nice Nice Nice', id: 542328 }
];

// Some and Every checks
// Array.prototype.some() // is at least one person 18?

        //First method
// const isAdult = people.some(function(person){
//     const currentYear = (new Date()).getFullYear();
//     if(currentYear - person.year >= 19){
//         return true;
//     }
// });

        //Simpler way
const isAdult = people.some(person => 
    ((new Date()).getFullYear()) - person.year >= 19);

console.log({isAdult});

// Array.prototype.every() // is everyone 19?
const allAdult = people.every(person => 
    ((new Date()).getFullYear()) - person.year >= 19);

console.log({allAdult});

// Array.prototype.find()
// Find is like filter, but instead return just the one are looking for 
// Find the comment with ID of 823423

/*const comment = comments.find(function(comment){
    if(comment.id === 823423){
        return true;
    }
});*/

        //Simpler way
const comment = comments.find(comment => comment.id === 823423);

console.log(comment);

// Array.prototype.findIndex()
// Find the comment with this ID
// delete the comment with the ID of 823423

const index = comments.findIndex(comment => comment.id === 823423);

console.log(index);

comments.splice(index, 1);
console.table(comments);