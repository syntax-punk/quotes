window.onload = function () {
    getRandomQuote();
    onQuillClick();
    onSocialClick();
    setupTime();
}; 

function getRandomQuote() {
    var randomIdx = Math.floor(Math.random() * quotesList.length);
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
    var hours = -1
    var minutes = -1
    setInterval(function () {
        var date = new Date();
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

var quote;
var quotesList = [
    {
        text: "Life is like riding a bicycle. To keep your balance you must keep moving.",
        author: "Alber Einstein"
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

