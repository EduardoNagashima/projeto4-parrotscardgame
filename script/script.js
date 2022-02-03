let cardsNumber;
let contPlays = 0;
let cards = []
let outraArray = []

function playGame() {
    cardsNumber = 4;

    // parseInt(prompt('Com quantas cartas quer jogar? (4 à 14)'));
    // while (cardsNumber % 2 == 1 || cardsNumber > 14 || cardsNumber < 4) {
    //     cardsNumber = parseInt(prompt('Com quantas cartas quer jogar? (4 à 14)'));
    // }
    dealingCards();
}

function dealingCards() {
    cartas = document.querySelector(".cards");

    for (let cont = 0; cont < cardsNumber; cont++) {
        cards.push(cont);
    }

    cards.sort(comparador);
    for (let cont = 0; cont < cardsNumber; cont++) {
        cartas.innerHTML += `
        <div class="card" onclick=turn(this)>
            <div class="face front-face">
                <img src="image/parrot.png" alt="carta-parrot">
            </div>
            <div class="back-face face">
                Verso ${cards[cont]}
            </div>
        </div>`
    }

}

function turn(el) {
    turnCard(el);
    el.classList.add('flipped');
    if (el.classList.contains('flipped')) {
        // achar uma condição para comparar duas cartas

    } else {
        setTimeout(function esperar() {
            turn(el);
            el.classList.remove('flipped')
        }, 2000);
    }

    contPlays++;
    refreshCount();
}

function turnCard(el) {
    const cardFront = el.querySelector('.front-face');
    const cardBack = el.querySelector('.back-face');
    cardBack.classList.toggle('turn-back');
    cardFront.classList.toggle('turn-front');
}



function comparador() {
    return Math.random() - 0.5;
}

function refreshCount() {
    cont = document.querySelector('.cont');
    cont.innerHTML = `<h1>${contPlays}</h1>`;
}

playGame();