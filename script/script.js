let cardsNumber;

function playGame() {
    cardsNumber = parseInt(prompt('Com quantas cartas quer jogar? (4 à 14)'));
    while (cardsNumber % 2 == 1 || cardsNumber > 14 || cardsNumber < 4) {
        cardsNumber = parseInt(prompt('Com quantas cartas quer jogar? (4 à 14)'));
    }
    dealingCards();
}

function dealingCards() {
    cartas = document.querySelector(".cartas");
    for (let cont = 0; cont < cardsNumber; cont++) {
        cartas.innerHTML += `<div class="card">
       <div class="front-face face">
         <img src="image/parrot.png" alt="carta-parrot">
       </div>
       <div class="back-face face">
           Verso
       </div>
   </div>`

    }
}

playGame();