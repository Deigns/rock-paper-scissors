let roundCount = 1;
let winCount = 0;
let lossCount = 0;
let drawCount = 0;

let roundText = document.querySelector(`.roundCount`);
roundText.textContent = `Round: ${roundCount}`;

let winText = document.querySelector(`.player`).children[1];
winText.textContent = `Wins: ${winCount}`;

let drawText = document.querySelector(`.round`).children[1];
drawText.textContent = `Draws: ${drawCount}`;

let lossText = document.querySelector(`.computer`).children[1];
lossText.textContent = `Losses: ${lossCount}`;

let columnformatted = Array.from(document.querySelectorAll('.column'));
columnformatted.forEach(item => formatToColumns(item));

function formatToColumns(item) {
    item.children[0].classList.add(`edge`);
    item.children[1].classList.add(`center`);
    item.children[2].classList.add(`edge`);
}

let choiceButtons = Array.from(document.querySelectorAll('button'));
choiceButtons.shift();
