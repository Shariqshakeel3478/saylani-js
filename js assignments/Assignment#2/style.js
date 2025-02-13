// 1

// var name = prompt("Enter Your Name");
// alert(`Hi, ${name}`);


// 2

// var num2 = parseInt(prompt("Enter a number"));

// for(i = 1;i<=10;i++){
//     document.write("<br>"+`${num2} x ${i} = ${num2 *i}`);
// }


// 3
// var city = prompt("Enter city name");
// document.write(`Welcome to ${city} ,The city of lights`);

// 4
// var male = prompt("Enter Your gender");
// if(male =="female"){
//     document.write("Good morning Mam");
// }
// else{
//     document.write("Good Morning sir");
// }


// 5

// var signal =prompt("Enter traffic signal color : red,green or yellow")
// if(signal =="red"){
//     document.write("Wehicles must stop")
// }

// else if(signal =="yellow"){
//     document.write("Wehicles should get ready to move")
// }
// else if(signal =="green"){
//     document.write("Wehicles can move now")
// }
// else{
//     document.write("wrong signal")
// }



// 6

// var max_age = parseInt(prompt("Enter your expected age:"))
// var current = parseInt(prompt("Enter your current age"));

// if(max_age >current){
//     document.write("you're welcome")
// }
// else{
//     document.write("invalid")
// }

// 7
// var fuel =parseFloat(prompt("Enter remaining fuel in numbers"));

// if(fuel<0.25){
//     document.write("Refuel")
// }
// else{
//     document.write("tank if full")
// }



//8

//a 

// var a = 4;
// if(++a ==5){
//     document.write("true")
// }


// b

// var b = 82;
// if(b++ == 83){
//     document.write("true");
// }

// c

// var c = 12;
// if(c++ === 13){
//     document.write("condition 1 is true")
// }
// if(c===12){
//     document.write("condition 2 is true")
// }

// if(++c <14){
//     document.write("Condition 3 is true")
// }
// if(c===14){
//     document.write("condition 4 is true")
// }

// d

// var materialCost = 20000;
// var laborCost =2000;
// var totalCost = materialCost +laborCost;
//  if(totalCost == materialCost +laborCost){
//     alert("Cost Equals")
//  }


// e

// if(true){
//     alert("true")
// }

// if(false){
//     alert("false")
// }


// f
//  if("car"< "cat"){
//     alert("car is smaller than cat")
//  }


// 9

// var total = 300;
// var obtained = parseInt(prompt("Enter Obtained marks out of 300"));
// var percentage = (obtained/total) *100;
// var grade;
// if(percentage >=80){
//  grade = "A+"
// }
// if(percentage >= 70 && percentage <=79){
//     grade ="A"
// }
// if(percentage >= 60 && percentage <=69){
//     grade ="B"
// }

// document.write(`<h1>Marksheet:</h1><br> Total Marks: ${total} <br> Obtained Marks : ${obtained} <br>Percentage : ${percentage} <br> Grade: ${grade}`);


// 10

// var item1 = prompt("Enter First Item");
// var item2 =prompt("Enter second item");

// var price1 = parseInt(prompt("Enter the price of first item"));
// var price2 = parseInt(prompt("Enter the price of second item"));

// var quantity1 =parseInt(prompt("Enter the quantity of first item"));
// var quantity2 =parseInt(prompt("Enter the quantity of second item"));

// var shipping = 200;
// var discount;
// var total = (quantity1 * price1) + (quantity2 * price2); 
// if(total > 2000){
//     discount = total * 0.1;

// }
// else{
//     discount = 0
// }
// document.write(`<h1>Shopping List</h1><br><br>Price of ${item1} = ${price1}<br>Price of ${item2} = ${price2}<br>Quantity of ${item1} = ${quantity1}<br>Quantity of ${item2} = ${quantity2}<br>total price of ${item2} : ${price2} x ${quantity2} = ${price2 * quantity2}<br>total price of ${item1} : ${price1} x ${quantity1} = ${price1 * quantity1}<br>Shipping charges = ${shipping}<br>Total Charges = ${total} <br>Discount : ${discount}`);



//11

// var secret = 7;
// var guess = parseInt(prompt("guess Number from 1 to 10"))

// if(guess == secret){
//     document.write("Bingo you guessed it right")
// }

// else{
//     document.write("try again")
// }


//12

// var num = parseInt(prompt("Enter a number"))

// if(num %3 ==0){
//     document.write("divisible by 3")
// }
// else{
//     document.write("not divisible by 3")
// }



