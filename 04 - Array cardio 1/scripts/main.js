//Practicing array manipulations

const inventors = [
    {first: 'Albert', last: 'Einstein', birthYear: 1879, deathYear: 1955},
    {first: 'Isaac', last: 'Newton', birthYear: 1643, deathYear: 1727},
    {first: 'Galileo', last: 'Galilei', birthYear: 1564, deathYear: 1642},
    {first: 'Marie', last: 'Curie', birthYear: 1867, deathYear: 1934},
    {first: 'Johannes', last: 'Kepler', birthYear: 1571, deathYear: 1630},
    {first: 'Nicolaus', last: 'Copernicus', birthYear: 1473, deathYear: 1543},
    {first: 'Max', last: 'Planck', birthYear: 1858, deathYear: 1947}
];

const people = [
    'Beck, Glenn', 'Becker, Carl', 'Beckett, Samuel', 'Beddoes, Mick', 'Beecher, Henry', 'Beethoven, Ludwig', 'Begin, Menachem', 'Belloc, Hilaire', 'Bellow, Saul', 'Benchley, Robert', 'Benenson, Peter', 'Ben-Gurion, David', 'Benjamin, Walter', 'Benn, Tony', 'Bennington, Chester', 'Benson, Leana', 'Bent, Silas', 'Bentsen, Lloyd', 'Berger, Ric', 'Bergman, Ingmar', 'Berio, Luciano', 'Berle, Milton', 'Berlin, Irving', 'Berne, Eric', 'Bernhard, Sandra', 'Berra, Yogi', 'Berry, Halle', 'Berry, Wendell', 'Bethea, Erin', 'Bevan, Aneurin', 'Bevel, Ken', 'Biden, Joseph', 'Bierce, Ambrose', 'Biko, Steve', 'Billings, Josh', 'Biondo, Frank', 'Birrell, Augustine', 'Black, Elk', 'Blair, Robert', 'Blair, Tony', 'Blake, William'
]

// Array.prototype.filter()
// 1. Filter the list of inventors for those who were born in the 1500's
console.table( inventors.filter(inventor => inventor.birthYear >1499 && inventor.birthYear<1600) );

// Array.prototype.map()
// 2. Give us an array of the inventors' first and last names
console.log( inventors.map(inventor => `${inventor.first} ${inventor.last}`));

// Array.prototype.sort()
// 3. Sort the inventors by birthdate, oldest to youngest
console.table( inventors.sort( (a,b) => a.birthYear > b.birthYear ? 1 : -1));

// Array.prototype.reduce()
// 4. How many years did all the inventors live?
//var totalAge = 0;
console.log( inventors.reduce( (total, inventor) => { 
    return total + (inventor.deathYear - inventor.birthYear);
}, 0 ));


// 5. Sort the inventors by years lived
 console.table( inventors.sort( function(a,b){
    b.age = b.deathYear - b.birthYear;
    a.age = a.deathYear - a.birthYear;
    return b.age > a.age ? 1 : -1;
}  )); 

// 6. create a list of Boulevards in Paris that contain 'de' anywhere in the name
// https://en.wikipedia.org/wiki/Category:Boulevards_in_Paris
/*
const category = document.querySelector('.mw-category');
const links = [...category.querySelectorAll('a')];
const de = links
            .map(link => link.textContent)
            .filter(streetName => streetName.includes('de'));
*/


// 7. sort Exercise
// Sort the people alphabetically by last name
const alpha = people.sort((lastOne, nextOne) => {
    const [alast, afirst] = lastOne.split(', ');
    const [blast, bfirst] = nextOne.split(', ');
    return alast > blast ? 1 : -1;
});

console.log(alpha);

// 8. Reduce Exercise
// Sum up the instances of each of these
const data = ['car', 'car', 'truck', 'truck', 'bike', 'walk', 'car', 'van', 'bike', 'walk', 'car', 'van', 'car', 'truck' ];

const transportation = data.reduce(function(obj, item){
    if(!obj[item]) {
        obj[item] = 0;
    }
    obj[item]++;
    return obj;
}, {});

console.log(transportation);