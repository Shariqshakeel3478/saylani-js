//1
// function showDate() {
//     let a = new Date()
//     document.getElementById('show').innerHTML = a;
// }


// 2

// function greet(a, b) {
//     document.getElementById('show').innerHTML = `Hi ${a + "" + b}`
// }

//3

// let a = parseInt(prompt("Enter a number"))
// let b = parseInt(prompt("Enter another number"))

// function add(a, b) {
//     return a + b
// }

// console.log(add(a, b))



//4


// let a = parseInt(prompt("enter a number"))
// let b = prompt("Enter + - * /")
// let c = parseInt(prompt("Enter another number"))

// function cal(a, b, c) {

//     switch (b) {
//         case '+':
//             return a + c;
//             break;

//         case '-':
//             return a - c;
//             break;
//         case '*':
//             return a * c;
//             break;
//         case '/':
//             return a / c;
//             break;
//         default:
//             return "Enter correct opeator"
//     }

// }

// console.log(cal(a, b, c))



//5


// let a = parseInt(prompt("Enter a value"))

// function squareVal(a) {
//     return a * a
// }

// console.log(squareVal(a))



//6 function fact(a) {
//     for (var i = a - 1; i >= 0; i--) {
//         return a * i

//     }
// }
// console.log(fact(5))


//7

// function count() {
//     let start = parseInt(prompt("Enter a number"))
//     let end = parseInt(prompt("Enter another number"))

//     for (var i = start; i <= end; i++) {
//         console.log(i)
//     }
// }


//8



// function rightTriangle(h, b, p) {
//     let base = b * b;
//     let hyp = h * h;
//     let perp = p * p;

//     if (hyp = base + perp) {
//         console.log('right angled')
//     } else {
//         console.log('no')
//     }
// }


//9

// function calcArea(width, height) {

//     let area = width * height;
//     console.log(area)
// }


//10

// function palindrome(word) {
//     let wordReverse = ""
//     for (var i = word.length - 1; i >= 0; i--) {
//         wordReverse += word[i]
//     }

//     if (wordReverse === word) {
//         document.getElementById('show').innerHTML = "Palidnrome"
//     } else {
//         document.getElementById('show').innerHTML = "Not a Palidnrome"
//     }
// }



//11


// function capitalizeFirstLetter(string) {
//     return string.charAt(0).toUpperCase() + string.slice(1)
// }

// console.log(capitalizeFirstLetter("hello world"));


//12

// function findLongestWord(str) {
//     const words = str.split(' ');
//     let longestWord = '';
//     for (let word of words) {

//         if (word.length > longestWord.length) {
//             longestWord = word;
//         }
//     }
//     return longestWord;
// }
// const exampleString = 'Web Development Tutorial';
// console.log(findLongestWord(exampleString));


//13


// function occurences(a, b) {
//     for (i in a) {
//         if (b == a[i]) {
//             console.log(a[i])
//         }
//     }
// }

// console.log(occurences("word", 'o'))



//14

// function calcCircumference(radius) {

//     return 3.142 * 2 * radius


// }


// function calcArea(radius) {
//     return 3.142 * radius * radius
// }