//13

// var team_1 = prompt("Enter your team name");
// var team_2 = prompt("Enter another team name");
// var team1_score = parseInt(prompt("Enter 1st team score"))
// var team2_score = parseInt(prompt("Enter 2nd team score"))

// var winner;

// if(team1_score >team2_score){
//     winner = "team 1"
//     document.write(`Winner is ${winner}`)
// }

// else{
//     winner = "team 2"
//     document.write(`Winner is ${winner}`)
// }



//14

// var num_input = parseInt(prompt("Enter a number"));
// var num_str = prompt("Enter a String");
// var num_flt = parseFloat(prompt("Enter a Float"));

// document.write("Data type of" +num_input + "is" + typeof(num_input));
// document.write("<br>Data type of" +num_str + "is" + typeof(num_str));
// document.write("<br>Data type of" +num_flt + "is" + typeof(num_flt));


// 15

// var whether = parseInt(prompt("Enter wheather in Degrees"));
// if(whether > 40){
//     document.write("it is too hot outside")
// }
// if(whether > 30 && whether < 40){
//     document.write("The whether today is normal")
// }
// if(whether > 20 && whether < 30){
//     document.write("Today's whether is cool")
// }
// if(whether > 10 && whether <20){
//     document.write("OMG! whether is so cool")
// }


//16

// var num_1 = parseInt(prompt("Enter a number"))
// var num_2 = parseInt(prompt("Enter another number"))
// var operator = prompt("choose any one : + , - , x , / or %")


// switch(operator){

// case "+":
//     document.write(`${num_1} + ${num_2} = ${num_1 + num_2}`);
//     break;
//     case "-":
//     document.write(`${num_1} - ${num_2} = ${num_1 - num_2}`);
//     break;
//  case "*":
//     document.write(`${num_1} * ${num_2} = ${num_1 * num_2}`);
//     break;
//     case "/":
//     document.write(`${num_1} / ${num_2} = ${num_1 / num_2}`);
//     break;
//     case "%":
//     document.write(`${num_1} % ${num_2} = ${num_1 % num_2}`);
//     break;

//     default:
//         document.write("Enter again")


// }


//18
// var day = prompt("Enter day");

// if(day == "Saturday"){
//     alert("Weekend")
// }
// else if(day =="Sunday"){
//     alert("Holiday")
// }
// else{
//     alert("Weekday")
// }




//19

// var num = parseInt(prompt("Enter a number"))
// if(num >= 50){
//     alert("Passed")
// }
// else{
//     alert("Failed")
// }

//20

// var a = parseInt(prompt("Enter a number"))
// var b = parseInt(prompt("Enter another number"))

// if(a > b){
//     alert( a+"is greater")
// }
// else if(b>a){
//     alert(b + "is greater")
// }
// else{
//     alert("both are equal")
// }



//21

// var lang = prompt("Choose es/en/de")
// if(lang == "en"){
//     document.write("Hello World")
// }
// else if(lang == "es"){
//     document.write("Hola mundo")
// }
// else{
//     document.write("Hallo Welt")
// }



//22

// var num = parseInt(prompt("Enter a number"))

// if(num >0){
//     document.write("positive")
// }
// else {
//     document.write("Negative")
// }


//23

// var num = parseInt(prompt("Enter a number"))
// var noun = prompt("Enter a noun")

// alert(num + noun)







// pdf 2 

// 1
// var num = parseInt(prompt("Enter a number"))

// if(num %3 ==0){
//     document.write("divisible by 3")
// }
// else{
//     document.write("not divisible by 3")
// }


//2

//  var num = parseInt(prompt("Enter a number"))

// if(num %2 ==0){
//     document.write("Even")
// }
// else{
//     document.write("Odd")
// }


// 3

// var age = parseInt(prompt("Enter age"));
// if(age >= 18){
//     alert("Old Enough")
// }
// else{
//     alert("Too enough")
// }


//4

// var myName = "Usman";
// var yourName = prompt("Enter Your Name");

// if(yourName == myName){
//     alert("We have same name")
// }



//5

// var num = parseInt(prompt("Enter a number"));
// switch(num){

// case num%3==0:
//     alert("Num is divisible by 3")
// break;

// case num%3 != 0:
//     alert("Number is not divisible by 3")
// break;

// default:
//     alert("Enter Number Again")
// }


// 6


// var char = prompt("Enter any letter or number");

// if(!isNaN(char)){
//     document.write("It is a number")
// }

