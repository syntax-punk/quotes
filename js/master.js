let quote;
const quotesList = [
    {
        text: "Life is like riding a bicycle. To keep your balance you must keep moving.",
        author: "Albert Einstein"
    },
    {
        text: "First they ignore you, then they laugh at you, then they fight you, then you win.",
        author: "Mahatma Gandhi"
    },
    {
        text: "Everyone you meet is fighting a battle you know nothing about. Be kind. Always.",
        author: "Brad Meltzer"
    },
    {
        text: "Plan your work for today and every day, then work your plan.",
        author: "Margaret Thatcher"
    }
]

function getRandomQuote() {
    const randomIdx = Math.floor(Math.random() * quotesList.length);
    quote = quotesList[randomIdx];
    document.querySelector('.quote').innerHTML = quote.text;
    document.querySelector('.author').innerHTML = quote.author;
}

function onQuillClick() {
    document.querySelector('.quill')
        .addEventListener('mouseup', function name(params) {
            getRandomQuote();
        });
}

function onSocialClick() {
    document.querySelector('.social')
        .addEventListener('mouseup', function name(params) {
            var tweetLink = "https://twitter.com/intent/tweet?text=" + quote.text + " - " + quote.author;
            window.open(tweetLink);
        });
}

function setupTime() {
    let hours = -1
    let minutes = -1
    setInterval(function () {
        const date = new Date();
        const timeElem = document.querySelector('.time');
        if (!timeElem.style.opacity) timeElem.style.opacity = "1";
        if (date.getMinutes() !== minutes) {
            minutes = date.getMinutes();
            document.querySelector('.min').innerHTML = minutes < 10 ? '0'+minutes : minutes;
        }
        if (date.getHours() !== hours) {
            hours = date.getHours();
            document.querySelector('.hour').innerHTML = hours;
        }
    }, 1000);
}

window.onload = function () {
    getRandomQuote();
    onQuillClick();
    onSocialClick();
    setupTime();
}; 