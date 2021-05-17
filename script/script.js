const cards = [
    {
        picture: `url(../images/image-tanya.jpg)`,
        name: `Tanya Sinclair`,
        position: `UX Engineer`,
        testimonial: `" I've been interested in coding for a while but never taken the jump, until now. I couldn't recommend this course enough. I'm now in the job of my dreams and so excited about the future. "`
    },
    {
        picture: `url(../images/image-john.jpg)`,
        name: `John Tarkpor`,
        position: `Junior Front-end Developer`,
        testimonial: `“ If you want to lay the best foundation possible I’d recommend taking this course. The depth the instructors go into is incredible. I now feel so confident about starting up as a professional developer. ”`
    },    
]

const pic = document.getElementById("picture");
const test = document.getElementById("testimonial");
const profName = document.getElementById("name");
const pos = document.getElementById("position");
const previous = document.getElementById("previous");
const next = document.getElementById("next");

let currentCard = 0;

previous.addEventListener("click", previousCard);
next.addEventListener("click", nextCard);

function previousCard() {
    if (currentCard > 0) {
        currentCard = currentCard - 1;
    } else {
        currentCard = cards.length - 1;
    }
    setCard();
}

function nextCard() {
    if (currentCard < (cards.length - 1)) {
        currentCard = currentCard + 1;
    } else {
        currentCard = 0;
    }
    setCard();
}

function setCard() {
    pic.style.backgroundImage = cards[currentCard].picture;
    profName.innerHTML = cards[currentCard].name;
    pos.innerHTLM = cards[currentCard].position;
    test.innerHTML = cards[currentCard].testimonial;
}