let cardsNumber;

function playGame() {
    cardsNumber = parseInt(prompt('Com quantas cartas quer jogar? (4 à 14)'));
    while (cardsNumber % 2 == 1 || cardsNumber > 14 || cardsNumber < 4) {
        cardsNumber = parseInt(prompt('Com quantas cartas quer jogar? (4 à 14)'));
    }
}

function dealingCards() {
    div = document.querySelector(".cards");
    for (let cont = 0; cont < cardsNumber; cont++) {
        console.log(cont);
        // USAR += PARA CONCATENAR O INNERHTML E COLOCAR + DE 1 COISA NA TELA
    }
}

playGame()
dealingCards();