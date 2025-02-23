// 1

// for (var i = 1; i <= 5; i++) {
//     console.log("Hello World")
// }

// 2
// for (var i = 1; i <= 10; i++) {
//     console.log(i)
// }

//3

// var num = parseInt(prompt("Enter a number"))
// var limit = parseInt(prompt("Enter limit"))

// for (var i = 1; i <= limit; i++) {
//     console.log(`${num} x ${i} = ${num *i}`)
// }

// 4

// var arr = ["Nokia", "Samsung", "Apple", "Realme"];
// for (var i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }


//5
// var arr = ["Nokia", "Samsung", "Apple", "Realme"];

// for (var i = 0; i < arr.length; i++) {
//     console.log(`Element at index ${i} is : ${arr[i]}`)
// }

//6

// var limit = parseInt(prompt("Enter a number"))
// var arr = [];

// for (var i = 0; i < limit; i++) {

//     var elements = prompt("Enter Element")
//     arr.push(elements)
// }

// console.log(arr)

//7
//counting

// for (var i = 0; i <= 15; i++) {
//     console.log(i)
// }

//reverse counting

// for (i = 10; i > 0; i--) {
//     console.log(i)
// }

//even

// for (i = 0; i <= 10; i++) {
//     console.log(i * 2)
// }

//odd

// for (var i = 1; i <= 20; i = i + 2) {
//     console.log(i)
// }

//series
// for (var i = 0; i <= 10; i = i + 2) {
//     console.log(`${i}K`)
// }


//8

// var user = prompt("Enter item to search")
// var arr = ["apple", "cake", "chocolate"]
// for (var i = 0; i < arr.length; i++) {
//     if (user == arr[i]) {
//         console.log(`${user} is found at index ${i} `)
//     }
// }


//9

// var nums = [20, 30, 40, 50];
// var bigNum = nums[0]
// for (var i = 1; i < nums.length; i++) {
//     if (nums[i] > bigNum) {
//         bigNum = nums[i]
//     }
// }

// console.log(bigNum)

//10
// var nums = [20, 30, 40, 50];
// var smallNum = nums[0]
// for (var i = 1; i < nums.length; i++) {
//     if (nums[i] < smallNum) {
//         smallNum = nums[i]
//     }
// }

// console.log(smallNum)

//11

// var a = [24, 53, 78, 91, 12];
// var s = a[0]
// var l = a[0]

// for (var i = 1; i < a.length; i++) {
//     if (a[i] > l) {
//         l = a[i]
//     }
//     if (a[i] < s) {
//         s = a[i]
//     }
// }

// console.log(`The Smallest Number is : ${s}`)
// console.log(`The Largest Number is : ${l}`)


//12

// for (var i = 1; i <= 20; i++) {
//     console.log(i * 5)
// }


//13

// var students = ["Ali", "Sami", "Taha", "Inam"];
// var scores = [58, 73, 89, 90];

// document.write(`

//     <table border=" ">
//     <tr>
//     <td>${students[0]}</td>
//     <td>${scores[0]}</td>
//     </tr>
//     <tr>
//     <td>${students[1]}</td>
//     <td>${scores[1]}</td>
//     </tr>
//     <tr>
//     <td>${students[2]}</td>
//     <td>${scores[2]}</td>
//     </tr>
//     <tr>
//     <td>${students[3]}</td>
//     <td>${scores[3]}</td>
//     </tr>

//     </table>

//     `)


//17


// for (var i = 1; i <= 10; i++) {
//     if (i % 2 == 0) {
//         console.log(`${i} is Even`)
//     } else {
//         console.log(`${i} is Odd`)
//     }
// }


//18
// var result = 0;
// for (var i = 0; i < 10; i++) {

//     if (i % 2 != 0) {
//         result += i * i
//     }

// }

// console.log(result)

//19


// for (var i = 7; i >= 1; i--) {
//     for (var j = 1; j <= i; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }


//20



//a
// for (var i = 1; i <= 5; i++) {
//     for (var j = 1; j <= 5; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }



//b
// for (var i = 1; i <= 5; i++) {
//     for (var j = 1; j <= i; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }


//c
// for (var i = 5; i >= 1; i--) {
//     for (var j = 1; j <= i; j++) {
//         document.write("*")
//     }
//     document.write("<br>")
// }