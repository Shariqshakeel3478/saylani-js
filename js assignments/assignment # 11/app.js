var submitBtn = document.getElementById('submit');
var userName = document.getElementById('username')
var userPass = document.getElementById('password')

submitBtn.addEventListener('click', () => {
    document.writeln(userName.value)
    document.writeln(userPass.value)
})


function more() {
    document.getElementById('more').style.display = 'block';
    document.getElementById('btn').style.display = 'none'
}