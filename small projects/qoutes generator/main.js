let qoutes = ["When you have a dream, you’ve got to grab it and never let go.", "The most important thing is to enjoy your life—to be happy—it’s all that matters.", "Spread love everywhere you go. Let no one ever come without leaving happier.", "Be yourself; everyone else is already taken.", "The biggest adventure you can take is to live the life of your dreams.", "The only thing we have to fear is fear itself.", "I can accept failure, everyone fails at something. But I can’t accept not trying.", "You've got to be in it to win it.", "It does not matter how slowly you go, as long as you do not stop."];
let authors = ["Carol Burnett", "Steve Jobs", "Mother Teresa", "Oscar Wilde", "Oprah Winfrey", "Franklin D. Roosevelt", "Michael Jordan", "Tony Robbins", "Confucius"];



document.getElementById('generate').addEventListener('click', function () {
    let generateQoute = qoutes[Math.floor(Math.random() * qoutes.length)]
    let qouteIndex = qoutes.indexOf(generateQoute)
    document.getElementById('qoute').innerHTML = `<i class="fa-solid fa-quote-left"></i> ${generateQoute} <i class="fa-solid fa-quote-right"></i></p>`;
    document.getElementById('author').innerHTML = authors[qouteIndex]

})