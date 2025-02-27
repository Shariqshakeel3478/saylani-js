function show() {

    let a = document.getElementById('input').value;
    let b = a.split('');
    let c = b.reverse().join('');

    if (a === c) {
        document.getElementById('result').innerHTML = "It is a Palindrome";
        document.getElementById('show').style.backgroundColor = "green"
    } else {
        document.getElementById('result').innerHTML = "It is not a Palindrome"
        document.getElementById('show').style.backgroundColor = "red"
    }


}