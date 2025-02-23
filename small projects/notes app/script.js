let addNote = document.getElementById('addNote');

addNote.addEventListener('click', function () {
    document.getElementById('addForm').style.display = 'block'

})

document.querySelector('.icon').addEventListener('click', function () {
    document.getElementById('addForm').style.display = 'none'
})


document.getElementById('addBtn').addEventListener('click', function () {

    document.getElementById('addForm').style.display = 'none'
    let div = document.createElement("div");
    div.classList.add("myNote");
    div.innerHTML = `
    <h2>${document.getElementById('title').value}</h2>
    <hr>
    <p>${document.getElementById('description').value}</p>
    <button>Delete</button>`


    document.getElementById('newNote').appendChild(div)
    div.querySelector('button').addEventListener('click', function () {
        div.remove();
    })

})