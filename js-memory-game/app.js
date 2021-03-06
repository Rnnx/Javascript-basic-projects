const cardArray = [
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    },
    {
        name: 'fries',
        img: 'images/fries.png',
    },
    {
        name: 'cheeseburger',
        img: 'images/cheeseburger.png',
    },
    {
        name: 'hotdog',
        img: 'images/hotdog.png',
    },
    {
        name: 'ice-cream',
        img: 'images/ice-cream.png',
    },
    {
        name: 'milkshake',
        img: 'images/milkshake.png',
    },
    {
        name: 'pizza',
        img: 'images/pizza.png',
    }
];

//making array random
cardArray.sort(() => .5 - Math.random());

//looking for an id '#' of name 'grid'
const gridDisplay = document.querySelector('.grid');
const resultDisplay = document.querySelector('#result');
const cardsWon = [];
let cardsChosen = [];
let cardsChosenIds = [];

//function to create an element for each item in card array
function createBoard() {
    for (let i = 0; i < cardArray.length; i++) {
        const card = document.createElement('img');
        card.setAttribute('src', 'images/blank.png');
        card.setAttribute('card-id', i);
        card.style.border = "thin solid #000000";
        card.addEventListener('click', flipCard)
        gridDisplay.append(card);

        //console.log(card);
    }
}

createBoard()

function checkMatch() {
    const cards = document.querySelectorAll('.grid img');
    const firstCardId = cardsChosenIds[0];
    const secondCardId = cardsChosenIds[1];
    console.log(cards);
    console.log('check for match');

    if(firstCardId == secondCardId) {
        alert('You have clicked the same image!');
    }
    if (cardsChosen[0] == cardsChosen[1]) {
        alert('You found a match!');
        cards[firstCardId].setAttribute('src', 'images/white.png');
        cards[secondCardId].setAttribute('src', 'images/white.png');
        cards[firstCardId].removeEventListener('click', flipCard);
        cards[secondCardId].removeEventListener('click', flipCard);
        cardsWon.push(cardsChosen);
    } else {
        cards[firstCardId].setAttribute('src', 'images/blank.png');
        cards[secondCardId].setAttribute('src', 'images/blank.png');
        alert('Sorry, try again!');
    }
    resultDisplay.textContent = cardsWon.length;
    cardsChosen = [];
    cardsChosenIds = [];

    if (cardsWon.length == cardArray.length/2) {
        resultDisplay.innerHTML = 'Congratulations you found them all!';
    }
}

function flipCard() {
    const cardId = this.getAttribute('card-id');
    console.log(cardId);
    cardsChosen.push(cardArray[cardId].name);
    cardsChosenIds.push(cardId);
    this.setAttribute('src', cardArray[cardId].img)

    if(cardsChosen.length === 2) {
        setTimeout(checkMatch, 500)
    }
}
