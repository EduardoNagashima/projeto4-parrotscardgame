let cardsNumber;
let idCartas = [];
let contPlays = 0;
// idCarta, conjunto de 2 em 2.


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
        cartas.innerHTML += `
        <div class="card" id=${idCartas.push(cont)} onclick=turn(this)>
            <div class="face front-face">
                <img src="image/parrot.png" alt="carta-parrot">
            </div>
            <div class="back-face face">
                Verso
            </div>
        </div>`
    }
    idCartas.sort(comparador);
}

function turn(el) {
    let cardFront = el.querySelector('.front-face');
    let cardBack = el.querySelector('.back-face');
    cardBack.classList.add('turn-back');
    cardFront.classList.add('turn-front');
    if (el.id == 1) {

    } else {
        setTimeout(function esperar() {
            cardBack.classList.remove('turn-back');
            cardFront.classList.remove('turn-front');
        }, 2000);
    }

    contPlays++;
    refreshCount();
}

function comparador() {
    return Math.random() - 0.5;
}

function refreshCount() {
    cont = document.querySelector('.cont');
    console.log(cont)
    cont.innerHTML = `<h1>${contPlays}</h1>`;
}

playGame();