// let course = Array.from('javascripty')


// console.log(course)


// const people = [{ name: 'Max' }, { name: 'Jack' }, { name: 'Marry' }];
// let i = 0;
// while (i < people.length && people[i].name != 'Jack') {
//  i++;
// }
// if (i !== people.length) {
//     console.log('Jack is in ' + i)
// //  alert('Jack is in ' + i);
// } else {
//     console.log('Cannot find Jack')
// //  alert('Cannot find Jack');
// }


let { address } = {address:{city:"New York", country:"USA", street: 'manhattan'}};

let {city, country, street} = address;

console.log(city) // New York
console.log(country) // USA
console.log(street) //manhattan