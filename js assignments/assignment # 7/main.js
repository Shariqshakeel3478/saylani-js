//1

// var num = parseInt(prompt("Enter a number"));
// console.log(`Original Number${num}`)
// console.log(`Round off : ${Math.round(num)}`)
// console.log(`Floor Value : ${Math.floor(num)}`)
// console.log(`Ceil Value : ${Math.ceil(num)}`)


//2
// var num = parseInt(prompt("Enter a negative number"));
// if (num > 0) {
//     console.log("Number is not negative")
// } else {
//     console.log(`Original Number${num}`)
//     console.log(`Round off : ${Math.round(num)}`)
//     console.log(`Floor Value : ${Math.floor(num)}`)
//     console.log(`Ceil Value : ${Math.ceil(num)}`)
// }

//3
// var num = prompt("Enter a number");
// var change = parseFloat(num)
// console.log(`Original Number${change}`)
// console.log(`Round off : ${Math.round(change)}`)
// console.log(`Floor Value : ${Math.floor(change)}`)
// console.log(`Ceil Value : ${Math.ceil(change)}`)


//4
// var num = prompt("Enter a number");
// var change = parseFloat(num)
// if (change >= 0) {
//     console.log("Number is not negative")
// } else {
//     console.log(`Original Number${change}`)
//     console.log(`Round off : ${Math.round(change)}`)
//     console.log(`Floor Value : ${Math.floor(change)}`)
//     console.log(`Ceil Value : ${Math.ceil(change)}`)
// }

// 5
// var num = parseInt(prompt("Enter a number"))
// console.log(`The absolute value of ${num} is:${Math.abs(num)}`)

//6

// var dice = Math.floor(Math.random() * 7)
// console.log(`Dice value : ${dice}`)

//7

// var dice = Math.floor(Math.random() * 2);
// if (dice == 0) {
//     console.log("Heads")
// } else {
//     console.log("Tails")
// }

//8

// var num = Math.floor(Math.random() * 101);
// console.log(`Random Number from 0-100 is: ${num}`)

//9
// var weight = parseFloat(prompt("Enter your weight in KG and grams"));
// console.log(`Your weight is : ${weight} KG`)

//10

// var num = Math.floor(Math.random() * 11)
// var user = parseInt(prompt("Enter a number from 0 to 10"))

// if (user > num) {
//     alert("guessed number is higher")
// } else if (user < num) {
//     alert("Guessed number is less")

// } else {
//     alert("guess is correct")
// }

//11

// var date = new Date();
// console.log(date)

//12

// var monthNum = new Date().getMonth()
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// console.log(`Curent Month is :${months[monthNum]}`);

//13

// var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
// var daysNum = new Date().getDay();
// var result = days[daysNum].toString();
// console.log(`Today is :${result.slice(0, 3)}`)

//14

// var user = prompt("Enter a day");
// if (user == "sunday" || user == "saturday") {
//     console.log("its Funday")
// } else {
//     console.log("Its normal day")
// }

//15

// var date = new Date().getDate()
// if (date < 16) {
//     console.log("first 15 days")
// } else {
//     console.log("last 15 days")

// }

//16
// var date = new Date();
// var pastMil = date.getTime();
// var pastMin = pastMil / 60;

// console.log(`Current Date: ${date}`)
// console.log(`Milliseconds from Jan 1, 1970: ${pastMil}`)
// console.log(`Minutes from Jan 1, 1970: ${pastMin}`)


//17

// var time = new Date().getHours();
// if (time >= 0 && time < 12) {
//     console.log("AM")
// } else {
//     console.log("PM")
// }

//18

// var lastDate = new Date("31 dec 2020")
// console.log(lastDate)

//19

// var currentDate = new Date().getTime();
// var pastDate = new Date("18 jun 2024").getTime();

// var result = (currentDate - pastDate) / (1000 * 60 * 60 * 24);
// console.log(`${Math.ceil(result)} Days have been passed`)


//20
// var currentMins = (new Date().getTime());
// var pastMins = new Date().getTime('1 jan 2015');
// var result = currentMins - pastMins / (1000 * 60 * 60)
// console.log(`${Math.ceil(result)} mins have been passed`)

//21

// let oneHourBefore = new Date(Date.now() - 60 * 60 * 1000);
// console.log(oneHourBefore);

//22

// let pastYears = new Date(Date.now() - 100 * 365 * 24 * 60 * 60 * 1000);
// console.log(pastYears)


//23

// let user = parseInt(prompt("Enter your age")) + 1
// let current = new Date().getTime()
// let change = user * 365 * 24 * 60 * 60 * 1000;
// let result = current - change;
// let answer = new Date(result)
// console.log(answer)


//24


// var myName = prompt("Enter your name");
// var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
// var currentMonth = months[new Date().getMonth()];
// var units = parseInt(prompt("Units?"))
// var unitPrice = 14;
// var surcharge = 500;

// document.write(`Your Name : ${myName}`)
// document.write(`<br>Current Month : ${currentMonth}`)
// document.write(`<br>Total Units : ${units}`)
// document.write(`<br>Unit Price : ${unitPrice}`)
// document.write(`<br>Amount Payable Within Due Date  = ${units * unitPrice}`)
// document.write(`<br>Late Payment Surcharge : ${surcharge}`)
// document.write(`<br>Amount Payable after Due Date : ${(units*unitPrice)+surcharge}`)