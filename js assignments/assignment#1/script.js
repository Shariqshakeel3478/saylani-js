


// Variables for Strings -> Slide 1

//1. var username;

//2. var myName = "Shariq Shakeel";

//3. var message;
// message = "Hello World";
// alert(message)


//4. var myName = "Shariq Shakeel";
// var age = 20;
// var institute = "SMIT";
// var course ="Web Development";

// alert(`My name is ${myName}`)
// alert(`My age is ${age}`)
// alert(`My institute is ${institute}`)
// alert(`My course is ${course}`)


//5. var food = "PIZZA\nPIZZ\nPIZ\nPI\nP";
// alert(food)


//6. var profession = "Data Scientist";
// var loc = "Pakistan";
// var partner = "ABC";
// var kids = 2
// alert(`You will be a ${profession} in ${loc}. Your Partner will be ${partner} and you'll have ${kids}`)


//7. var email = "shariqshakeel107@gmail.com";
// alert("My email is " +email)


//8. var book = "A new way to learn JS";
// alert(`I am trying to learn from the book "${book}"`);

//9. var myName = "Shariq Shakeel";
// var age = 20;
// var institute = "SMIT";
// var course ="Web Development";

// alert(`My name is ${myName}`)
// alert(`My age is ${age}`)
// alert(`My institute is ${institute}`)
// alert(`My course is ${course}`)


//10. document.write("Hi! I write this in HTML through Javascript")


// variables for Numbers -> Slide 2


//1. var age = 20;
// alert(`My age is ${age}`)


//2. var visits = 21;
// alert(`You have visited ${visits} times`)


//3. var birthYear = 2004;
// var type = typeof(birthYear)
// document.write(`My Birth Year is ${birthYear}\nData Type of Birth Year variables is ${type}`);


//4. var visitorName = "Shariq";
// var product = "Pant";
// var quantity = 4;
// var store = "H&M"

// document.write(`${visitorName} ordered ${quantity} ${product} from ${store}`)


// Legal And Illegal variables  -> Slide 3




//1. var name, age, qualification;

// 2. Legal and Illegal
// legal Names
// var name_1,Qualification,myAge;
// illegal
// var 1name;
// var #city;
// var for;



// 3.

//a document.write("<h1>Rules for naming JS variables</h1>")  

// b.  underscore,numbers,a-z alphabets
// c. special character, small alphabet or symbol
//d. case sensitive
//e. Reserved Words








// Math Expressions -> slide 4


// 1.
// var num1 = parseInt(prompt("enter a number"))
// var num2 = parseInt(prompt("enter another number"))
// document.write(`Sum of ${num1} and ${num2} is ${num1 + num2}`)


// 2.
// var num1 = parseInt(prompt("enter a number"))
// var num2 = parseInt(prompt("enter another number"))
// document.write(`Subtraction of ${num1} and ${num2} is ${num1 - num2}`)


// var num1 = parseInt(prompt("enter a number"))
// var num2 = parseInt(prompt("enter another number"))
// document.write(`Multiplication of ${num1} and ${num2} is ${num1 * num2}`)


// var num1 = parseInt(prompt("enter a number"))
// var num2 = parseInt(prompt("enter another number"))
// document.write(`Division of ${num1} and ${num2} is ${num1 / num2}`)


// var num1 = parseInt(prompt("enter a number"))
// var num2 = parseInt(prompt("enter another number"))
// document.write(`Modulus of ${num1} and ${num2} is ${num1 % num2}`)



// 3.
// var num;
// document.write(`Value After declaration is ${num}`)
// num = 3;
// document.write(`initial Value : ${num}`);
// num = num +1;
// document.write(`Value After Increment is ${num}`)
// num = num +7;
// document.write(`Value After addition is ${num}`)
// num = num -1;
// document.write(`Value After Decrement is ${num}`)

// num = num%3;
// document.write(`Value After Remainder is ${num}`)


