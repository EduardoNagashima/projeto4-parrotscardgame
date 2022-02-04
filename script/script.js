let cardsNumber;
let contPlays = 0;
let imgArray = []
let qntMatch = 0;
imgArray.push("images/explodyparrot.gif");
imgArray.push("images/explodyparrot.gif");
imgArray.push('images/bobrossparrot.gif');
imgArray.push('images/bobrossparrot.gif');
imgArray.push('images/fiestaparrot.gif');
imgArray.push('images/fiestaparrot.gif');
imgArray.push('images/metalparrot.gif');
imgArray.push('images/metalparrot.gif');
imgArray.push('images/revertitparrot.gif');
imgArray.push('images/revertitparrot.gif');
imgArray.push('images/tripletsparrot.gif');
imgArray.push('images/tripletsparrot.gif');
imgArray.push('images/unicornparrot.gif');
imgArray.push('images/unicornparrot.gif');

function playGame() {
    cardsNumber = parseInt(prompt('Com quantas cartas quer jogar? (4 à 14)'));
    while (cardsNumber % 2 == 1 || cardsNumber > 14 || cardsNumber < 4) {
        cardsNumber = parseInt(prompt('Com quantas cartas quer jogar? (4 à 14)'));
    }
    imgArray = imgArray.slice(0, cardsNumber);
    imgArray.sort(comparador);
    dealingCards();
}

function dealingCards() {
    cartas = document.querySelector(".cards");
    for (let cont = 0; cont < cardsNumber; cont++) {
        cartas.innerHTML += `
        <div class="card" onclick=turn(this)>
            <div class="face front-face">
                <img src="images/parrot.png" alt="carta-parrot">
            </div>
            <div class="back-face face">
                <img src="${imgArray[cont]}">
            </div>
        </div>`
    }
}

function turn(el) {
    let flippeds = document.querySelectorAll(".flipped");
    if (flippeds.length < 2) {
        turnCard(el);
        el.classList.add('flipped');
        el.style.pointerEvents = 'none';
        let comparationArray = document.querySelectorAll('.flipped');
        console.log(comparationArray);
        if (comparationArray.length == 2) {
            if (comparationArray[0].innerHTML == comparationArray[1].innerHTML) {
                match();
            } else {
                setTimeout(turnBack, 500);
            }
        }
        contPlays++;
        refreshCount();
    }
}


function match() {
    let flippeds = document.querySelectorAll(".flipped");

    for (let i = 0; i < flippeds.length; i++) {
        flippeds[i].classList.remove("flipped");
        flippeds[i].classList.add("matched");
        flippeds[i].onclick = '';
        qntMatch++;
    }
    console.log(qntMatch);
    if (qntMatch === (cardsNumber)) {
        alert('ACABOU O JOGO!');
    }
}



function turnCard(el) {
    const cardFront = el.querySelector('.front-face');
    const cardBack = el.querySelector('.back-face');
    cardBack.classList.toggle('turn-back');
    cardFront.classList.toggle('turn-front');
}

function turnBack() {
    let flipped = document.querySelectorAll(".flipped");
    for (let i = 0; i < flipped.length; i++) {
        flipped[i].classList.remove("flipped");
        flipped[i].style.pointerEvents = 'auto';
        turnCard(flipped[i]);
    }
}

function comparador() {
    return Math.random() - 0.5;
}

function refreshCount() {
    cont = document.querySelector('.cont');
    cont.innerHTML = `<h1>${contPlays}</h1>`;
}

playGame();