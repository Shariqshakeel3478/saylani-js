var counter = 0;
var hist = [];

document.getElementById("view").innerHTML = counter;


document.getElementById('add').addEventListener('click', function () {
    counter = counter + 1
    document.getElementById("view").innerHTML = counter;
    hist.push(counter)
    console.log(hist)

})

document.getElementById("remove").addEventListener('click', function () {
    if (counter > 0) {
        counter = counter - 1;
        document.getElementById("view").innerHTML = counter;
        hist.push(counter)
        console.log(hist)

    } else {
        document.getElementById('result').innerHTML = "Cannot be decreased further"
    }

})

document.getElementById("reset").addEventListener('click', function () {
    counter = 0
    document.getElementById("view").innerHTML = counter;
    hist.push(counter)
    console.log(hist)
})


document.getElementById('history').addEventListener('click', function () {
    document.getElementById('result').innerHTML = `History = ${hist}`
    
})