// 4.
// var price = 600;
// var quantity = 5;
// document.write(`Price of ${quantity} Tickets is ${price}`)


// 5.

// document.write("<h1>Table of 4</h1>");

// for(i = 1;i<=10;i++){
//     document.write(`<br>4 x ${i} = ${i*4}`)
// }


// 6.

// celcius to fahrenheit
// var cel = 34;
// var celTofah = (cel *9/5) + 32;
// document.write(`Celcius ${cel} to Fahrenheit is : ${celTofah}`)


// // Fahrenheit to Celcius
// var fah = 109;
// var fahTocel = (fah-32) * 5/9
// document.write(`Fahrenheit ${fah} to Celcius is : ${fahTocel}`)



// 7.

// document.write("Shopping Cart")

// var item1 = prompt("Enter name of first item");
// var item2 = prompt("Enter name of second item");

// var item1_price = 50;
// var item2_price = 100;

// var item1_quantity = parseInt(prompt(`Enter ${item1} quantity`));
// var item2_quantity = parseInt(prompt(`Enter ${item2} quantity`));

// var shipping = 150;

// document.write(`<br>Item 1 is : ${item1}`)
// document.write(`<br>Item 2 is : ${item2}`)
// document.write(`<br>Item 1 price is : ${item1_price}`)
// document.write(`<br>Item 2 price is : ${item2_price}`)
// document.write(`<br>Item 1 quantity  : ${item1_quantity}`)
// document.write(`<br>Item 2 quatity  : ${item2_quantity}`)

// document.write(`<br> ${item1} Total : ${item1_price *item1_quantity }`)
// document.write(`<br> ${item2} Total : ${item2_price *item2_quantity }`)
// document.write(`<br> ${shipping} : ${shipping}`)
// document.write(`<br> ${item1_price *item1_quantity}  + ${item2_price *item2_quantity} + ${shipping} = ${(item1_price *item1_quantity) + (item2_price *item2_quantity) + shipping}  `)




// 8.

// var total = 500;
// var obtained = 400;
// var percentage = (obtained/total) *100;
// document.write(`Obtained Marks : ${obtained}`)
// document.write(`<br>Total Marks : ${total}`)
// document.write(`<br>Percentage : ${percentage}`)



// 9.
// var dollars = 10;
// var riyals = 25;

// var dollarsToPkr = 10*280;
// var riyalToPkr = 25*90;

// document.write(`total Pkr : ${dollarsToPkr + riyalToPkr}`)



// 10.

// var num = 10;
// var num2 = ((num +5) *10)/2;
// alert(num2)



// 11.

// var birthYear = 2004;
// var currentYear = 2025;
// document.write(currentYear - birthYear);


// 12.

// var pi = 3.142;
// var radius = parseInt(prompt("Enter Radius"));
// var circumference = 2 *pi*radius;
// document.write(circumference)


// 13.

// var a = 10;
// document.write(`Value of a is : ${a}`)
// ++a;
// document.write(`<br>Value of ++a is : ${a}`)
// a++
// document.write(`<br>Value of a++ is : ${a}`)
// --a;
// document.write(`<br>Value of --a is : ${a}`)
// a--;
// document.write(`<br>Value of a-- is : ${a}`)


// 14.

// var a = 2;
// var b = 1;
// var result = --a - --b + ++b +b--;
// document.write(result)


// 15.

// var snack = "Kitkat";
// var quantity = 2;
// var age = 20;
// var maxAge = 70;
// var remainingYears = maxAge - age;
// var days = remainingYears * 365;
// var total = days * quantity;

// document.write(`Favourite Snack: ${snack}`);
// document.write(`<br>Snack Quantity: ${quantity}`);
// document.write(`<br>Current Age : ${age}`);
// document.write(`<br>Max Age : ${maxAge}`);
// document.write(`<br>I can eat ${quantity} ${snack}'s per day`);
// document.write(`<br>I can eat ${total} ${snack}'s for ${days} or${remainingYears} `)















































