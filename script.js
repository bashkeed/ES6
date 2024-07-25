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


// let { address } = {address:{city:"New York", country:"USA", street: 'manhattan'}};

// let {city, country, street} = address;

// console.log(city) // New York
// console.log(country) // USA
// console.log(street) //manhattan

// const colors =['red', 'blue', 'black','white'];

// console.log(colors.indexOf('red',1))

// const numbers =[1,2,3,4,5]

// const reducer = (previousval, newval) => previousval + newval

// console.log(numbers.reduce(reducer, 5))

// let student1 = {name:"John"}
// let student2 = {name:"Mary"}
// let newObject = {
//  ...student1,`
//  ...student2,
// }

//    console.log(newObject)


function repeatStr (n, s) {
   let repeatedString = "";
   for (let i = 0; i < n; i++) {
       repeatedString += s;

}
return repeatedString;
   
}

 console.log(repeatStr(6,"hi"))