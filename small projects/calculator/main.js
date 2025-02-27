function inpVal(a) {
    var inpField = document.getElementById('inp');
    inpField.value += a;
}

function show() {
    try {
        let input = document.getElementById("inp").value;
        document.getElementById("inp").value = eval(input);
    } catch (error) {
        document.getElementById("inp").value = "Error";
        console.error("Invalid Expression:", error);
    }
}


function eraseInp() {
    var inpField = document.getElementById('inp');
    inpField.value = ''
}


function plusMinus() {
    var inpField = document.getElementById('inp');
    inpField.value = (inpField.value) * (-1)

}

function backSpace() {
    var inpField = document.getElementById('inp');
    inpField.value = inpField.value.slice(0, -1)
}