let today = new Date().getDate();
let month = new Date().getMonth();
let year = new Date().getFullYear();
let day = new Date().getDay()


let monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
let dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
document.getElementById('month').innerHTML = monthNames[month];
document.getElementById('day').innerHTML = dayNames[day];
document.getElementById('date').innerHTML = today
document.getElementById('year').innerHTML = year