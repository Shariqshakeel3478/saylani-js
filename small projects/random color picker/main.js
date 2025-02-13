// console.log(`#${result}`)



const show = () => {
    var randomNumber = Math.floor(Math.random() * 16777215)
    var result = randomNumber.toString(16)
    document.body.style.backgroundColor = `#${result}`;
    document.getElementById("show").innerHTML = "#" + result;
    document.getElementById("btn").style.backgroundColor = `#${result}`
    document.getElementById("btn").style.color = "#fff"

}

document.getElementById("btn").addEventListener("click", show)