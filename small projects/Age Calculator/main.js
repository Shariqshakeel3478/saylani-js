document.getElementById('button').addEventListener('click', function () {
    event.preventDefault();
    let user = document.getElementById('input');
    let today = new Date().getDate() - new Date(user.value).getDate();
    let month = new Date().getMonth() - new Date(user.value).getMonth();
    let year = new Date().getFullYear() - new Date(user.value).getFullYear()



    if (month < 0) {
        year--
    }

    let result = document.getElementById('result');
    result.innerHTML = ` ${year} years `
})