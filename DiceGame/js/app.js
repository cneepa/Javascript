var scores, roundscore, activePlayer;

scores = [0, 0];
roundscore = 0;
activePlayer = 0;


function changeActivePlayer() {
   document.querySelector('.player-panel-' + activePlayer).className = 'player-panel-' + activePlayer;
    if ( activePlayer === 0 ) 
        activePlayer = 1;
    else
        activePlayer = 0;
    document.querySelector('.player-panel-' + activePlayer).className = 'player-panel-' + activePlayer + ' active';
}

document.querySelector('.btn-new-game').addEventListener('click', function() {
    document.querySelector('.dice').style.display = 'none';
    document.getElementById('score-0').textContent = 0;
    document.getElementById('score-1').textContent = 0;
    document.getElementById('current-0').textContent = 0;
    document.getElementById('current-1').textContent = 0;
    roundscore = 0;
    scores = [0, 0];
})

document.querySelector('.btn-roll').addEventListener('click', function() {
    console.log(roundscore);
    var dice = Math.floor(Math.random() * 6) + 1;
    document.querySelector('.dice').setAttribute('src' , 'images/dice-' + dice + '.png');
    document.querySelector('.dice').style.display = 'block';
    if( dice > 1 ) {
        roundscore += dice;
        document.getElementById('current-' + activePlayer).textContent = roundscore;
    } else {
        roundscore = 0;
        document.getElementById('current-' + activePlayer).textContent = roundscore;
        changeActivePlayer();
    }
    
})

document.querySelector('.btn-hold').addEventListener('click', function() {
    scores[activePlayer] += roundscore;
    document.getElementById('score-' + activePlayer).textContent = scores[activePlayer];
    roundscore = 0;
    document.getElementById('current-' + activePlayer).textContent = roundscore;
    
    if( scores[activePlayer] < 25 ) {
        changeActivePlayer();
    } else {
        var winner = activePlayer + 1;
        alert('Player ' + winner + ' wins. Start a new game');
        scores = [0, 0];
        document.getElementById('score-0').textContent = 0;
        document.getElementById('score-1').textContent = 0;
        document.getElementById('current-0').textContent = 0;
        document.getElementById('current-1').textContent = 0;
        
    }
    
})