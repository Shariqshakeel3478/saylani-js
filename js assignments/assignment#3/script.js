//1 
// var names = [];


//2
// var names = {};

//3
// var names; // declaration
// names = ["Shariq", "Shakeel"]; // initialize

//4

// var nums =[10,20,30];

//5
// var bool = [true, false, true];

//6

// var mixed = ["Shariq", 20, "SMIT"];

//7

// var networks = ["Warid", "Ufone", "Jazz"];

//8

// var qualifications = ["SSC", "HSC", "BSC", "Phd", "Mphil"];

// for (i = 0; i <= qualifications.length; i++) {
//     console.log(`${i}) ${qualifications[i]}`)
//}

//9

// var movies = ["Avengers", "Batman", "Spider Man", "Rambo"];
// for (i = 0; i < movies.length; i++) {
//     console.log(`${i}) ${movies[i]}`)
// }

// console.log(`The Length of Array is ${movies.length}`)


//10

// var cars = ["Volvo", "Mercedez", "Audi", "BMW"];
// console.log(cars[0])
// console.log(`The Car at first index is ${cars[0]}`)
// console.log(cars[cars.length - 1])

//11

// var names = ["Shariq", "Suleman", "Shayan"];
// var score = [300, 400, 450];
// total = 500;

// for (i = 0; i < names.length; i++) {
//     console.log(`${names[i]}'s score is ${score[i]} and percentage is ${(score[i]/total)*100}%`);
// }

// var colors = ["Blue", "Green", "Blue"];

// a
// var new_color = prompt("Enter a color to add at the beginning of the array")
// colors.unshift(new_color);
// console.log(colors)


// b
// var new_color = prompt("Enter a color to add at the end of the array")
// colors.push(new_color);
// console.log(colors)

//c
// var count = parseInt(prompt("Enter the number of colors to be inputted in the array"));
// for (i = 0; i < count; i++) {
//     var new_colors = prompt("Enter color")
//     colors.push(new_colors)
// }
// console.log(colors)

// d
// colors.shift()
// console.log(colors)

// e

// colors.pop()
// console.log(colors)

//f

// var removed = prompt("Enter a color to be added")
// var index = parseInt(prompt("Enter the intended index"))
// colors.splice(index, index, removed)
// console.log(colors)

//g
// var start = parseInt(prompt("enter the starting point"))
// var end = parseInt(prompt("enter the ending point"))
// colors.splice(start, end)
// console.log(colors)

//13

// var score = [100, 130, 340, 88, 49];
// console.log(`The original array is : ${score}`)
// console.log(`Sorted Array is : ${score.sort((a,b)=>a-b)}`)


//14

// var fruits = ["Banana", "Kiwi", "Apple"]
// console.log(`Original: ${fruits}`);
// console.log(`Sorted : ${fruits.sort()}`)

//15
// var cities = ["Karachi", "Lahore", "Peshawar", "Multan", "Larkana"];
// var selected = cities.slice(1, 4);
// console.log(`Cities : ${cities}`)
// console.log(`Selected : ${selected}`)


//16

// var main = ["This", "is", "my", "Array"];
// for (i = 0; i < main.length; i++) {
//     console.log(` Array element : ${main[i]}`)
// }

// var changed = main.toString()
// console.log(`String : ${changed}`)


//17

// var elements = ["Keyboard", "Mouse", "Monitor", "Wire"]
// for (i = 0; i < elements.length; i++) {
//     console.log(elements[i])
// }


//18
// var elements = ["Keyboard", "Mouse", "Monitor", "Wire"];

// var reverseArray = elements.reverse();
// for (i = 0; i < reverseArray.length; i++) {
//     console.log(reverseArray[i])
// }


//19
// document.write(`   
//     <select>
//     <option>Apple</option>
//     <option>Kiwi</option>
//     <option>Orange</option>
//     <option>Strawberry</option>
//     </select>  
//     `)


//20

// var multi = [
//     [0, 1, 2],
//     [2, 1, 0],
//     [1, 0, 2]
// ]

// console.log(multi)