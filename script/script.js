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
    randomFavicon();
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
        setTimeout(finishgame, 1000);
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

function timer() {
    timer = document.querySelector('.timer h2');
    timer.innerHTML = parseInt(timer.innerHTML) + 1;
}

function finishgame() {
    clearInterval(intervalo);
    let tempo = document.querySelector('.timer h2').innerHTML;
    console.log(tempo);
    alert(`ACABOU O JOGO! Você ganhou em ${contPlays+1} jogadas e em ${tempo} segundos`);
    let answer = prompt("Quer continuar a jogar? 'S' ou 'N' ").toUpperCase();
    if (answer[0] == 'S') {
        window.location.reload();
    }
}

function refreshCount() {
    clean = ''
    cont = document.querySelector('.cont h2');
    cont.innerHTML = clean;
    cont.innerHTML = `${contPlays}`;
}

function randomFavicon() {
    favicon = document.querySelector('head');
    let random = Math.floor(Math.random() * (imgArray.length - 0)) + 0;
    favicon.innerHTML += `<link class="favicon" rel="icon" href='${imgArray[random]}'></link>`
}

const intervalo = setInterval(timer, 1000);
playGame();