// let a = 10;

// setInterval(function () {
//     if (a > 0) {
//         a--;
//         console.log(a)

//     }

// }, 1000)




let timeInput = parseInt(prompt("Enter time"))
let heading = document.getElementById('time');
let limit = -1;

heading.innerHTML = timeInput;


document.getElementById('start').addEventListener('click', function () {
    setInterval(function () {
        if (timeInput > 0) {
            timeInput--;
            heading.innerHTML = timeInput;

            if (timeInput == 0) {
                document.getElementById('timeup').style.display = 'block'
            }

        }
    }, 1000)
})