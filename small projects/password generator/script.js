var input = document.getElementById("myInput");
var heading = document.getElementById("status")
var elements = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789#@!$%^&*";
var limit = document.getElementById('limit');



var pass = ' ';

function display() {
    if (limit.value == '') {
        heading.innerHTML = "Limit is not defined";
    } else {
        for (let i = 0; i <= limit.value - 1; i++) {

            var random = elements[Math.floor(Math.random() * elements.length)]
            input.value = ''
            pass += random
        }
        input.value += pass;
        heading.innerHTML = "Password Generated";
        pass = ''
    }



}

document.getElementById('clear').addEventListener("click", function () {
    input.value = " ";
    pass = " "
    limit.value = " "
    heading.innerHTML = "Re Generate The Password"

})










// console.log(pass)