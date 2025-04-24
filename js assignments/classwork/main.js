let count = 0;
let interval;



function start() {
    interval = setInterval(function () {
        count++
        console.log(count)
    }, 1000)
}

function reset() {
    count = 0;
    console.log(count)
}