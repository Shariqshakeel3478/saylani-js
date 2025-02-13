// var cleanest = ["karachi", "islamabad"];

// var user = prompt("Enter city name")
// var check = false;

// for (var i = 0; i < cleanest.length; i++) {
//     if (user == cleanest[i]) {
//         check = true;
//         console.log(`${user} at index ${i} is the cleanest city`)
//         break;
//     }

// }

// if (check == false) {
//     console.log(`${user} is not the cleanest city`)
// }


//2
// var text = prompt("Enter any text")
// var arr = []


// for (letter of text) {
//     arr.push(letter)
// }

// console.log(arr)

// var reversearr = arr.reverse()
// console.log(reversearr)



//3 palindrome checker

var user = prompt("Enter any name or word");
var revuser = '';

for (var i = user.length - 1; i >= 0; i--) {
    revuser = revuser + user[i]
}

if (user == revuser) {
    document.write(`${user} is a Palindrome`)
} else {
    document.write(`${user} is not a palindrome`)
}