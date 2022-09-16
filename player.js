let submitButton = document.querySelector(`.submit`);
submitButton.addEventListener(`click`, getPlayerName);
    
function getPlayerName(e) {
    let nameField = document.querySelector(`.playerNameField`);
    let playerName = nameField.value;
    let nameInput = document.querySelector(`.nameInput`);
    nameInput.remove();
    let player = document.createElement(`h2`);
    player.classList.add(`competitor`);
    player.textContent = playerName;
    let playerBox = document.querySelector(`.player`);
    playerBox.insertBefore(player, playerBox.children[0]);
}