// else if(char>="A" && char <="Z"){
//     document.write("It is an uppercase letter")

// }
// else if(char>="a" && char <="z"){
//     document.write("It is an lowercase letter")

// }


// 7

// var num1 = parseInt(prompt("Enter a Number"))
// var num2 = parseInt(prompt("Enter another Number"))
// var operator = prompt("Choose operation : +,-,*,/ and %");

// switch(operator){
//     case "+":
//         document.write(num1 + num2);
//         break;

//     case "-":
//     document.write(num1-num2);
//     break;
//     case "*":
//     document.write(num1*num2);
//     break;

//     case "/":
//     document.write(num1/num2);
//     break;

//     case "%":
//     document.write(num1%num2);
//     break;

//     default:
//         document.write("Invalid operator");
// }



//8

// var time = parseInt(prompt("Enter time in 24 hour format"))
// if(time>24){
// document.write("Invalid")
// }
// else if(time>=0 && time <12){
//     document.write("Good Morning")
// }
// else if(time>=12 && time<17){
// document.write("Good Afternoon")
// }

// else if(time>=17 && time<21){
//     document.write("Good Evening")
// }
// else{
//     document.write("Good Night")
// }


// 9

// var year = parseInt(prompt("Enter a year in YYYY format:"));

// if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
//   document.write(year + " is a leap year.");
// } else {
//   document.write(year + " is not a leap year.");
// }


//10

// var pass = "shariq123";
// var check = prompt("Enter a password in lowercase")

// var lower = check.toLowerCase();

// if(check == pass){
//     document.write("Correct")
// }
// else{
//     document.write("Wrong")
// }

//11

// var firstName = "Ali";
// if (firstName === "Fahad") {
// document.write("Hello Fahad!");
// }
// else{
//     document.write("You are not Fahad")
// }


//12

// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// }
// else{
// greeting = "Good evening";
// }

// document.write(greeting)


//13

// var num1 =parseInt(prompt("Enter a number"))
// var num2 =parseInt(prompt("Enter another number"))

// if(num1 == num2){
//     document.write("Both are Equal")
// }
// else if(num1 >num2){
//     document.write("num1 is greater")
// }
// else{
//     document.write("num2 is greater")
// }


//14

// var num =parseInt(prompt("Enter a number"))

// if(num<0){
//     document.write("positive")
// }
// else if(num>0){
//     document.write("Negative")

// }

// else{
//     document.write("Zero")

// }


//15
// var hour = parseInt(prompt("What is the current hour?"));

// if (hour >= 6 && hour <= 9) {
//   document.write("Breakfast is served.");
// } else if (hour >= 11 && hour <= 13) {
//   document.write("Time for lunch.");
// } else if (hour >= 17 && hour <= 20) {
//   document.write("It's dinner time.");
// } else {
//   document.write("Sorry, you'll have to wait, or go get a snack.");
// }


// 16
// let value = prompt("Enter a value:");
// if (!isNaN(value)) {
//   document.write("The type of the variable is 'number'.");
// } else if (typeof value === "string") {
//   document.write("The type of the variable is 'string'.");
// } else if (typeof value === "boolean") {
//   document.write("The type of the variable is 'boolean'.");
// } else if (typeof value === "undefined") {
//   document.write("The type of the variable is 'undefined'.");
// } else {
//   document.write("invalid");
// }


//17

// var char =prompt("Enter a single chracter")

// if(char =="a" ||char =="e"|| char =="i"|| char =="o"|| char =="u"){
//     document.write("vowels")
// }
// else{
//     document.write("consonants")

// }



//18

// 

//19

// var month = parseInt(prompt("Enter a month"))

// switch (month) {
//     case 1:
//         document.write("January")
//         break;
//     case 2:
//         document.write("Feb")
//         break;
//     case 3:
//         document.write("March")
//         break;
//     case 4:
//         document.write("April")
//         break;
//     case 5:
//         document.write("May")
//         break;
//     case 6:
//         document.write("June")
//         break;
//     case 7:
//         document.write("july")
//         break;
//     case 8:
//         document.write("Aug")
//         break;
//     case 9:
//         document.write("Sep")
//         break;
//     case 10:
//         document.write("oct")
//         break;
//     case 11:
//         document.write("Nov")
//         break;
//     case 12:
//         document.write("Dec")
//         break;
//     default:
//         document.write("invalid")


// }



// // 20

// var age = parseInt(prompt("Enter your age:"));
// var voteable = age < 18 ? "Too young" : "Old enough";
// console.log(voteable);