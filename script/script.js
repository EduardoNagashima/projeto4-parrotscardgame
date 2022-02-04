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
        <div class="card" onclick=turn(this) data-identifier="card">
            <div class="face front-face" data-identifier="front-face">
                <img src="images/parrot.png" alt="carta-parrot">
            </div>
            <div class="back-face face" data-identifier="back-face">
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
        let comparationArray = document.querySelectorAll(".flipped");
        if (comparationArray.length == 2) {
            if (comparationArray[0].innerHTML == comparationArray[1].innerHTML) {
                match();
            } else {
                setTimeout(turnBack, 1000);
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
    if (qntMatch === (cardsNumber)) {
        alert(`ACABOU O JOGO! Você ganhou em ${contPlays+1} jogadas`);
        let answer = prompt("Quer continuar a jogar? 'N' para não").toUpperCase();
        if (answer != 'N') {
            window.location.reload();
        }
    }
}

function turnCard(el) {
    el.querySelector('.front-face').classList.toggle('turn-front');
    el.querySelector('.back-face').classList.toggle('turn-back');
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
    cont.innerHTML = `<h2>${contPlays}</h2>`;
}

playGame();