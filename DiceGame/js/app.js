var scores, roundscore, activePlayer, isGameActive;

init();


function changeActivePlayer() {
    document.querySelector('.player-panel-' + activePlayer).classList.toggle('active');
    activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    document.querySelector('.player-panel-' + activePlayer).classList.toggle('active');
}

function init() {
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('name-0').classList.remove('winner');
    document.getElementById('name-1').classList.remove('winner');
    document.querySelector('.player-panel-0').classList.remove('active');
    document.querySelector('.player-panel-1').classList.remove('active');
    document.getElementById('name-0').textContent = 'PLAYER 1';
    document.getElementById('name-1').textContent = 'PLAYER 2';
    document.querySelector('.player-panel-0').classList.add('active');
    roundscore = 0;
    scores = [0, 0];
    activePlayer = 0;
    isGameActive = true;
}


document.querySelector('.btn-new-game').addEventListener('click', function() {
    init();
})

document.querySelector('.btn-roll').addEventListener('click', function() {
    //console.log(roundscore);
    if(isGameActive) {
        var dice = Math.floor(Math.random() * 6) + 1;
        var diceDOM = document.querySelector('.dice');
        diceDOM.src = 'images/dice-' + dice + '.png';
        diceDOM.style.display = 'block';
        if( dice !== 1 ) {
            roundscore += dice;
            document.getElementById('current-' + activePlayer).textContent = roundscore;
        } else {
            roundscore = 0;
            document.getElementById('current-' + activePlayer).textContent = roundscore;
            changeActivePlayer();
        }
    }
})

document.querySelector('.btn-hold').addEventListener('click', function() {
    if(isGameActive) {
        scores[activePlayer] += roundscore;
        document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
        roundscore = 0;
        document.getElementById('current-' + activePlayer).textContent = 0;

        if( scores[activePlayer] < 100 ) {
            changeActivePlayer();
        } else {
            document.getElementById('name-' + activePlayer).classList.add('winner');
            document.getElementById('name-' + activePlayer).textContent = 'WINNER';
            document.querySelector('.dice').style.display = 'none';
            isGameActive = false;
        }
    }
})