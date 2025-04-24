function dabaiye() {
    Swal.fire("SweetAlert2 is working!");
}


function delRow(e) {
    e.parentNode.parentNode.style.display = 'none'
}


function nayi() {
    document.getElementById('first').style.display = 'none';
    document.getElementById('second').style.display = 'block'
}

function purani() {
    document.getElementById('second').style.display = 'none';
    document.getElementById('first').style.display = 'block';
}



var count = 0;
document.getElementById('counter').innerHTML = count;

function increment() {
    count++;
    document.getElementById('counter').innerHTML = count;
    console.log(count)
}

function decrement() {
    count--;
    document.getElementById('counter').innerHTML = count;

}